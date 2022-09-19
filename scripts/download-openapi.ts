import fs from 'node:fs';
import { exit } from 'node:process';
import { getOpenapiJson } from './openapi.utils';

async function main() {
  try {
    const openapiJson = await getOpenapiJson();
    fs.writeFileSync('./openapi.json', openapiJson, { encoding: 'utf-8' });
  } catch (err) {
    console.error(err);
    exit(-1);
  }
}

(async () => {
  await main();
})();
