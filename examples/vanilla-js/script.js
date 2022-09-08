setTimeout(function () {
  if (window.gladiaio_sdk) {
    var gladiaClient = gladiaio_sdk({ apiKey: '' });
    console.log('PLURAL STARTED');
    gladiaClient.plural({ word: 'cat' }).then(function (result) {
      console.log('PLURAL RESULT', result);
    });
  } else {
    console.error('Gladia SDK not correctly loaded!');
  }
}, 1000);
