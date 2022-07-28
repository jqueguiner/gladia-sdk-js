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
    const defaultValueName = meta.getDefaultValueName(endpoint);
    const modelValuesName = meta.getModelValuesName(endpoint);
    fileContent.push(`export const ${modelValuesName} = [`);
    endpoint.models.map((model) => `   '${model}',`).forEach((model) => fileContent.push(model));
    fileContent.push('] as const;');
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
          case 'binary':
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
        const defaultModelName = meta.getDefaultValueName(endpoint);
        fileContent.push(`  ${defaultModelName},`);
      }
      fileContent.push(`} from '../models'`);
      fileContent.push(`import { getHttpClient, HttpClient } from '../internal/http-client';`);
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
            fileContent.push(`    return this.httpClient.post({`);
            fileContent.push(`      url: '${endpoint.url}',`);
            fileContent.push(`      query: {`);
            fileContent.push(`        model: ${defaultModelName},`);
            fileContent.push(`        ...args,`);
            fileContent.push(`      },`);
            fileContent.push(`    });`);
            break;
          case 'audio':
          case 'image':
            fileContent.push(`    const formData = new FormData();`);
            for (const param of endpoint.params) {
              if (param.in === 'formData') {
                fileContent.push(`    formData.append('${param.name}', args.${param.name});`);
              }
            }
            fileContent.push(`    return this.httpClient.post({`);
            fileContent.push(`      url: '${endpoint.url}',`);
            fileContent.push(`      query: { model: args.model ?? ${defaultModelName} },`);
            fileContent.push(`      headers: { 'Content-Type': 'multipart/form-data' },`);
            fileContent.push(`      body: formData,`);
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
  fileContent.push(lastImplemented);
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
  for (const inputType of Object.keys(endpoints)) {
    fileContent.push(
      `    this.${getClientInputMemberName(inputType)} = new ${getClientInputClassName(
        inputType,
      )}(params);`,
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
      fileContent.push(`import gladia from '../index';`);
      fileContent.push(`import { HttpClient } from '../src/internal/http-client';`);
      const extraMockImports = inputType === 'text' ? 'getRandomInt, getRandomText, ' : '';
      fileContent.push(`import { ${extraMockImports}mockHttpClient } from './helpers/mocks';`);
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
          fileContent.push(
            `      it('should call the api with the text and the default model by default', async () => {`,
          );
          const callPath = (() => {
            switch (mode) {
              case 'full path':
                return `${fromMethod}().${toMethod}().${methodName}`;
              case 'shortcuts':
                return methodName;
            }
          })();
          switch (inputType) {
            case 'text':
              for (const param of endpoint.params) {
                fileContent.push(
                  `        const ${param.name}_data = ${
                    param.type === 'integer' ? `getRandomInt()` : `getRandomText()`
                  };`,
                );
              }
              fileContent.push(`        const result = await gladiaClient.${callPath}({`);
              for (const param of endpoint.params) {
                fileContent.push(`          ${param.name}: ${param.name}_data,`);
              }
              fileContent.push(`        });`);
              break;
            case 'image':
            case 'audio':
              fileContent.push(`        const blob = new Blob(['fake ${inputType} 🤫']);`);
              const binaryParamName = endpoint.params.filter((p) => p.type === 'binary')[0].name;
              fileContent.push(
                `        const result = await gladiaClient.${callPath}({ ${binaryParamName}: blob });`,
              );
          }
          fileContent.push(`        expect(result).toBeDefined();`);
          fileContent.push(`        expect(httpClientMock.post).toHaveBeenCalledTimes(1);`);
          switch (inputType) {
            case 'text':
              fileContent.push(`        expect(httpClientMock.post).toHaveBeenCalledWith({`);
              fileContent.push(`          url: '${endpoint.url}',`);
              fileContent.push(`          query: {`);
              fileContent.push(`            model: '${endpoint.defaultModel}',`);
              for (const param of endpoint.params) {
                fileContent.push(`            ${param.name}: ${param.name}_data,`);
              }
              fileContent.push(`          },`);
              fileContent.push(`        });`);
              break;
            case 'image':
            case 'audio':
              fileContent.push(`        const postMock = httpClientMock.post as jest.Mock;`);
              fileContent.push(`        const arg = postMock.mock.calls[0][0];`);
              fileContent.push(`        expect(arg.url).toEqual('${endpoint.url}');`);
              fileContent.push(
                `        expect(arg.query).toEqual({ model: '${endpoint.defaultModel}' });`,
              );
              fileContent.push(
                `        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });`,
              );
              const binaryParamName = endpoint.params.filter((p) => p.type === 'binary')[0].name;
              fileContent.push(`        expect(arg.body.get('${binaryParamName}')).toBeDefined();`);
          }

          fileContent.push(`      });`);
          fileContent.push(
            `      it('should call the api with the text and the specified model', async () => {`,
          );
          const specifiedModel = getAnyModelExceptDefault(endpoint);
          switch (inputType) {
            case 'text':
              for (const param of endpoint.params) {
                fileContent.push(
                  `        const ${param.name}_data = ${
                    param.type === 'integer' ? `getRandomInt()` : `getRandomText()`
                  };`,
                );
              }
              fileContent.push(`        const result = await gladiaClient.${callPath}({`);
              for (const param of endpoint.params) {
                fileContent.push(`          ${param.name}: ${param.name}_data,`);
              }
              fileContent.push(`          model: '${specifiedModel}' as any,`);
              fileContent.push(`        });`);
              break;
            case 'image':
            case 'audio':
              fileContent.push(`        const blob = new Blob(['fake ${inputType} 🤫']);`);
              const binaryParamName = endpoint.params.filter((p) => p.type === 'binary')[0].name;
              fileContent.push(`        const result = await gladiaClient.${callPath}({`);
              fileContent.push(`          ${binaryParamName}: blob,`);
              fileContent.push(`          model: '${specifiedModel}' as any,`);
              fileContent.push(`        });`);
          }
          fileContent.push(`        expect(result).toBeDefined();`);
          fileContent.push(`        expect(httpClientMock.post).toHaveBeenCalledTimes(1);`);
          switch (inputType) {
            case 'text':
              fileContent.push(`        expect(httpClientMock.post).toHaveBeenCalledWith({`);
              fileContent.push(`          url: '${endpoint.url}',`);
              fileContent.push(`          query: {`);
              fileContent.push(`            model: '${specifiedModel}' as any,`);
              for (const param of endpoint.params) {
                fileContent.push(`            ${param.name}: ${param.name}_data,`);
              }
              fileContent.push(`          },`);
              fileContent.push(`        });`);
              break;
            case 'image':
            case 'audio':
              fileContent.push(`        const postMock = httpClientMock.post as jest.Mock;`);
              fileContent.push(`        const arg = postMock.mock.calls[0][0];`);
              fileContent.push(`        expect(arg.url).toEqual('${endpoint.url}');`);
              fileContent.push(
                `        expect(arg.query).toEqual({ model: '${specifiedModel}' });`,
              );
              fileContent.push(
                `        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });`,
              );
              const binaryParamName = endpoint.params.filter((p) => p.type === 'binary')[0].name;
              fileContent.push(`        expect(arg.body.get('${binaryParamName}')).toBeDefined();`);
          }
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

main();
