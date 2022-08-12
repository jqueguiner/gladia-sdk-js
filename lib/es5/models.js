"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL = exports.TEXT_TEXT_WORD_ALIGNMENT_MODELS = exports.TEXT_TEXT_SIMILARITY_DEFAULT_MODEL = exports.TEXT_TEXT_SIMILARITY_MODELS = exports.TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL = exports.TEXT_TEXT_SENTIMENT_ANALYSIS_MODELS = exports.TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL = exports.TEXT_TEXT_SENTENCE_PARAPHRASER_MODELS = exports.TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL = exports.TEXT_TEXT_QUESTION_ANSWERING_MODELS = exports.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL = exports.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_MODELS = exports.TEXT_TEXT_PLURAL_DEFAULT_MODEL = exports.TEXT_TEXT_PLURAL_MODELS = exports.TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL = exports.TEXT_TEXT_NEXT_WORD_PREDICTION_MODELS = exports.TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL = exports.TEXT_TEXT_NEXT_SENTENCE_PREDICTION_MODELS = exports.TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL = exports.TEXT_TEXT_NAMED_ENTITY_RECOGNITION_MODELS = exports.TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL = exports.TEXT_TEXT_LANGUAGE_GENERATION_MODELS = exports.TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL = exports.TEXT_TEXT_LANGUAGE_DETECTION_MODELS = exports.TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL = exports.TEXT_TEXT_KEYWORD_EXTRACTION_MODELS = exports.TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL = exports.TEXT_TEXT_HATE_SPEECH_DETECTION_MODELS = exports.TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL = exports.TEXT_TEXT_EMOTION_RECOGNITION_MODELS = exports.TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL = exports.TEXT_TEXT_AUTOCORRECT_MODELS = exports.IMAGE_TEXT_OCR_DEFAULT_MODEL = exports.IMAGE_TEXT_OCR_MODELS = exports.IMAGE_TEXT_CLASSIFICATION_DEFAULT_MODEL = exports.IMAGE_TEXT_CLASSIFICATION_MODELS = exports.IMAGE_TEXT_ASCIIFY_DEFAULT_MODEL = exports.IMAGE_TEXT_ASCIIFY_MODELS = exports.IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL = exports.IMAGE_IMAGE_UNCOLORIZATION_MODELS = exports.IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL = exports.IMAGE_IMAGE_FACE_BLURING_MODELS = exports.IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL = exports.IMAGE_IMAGE_COLORIZATION_MODELS = exports.IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL = exports.IMAGE_IMAGE_BACKGROUND_REMOVAL_MODELS = exports.AUDIO_TEXT_AUDIO_TRANSCRIPTION_DEFAULT_MODEL = exports.AUDIO_TEXT_AUDIO_TRANSCRIPTION_MODELS = void 0;
exports.AUDIO_TEXT_AUDIO_TRANSCRIPTION_MODELS = [
    'coqui_english_huge_vocab',
];
exports.AUDIO_TEXT_AUDIO_TRANSCRIPTION_DEFAULT_MODEL = "coqui_english_huge_vocab";
exports.IMAGE_IMAGE_BACKGROUND_REMOVAL_MODELS = [
    'mobilenet',
    'xception',
];
exports.IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL = "xception";
exports.IMAGE_IMAGE_COLORIZATION_MODELS = [
    'deoldify-artistic',
    'deoldify-stable',
];
exports.IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL = "deoldify-stable";
exports.IMAGE_IMAGE_FACE_BLURING_MODELS = [
    'ageitgey',
];
exports.IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL = "ageitgey";
exports.IMAGE_IMAGE_UNCOLORIZATION_MODELS = [
    'v1',
];
exports.IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL = "v1";
exports.IMAGE_TEXT_ASCIIFY_MODELS = [
    'ramesh-aditya',
];
exports.IMAGE_TEXT_ASCIIFY_DEFAULT_MODEL = "ramesh-aditya";
exports.IMAGE_TEXT_CLASSIFICATION_MODELS = [
    'alexnet',
    'convnext_base',
    'convnext_large',
    'convnext_small',
    'convnext_tiny',
    'densenet121',
    'densenet161',
    'densenet169',
    'densenet201',
    'efficientnet_b0',
    'efficientnet_b1_v1',
    'efficientnet_b1_v2',
    'efficientnet_b2',
    'efficientnet_b3',
    'efficientnet_b4',
    'efficientnet_b5',
    'efficientnet_b6',
    'efficientnet_b7',
    'efficientnet_v2_l',
    'efficientnet_v2_m',
    'efficientnet_v2_s',
    'googlenet',
    'googlenet_quantized_fbgemm_v1',
    'inception_v3',
    'inception_v3_fbgemm_v1',
    'mnasnet0_5',
    'mnasnet0_75',
    'mnasnet1_0',
    'mnasnet1_3',
    'mobilenet_v2_quantized_qnnpack_v1',
    'mobilenet_v2_v1',
    'mobilenet_v2_v2',
    'mobilenet_v3_large_quantized_qnnpack_v1',
    'mobilenet_v3_large_v1',
    'mobilenet_v3_large_v2',
    'mobilenet_v3_small',
    'regnet_x_16gf_v1',
    'regnet_x_16gf_v2',
    'regnet_x_1_6gf_v1',
    'regnet_x_1_6gf_v2',
    'regnet_x_32gf_v1',
    'regnet_x_32gf_v2',
    'regnet_x_3_2gf_v1',
    'regnet_x_3_2gf_v2',
    'regnet_x_400mf_v1',
    'regnet_x_400mf_v2',
    'regnet_x_800mf_v1',
    'regnet_x_800mf_v2',
    'regnet_x_8gf_v1',
    'regnet_x_8gf_v2',
    'regnet_y_128gf_swag_e2e_v1',
    'regnet_y_128gf_swag_linear_v1',
    'regnet_y_16gf_swag_e2e_v1',
    'regnet_y_16gf_swag_linear_v1',
    'regnet_y_16gf_v1',
    'regnet_y_16gf_v2',
    'regnet_y_1_6gf_v1',
    'regnet_y_1_6gf_v2',
    'regnet_y_32gf_swag_e2e_v1',
    'regnet_y_32gf_swag_linear_v1',
    'regnet_y_32gf_v1',
    'regnet_y_32gf_v2',
    'regnet_y_3_2gf_v1',
    'regnet_y_3_2gf_v2',
    'regnet_y_400mf_v1',
    'regnet_y_400mf_v2',
    'regnet_y_8gf_v1',
    'regnet_y_8gf_v2',
    'resnet152_v1',
    'resnet152_v2',
    'resnet18',
    'resnet18_quantized_fbgemm_v1',
    'resnet34',
    'resnet50_quantized_fbgemm_v1',
    'resnet50_quantized_fbgemm_v2',
    'resnet50_v1',
    'resnet50_v2',
    'resnext101_32x8d_quantized_fbgemm_v1',
    'resnext101_32x8d_quantized_fbgemm_v2',
    'resnext101_32x8d_v1',
    'resnext101_32x8d_v2',
    'resnext101_64x4d_quantized_fbgemm_v1',
    'resnext101_64x4d_v1',
    'resnext50_32x4d_v1',
    'resnext50_32x4d_v2',
    'shufflenet_v2_x0_5',
    'shufflenet_v2_x0_5_quantized_fbgemm_v1',
    'shufflenet_v2_x1_0',
    'shufflenet_v2_x1_0_quantized_fbgemm_v1',
    'shufflenet_v2_x1_5',
    'shufflenet_v2_x1_5_quantized_fbgemm_v1',
    'shufflenet_v2_x2_0',
    'shufflenet_v2_x2_0_quantized_fbgemm_v1',
    'squeezenet1_0',
    'squeezenet1_1',
    'swin_b',
    'swin_s',
    'swin_t',
    'vgg11',
    'vgg11_bn',
    'vgg13',
    'vgg13_bn',
    'vgg16_bn',
    'vgg16_v1',
    'vgg19',
    'vgg19_bn',
    'vit_b_16_swag_e2e_v1',
    'vit_b_16_swag_linear_v1',
    'vit_b_16_v1',
    'vit_b_32',
    'vit_h_14_swag_e2e_v1',
    'vit_h_14_swag_linear_v1',
    'vit_l_16_swag_e2e_v1',
    'vit_l_16_swag_linear_v1',
    'vit_l_16_v1',
    'vit_l_32',
    'wide_resnet101_2_v1',
    'wide_resnet101_2_v2',
];
exports.IMAGE_TEXT_CLASSIFICATION_DEFAULT_MODEL = "alexnet";
exports.IMAGE_TEXT_OCR_MODELS = [
    'easy-ocr',
    'tesseract-default',
    'tesseract-denoising',
];
exports.IMAGE_TEXT_OCR_DEFAULT_MODEL = "easy-ocr";
exports.TEXT_TEXT_AUTOCORRECT_MODELS = [
    'flexudy-t5-base-multi-sentence-doctor',
];
exports.TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL = "flexudy-t5-base-multi-sentence-doctor";
exports.TEXT_TEXT_EMOTION_RECOGNITION_MODELS = [
    'mrm8488-t5-base-finetuned-emotion',
];
exports.TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL = "mrm8488-t5-base-finetuned-emotion";
exports.TEXT_TEXT_HATE_SPEECH_DETECTION_MODELS = [
    'Hate-speech-CNERG-dehatebert-mono-english',
];
exports.TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL = "Hate-speech-CNERG-dehatebert-mono-english";
exports.TEXT_TEXT_KEYWORD_EXTRACTION_MODELS = [
    'keybert-paraphrase-MiniLM-L6-v2',
    'keybert-paraphrase-multilingual-MiniLM-L12-v2',
];
exports.TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL = "keybert-paraphrase-MiniLM-L6-v2";
exports.TEXT_TEXT_LANGUAGE_DETECTION_MODELS = [
    'toftrup-etal-2021',
    'xlm-roberta-base-language-detection',
];
exports.TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL = "xlm-roberta-base-language-detection";
exports.TEXT_TEXT_LANGUAGE_GENERATION_MODELS = [
    'EleutherAI-gpt-neo-2_7B',
];
exports.TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL = "EleutherAI-gpt-neo-2_7B";
exports.TEXT_TEXT_NAMED_ENTITY_RECOGNITION_MODELS = [
    'dbmdz-bert-large-cased-finetuned-conll03-english',
];
exports.TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL = "dbmdz-bert-large-cased-finetuned-conll03-english";
exports.TEXT_TEXT_NEXT_SENTENCE_PREDICTION_MODELS = [
    'bert-base-uncased',
];
exports.TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL = "bert-base-uncased";
exports.TEXT_TEXT_NEXT_WORD_PREDICTION_MODELS = [
    'albert-base-v2',
    'bert-base-uncased',
    'distilbert-base-uncased',
    'roberta-base',
];
exports.TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL = "distilbert-base-uncased";
exports.TEXT_TEXT_PLURAL_MODELS = [
    'inflect',
];
exports.TEXT_TEXT_PLURAL_DEFAULT_MODEL = "inflect";
exports.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_MODELS = [
    'sentdex-GPyT',
];
exports.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL = "sentdex-GPyT";
exports.TEXT_TEXT_QUESTION_ANSWERING_MODELS = [
    'deepset-roberta-base-squad2',
    'deepset_bert-base-cased-squad2',
    'distilbert-base-cased-distilled-squad',
    'mfeb-albert-xxlarge-v2-squad2',
    'mrm8488-bert-tiny-5-finetuned-squadv2',
];
exports.TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL = "deepset_bert-base-cased-squad2";
exports.TEXT_TEXT_SENTENCE_PARAPHRASER_MODELS = [
    'ramsrigouthamg-t5-large-paraphraser-diverse-high-quality',
];
exports.TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL = "ramsrigouthamg-t5-large-paraphraser-diverse-high-quality";
exports.TEXT_TEXT_SENTIMENT_ANALYSIS_MODELS = [
    'distilbert-base-uncased',
    'distilbert-base-uncased-finetuned-sst-2-english',
    'nlptown-bert-base-multilingual-uncased-sentiment',
    'zero-shot-classification-facebook-bart-large-mnli',
];
exports.TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL = "nlptown-bert-base-multilingual-uncased-sentiment";
exports.TEXT_TEXT_SIMILARITY_MODELS = [
    'all-MiniLM-L6-v2',
];
exports.TEXT_TEXT_SIMILARITY_DEFAULT_MODEL = "all-MiniLM-L6-v2";
exports.TEXT_TEXT_WORD_ALIGNMENT_MODELS = [
    'bert-base-multilingual-cased',
];
exports.TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL = "bert-base-multilingual-cased";