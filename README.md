# Gladia SDK JS

## Setup

### Install the SDK

```bash
npm i @gladiaio/sdk
```

or to get the latest version from git, add this to your `package.json`:
```json
{
    "dependencies": {
        "@gladiaio/sdk": "https://github.com/gladiaio/gladia-sdk-js.git",
        // or
        "@gladiaio/sdk": "git+ssh://git@github.com:gladiaio/gladia-sdk-js.git",
    }
}
```

### Use it with TypeScript

```TypeScript
import gladia from '@gladiaio/sdk';

const gladiaClient = gladia({ apiKey: 'XXXXXXXX' });
const result = await gladiaClient.plural({ word: 'cat' });
// result = { prediction: 'cats' }
```
### Use it with JavaScript with ES module

```JavaScript
import { gladia } from '@gladiaio/sdk';

const gladiaClient = gladia({ apiKey: 'XXXXXXXX' });
const result = await gladiaClient.plural({ word: 'cat' });
// result = { prediction: 'cats' }
```

### Use it with JavaScript (without module)

```JavaScript
const { gladia } = require('@gladiaio/sdk');

const gladiaClient = gladia({ apiKey: 'XXXXXXXX' });
const result = await gladiaClient.plural({ word: 'cat' });
// result = { prediction: 'cats' }
```
### Use it with JavaScript (without module, in ES5 context)

Notes: ES5 version is built for IE targets when you have no bundler, prefer other methods

```JavaScript
const { gladia } = require('@gladiaio/sdk/lib/es5');

const gladiaClient = gladia({ apiKey: 'XXXXXXXX' });
const result = await gladiaClient.plural({ word: 'cat' });
// result = { prediction: 'cats' }
```
### Use it with JavaScript in the browser with script import

```html
<!DOCTYPE html>
<html>
<body>
    <script src="./gladiaio-sdk.js"></script>
    <script>
        const gladiaClient = gladiaio_sdk({ apiKey: 'XXXXXXXX' });
        (async () => {
            const result = await gladiaClient.plural({ word: 'cat' });
            // result = { prediction: 'cats' }
        })();
    </script>
</body>
</html>
```

There is multiple bundle choices:
- `gladiaio-sdk.js`: contain bundled ES5 JS + source map
- `gladiaio-sdk.min.js`: contain bundled ES5 JS but not source map
- `gladiaio-sdk.min.js.map`: contain only source map for `gladiaio-sdk.min.js`

For production, we recommand `gladiaio-sdk.min.js`;

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

## Regenerate SDK

```
npm i
npm run generate-sdk
```
