import fs from 'fs';
import { capitalizeFirst, uncapitalizeFirst } from '../src/meta/utils';
import * as meta from '../src/meta';

function main() {
  generateModelsTs();
  generateInputModelsTs();
  generateOutputModelsTs();
  generateFromInputToOutputClasses();
  generateFromInputClasses();
  generateShortcuts();
  generateGladiaClient();
  generateUnitTests();
}

function generateModelsTs() {
  const fileContent: string[] = [...getGeneratedMarks()];
  const endpoints = meta.getEndpoints();
  for (const endpoint of endpoints) {
    const typeName = meta.getModelTypeName(endpoint);
    const contentTypeName = meta.getContentTypeName(endpoint);
    const defaultValueName = meta.getDefaultValueName(endpoint);
    const modelValuesName = meta.getModelValuesName(endpoint);
    fileContent.push(`export const ${modelValuesName} = [`);
    endpoint.models.map((model) => `   '${model}',`).forEach((model) => fileContent.push(model));
    fileContent.push('] as const;');
    fileContent.push(
      `export const ${contentTypeName} = "${endpoint.inputBodyContentType}" as const;`,
    );
    fileContent.push(`export const ${defaultValueName} = "${endpoint.defaultModel}" as const;`);
    fileContent.push(`export type ${typeName} = typeof ${modelValuesName}[number];`);
    fileContent.push('');
  }

  fs.writeFileSync('./src/models.ts', fileContent.join('\n'));
}

function generateInputModelsTs() {
  const fileContent: string[] = [...getGeneratedMarks()];
  const endpoints = meta.getEndpoints();
  fileContent.push('import {');
  for (const endpoint of endpoints) {
    fileContent.push(`  ${meta.getModelTypeName(endpoint)},`);
  }
  fileContent.push(`} from '../models';`);
  fileContent.push(`import { WithModel } from './types';`);
  fileContent.push('');
  for (const endpoint of endpoints) {
    const inputModelName = meta.getInputModelType(endpoint);
    const modelTypeName = meta.getModelTypeName(endpoint);
    fileContent.push(`export interface ${inputModelName} `);
    fileContent.push(`  extends WithModel<${modelTypeName}> {`);
    endpoint.params.forEach((param) => {
      const optionalMark = param.required ? '' : '?';
      const paramType = (() => {
        switch (param.type) {
          case 'string':
            return 'string';
          case 'audio':
          case 'image':
            return 'Blob';
          case 'integer':
            return 'number';
          default:
            return 'string';
        }
      })();
      fileContent.push(`  ${param.name}${optionalMark}: ${paramType};`);
    });
    fileContent.push(`}`);
  }
  fs.writeFileSync('./src/client/input-models.ts', fileContent.join('\n'));
}

function generateOutputModelsTs() {
  const fileContent: string[] = [...getGeneratedMarks()];
  const endpoints = meta.getEndpoints();
  for (const endpoint of endpoints) {
    const outputModelName = meta.getOutputModelType(endpoint);
    switch (endpoint.outputType) {
      case 'text':
        fileContent.push(
          `export type ${outputModelName} = Record<string, string | number | boolean>;`,
        );
        break;
      case 'audio':
      case 'image':
      case 'video':
        fileContent.push(`export type ${outputModelName} = ArrayBuffer;`);
        break;
      default:
        throw { kind: 'UnknownOutputType', outputType: endpoint.outputType };
    }
  }
  fs.writeFileSync('./src/client/output-models.ts', fileContent.join('\n'));
}

function generateFromInputToOutputClasses() {
  const endpoints = meta.getEndpointsByInputOutput();
  for (const [inputType, outputs] of Object.entries(endpoints)) {
    for (const [outputType, outputTypeEndpoints] of Object.entries(outputs)) {
      const fileContent: string[] = [...getGeneratedMarks()];
      fileContent.push(`import {`);
      for (const endpoint of outputTypeEndpoints) {
        const inputModelClassName = meta.getInputModelType(endpoint);
        fileContent.push(`  ${inputModelClassName},`);
      }
      fileContent.push(`} from './input-models'`);
      fileContent.push(`import {`);
      for (const endpoint of outputTypeEndpoints) {
        const outputModelClassName = meta.getOutputModelType(endpoint);
        fileContent.push(`  ${outputModelClassName},`);
      }
      fileContent.push(`} from './output-models'`);
      fileContent.push(`import {`);
      for (const endpoint of outputTypeEndpoints) {
        fileContent.push(`  ${meta.getContentTypeName(endpoint)},`);
        fileContent.push(`  ${meta.getDefaultValueName(endpoint)},`);
      }
      fileContent.push(`} from '../models'`);
      const importUrlFormData = outputTypeEndpoints.some(isEndpointNeedUrlFormData);
      fileContent.push(`import { getHttpClient, HttpClient } from '../internal/http-client';`);
      fileContent.push(`import { isDefined } from '../utils/fp';`);
      if (importUrlFormData) {
        fileContent.push(`import { UrlFormData } from '../internal/url-form-data';`);
      }
      fileContent.push(`import { GladiaClientParams } from './gladia-client-params';`);
      fileContent.push('');
      fileContent.push(`export class ${getClientInputOutputClassName(inputType, outputType)} {`);
      fileContent.push('  private httpClient: HttpClient;');
      fileContent.push('');
      fileContent.push('  constructor(private params: GladiaClientParams) {');
      fileContent.push('    this.httpClient = getHttpClient(this.params);');
      fileContent.push('  }');
      fileContent.push('');
      for (const endpoint of outputTypeEndpoints) {
        const methodName = meta.getMethodName(endpoint);
        const inputModelType = meta.getInputModelType(endpoint);
        const outputModelType = meta.getOutputModelType(endpoint);
        const defaultModelName = meta.getDefaultValueName(endpoint);
        fileContent.push(`  ${methodName}(args: ${inputModelType}): Promise<${outputModelType}> {`);
        switch (inputType) {
          case 'text':
          case 'audio':
          case 'image':
            const useUrlFormData = isEndpointNeedUrlFormData(endpoint);
            if (useUrlFormData) {
              fileContent.push(`    const formData = new UrlFormData();`);
            } else {
              fileContent.push(`    const formData = new FormData();`);
            }
            for (const param of endpoint.params.filter((p) => p.in === 'formData')) {
              fileContent.push(`    if (isDefined(args.${param.name})) {`);
              const argValue =
                param.type === 'integer' ? `String(args.${param.name})` : `args.${param.name}`;
              fileContent.push(`      formData.append('${param.name}', ${argValue});`);
              fileContent.push(`    }`);
            }
            fileContent.push(`    return this.httpClient.post({`);
            fileContent.push(`      url: '${endpoint.url}',`);
            if (useUrlFormData) {
              fileContent.push(
                `      headers: { 'Content-Type': ${meta.getContentTypeName(endpoint)} },`,
              );
            } else {
              // this enforce the browser to compute it self the Content-Type with correct boundary
              // this give something like:
              // Content-Type: multipart/form-data; boundary=---------------------------412830277717200702261256384337
              fileContent.push(`      headers: {`);
              fileContent.push(
                `        'Content-Type': this.params.useFetch ? ${meta.getContentTypeName(
                  endpoint,
                )} : undefined,`,
              );
              fileContent.push(`      },`);
            }
            fileContent.push(`      query: {`);
            fileContent.push(`        model: args.model ?? ${defaultModelName},`);
            for (const param of endpoint.params.filter((p) => p.in === 'query')) {
              const argValue =
                param.type === 'integer' ? `String(args.${param.name})` : `args.${param.name}`;
              fileContent.push(`        ${param.name}: ${argValue},`);
            }
            fileContent.push(`      },`);
            if (endpoint.outputType !== 'text') {
              fileContent.push(`      responseType: 'arraybuffer',`);
            }
            if (useUrlFormData) {
              fileContent.push(`      body: formData.toString(),`);
            } else {
              fileContent.push(`      body: formData,`);
            }
            fileContent.push(`    });`);
            break;
          default:
            throw { kind: 'UnknownInputType', inputType };
        }
        fileContent.push(`  }`);
        fileContent.push('');
      }
      fileContent.push('}');
      fileContent.push('');
      const outputFileName = getClientInputOutput(inputType, outputType);
      fs.writeFileSync(`./src/client/${outputFileName}.ts`, fileContent.join('\n'));
    }
  }
}

function isEndpointNeedUrlFormData(endpoint: meta.EndpointDef): boolean {
  return endpoint.inputBodyContentType === 'application/x-www-form-urlencoded';
}

function generateFromInputClasses() {
  const endpoints = meta.getEndpointsByInputOutput();
  for (const [inputType, outputs] of Object.entries(endpoints)) {
    const fileContent: string[] = [...getGeneratedMarks()];
    for (const outputType of Object.keys(outputs)) {
      const className = getClientInputOutputClassName(inputType, outputType);
      const fileName = getClientInputOutput(inputType, outputType);
      fileContent.push(`import { ${className} } from './${fileName}';`);
    }
    fileContent.push(`import { GladiaClientParams } from './gladia-client-params';`);
    fileContent.push('');
    fileContent.push(`export class ${getClientInputClassName(inputType)} {`);
    for (const outputType of Object.keys(outputs)) {
      const className = getClientInputOutputClassName(inputType, outputType);
      const memberName = getClientOutputMemberName(inputType, outputType);
      fileContent.push(`  private ${memberName}: ${className};`);
    }
    fileContent.push('');
    fileContent.push(`  constructor(params: GladiaClientParams) {`);
    for (const outputType of Object.keys(outputs)) {
      const className = getClientInputOutputClassName(inputType, outputType);
      const memberName = getClientOutputMemberName(inputType, outputType);
      fileContent.push(`    this.${memberName} = new ${className}(params);`);
    }
    fileContent.push('  }');
    fileContent.push('');
    for (const outputType of Object.keys(outputs)) {
      const methodName = getClientOutputMethodName(outputType);
      const memberName = getClientOutputMemberName(inputType, outputType);
      fileContent.push(`  ${methodName}() {`);
      fileContent.push(`    return this.${memberName};`);
      fileContent.push(`  }`);
      fileContent.push('');
    }
    fileContent.push('}');
    fileContent.push('');
    const inputFileName = getClientInput(inputType);
    fs.writeFileSync(`./src/client/${inputFileName}.ts`, fileContent.join('\n'));
  }
}

function generateShortcuts() {
  const endpointsByInputOutput = meta.getEndpointsByInputOutput();
  const endpoints = meta.getEndpoints();
  const fileContent: string[] = [...getGeneratedMarks()];
  for (const [inputType, outputs] of Object.entries(endpointsByInputOutput)) {
    fileContent.push(
      `import { ${getClientInputClassName(inputType)} } from './${getClientInput(inputType)}'`,
    );
    for (const outputType of Object.keys(outputs)) {
      const inputOutputClassName = getClientInputOutputClassName(inputType, outputType);
      const inputOutputFileName = getClientInputOutput(inputType, outputType);
      fileContent.push(`import { ${inputOutputClassName} } from './${inputOutputFileName}'`);
    }
  }
  fileContent.push(`import {`);
  for (const endpoint of endpoints) {
    const inputModelClassName = meta.getInputModelType(endpoint);
    fileContent.push(`  ${inputModelClassName},`);
  }
  fileContent.push(`} from './input-models'`);
  fileContent.push('');
  fileContent.push(`export abstract class Shortcuts implements`);
  const implemented: string[] = [];
  for (const [inputType, outputs] of Object.entries(endpointsByInputOutput)) {
    for (const outputType of Object.keys(outputs)) {
      const inputOutputClassName = getClientInputOutputClassName(inputType, outputType);
      implemented.push(`  Omit<${inputOutputClassName}, 'httpClient'>`);
    }
  }
  const lastImplemented = implemented.pop();
  implemented.forEach((i) => fileContent.push(`${i},`));
  fileContent.push(lastImplemented!);
  fileContent.push(`{`);
  fileContent.push('');
  for (const [inputType, outputs] of Object.entries(endpointsByInputOutput)) {
    const fromMethod = getClientInputMethodName(inputType);
    fileContent.push(`  abstract ${fromMethod}(): ${getClientInputClassName(inputType)};`);
    fileContent.push('');
    for (const [outputType, outputTypeEndpoints] of Object.entries(outputs)) {
      fileContent.push(`  // ${inputType.toUpperCase()} => ${outputType.toUpperCase()}`);
      fileContent.push('');
      const toMethod = getClientOutputMethodName(outputType);
      for (const endpoint of outputTypeEndpoints) {
        const methodName = meta.getMethodName(endpoint);
        const inputModelClassName = meta.getInputModelType(endpoint);
        fileContent.push(`  ${methodName}(args: ${inputModelClassName}) {`);
        fileContent.push(`    return this.${fromMethod}().${toMethod}().${methodName}(args);`);
        fileContent.push(`  }`);
        fileContent.push('');
      }
    }
  }
  fileContent.push(`}`);
  fileContent.push('');
  fs.writeFileSync('./src/client/shortcuts.ts', fileContent.join('\n'));
}

function generateGladiaClient() {
  const fileContent: string[] = [...getGeneratedMarks()];
  const endpoints = meta.getEndpointsByInputOutput();
  fileContent.push(`import { GladiaClientParams } from './client/gladia-client-params';`);
  fileContent.push(`import { Shortcuts } from './client/shortcuts';`);
  for (const inputType of Object.keys(endpoints)) {
    fileContent.push(
      `import { ${getClientInputClassName(inputType)} } from './client/${getClientInput(
        inputType,
      )}';`,
    );
  }
  fileContent.push('');
  fileContent.push('export class GladiaClient extends Shortcuts {');
  for (const inputType of Object.keys(endpoints)) {
    fileContent.push(
      `  private ${getClientInputMemberName(inputType)}: ${getClientInputClassName(inputType)};`,
    );
  }
  fileContent.push('');
  fileContent.push('  constructor(params: GladiaClientParams) {');
  fileContent.push('    super();');
  fileContent.push(`    const validatedParams: GladiaClientParams = {`);
  fileContent.push(`      ...params,`);
  fileContent.push(`      useFetch: params.useFetch ?? false,`);
  fileContent.push(`    }`);
  for (const inputType of Object.keys(endpoints)) {
    fileContent.push(
      `    this.${getClientInputMemberName(inputType)} = new ${getClientInputClassName(
        inputType,
      )}(validatedParams);`,
    );
  }
  fileContent.push('  }');
  fileContent.push('');
  for (const inputType of Object.keys(endpoints)) {
    fileContent.push(`  ${getClientInputMethodName(inputType)}() {`);
    fileContent.push(`    return this.${getClientInputMemberName(inputType)};`);
    fileContent.push(`  }`);
    fileContent.push('');
  }
  fileContent.push('}');
  fileContent.push('');
  fs.writeFileSync('./src/gladia-client.ts', fileContent.join('\n'));
}

function generateUnitTests() {
  const endpointsByInputOutput = meta.getEndpointsByInputOutput();
  for (const [inputType, outputs] of Object.entries(endpointsByInputOutput)) {
    const fromMethod = getClientInputMethodName(inputType);
    for (const [outputType, outputTypeEndpoints] of Object.entries(outputs)) {
      const toMethod = getClientOutputMethodName(outputType);
      const fileContent = [...getGeneratedMarks()];
      const inputOutputClassName = getClientInputOutputClassName(inputType, outputType);
      const inputOutputFileName = getClientInputOutput(inputType, outputType);
      fileContent.push(`import { GladiaClient } from '../src/gladia-client';`);
      fileContent.push(`import gladia from '../src/index';`);
      fileContent.push(`import { HttpClient } from '../src/internal/http-client';`);
      fileContent.push(
        `import { getRandomInt, getRandomText, getPostMock, mockHttpClient } from './helpers/mocks';`,
      );
      fileContent.push('');
      fileContent.push(`describe('${inputOutputClassName}', () => {`);

      for (const endpoint of outputTypeEndpoints) {
        const methodName = meta.getMethodName(endpoint);
        fileContent.push(`  describe('${methodName}', () => {`);
        fileContent.push(`    let gladiaClient: GladiaClient;`);
        fileContent.push(`    let httpClientMock: HttpClient;`);
        fileContent.push('');
        fileContent.push(`    beforeEach(() => {`);
        fileContent.push(
          `      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });`,
        );
        fileContent.push(
          `      httpClientMock = gladiaClient.${fromMethod}().${toMethod}()['httpClient'];`,
        );
        fileContent.push(`    });`);
        fileContent.push('');
        for (const mode of ['full path', 'shortcuts'] as const) {
          fileContent.push(`    describe('${mode}', () => {`);
          const callPath = getCallPath({ mode, fromMethod, toMethod, methodName });
          fileContent.push(
            `      it('should call the api with the text and the default model by default', async () => {`,
          );
          fileContent.push(...generateTestInputs(callPath, endpoint));
          fileContent.push(...generateTestAssertions(endpoint));
          fileContent.push(`      });`);
          fileContent.push(
            `      it('should call the api with the text and the specified model', async () => {`,
          );
          const specifiedModel = getAnyModelExceptDefault(endpoint);
          fileContent.push(...generateTestInputs(callPath, endpoint, specifiedModel));

          fileContent.push(...generateTestAssertions(endpoint, specifiedModel));
          fileContent.push(`      });`);
          fileContent.push(`    });`);
        }
        fileContent.push(`  });`);
        fileContent.push('');
      }
      fileContent.push(`});`);
      const fileName = `./tests/${inputOutputFileName}.spec.ts`;
      fs.writeFileSync(fileName, fileContent.join('\n'));
    }
  }
}

function getGeneratedMarks(): string[] {
  return ['/* Generated file with "scripts/generate-sdk.ts" */', ''];
}

function getClientInput(inputType: string): string {
  return `from-${inputType.toLowerCase()}`;
}
function getClientInputClassName(inputType: string): string {
  return `From${capitalizeFirst(inputType)}`;
}
function getClientInputMemberName(inputType: string): string {
  return `${uncapitalizeFirst(getClientInputClassName(inputType))}Inst`;
}
function getClientInputMethodName(inputType: string): string {
  return uncapitalizeFirst(getClientInputClassName(inputType));
}

function getClientInputOutput(inputType: string, outputType: string): string {
  return `from-${inputType.toLowerCase()}-to-${outputType.toLowerCase()}`;
}
function getClientInputOutputClassName(inputType: string, outputType: string): string {
  return `From${capitalizeFirst(inputType)}To${capitalizeFirst(outputType)}`;
}
function getClientOutputMemberName(inputType: string, outputType: string): string {
  return `${uncapitalizeFirst(getClientInputOutputClassName(inputType, outputType))}Inst`;
}
function getClientOutputMethodName(outputType: string): string {
  return `to${capitalizeFirst(outputType)}`;
}

function getAnyModelExceptDefault(endpoint: meta.EndpointDef): string {
  if (endpoint.models.length === 1) {
    return 'fake-model-name';
  } else {
    return endpoint.models.filter((m) => m !== endpoint.defaultModel)[0];
  }
}

interface GetCallPath {
  mode: 'full path' | 'shortcuts';
  fromMethod: string;
  toMethod: string;
  methodName: string;
}

function getCallPath({ mode, fromMethod, toMethod, methodName }: GetCallPath) {
  switch (mode) {
    case 'full path':
      return `${fromMethod}().${toMethod}().${methodName}`;
    case 'shortcuts':
      return methodName;
  }
}

function generateTestInputs(
  callPath: string,
  endpoint: meta.EndpointDef,
  specifyModel?: string,
): string[] {
  const fileContent: string[] = [];
  for (const param of endpoint.params) {
    switch (param.type) {
      case 'integer':
        fileContent.push(`        const ${param.name}_data = getRandomInt();`);
        break;
      case 'string':
      case 'url':
        fileContent.push(`        const ${param.name}_data = getRandomText();`);
        break;
      case 'audio':
      case 'image':
        fileContent.push(
          `        const ${param.name}_data = new Blob([getRandomText(), String(getRandomInt())]);`,
        );
        break;
    }
  }
  fileContent.push(`        const result = await gladiaClient.${callPath}({`);
  for (const param of endpoint.params) {
    fileContent.push(`          ${param.name}: ${param.name}_data,`);
  }
  if (specifyModel) {
    fileContent.push(`          model: '${specifyModel}' as any,`);
  }
  fileContent.push(`        });`);
  return fileContent;
}

function generateTestAssertions(endpoint: meta.EndpointDef, specifyModel?: string) {
  const fileContent: string[] = [];
  fileContent.push(
    `        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);`,
  );
  fileContent.push(`        expect(postMock).toHaveBeenCalledTimes(1);`);
  fileContent.push(`        expect(firstCallArgs.url).toEqual('${endpoint.url}');`);
  fileContent.push(`        expect(firstCallArgs.headers).toEqual({`);
  if (isEndpointNeedUrlFormData(endpoint)) {
    fileContent.push(`          'Content-Type': '${endpoint.inputBodyContentType}',`);
  } else {
    fileContent.push(`          'Content-Type': undefined,`);
  }
  fileContent.push(`        });`);
  if (endpoint.outputType !== 'text') {
    fileContent.push(`        expect(firstCallArgs.responseType).toEqual('arraybuffer');`);
  }
  fileContent.push(`        expect(firstCallArgs.query).toEqual({`);
  fileContent.push(`          model: '${specifyModel ?? endpoint.defaultModel}',`);
  for (const param of endpoint.params.filter((p) => p.in === 'query')) {
    fileContent.push(`          ${param.name}: ${param.name}_data,`);
  }
  fileContent.push(`        });`);
  for (const param of endpoint.params.filter((p) => p.in === 'formData')) {
    switch (param.type) {
      case 'audio':
      case 'image':
        fileContent.push(`        expect(firstCallBody.get('${param.name}')).toBeDefined();`);
        break;
      case 'integer':
        fileContent.push(
          `        expect(firstCallBody.get('${param.name}')).toEqual(String(${param.name}_data));`,
        );
        break;
      case 'string':
      case 'url':
        fileContent.push(
          `        expect(firstCallBody.get('${param.name}')).toEqual(${param.name}_data);`,
        );
        break;
    }
  }
  return fileContent;
}

main();
