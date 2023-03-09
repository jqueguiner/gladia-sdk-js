import { gladia, nodeReadFileSync } from '@gladiaio/sdk';

const gladiaClient = gladia({ apiKey: 'token_1', baseUrl: 'http://localhost:3000' });

gladiaClient
  .audioTranscription({
    language_behaviour: 'manual',
    language: 'polish',
    output_format: 'srt',
    // audio: new Blob([fs.readFileSync('./split_infinity.wav')]),
    audio: nodeReadFileSync('./split_infinity.wav'),
  })
  .then((result) => {
    console.log(result);
  })
  .then((err) => {
    console.error(err);
  });
