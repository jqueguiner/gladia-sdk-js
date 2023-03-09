setTimeout(function () {
  if (window.gladiaio_sdk) {
    var gladiaClient = gladiaio_sdk({ apiKey: 'token_1' });
    console.log('ageFromName STARTED');
    gladiaClient.ageFromName({ name: 'Lucien' }).then(function (result) {
      console.log('ageFromName RESULT', result);
    });
    console.log('ageFromName STARTED');
    document.getElementById('audio-transcription').addEventListener('change', (event) => {
      this.file = event.target.files?.[0];
      gladiaClient
        .audioTranscription({
          language_behaviour: 'manual',
          language: 'polish',
          output_format: 'srt',
          audio: file,
        })
        .then(function (result) {
          console.log('audioTranscription RESULT', result);
        });
    });
  } else {
    console.error('Gladia SDK not correctly loaded!');
  }
}, 1000);
