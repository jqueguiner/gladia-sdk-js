import fs from 'fs';
import https from 'https';
import packageJson from '../package.json';

async function main() {
  await generateOpenApiDefTs();
  generateSdkVersionTs();
}

function getOpenapiJson(): Promise<string> {
  const options = {
    hostname: 'v2-api.gladia.io',
    port: 443,
    path: '/openapi.json',
    method: 'GET',
  };
  return new Promise<string>((resolve, reject) => {
    let body: string = '';

    const req = https.request(options, (res) => {
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => resolve(Buffer.from(body).toString()));
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

async function generateOpenApiDefTs() {
  const openApiJson = await getOpenapiJson();
  const openApiJsonObj = JSON.parse(openApiJson);
  const jsonLines = JSON.stringify(openApiJsonObj, undefined, 2).split('\n');
  const fileContent: string[] = [...getGeneratedMarks()];
  fileContent.push(`import { OpenApiJson } from './openapideftype';`);
  fileContent.push('');
  fileContent.push(`export const openApiJson: OpenApiJson = ${jsonLines.shift()}`);
  jsonLines.forEach((l) => fileContent.push(l));
  fileContent.push(fileContent.pop() + ';');
  fs.writeFileSync('./src/meta/openapidef.ts', fileContent.join('\n'));
}

function generateSdkVersionTs() {
  const fileContent: string[] = [...getGeneratedMarks()];
  fileContent.push(`export const SDK_VERSION: string = "${packageJson.version}";`);
  fs.writeFileSync('./src/meta/sdk-version.ts', fileContent.join('\n'));
}

function getGeneratedMarks(): string[] {
  return ['/* Generated file with "scripts/generate-metasdk.ts" */', ''];
}

(async () => {
  await main();
})();
