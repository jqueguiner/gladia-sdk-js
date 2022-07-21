# Gladia SDK JS

## Setup

```bash
npm i @gladiaio/sdk
```

```JavaScript
import gladia from '@gladiaio/sdk';

const gladiaClient = gladia({ apiKey: 'XXXXXXXX' });
const analysis = await gladiaClient.sentimentAnalysis({ text: 'I hate you' });
// analysis = "{\"label\": \"NEGATIVE\", \"score\": 0.9991129040718079}"
```

## Function logic

There is 2 ways to use gladia tasks: full path and shortcuts.

### Full path

The full path will help you to find what you can do with some kind of input, targetting some kind of output.

Example:

```JavaScript
const ocrResult = await gladiaClient.fromImage().toText().ocr({ image: readImageAsArrayBuffer() });
```

Here we can see explicitly we want to start from an image, end to text and only tasks matching this couple input/output will be possible through autocompletion.

### Shortcut

The shortcut is more convinient when you know what you want to do.

Example:

```JavaScript
const ocrResult = await gladiaClient.ocr({ image: readImageAsArrayBuffer() });
```

Here you can see we can directly call the task we want on the GladiaClient without indicating input/output. If you know what you want: it's for you!


Note: full path and shortcut are strictly equivalent.

## Model used

For each task, we chose for you a model we recommand you to use. The recommanded model is automatically used if you specify no model.

To choose yourself the model you want, you can specify it like that:

```JavaScript
const ocrResult = await gladiaClient.ocr({ image: readImageAsArrayBuffer(), model: 'tesseract-default' });
```

## Examples

### Sentiment Analysis

```JavaScript
const inputText = 'I love you';
const result = await gladiaClient.sentimentAnalysis({ text: inputText });
const sentimentAnalysis = JSON.parse(result).label;
// => POSITIVE
```

### Background removal (on browser)

```JavaScript
const imageInput = fileInputRef.files[0];
const imageOutput = await gladiaClient.fromImage().toImage().backgroundRemoval({ image: imageInput });
const imageUrl = URL.createObjectURL(new Blob([ imageOutput ]));
// => imageUrl can be used to display the image by setting it as src
```
