import { gladia } from '@gladiaio/sdk';

const gladiaClient = gladia({ apiKey: 'token_1' });
console.log('ageFromName STARTED');
gladiaClient.ageFromName({ name: 'Lucien' }).then(function (result) {
  console.log('ageFromName RESULT', result);
});

gladiaClient
  .imageGeneration({ prompt: 'A cat on the moon', samples: 1 })
  .then((result) => {
    console.log('imageGeneration [sample=1] RESULT', result.byteLength);
  })
  .catch((err) => console.error(err));

gladiaClient
  .imageGeneration({
    asUrl: true,
    prompt: 'A cat on the moon',
    samples: 1,
  })
  .then((result) => {
    console.log('imageGeneration [sample=1,asUrl=true] RESULT', result);
  })
  .catch((err) => console.error(err));

gladiaClient
  .imageGeneration({
    prompt: 'A cat on the moon',
    samples: 2,
  })
  .then((result) => {
    console.log(
      'imageGeneration [sample=2] RESULT',
      result.map((data) => data.slice(0, 50) + '...'),
    );
  })
  .catch((err) => console.error(err));

gladiaClient
  .imageGeneration({
    asUrl: true,
    prompt: 'A cat on the moon',
    samples: 2,
  })
  .then((result) => {
    console.log('imageGeneration [sample=2,asUrl=true] RESULT', result);
  })
  .catch((err) => console.error(err));

gladiaClient
  .builder('image-generation', { prompt: 'A cat on the moon', samples: 1, asUrl: true })
  .call()
  .then((result) => {
    console.log('builder image-generation [sample=1,asUrl=true] RESULT', result);
  })
  .catch((err) => console.error(err));
