import https from 'https';

export function getOpenapiJson(): Promise<string> {
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
