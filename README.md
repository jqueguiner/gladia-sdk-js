# Gladia SDK JS

## Docs

- [SDK API doc](API.md)

## Setup

### Get a free API KEY

[https://v2-app.gladia.io/auth/login](https://v2-app.gladia.io/auth/login)

### Install the SDK

```bash
npm i @gladiaio/sdk
```

### Use it with TypeScript

```TypeScript
import gladia from '@gladiaio/sdk';

const gladiaClient = gladia({ apiKey: 'XXXXXXXX' });
const result = await gladiaClient.autocorrect({ sentence: 'thnik' });
// result = { prediction: 'think' }
```
### Use it with JavaScript with ES module

```JavaScript
import { gladia } from '@gladiaio/sdk';

const gladiaClient = gladia({ apiKey: 'XXXXXXXX' });
const result = await gladiaClient.autocorrect({ sentence: 'thnik' });
// result = { prediction: 'think' }
```

### Use it with JavaScript (without module)

```JavaScript
const { gladia } = require('@gladiaio/sdk');

const gladiaClient = gladia({ apiKey: 'XXXXXXXX' });
const result = await gladiaClient.autocorrect({ sentence: 'thnik' });
// result = { prediction: 'think' }
```
### Use it with JavaScript (without module, in ES5 context)

Notes: ES5 version is built for IE targets when you have no bundler, prefer other methods

```JavaScript
const { gladia } = require('@gladiaio/sdk/lib/es5');

const gladiaClient = gladia({ apiKey: 'XXXXXXXX' });
const result = await gladiaClient.autocorrect({ sentence: 'thnik' });
// result = { prediction: 'think' }
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
        const result = await gladiaClient.autocorrect({ sentence: 'thnik' });
        // result = { prediction: 'think' }
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

## Use a custom http header

You have 2 choices: adding a global header or adding a task specific header.

### Use a custom global http header

```TypeScript
import gladia from '@gladiaio/sdk';

const gladiaClient = gladia({ apiKey: 'XXXXXXXX', header: { 'X-Custom-Header': 'value' } });
```

### Use a custom task specific http header

```TypeScript
import gladia from '@gladiaio/sdk';

const gladiaClient = gladia({ apiKey: 'XXXXXXXX' });
const result = await gladiaClient.autocorrect({ sentence: 'thnik', header: { 'X-Custom-Header': 'value' } });
```

## Use a custom http client

Under the hood, GladIA SDK use Axios to make http calls. By default Axios use `XMLHttpRequest` on browser and use `request` on node.js. If you prefer use fetch on browser, you can use the `useFetch` param when create the client:

```TypeScript
import gladia from '@gladiaio/sdk';

const gladiaClient = gladia({ apiKey: 'XXXXXXXX', useFetch: true });
```

On some case you may want to use a fully custom http client. This is possible like that:

```TypeScript
import { gladia, HttpClientFactory, HttpClientFactoryParams, PostParams } from '@gladiaio/sdk';

const myHttpClientFactory: HttpClientFactory = (params: HttpClientFactoryParams) => {
    return {
        post(postParams: PostParams) {
            // ...
        }
    };
}

const gladiaClient = gladia({ apiKey: 'XXXXXXXX', customHttpClient: myHttpClientFactory });
```

You can use default http client as inspiration: https://github.com/gladiaio/gladia-sdk-js/blob/main/src/internal/http-client.ts#L40

## Set http client timeout

By default, timeout is set to `300000` (5 minutes). You can override this by passing the timeout property to Gladia SDK option object and set any number you want starting from `0` (no timeout).

Here, we are setting a 2 seconds timeout:

```TypeScript
import gladia from '@gladiaio/sdk';

const gladiaClient = gladia({ apiKey: 'XXXXXXXX', useFetch: true, httpClientTimeout: 2000 });
```

## Regenerate SDK

```bash
npm i
npm run generate-metadata
npm run generate-sdk
npm run build
```

Notes:
- `generate-metadata` script will download the latest `openapi.json` file from production api and generate 
- `generate-sdk` will generate most parts of the SDK using the `openapi.json` definition
- If you need a custom sdk, you can provide a `openapi.json` file like this `npm run generate-metadata -- --from-file=./path/to/openapi.json`, then call the scripts `generate-sdk` and `build` like before
- You can download only the current `openapi.json` by calling `npm run download-openapi`

## Make a release manually

Change version in `package.json` then:

```bash
npm install
npm run generate-metadata
npm run generate-sdk
npm run test
npm run build
```

Then create a commit with every modified files with name `[release] x.y.z` (where x.y.z is replace with the version specified in `package.json`).

## Test your SDK localy

Create an npm link

```
npm link
```

On the other project (ex: Office Addin)

```
npm link @gladiaio/sdk
```

After your test, dont forget to do

```
npm cache clean -f
```
