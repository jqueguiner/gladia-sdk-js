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
    Shortcuts.prototype.backgroundRemoval = function (args) {
        return this.fromImage().toImage().backgroundRemoval(args);
    };
    Shortcuts.prototype.backgroundReplacement = function (args) {
        return this.fromImage().toImage().backgroundReplacement(args);
    };
    Shortcuts.prototype.colorization = function (args) {
        return this.fromImage().toImage().colorization(args);
    };
    Shortcuts.prototype.deblurring = function (args) {
        return this.fromImage().toImage().deblurring(args);
    };
    Shortcuts.prototype.uncolorization = function (args) {
        return this.fromImage().toImage().uncolorization(args);
    };
    // IMAGE => TEXT
    Shortcuts.prototype.classification = function (args) {
        return this.fromImage().toText().classification(args);
    };
    Shortcuts.prototype.ocr = function (args) {
        return this.fromImage().toText().ocr(args);
    };
    Shortcuts.prototype.imageGeneration = function (args) {
        return this.fromText().toImage().imageGeneration(args);
    };
    // TEXT => TEXT
    Shortcuts.prototype.ageFromName = function (args) {
        return this.fromText().toText().ageFromName(args);
    };
    Shortcuts.prototype.anonymization = function (args) {
        return this.fromText().toText().anonymization(args);
    };
    Shortcuts.prototype.bulletPointGeneration = function (args) {
        return this.fromText().toText().bulletPointGeneration(args);
    };
    Shortcuts.prototype.commandGeneration = function (args) {
        return this.fromText().toText().commandGeneration(args);
    };
    Shortcuts.prototype.companyCategorization = function (args) {
        return this.fromText().toText().companyCategorization(args);
    };
    Shortcuts.prototype.companyNameNormalization = function (args) {
        return this.fromText().toText().companyNameNormalization(args);
    };
    Shortcuts.prototype.companyStockCode = function (args) {
        return this.fromText().toText().companyStockCode(args);
    };
    Shortcuts.prototype.countryFromName = function (args) {
        return this.fromText().toText().countryFromName(args);
    };
    Shortcuts.prototype.dateCleaning = function (args) {
        return this.fromText().toText().dateCleaning(args);
    };
    Shortcuts.prototype.emotionRecognition = function (args) {
        return this.fromText().toText().emotionRecognition(args);
    };
    Shortcuts.prototype.genderFromName = function (args) {
        return this.fromText().toText().genderFromName(args);
    };
    Shortcuts.prototype.gpsAddressFormatting = function (args) {
        return this.fromText().toText().gpsAddressFormatting(args);
    };
    Shortcuts.prototype.gpt3 = function (args) {
        return this.fromText().toText().gpt3(args);
    };
    Shortcuts.prototype.guessCity = function (args) {
        return this.fromText().toText().guessCity(args);
    };
    Shortcuts.prototype.guessCountry = function (args) {
        return this.fromText().toText().guessCountry(args);
    };
    Shortcuts.prototype.guessIntent = function (args) {
        return this.fromText().toText().guessIntent(args);
    };
    Shortcuts.prototype.hateSpeechDetection = function (args) {
        return this.fromText().toText().hateSpeechDetection(args);
    };
    Shortcuts.prototype.headlineGeneration = function (args) {
        return this.fromText().toText().headlineGeneration(args);
    };
    Shortcuts.prototype.keywordExtraction = function (args) {
        return this.fromText().toText().keywordExtraction(args);
    };
    Shortcuts.prototype.languageCodes = function (args) {
        return this.fromText().toText().languageCodes(args);
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
    Shortcuts.prototype.nextWordPrediction = function (args) {
        return this.fromText().toText().nextWordPrediction(args);
    };
    Shortcuts.prototype.productOwnership = function (args) {
        return this.fromText().toText().productOwnership(args);
    };
    Shortcuts.prototype.productSentiment = function (args) {
        return this.fromText().toText().productSentiment(args);
    };
    Shortcuts.prototype.questionAnswering = function (args) {
        return this.fromText().toText().questionAnswering(args);
    };
    Shortcuts.prototype.sentimentAnalysis = function (args) {
        return this.fromText().toText().sentimentAnalysis(args);
    };
    Shortcuts.prototype.similarity = function (args) {
        return this.fromText().toText().similarity(args);
    };
    Shortcuts.prototype.speakerRecognition = function (args) {
        return this.fromText().toText().speakerRecognition(args);
    };
    Shortcuts.prototype.translation = function (args) {
        return this.fromText().toText().translation(args);
    };
    Shortcuts.prototype.vatCountryGuessing = function (args) {
        return this.fromText().toText().vatCountryGuessing(args);
    };
    Shortcuts.prototype.websiteClassification = function (args) {
        return this.fromText().toText().websiteClassification(args);
    };
    return Shortcuts;
}());
exports.Shortcuts = Shortcuts;
