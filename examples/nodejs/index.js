const { gladia } = require('@gladiaio/sdk');

const gladiaClient = gladia({ apiKey: 'token_1' });
console.log('ageFromName STARTED');
gladiaClient.ageFromName({ name: 'Lucien' }).then(function (result) {
  console.log('ageFromName RESULT', result);
});
