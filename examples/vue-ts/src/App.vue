<template>
  <div class="row">
    <div class="col">
      <fieldset>
        <legend>Plural</legend>
        <input v-model="state.pluralInput" @blur="onPluralBlur" />
        <div>{{ state.pluralOutput }}</div>
      </fieldset>
      <fieldset>
        <legend>Autocorrect</legend>
        <input v-model="state.autocorrectInput" @blur="onAutocorrectBlur" />
        <div>{{ state.autocorrectOutput }}</div>
      </fieldset>
      <fieldset>
        <legend>Sentiment Analysis</legend>
        <input v-model="state.sentimentAnalysisInput" @blur="onSentimentAnalysisBlur" />
        <div>{{ state.sentimentAnalysisOutput }}</div>
      </fieldset>
      <fieldset>
        <legend>Hate speech detection</legend>
        <input v-model="state.hateSpeechDetectionInput" @blur="onHateSpeechDetectionBlur" />
        <div>{{ state.hateSpeechDetectionOutput }}</div>
      </fieldset>
      <fieldset>
        <legend>Article Generation</legend>
        <input v-model="state.articleGenerationInput" @blur="onArticleGenerationBlur" />
        <div v-html.safe="state.articleGenerationOutput"></div>
      </fieldset>
    </div>
    <div class="col image">
      <fieldset>
        <legend>Background removal</legend>
        <input type="file" @change="onImageChange" />
        <img v-for="imgUrl in state.imageUrls" :src="imgUrl" />
      </fieldset>
      <fieldset>
        <legend>Background removal (url)</legend>
        <input v-model="state.backgroundRemovalUrlInput" @blur="onImageUrlChangeBlur" />
        <img v-for="imgUrl in state.imageUrlUrls" :src="imgUrl" />
      </fieldset>
      <fieldset>
        <legend>OCR</legend>
        <input type="file" @change="onOcrChange" />
        <img v-for="imgUrl in state.ocrUrls" :src="imgUrl" />
        <div>{{ state.ocrOutput }}</div>
      </fieldset>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
// import * as gladiaSdk from '@gladiaio/sdk';
// console.log('YAOURT', { gladiaSdk  });
import * as gladia from '@gladiaio/sdk';
import { string } from 'yargs';
console.log('SDK', gladia);

const gladiaClient = gladia.gladia({
  // baseUrl: "http://localhost:3000",
  // apiKey: "42208fdb-df73-4f9f-9a65-844945ceb61b",
  apiKey: '3d3aebbd-c88b-4cf9-8905-18f07adf7626',
  // useFetch: true,
});

const state = reactive({
  pluralInput: '',
  pluralOutput: '',
  autocorrectInput: '',
  autocorrectOutput: '',
  sentimentAnalysisInput: '',
  sentimentAnalysisOutput: '',
  backgroundRemovalUrlInput: '',
  hateSpeechDetectionInput: '',
  hateSpeechDetectionOutput: '',
  articleGenerationInput: '',
  articleGenerationOutput: '',
  imageUrls: [] as string[],
  imageUrlUrls: [] as string[],
  ocrUrls: [] as string[],
  ocrOutput: '',
});

async function onPluralBlur() {
  state.pluralOutput = '...';
  const result = await gladiaClient
    .fromText()
    .toText()
    .plural({ word: state.pluralInput, count: 2 });
  state.pluralOutput = result.prediction as string;
}

async function onAutocorrectBlur() {
  state.autocorrectOutput = '...';
  const result = await gladiaClient
    .fromText()
    .toText()
    .autocorrect({ sentence: state.autocorrectInput });
  state.autocorrectOutput = result.prediction as string;
}

async function onSentimentAnalysisBlur() {
  state.sentimentAnalysisOutput = '...';
  const result = await gladiaClient.fromText().toText().sentimentAnalysis({
    text: state.sentimentAnalysisInput,
    model: 'distilbert-base-uncased',
  });
  state.sentimentAnalysisOutput = result.label as string;
}

async function onHateSpeechDetectionBlur() {
  state.hateSpeechDetectionOutput = '...';
  const result = await gladiaClient
    .fromText()
    .toText()
    .hateSpeechDetection({ text: state.hateSpeechDetectionInput });
  state.hateSpeechDetectionOutput = result.prediction as string;
}

async function onArticleGenerationBlur() {
  state.articleGenerationOutput = '...';
  const result = await gladiaClient
    .fromText()
    .toText()
    .articleGeneration({ title: state.articleGenerationInput });
  state.articleGenerationOutput = result.generated_article as string;
}
async function onImageChange(event: any) {
  const imageInput = event.target.files[0];
  state.imageUrls.push(URL.createObjectURL(imageInput));
  const imageOutput = await gladiaClient.backgroundRemoval({
    image: imageInput,
  });
  const imageUrl = URL.createObjectURL(new Blob([imageOutput]));
  state.imageUrls.push(imageUrl);
}

async function onImageUrlChangeBlur(event: any) {
  const imageOutput = await gladiaClient.backgroundRemoval({
    image_url: state.backgroundRemovalUrlInput,
  });
  const imageUrl = URL.createObjectURL(new Blob([imageOutput]));
  state.imageUrlUrls.push(imageUrl);
}
async function onOcrChange(event: any) {
  const ocrInput = event.target.files[0];
  state.ocrUrls.push(URL.createObjectURL(ocrInput));
  const ocrOutput = await gladiaClient.ocr({
    image: ocrInput,
  });
  state.ocrOutput = (ocrOutput as unknown as string[]).join('\n');
}
</script>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
}
.col {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}
.col.image img {
  max-width: 400px;
}
</style>
