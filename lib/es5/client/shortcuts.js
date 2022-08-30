"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shortcuts = void 0;
var Shortcuts = /** @class */ (function () {
    function Shortcuts() {
    }
    // AUDIO => TEXT
    Shortcuts.prototype.audioTranscription = function (args) {
        return this.fromAudio().toText().audioTranscription(args);
    };
    // IMAGE => IMAGE
    Shortcuts.prototype.backgroundRemoval = function (args) {
        return this.fromImage().toImage().backgroundRemoval(args);
    };
    Shortcuts.prototype.colorization = function (args) {
        return this.fromImage().toImage().colorization(args);
    };
    Shortcuts.prototype.faceBluring = function (args) {
        return this.fromImage().toImage().faceBluring(args);
    };
    Shortcuts.prototype.uncolorization = function (args) {
        return this.fromImage().toImage().uncolorization(args);
    };
    // IMAGE => TEXT
    Shortcuts.prototype.asciify = function (args) {
        return this.fromImage().toText().asciify(args);
    };
    Shortcuts.prototype.classification = function (args) {
        return this.fromImage().toText().classification(args);
    };
    Shortcuts.prototype.ocr = function (args) {
        return this.fromImage().toText().ocr(args);
    };
    // TEXT => IMAGE
    Shortcuts.prototype.imageGeneration = function (args) {
        return this.fromText().toImage().imageGeneration(args);
    };
    // TEXT => TEXT
    Shortcuts.prototype.adGeneration = function (args) {
        return this.fromText().toText().adGeneration(args);
    };
    Shortcuts.prototype.articleGeneration = function (args) {
        return this.fromText().toText().articleGeneration(args);
    };
    Shortcuts.prototype.autocorrect = function (args) {
        return this.fromText().toText().autocorrect(args);
    };
    Shortcuts.prototype.emotionRecognition = function (args) {
        return this.fromText().toText().emotionRecognition(args);
    };
    Shortcuts.prototype.hateSpeechDetection = function (args) {
        return this.fromText().toText().hateSpeechDetection(args);
    };
    Shortcuts.prototype.intentClassification = function (args) {
        return this.fromText().toText().intentClassification(args);
    };
    Shortcuts.prototype.keywordExtraction = function (args) {
        return this.fromText().toText().keywordExtraction(args);
    };
    Shortcuts.prototype.languageDetection = function (args) {
        return this.fromText().toText().languageDetection(args);
    };
    Shortcuts.prototype.languageGeneration = function (args) {
        return this.fromText().toText().languageGeneration(args);
    };
    Shortcuts.prototype.namedEntityRecognition = function (args) {
        return this.fromText().toText().namedEntityRecognition(args);
    };
    Shortcuts.prototype.nextSentencePrediction = function (args) {
        return this.fromText().toText().nextSentencePrediction(args);
    };
    Shortcuts.prototype.nextWordPrediction = function (args) {
        return this.fromText().toText().nextWordPrediction(args);
    };
    Shortcuts.prototype.plural = function (args) {
        return this.fromText().toText().plural(args);
    };
    Shortcuts.prototype.programmingLanguageGeneration = function (args) {
        return this.fromText().toText().programmingLanguageGeneration(args);
    };
    Shortcuts.prototype.questionAnswering = function (args) {
        return this.fromText().toText().questionAnswering(args);
    };
    Shortcuts.prototype.sentenceParaphraser = function (args) {
        return this.fromText().toText().sentenceParaphraser(args);
    };
    Shortcuts.prototype.sentimentAnalysis = function (args) {
        return this.fromText().toText().sentimentAnalysis(args);
    };
    Shortcuts.prototype.similarity = function (args) {
        return this.fromText().toText().similarity(args);
    };
    Shortcuts.prototype.summarization = function (args) {
        return this.fromText().toText().summarization(args);
    };
    Shortcuts.prototype.translation = function (args) {
        return this.fromText().toText().translation(args);
    };
    Shortcuts.prototype.wordAlignment = function (args) {
        return this.fromText().toText().wordAlignment(args);
    };
    return Shortcuts;
}());
exports.Shortcuts = Shortcuts;
