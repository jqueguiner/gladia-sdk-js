const fs = require('fs');
const https = require('https');

(async () => {
  const openApiJson = await getOpenapiJson();
  const openApiJsonObj = JSON.parse(openApiJson);
  const file = [];

  Object.entries(openApiJsonObj.paths).forEach(([path, { post }]) => {
    const typeName = computeTypeName(path);
    const defaultValueName = computeDefaultValueName(path);
    const modelSchema = getModelSchema(post);
    file.push(`export type ${typeName} = "${modelSchema.enum.join('" | "')}";`);
    file.push(`export const ${defaultValueName} = "${modelSchema.default}" as const;`);
  });

  fs.writeFileSync('./src/models.ts', file.join('\n'));
})();

function getOpenapiJson() {
  const options = {
    hostname: 'v2-api.gladia.io',
    port: 443,
    path: '/openapi.json',
    method: 'GET',
  };
  return new Promise((resolve, reject) => {
    let body = '';

    const req = https.request(options, (res) => {
      console.log(`statusCode: ${res.statusCode}`);

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

function getModelSchema(post) {
  return post.parameters.filter((p) => p.name === 'model')[0].schema;
}

function computeTypeName(path) {
  const part = path.split('/').filter((s) => s.length > 0);
  return (
    capitalizeFirst(part[0]) +
    capitalizeFirst(part[1]) +
    part[2]
      .split('-')
      .map((s) => capitalizeFirst(s))
      .join('') +
    'Model'
  );
}

function computeDefaultValueName(path) {
  const part = path.split('/').filter((s) => s.length > 0);
  return `${part[0].toUpperCase()}_${part[1].toUpperCase()}_${part[2]
    .replaceAll('-', '_')
    .toUpperCase()}_DEFAULT_MODEL`;
}

function capitalizeFirst(str) {
  return str[0].toUpperCase() + str.substring(1);
}
