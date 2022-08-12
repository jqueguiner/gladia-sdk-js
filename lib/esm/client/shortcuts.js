/* Generated file with "scripts/generate-sdk.ts" */
export class Shortcuts {
    // AUDIO => TEXT
    audioTranscription(args) {
        return this.fromAudio().toText().audioTranscription(args);
    }
    // IMAGE => IMAGE
    backgroundRemoval(args) {
        return this.fromImage().toImage().backgroundRemoval(args);
    }
    colorization(args) {
        return this.fromImage().toImage().colorization(args);
    }
    faceBluring(args) {
        return this.fromImage().toImage().faceBluring(args);
    }
    uncolorization(args) {
        return this.fromImage().toImage().uncolorization(args);
    }
    // IMAGE => TEXT
    asciify(args) {
        return this.fromImage().toText().asciify(args);
    }
    classification(args) {
        return this.fromImage().toText().classification(args);
    }
    ocr(args) {
        return this.fromImage().toText().ocr(args);
    }
    // TEXT => TEXT
    autocorrect(args) {
        return this.fromText().toText().autocorrect(args);
    }
    emotionRecognition(args) {
        return this.fromText().toText().emotionRecognition(args);
    }
    hateSpeechDetection(args) {
        return this.fromText().toText().hateSpeechDetection(args);
    }
    keywordExtraction(args) {
        return this.fromText().toText().keywordExtraction(args);
    }
    languageDetection(args) {
        return this.fromText().toText().languageDetection(args);
    }
    languageGeneration(args) {
        return this.fromText().toText().languageGeneration(args);
    }
    namedEntityRecognition(args) {
        return this.fromText().toText().namedEntityRecognition(args);
    }
    nextSentencePrediction(args) {
        return this.fromText().toText().nextSentencePrediction(args);
    }
    nextWordPrediction(args) {
        return this.fromText().toText().nextWordPrediction(args);
    }
    plural(args) {
        return this.fromText().toText().plural(args);
    }
    programmingLanguageGeneration(args) {
        return this.fromText().toText().programmingLanguageGeneration(args);
    }
    questionAnswering(args) {
        return this.fromText().toText().questionAnswering(args);
    }
    sentenceParaphraser(args) {
        return this.fromText().toText().sentenceParaphraser(args);
    }
    sentimentAnalysis(args) {
        return this.fromText().toText().sentimentAnalysis(args);
    }
    similarity(args) {
        return this.fromText().toText().similarity(args);
    }
    wordAlignment(args) {
        return this.fromText().toText().wordAlignment(args);
    }
}
