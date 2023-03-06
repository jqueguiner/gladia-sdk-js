import fs from 'fs';
import { capitalizeFirst, uncapitalizeFirst } from '../src/meta/utils';
import * as meta from '../src/meta';
import path from 'path';

function main() {
  cleanupPreviousFiles();
  generateModelsTs();
  generateInputModelsTs();
  generateOutputModelsTs();
  generateFromInputToOutputClasses();
  generateFromInputClasses();
  generateShortcuts();
  generateBuilderTs();
  generateGladiaClient();
  generateUnitTests();
  generateApiMd();
}

function cleanupPreviousFiles() {
  const generatedMarks = getGeneratedMarks().join('\n');
  const directoriesToScan = ['./src/client', './tests'];
  for (const dir of directoriesToScan) {
    fs.readdirSync(dir)
      .map((filePath) => path.resolve(dir, filePath))
      .filter((filePath) => fs.statSync(filePath).isFile())
      .filter((filePath) =>
        fs.readFileSync(filePath, { encoding: 'utf-8' }).startsWith(generatedMarks),
      )
      .forEach((filePath) => fs.rmSync(filePath));
  }
}

function generateModelsTs() {
  const fileContent: string[] = [...getGeneratedMarks()];
  const endpoints = meta.getEndpoints();
  for (const endpoint of endpoints) {
    const typeName = meta.getModelTypeName(endpoint);
    const contentTypeName = meta.getContentTypeName(endpoint);
    const modelValuesName = meta.getModelValuesName(endpoint);
    fileContent.push(`export const ${modelValuesName} = [`);
    endpoint.models.map((model) => `   '${model}',`).forEach((model) => fileContent.push(model));
    fileContent.push('] as const;');
    fileContent.push(
      `export const ${contentTypeName} = "${endpoint.inputBodyContentType}" as const;`,
    );
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
  // fileContent.push(`import { WithAsUrl, WithHeaders, WithModel } from './types';`);
  fileContent.push(`import { WithHeaders, WithModel } from './types';`);
  fileContent.push('');
  for (const endpoint of endpoints) {
    const enumParams = endpoint.params.filter(
      (p): p is meta.EnumEndpointDefParam => p.type === 'enum',
    );
    enumParams.forEach((param) => {
      const paramTypeName = meta.getInputEnumParamType(endpoint, param);
      const paramValuesName = meta.getInputEnumParamValues(endpoint, param);
      fileContent.push(`export const ${paramValuesName} = [`);
      param.enumValues.forEach((enumValue) => {
        fileContent.push(`  '${enumValue}', `);
      });
      fileContent.push(`] as const;`);
      fileContent.push(`export type ${paramTypeName} = typeof ${paramValuesName}[number];`);
    });
    const inputModelName = meta.getInputModelType(endpoint);
    const modelTypeName = meta.getModelTypeName(endpoint);
    fileContent.push(`export interface ${inputModelName} `);
    if (endpoint.hasSamplesParam || endpoint.outputType !== 'text') {
      fileContent.push(`  extends WithHeaders, WithAsUrl, WithModel<${modelTypeName}> {`);
    } else {
      fileContent.push(`  extends WithHeaders, WithModel<${modelTypeName}> {`);
    }
    endpoint.params.forEach((param) => {
      const optionalMark = param.required ? '' : '?';
      const paramType = (() => {
        switch (param.type) {
          case 'bool':
          case 'boolean':
            return 'boolean';
          case 'url':
          case 'string':
            return 'string';
          case 'audio':
          case 'image':
          case 'video':
            return 'Blob';
          case 'integer':
          case 'float':
            return 'number';
          case 'array':
            return 'string[]';
          case 'enum':
            return meta.getInputEnumParamType(endpoint, param);
          default:
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            throw new Error(`Unknown param type: "${(param as any).type}"`);
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
  // fileContent.push('type Base64Image = string;');
  // fileContent.push('type ImageUrl = string;');
  fileContent.push('');
  const endpoints = meta.getEndpoints();
  for (const endpoint of endpoints) {
    const outputModelName = meta.getOutputModelType(endpoint);
    const outputBodyContentType = endpoint.outputBodyContentType;
    switch (outputBodyContentType.type) {
      case 'prediction-standard-output': {
        const predictionType = (() => {
          if (
            outputBodyContentType.predictionType === 'string' ||
            outputBodyContentType.predictionType === 'number'
          ) {
            return outputBodyContentType.predictionType;
          }
          return `${outputBodyContentType.predictionType.array}[]`;
        })();
        fileContent.push(`export type ${outputModelName} = {`);
        fileContent.push(`  prediction: ${predictionType};`);
        fileContent.push(`  prediction_raw: unknown;`);
        fileContent.push(`};`);
        break;
      }
      case 'unknown':
        fileContent.push(
          `export type ${outputModelName} = Record<string, string | number | boolean>;`,
        );
        break;
      case 'binary': {
        const outputModelNameForOneSampleAsUrl = meta.getOutputModelTypeOneSampleAsUrl(endpoint);
        const outputModelNameForMulitpleSampleAsUrl =
          meta.getOutputModelTypeMultipleSamplesAsUrl(endpoint);
        // fileContent.push(`export type ${outputModelNameForOneSampleAsUrl} = { url: ImageUrl[] };`);
        if (endpoint.hasSamplesParam) {
          // fileContent.push(
          //   `export type ${outputModelNameForMulitpleSampleAsUrl} = { url: ImageUrl[] };`,
          // );
          const outputModelNameForOneSample = meta.getOutputModelTypeOneSample(endpoint);
          const outputModelNameForMulitpleSample = meta.getOutputModelTypeMultipleSamples(endpoint);
          fileContent.push(`export type ${outputModelNameForOneSample} = ArrayBuffer;`);
          // fileContent.push(`export type ${outputModelNameForMulitpleSample} = Base64Image[];`);
          fileContent.push(`export type ${outputModelName} = `);
          fileContent.push(`  | ${outputModelNameForOneSample}`);
          fileContent.push(`  | ${outputModelNameForMulitpleSample}`);
          fileContent.push(`  | ${outputModelNameForOneSampleAsUrl}`);
          fileContent.push(`  | ${outputModelNameForMulitpleSampleAsUrl};`);
        } else {
          fileContent.push(`export type ${outputModelName} = `);
          fileContent.push(`  | ArrayBuffer`);
          fileContent.push(`  | ${outputModelNameForOneSampleAsUrl};`);
        }
        break;
      }
      default:
        throw { kind: 'UnknownOutputType', outputType: endpoint.outputType };
    }
  }
  fileContent.push(``);
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
      fileContent.push(`} from './input-models';`);
      fileContent.push(...generateOutputModelsImports(outputTypeEndpoints));
      fileContent.push(`import {`);
      for (const endpoint of outputTypeEndpoints) {
        fileContent.push(`  ${meta.getContentTypeName(endpoint)},`);
      }
      fileContent.push(`} from '../models';`);
      const importUrlFormData = outputTypeEndpoints.some(isEndpointNeedUrlFormData);
      const urlFormDataImport = importUrlFormData ? ', UrlFormData' : '';
      fileContent.push(
        `import { getHttpClient, HttpClient${urlFormDataImport} } from '../internal/http-client';`,
      );
      const shouldImportIsDefined = outputTypeEndpoints.some((endpoints) =>
        endpoints.params.some((param) => !param.required),
      );
      if (shouldImportIsDefined) {
        fileContent.push(`import { isDefined } from '../utils/fp';`);
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
        fileContent.push(...generateTaskMethodSignature(endpoint));
        switch (inputType) {
          case 'text':
          case 'audio':
          case 'video':
          case 'image': {
            const useUrlFormData = isEndpointNeedUrlFormData(endpoint);
            if (useUrlFormData) {
              fileContent.push(`    const formData = new UrlFormData();`);
            } else {
              fileContent.push(`    const formData = new FormData();`);
            }
            for (const param of endpoint.params.filter((p) => p.in === 'formData')) {
              const argValue = ['integer', 'float', 'boolean'].includes(param.type)
                ? `String(args.${param.name})`
                : `args.${param.name}`;
              if (param.required) {
                fileContent.push(`    formData.append('${param.name}', ${argValue});`);
              } else {
                fileContent.push(`    if (isDefined(args.${param.name})) {`);
                fileContent.push(`      formData.append('${param.name}', ${argValue});`);
                fileContent.push(`    }`);
              }
            }
            fileContent.push(`    return this.httpClient.post({`);
            fileContent.push(`      url: '${endpoint.url}',`);
            if (useUrlFormData) {
              fileContent.push(`      headers: {`);
              fileContent.push(`        'Content-Type': ${meta.getContentTypeName(endpoint)},`);
              if (endpoint.outputType !== 'text') {
                fileContent.push(`        ...(args.asUrl ? { 'Accept': 'text/uri-list'} : {}),`);
              }
              fileContent.push(`        ...(args.headers ?? {}),`);
              fileContent.push(`      },`);
            } else {
              // this enforce the browser to compute it self the Content-Type with correct boundary
              // this give something like:
              // Content-Type: multipart/form-data; boundary=---------------------------412830277717200702261256384337
              fileContent.push(`      headers: {`);
              const contentTypeName = meta.getContentTypeName(endpoint);
              fileContent.push(
                `        'Content-Type': this.params.useFetch ? ${contentTypeName} : undefined,`,
              );
              if (endpoint.outputType !== 'text') {
                fileContent.push(`        ...(args.asUrl ? { 'Accept': 'text/uri-list'} : {}),`);
              }
              fileContent.push(`        ...(args.headers ?? {}),`);
              fileContent.push(`      },`);
            }
            fileContent.push(`      query: {`);
            fileContent.push(`        ...(args.model ? {model: args.model} : {}),`);
            for (const param of endpoint.params.filter((p) => p.in === 'query')) {
              const argValue =
                param.type === 'integer' || param.type === 'float'
                  ? `String(args.${param.name})`
                  : `args.${param.name}`;
              fileContent.push(`        ${param.name}: ${argValue},`);
            }
            fileContent.push(`      },`);
            if (endpoint.outputType !== 'text') {
              if (endpoint.hasSamplesParam) {
                fileContent.push(
                  `      responseType: (args.samples && args.samples > 1) || args.asUrl ? 'json' : 'arraybuffer',`,
                );
              } else if (endpoint.outputType === 'image') {
                fileContent.push(`      responseType: args.asUrl ? 'json' : 'arraybuffer',`);
              } else {
                fileContent.push(`      responseType: 'arraybuffer',`);
              }
            }
            if (useUrlFormData) {
              fileContent.push(`      body: formData.toString(),`);
            } else {
              fileContent.push(`      body: formData,`);
            }
            fileContent.push(`    });`);
            break;
          }
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

function generateBuilderTs() {
  const endpointsByInputOutput = meta.getEndpointsByInputOutput();
  const endpoints = meta.getEndpoints();
  const fileContent: string[] = [...getGeneratedMarks()];
  fileContent.push(...generateInputModelsImports(endpoints));
  fileContent.push(...generateOutputModelsImports(endpoints, { withUnionForSubtype: false }));
  fileContent.push("import { TaskName } from 'src/meta/task-names';");
  fileContent.push("import { Shortcuts } from './shortcuts';");
  fileContent.push("import { TASK_NAME_TO_METHOD_NAME } from '../meta/mappings';");
  fileContent.push('');
  fileContent.push(`export abstract class Builder extends Shortcuts {`);
  fileContent.push('');
  for (const [inputType, outputs] of Object.entries(endpointsByInputOutput)) {
    for (const [outputType, outputTypeEndpoints] of Object.entries(outputs)) {
      fileContent.push('');
      fileContent.push(`  // ${inputType.toUpperCase()} => ${outputType.toUpperCase()}`);
      fileContent.push('');
      for (const endpoint of outputTypeEndpoints) {
        const taskName = endpoint.taskName;
        const inputModelType = meta.getInputModelType(endpoint);
        const outputModelType = meta.getOutputModelType(endpoint);
        if (endpoint.hasSamplesParam || endpoint.outputType !== 'text') {
          const outputModelNameForOneSample = meta.getOutputModelTypeOneSample(endpoint);
          const outputModelNameForMulitpleSamples =
            meta.getOutputModelTypeMultipleSamples(endpoint);
          const outputModelNameForOneSampleAsUrl = meta.getOutputModelTypeOneSampleAsUrl(endpoint);
          const outputModelNameForMulitpleSamplesAsUrl =
            meta.getOutputModelTypeMultipleSamplesAsUrl(endpoint);
          if (endpoint.hasSamplesParam) {
            fileContent.push(
              `  builder(taskName: '${taskName}', args: ${inputModelType} & { samples: 1, asUrl: true }): CallBuilder<${outputModelNameForOneSampleAsUrl}>;`,
            );
            fileContent.push(
              `  builder(taskName: '${taskName}', args: ${inputModelType} & { asUrl: true }): CallBuilder<${outputModelNameForMulitpleSamplesAsUrl}>;`,
            );
            fileContent.push(
              `  builder(taskName: '${taskName}', args: ${inputModelType} & { samples: 1 }): CallBuilder<${outputModelNameForOneSample}>;`,
            );
            fileContent.push(
              `  builder(taskName: '${taskName}', args: ${inputModelType}): CallBuilder<${outputModelNameForMulitpleSamples}>;`,
            );
          } else {
            fileContent.push(
              `  builder(taskName: '${taskName}', args: ${inputModelType} & { asUrl: true }): CallBuilder<${outputModelNameForOneSampleAsUrl}>;`,
            );
            fileContent.push(
              `  builder(taskName: '${taskName}', args: ${inputModelType}): CallBuilder<ArrayBuffer>;`,
            );
          }
        } else {
          fileContent.push(
            `  builder(taskName: '${taskName}', args: ${inputModelType}): CallBuilder<${outputModelType}>;`,
          );
        }
      }
    }
  }
  fileContent.push('');
  fileContent.push(
    '  builder<TInput, TOutput>(taskName: TaskName, args: TInput): CallBuilder<TOutput> {',
  );
  fileContent.push('    const methodName = TASK_NAME_TO_METHOD_NAME[taskName];');
  fileContent.push(
    '    const method = this[methodName].bind(this) as (args: unknown) => Promise<TOutput>;',
  );
  fileContent.push('    return { call() { return method(args) as Promise<TOutput> } };');
  fileContent.push('  }');

  fileContent.push(`}`);
  fileContent.push('');
  fileContent.push('interface CallBuilder<TOuput> {');
  fileContent.push('  call(): Promise<TOuput>;');
  fileContent.push('}');
  fileContent.push('');
  fs.writeFileSync('./src/client/builder.ts', fileContent.join('\n'));
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
  fileContent.push(...generateInputModelsImports(endpoints));
  fileContent.push(...generateOutputModelsImports(endpoints));
  fileContent.push('');
  fileContent.push(`export abstract class Shortcuts implements`);
  fileContent.push(...generateInputOutputImplementated(endpointsByInputOutput));
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
        fileContent.push(...generateTaskMethodSignature(endpoint));
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
  fileContent.push("import { GladiaClientParams } from './client/gladia-client-params';");
  fileContent.push("import { Builder } from './client/builder';");
  fileContent.push("import { Shortcuts } from './client/shortcuts';");
  for (const inputType of Object.keys(endpoints)) {
    const clientInput = getClientInput(inputType);
    const clientInputClassName = getClientInputClassName(inputType);
    fileContent.push(`import { ${clientInputClassName} } from './client/${clientInput}';`);
  }
  fileContent.push("import { GladiaClientBase } from './client/gladia-client-base';");
  fileContent.push("import { applyMixins } from './utils/mixin';");
  fileContent.push('');
  fileContent.push('export class GladiaClient extends GladiaClientBase {');
  for (const inputType of Object.keys(endpoints)) {
    fileContent.push(
      `  private ${getClientInputMemberName(inputType)}: ${getClientInputClassName(inputType)};`,
    );
  }
  fileContent.push('');
  fileContent.push('  constructor(params: GladiaClientParams) {');
  fileContent.push(`    const validatedParams: GladiaClientParams = {`);
  fileContent.push(`      ...params,`);
  fileContent.push(`      useFetch: params.useFetch ?? false,`);
  fileContent.push(`      useXhr: params.useXhr ?? false,`);
  fileContent.push(`    };`);
  fileContent.push('    super(validatedParams);');
  for (const inputType of Object.keys(endpoints)) {
    fileContent.push(
      `    this.${getClientInputMemberName(inputType)} = new ${getClientInputClassName(
        inputType,
      )}(validatedParams);`,
    );
  }
  fileContent.push('  }');
  for (const inputType of Object.keys(endpoints)) {
    fileContent.push('');
    fileContent.push(`  ${getClientInputMethodName(inputType)}() {`);
    fileContent.push(`    return this.${getClientInputMemberName(inputType)};`);
    fileContent.push(`  }`);
  }
  fileContent.push('}');
  fileContent.push('');
  fileContent.push(
    `// extending this interface and applying mixin here is a multi-inheritance simulation`,
  );
  fileContent.push(`export interface GladiaClient extends GladiaClientBase, Shortcuts, Builder {}`);
  fileContent.push(`applyMixins(GladiaClient, [Shortcuts, Builder]);`);
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
      fileContent.push('import {');
      for (const endpoint of outputTypeEndpoints.filter((e) => e.models.length === 1)) {
        fileContent.push(`  ${meta.getModelTypeName(endpoint)},`);
      }
      fileContent.push(`} from '../src/models';`);
      fileContent.push(`import gladia from '../src/index';`);
      fileContent.push(`import { HttpClient } from '../src/internal/http-client';`);
      const helperMocks = getHelperMockList(outputTypeEndpoints);
      fileContent.push(
        `import { ${
          helperMocks.length === 0 ? '' : helperMocks + ', '
        }getPostMock, mockHttpClient } from './helpers/mocks';`,
      );
      const enumParams = outputTypeEndpoints.flatMap((endpoint) =>
        endpoint.params
          .filter((param) => param.type === 'enum')
          .map((param) => ({ endpoint, param })),
      );
      if (enumParams.length > 0) {
        fileContent.push(`import {`);
        enumParams.forEach(({ endpoint, param }) => {
          fileContent.push(`  ${meta.getInputEnumParamValues(endpoint, param)},`);
        });
        fileContent.push(`} from '../src/client/input-models';`);
      }
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
          if (endpoint.hasSamplesParam) {
            fileContent.push(
              `      it('should call the api with responseType = "arraybuffer" when samples = 1', async () => {`,
            );
            fileContent.push(
              ...generateTestInputs(callPath, endpoint, undefined, { samples: '1' }),
            );
            fileContent.push(
              ...generateTestAssertions(endpoint, undefined, { responseType: 'arraybuffer' }),
            );
            fileContent.push(`      });`);
            fileContent.push(
              `      it('should call the api with responseType = "json" when samples > 1', async () => {`,
            );
            fileContent.push(
              ...generateTestInputs(callPath, endpoint, undefined, { samples: '2' }),
            );
            fileContent.push(
              ...generateTestAssertions(endpoint, undefined, { responseType: 'json' }),
            );
            fileContent.push(`      });`);
          }
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

function generateApiMd() {
  const endpointsByInputOutput = meta.getEndpointsByInputOutput();
  const fileContent: string[] = [];
  fileContent.push('# API');
  fileContent.push('');
  fileContent.push('Pay attention default model may be outdated.');
  fileContent.push('The default model of this doc is designed on SDK generation time.');
  fileContent.push('The runtime default model is defined on the GladIA server.');

  for (const [inputType, outputs] of Object.entries(endpointsByInputOutput)) {
    for (const [outputType, outputEndpoints] of Object.entries(outputs)) {
      fileContent.push('');
      fileContent.push(`## ${inputType.toLocaleUpperCase()} => ${outputType.toLocaleUpperCase()}`);
      for (const endpoint of outputEndpoints) {
        fileContent.push('');
        fileContent.push(`### \`${endpoint.taskName}\``);
        fileContent.push('');
        fileContent.push(`#### \`models\``);
        fileContent.push('');
        for (const model of endpoint.models) {
          if (model === endpoint.defaultModel) {
            fileContent.push(`- **${model} (default)**`);
          } else {
            fileContent.push(`- ${model}`);
          }
        }

        fileContent.push('');
        fileContent.push(`#### other params`);
        fileContent.push('');
        for (const param of endpoint.params) {
          const required = param.required ? ' *(required)*' : '';
          fileContent.push(`- \`${param.name}\`: ${param.type}${required}`);
          if (param.type === 'enum') {
            for (const enumValue of param.enumValues) {
              fileContent.push(`  - *\`${enumValue}\`*`);
            }
          }
        }
      }
    }
  }
  fileContent.push('');
  fileContent.push('> Generated file with "scripts/generate-sdk.ts"');
  fileContent.push('');
  fs.writeFileSync('./API.md', fileContent.join('\n'));
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

function getEndpointsParamTypes(endpoints: meta.EndpointDef[]): meta.EndpointDefParam['type'][] {
  const allTypes = endpoints.flatMap((endpoint) => endpoint.params.map((param) => param.type));
  return [...new Set(allTypes)];
}

function getHelperMockList(endpoints: meta.EndpointDef[]) {
  return getEndpointsParamTypes(endpoints)
    .map((type) => {
      switch (type) {
        case 'integer':
          return 'getRandomInt';
        case 'float':
          return 'getRandomFloat';
        case 'array':
          return 'getRandomArray';
        case 'enum':
          return 'getRandomFromEnum';
        case 'boolean':
          return 'getRandomBoolean';
        default:
          return 'getRandomText';
      }
    })
    .reduce((all: string[], current: string) => {
      if (all.includes(current)) {
        return all;
      } else {
        return [...all, current];
      }
    }, [])
    .sort()
    .join(', ');
}

function generateTestInputs(
  callPath: string,
  endpoint: meta.EndpointDef,
  specifyModel?: string,
  fixedValueFormParams: Record<string, string> = {},
): string[] {
  const fileContent: string[] = [];
  for (const param of endpoint.params) {
    if (param.name in fixedValueFormParams) {
      fileContent.push(`        const ${param.name}_data = ${fixedValueFormParams[param.name]};`);
      continue;
    }
    switch (param.type) {
      case 'boolean':
      case 'bool':
        fileContent.push(`        const ${param.name}_data = getRandomBoolean();`);
        break;
      case 'integer':
        fileContent.push(`        const ${param.name}_data = getRandomInt();`);
        break;
      case 'float':
        fileContent.push(`        const ${param.name}_data = getRandomFloat();`);
        break;
      case 'audio':
      case 'video':
      case 'image':
        fileContent.push(`        const ${param.name}_data = new Blob([getRandomText()]);`);
        break;
      case 'array':
        fileContent.push(`        const ${param.name}_data = getRandomArray();`);
        break;
      case 'string':
      case 'url':
        fileContent.push(`        const ${param.name}_data = getRandomText();`);
        break;
      case 'enum': {
        const paramValues = meta.getInputEnumParamValues(endpoint, param);
        fileContent.push(`        const ${param.name}_data = getRandomFromEnum(${paramValues});`);
        break;
      }
    }
  }
  fileContent.push(`        await gladiaClient.${callPath}({`);
  for (const param of endpoint.params) {
    fileContent.push(`          ${param.name}: ${param.name}_data,`);
  }
  if (specifyModel) {
    if (endpoint.models.includes(specifyModel)) {
      fileContent.push(`          model: '${specifyModel}',`);
    } else {
      const modelType = meta.getModelTypeName(endpoint);
      fileContent.push(`          model: '${specifyModel}' as unknown as ${modelType},`);
    }
  }
  fileContent.push(`        });`);
  return fileContent;
}

function generateTestAssertions(
  endpoint: meta.EndpointDef,
  specifyModel?: string,
  fixedValueFormParams: Record<string, string> = {},
) {
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
  if ('responseType' in fixedValueFormParams) {
    fileContent.push(
      `        expect(firstCallArgs.responseType).toEqual('${fixedValueFormParams['responseType']}');`,
    );
  } else if (endpoint.hasSamplesParam) {
    fileContent.push(`        expect(firstCallArgs.responseType).toEqual('json');`);
  } else if (endpoint.outputType !== 'text') {
    fileContent.push(`        expect(firstCallArgs.responseType).toEqual('arraybuffer');`);
  }
  fileContent.push(`        expect(firstCallArgs.query).toEqual({`);
  if (specifyModel) {
    fileContent.push(`          model: '${specifyModel}',`);
  }
  for (const param of endpoint.params.filter((p) => p.in === 'query')) {
    fileContent.push(`          ${param.name}: ${param.name}_data,`);
  }
  fileContent.push(`        });`);
  for (const param of endpoint.params.filter((p) => p.in === 'formData')) {
    switch (param.type) {
      case 'audio':
      case 'video':
      case 'image':
        fileContent.push(`        expect(firstCallBody.get('${param.name}')).toBeDefined();`);
        break;
      case 'boolean':
      case 'integer':
      case 'float':
        fileContent.push(
          `        expect(firstCallBody.get('${param.name}')).toEqual(String(${param.name}_data));`,
        );
        break;
      case 'string':
      case 'url':
      case 'array':
      default:
        fileContent.push(
          `        expect(firstCallBody.get('${param.name}')).toEqual(${param.name}_data);`,
        );
        break;
    }
  }
  return fileContent;
}

function generateInputModelsImports(endpoints: meta.EndpointDef[]) {
  const fileContent: string[] = [];
  fileContent.push(`import {`);
  for (const endpoint of endpoints) {
    const inputModelClassName = meta.getInputModelType(endpoint);
    fileContent.push(`  ${inputModelClassName},`);
  }
  fileContent.push(`} from './input-models'`);
  return fileContent;
}

interface GenerateOutputModelsImportsOptions {
  withUnionForSubtype?: boolean;
}

function generateOutputModelsImports(
  endpoints: meta.EndpointDef[],
  { withUnionForSubtype = true }: GenerateOutputModelsImportsOptions = {},
) {
  const fileContent: string[] = [];
  fileContent.push(`import {`);
  for (const endpoint of endpoints) {
    const outputModelClassName = meta.getOutputModelType(endpoint);
    if (withUnionForSubtype || (!endpoint.hasSamplesParam && endpoint.outputType === 'text')) {
      fileContent.push(`  ${outputModelClassName},`);
    }
    if (endpoint.hasSamplesParam) {
      const outputModelNameForOneSample = meta.getOutputModelTypeOneSample(endpoint);
      const outputModelNameForMulitpleSamples = meta.getOutputModelTypeMultipleSamples(endpoint);
      fileContent.push(`  ${outputModelNameForMulitpleSamples},`);
      fileContent.push(`  ${outputModelNameForOneSample},`);
    }
    if (endpoint.outputType !== 'text') {
      const outputModelNameForOneSampleAsUrl = meta.getOutputModelTypeOneSampleAsUrl(endpoint);
      if (endpoint.hasSamplesParam) {
        const outputModelNameForMulitpleSamplesAsUrl =
          meta.getOutputModelTypeMultipleSamplesAsUrl(endpoint);
        fileContent.push(`  ${outputModelNameForMulitpleSamplesAsUrl},`);
      }
      fileContent.push(`  ${outputModelNameForOneSampleAsUrl},`);
    }
  }
  fileContent.push(`} from './output-models';`);
  return fileContent;
}

function generateTaskMethodSignature(endpoint: meta.EndpointDef) {
  const fileContent: string[] = [];
  const methodName = meta.getMethodName(endpoint);
  const inputModelType = meta.getInputModelType(endpoint);
  const outputModelType = meta.getOutputModelType(endpoint);
  if (endpoint.hasSamplesParam || endpoint.outputType !== 'text') {
    const outputModelNameForOneSample = meta.getOutputModelTypeOneSample(endpoint);
    const outputModelNameForMulitpleSamples = meta.getOutputModelTypeMultipleSamples(endpoint);
    const outputModelNameForOneSampleAsUrl = meta.getOutputModelTypeOneSampleAsUrl(endpoint);
    const outputModelNameForMulitpleSamplesAsUrl =
      meta.getOutputModelTypeMultipleSamplesAsUrl(endpoint);
    if (endpoint.hasSamplesParam) {
      fileContent.push(
        `  ${methodName}(args: ${inputModelType} & { samples: 1, asUrl: true }): Promise<${outputModelNameForOneSampleAsUrl}>;`,
      );
      fileContent.push(
        `  ${methodName}(args: ${inputModelType} & { asUrl: true }): Promise<${outputModelNameForMulitpleSamplesAsUrl}>;`,
      );
      fileContent.push(
        `  ${methodName}(args: ${inputModelType} & { samples: 1 }): Promise<${outputModelNameForOneSample}>;`,
      );
      fileContent.push(
        `  ${methodName}(args: ${inputModelType}): Promise<${outputModelNameForMulitpleSamples}>;`,
      );
    } else {
      fileContent.push(
        `  ${methodName}(args: ${inputModelType} & { asUrl: true }): Promise<${outputModelNameForOneSampleAsUrl}>;`,
      );
      fileContent.push(`  ${methodName}(args: ${inputModelType}): Promise<ArrayBuffer>;`);
    }
  }
  fileContent.push(`  ${methodName}(args: ${inputModelType}): Promise<${outputModelType}> {`);
  return fileContent;
}

function generateInputOutputImplementated(
  endpointsByInputOutput: Record<string, Record<string, meta.EndpointDef[]>>,
) {
  const fileContent: string[] = [];
  const implemented: string[] = [];
  for (const [inputType, outputs] of Object.entries(endpointsByInputOutput)) {
    for (const outputType of Object.keys(outputs)) {
      const inputOutputClassName = getClientInputOutputClassName(inputType, outputType);
      implemented.push(`  Omit<${inputOutputClassName}, 'httpClient'>`);
    }
  }
  const lastImplemented = implemented.pop();
  implemented.forEach((i) => fileContent.push(`${i},`));
  if (lastImplemented) {
    fileContent.push(lastImplemented);
  }
  return fileContent;
}

main();
