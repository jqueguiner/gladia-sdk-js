setTimeout(function () {
  if (window.gladiaio_sdk) {
    var gladiaClient = gladiaio_sdk({ apiKey: 'token_1' });
    console.log('ageFromName STARTED');
    gladiaClient.ageFromName({ name: 'Lucien' }).then(function (result) {
      console.log('ageFromName RESULT', result);
    });
    console.log('ageFromName STARTED');
    gladiaClient
      .backgroundRemoval({
        image_url: 'http://files.gladia.io/examples/image/image/background-removal/owl2.jpg',
      })
      .then(function (result) {
        console.log('backgroundRemoval RESULT', result);
      });
  } else {
    console.error('Gladia SDK not correctly loaded!');
  }
}, 1000);
