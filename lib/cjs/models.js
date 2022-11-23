"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEXT_TEXT_COMPANY_CATEGORIZATION_CONTENT_TYPE = exports.TEXT_TEXT_COMPANY_CATEGORIZATION_MODELS = exports.TEXT_TEXT_COMMAND_GENERATION_CONTENT_TYPE = exports.TEXT_TEXT_COMMAND_GENERATION_MODELS = exports.TEXT_TEXT_BULLET_POINT_GENERATION_CONTENT_TYPE = exports.TEXT_TEXT_BULLET_POINT_GENERATION_MODELS = exports.TEXT_TEXT_AUTOCORRECT_CONTENT_TYPE = exports.TEXT_TEXT_AUTOCORRECT_MODELS = exports.TEXT_TEXT_ARTICLE_GENERATION_CONTENT_TYPE = exports.TEXT_TEXT_ARTICLE_GENERATION_MODELS = exports.TEXT_TEXT_ANONYMIZATION_CONTENT_TYPE = exports.TEXT_TEXT_ANONYMIZATION_MODELS = exports.TEXT_TEXT_AGE_FROM_NAME_CONTENT_TYPE = exports.TEXT_TEXT_AGE_FROM_NAME_MODELS = exports.TEXT_TEXT_ADDRESS_FORMATTING_CONTENT_TYPE = exports.TEXT_TEXT_ADDRESS_FORMATTING_MODELS = exports.TEXT_TEXT_AD_GENERATION_CONTENT_TYPE = exports.TEXT_TEXT_AD_GENERATION_MODELS = exports.TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE = exports.TEXT_IMAGE_IMAGE_GENERATION_MODELS = exports.IMAGE_TEXT_OCR_CONTENT_TYPE = exports.IMAGE_TEXT_OCR_MODELS = exports.IMAGE_TEXT_CLASSIFICATION_CONTENT_TYPE = exports.IMAGE_TEXT_CLASSIFICATION_MODELS = exports.IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE = exports.IMAGE_IMAGE_UNCOLORIZATION_MODELS = exports.IMAGE_IMAGE_SUPER_RESOLUTION_CONTENT_TYPE = exports.IMAGE_IMAGE_SUPER_RESOLUTION_MODELS = exports.IMAGE_IMAGE_INPAINTING_CONTENT_TYPE = exports.IMAGE_IMAGE_INPAINTING_MODELS = exports.IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE = exports.IMAGE_IMAGE_GUIDED_INPAINTING_MODELS = exports.IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE = exports.IMAGE_IMAGE_FACE_BLURING_MODELS = exports.IMAGE_IMAGE_ENHANCEMENT_CONTENT_TYPE = exports.IMAGE_IMAGE_ENHANCEMENT_MODELS = exports.IMAGE_IMAGE_DEBLURRING_CONTENT_TYPE = exports.IMAGE_IMAGE_DEBLURRING_MODELS = exports.IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE = exports.IMAGE_IMAGE_COLORIZATION_MODELS = exports.IMAGE_IMAGE_BACKGROUND_REPLACEMENT_CONTENT_TYPE = exports.IMAGE_IMAGE_BACKGROUND_REPLACEMENT_MODELS = exports.IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE = exports.IMAGE_IMAGE_BACKGROUND_REMOVAL_MODELS = exports.AUDIO_TEXT_SPEAKER_GENDER_CLASSIFICATION_CONTENT_TYPE = exports.AUDIO_TEXT_SPEAKER_GENDER_CLASSIFICATION_MODELS = exports.AUDIO_TEXT_SPEAKER_DIARIZATION_CONTENT_TYPE = exports.AUDIO_TEXT_SPEAKER_DIARIZATION_MODELS = exports.AUDIO_TEXT_AUDIO_TRANSCRIPTION_CONTENT_TYPE = exports.AUDIO_TEXT_AUDIO_TRANSCRIPTION_MODELS = void 0;
exports.TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE = exports.TEXT_TEXT_SENTIMENT_ANALYSIS_MODELS = exports.TEXT_TEXT_SENTENCE_PARAPHRASER_CONTENT_TYPE = exports.TEXT_TEXT_SENTENCE_PARAPHRASER_MODELS = exports.TEXT_TEXT_QUESTION_ANSWERING_CONTENT_TYPE = exports.TEXT_TEXT_QUESTION_ANSWERING_MODELS = exports.TEXT_TEXT_PUNCTUATION_RESTORATION_CONTENT_TYPE = exports.TEXT_TEXT_PUNCTUATION_RESTORATION_MODELS = exports.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE = exports.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_MODELS = exports.TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE = exports.TEXT_TEXT_NEXT_WORD_PREDICTION_MODELS = exports.TEXT_TEXT_NEXT_SENTENCE_PREDICTION_CONTENT_TYPE = exports.TEXT_TEXT_NEXT_SENTENCE_PREDICTION_MODELS = exports.TEXT_TEXT_NAMED_ENTITY_RECOGNITION_CONTENT_TYPE = exports.TEXT_TEXT_NAMED_ENTITY_RECOGNITION_MODELS = exports.TEXT_TEXT_LANGUAGE_GENERATION_CONTENT_TYPE = exports.TEXT_TEXT_LANGUAGE_GENERATION_MODELS = exports.TEXT_TEXT_LANGUAGE_DETECTION_CONTENT_TYPE = exports.TEXT_TEXT_LANGUAGE_DETECTION_MODELS = exports.TEXT_TEXT_KEYWORD_EXTRACTION_CONTENT_TYPE = exports.TEXT_TEXT_KEYWORD_EXTRACTION_MODELS = exports.TEXT_TEXT_INTENT_CLASSIFICATION_CONTENT_TYPE = exports.TEXT_TEXT_INTENT_CLASSIFICATION_MODELS = exports.TEXT_TEXT_HEADLINE_GENERATION_CONTENT_TYPE = exports.TEXT_TEXT_HEADLINE_GENERATION_MODELS = exports.TEXT_TEXT_HATE_SPEECH_DETECTION_CONTENT_TYPE = exports.TEXT_TEXT_HATE_SPEECH_DETECTION_MODELS = exports.TEXT_TEXT_GUESS_COUNTRY_CONTENT_TYPE = exports.TEXT_TEXT_GUESS_COUNTRY_MODELS = exports.TEXT_TEXT_GUESS_CITY_CONTENT_TYPE = exports.TEXT_TEXT_GUESS_CITY_MODELS = exports.TEXT_TEXT_GPT3_CONTENT_TYPE = exports.TEXT_TEXT_GPT3_MODELS = exports.TEXT_TEXT_GPS_ADDRESS_FORMATTING_CONTENT_TYPE = exports.TEXT_TEXT_GPS_ADDRESS_FORMATTING_MODELS = exports.TEXT_TEXT_GENDER_FROM_NAME_CONTENT_TYPE = exports.TEXT_TEXT_GENDER_FROM_NAME_MODELS = exports.TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE = exports.TEXT_TEXT_EMOTION_RECOGNITION_MODELS = exports.TEXT_TEXT_DATE_CLEANING_CONTENT_TYPE = exports.TEXT_TEXT_DATE_CLEANING_MODELS = exports.TEXT_TEXT_COUNTRY_FROM_NAME_CONTENT_TYPE = exports.TEXT_TEXT_COUNTRY_FROM_NAME_MODELS = exports.TEXT_TEXT_CONVERSATION_SUMMARIZATION_CONTENT_TYPE = exports.TEXT_TEXT_CONVERSATION_SUMMARIZATION_MODELS = exports.TEXT_TEXT_COMPANY_STOCK_CODE_CONTENT_TYPE = exports.TEXT_TEXT_COMPANY_STOCK_CODE_MODELS = exports.TEXT_TEXT_COMPANY_NAME_NORMALIZATION_CONTENT_TYPE = exports.TEXT_TEXT_COMPANY_NAME_NORMALIZATION_MODELS = void 0;
exports.TEXT_TEXT_WORD_ALIGNMENT_CONTENT_TYPE = exports.TEXT_TEXT_WORD_ALIGNMENT_MODELS = exports.TEXT_TEXT_WEBSITE_CLASSIFICATION_CONTENT_TYPE = exports.TEXT_TEXT_WEBSITE_CLASSIFICATION_MODELS = exports.TEXT_TEXT_VAT_COUNTRY_GUESSING_CONTENT_TYPE = exports.TEXT_TEXT_VAT_COUNTRY_GUESSING_MODELS = exports.TEXT_TEXT_TRANSLATION_CONTENT_TYPE = exports.TEXT_TEXT_TRANSLATION_MODELS = exports.TEXT_TEXT_SUMMARIZATION_CONTENT_TYPE = exports.TEXT_TEXT_SUMMARIZATION_MODELS = exports.TEXT_TEXT_SIMILARITY_CONTENT_TYPE = exports.TEXT_TEXT_SIMILARITY_MODELS = void 0;
exports.AUDIO_TEXT_AUDIO_TRANSCRIPTION_MODELS = [
    'coqui_english_huge_vocab',
    'openai-whisper-base',
    'openai-whisper-large',
    'openai-whisper-medium',
    'openai-whisper-small',
    'openai-whisper-tiny',
];
exports.AUDIO_TEXT_AUDIO_TRANSCRIPTION_CONTENT_TYPE = "multipart/form-data";
exports.AUDIO_TEXT_SPEAKER_DIARIZATION_MODELS = [
    'pyannote-speaker_diarization',
];
exports.AUDIO_TEXT_SPEAKER_DIARIZATION_CONTENT_TYPE = "multipart/form-data";
exports.AUDIO_TEXT_SPEAKER_GENDER_CLASSIFICATION_MODELS = [
    'inafoss-inaSpeechSegmenter',
];
exports.AUDIO_TEXT_SPEAKER_GENDER_CLASSIFICATION_CONTENT_TYPE = "multipart/form-data";
exports.IMAGE_IMAGE_BACKGROUND_REMOVAL_MODELS = [
    'mobilenet',
    'xception',
];
exports.IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE = "multipart/form-data";
exports.IMAGE_IMAGE_BACKGROUND_REPLACEMENT_MODELS = [
    'mobilenet',
];
exports.IMAGE_IMAGE_BACKGROUND_REPLACEMENT_CONTENT_TYPE = "multipart/form-data";
exports.IMAGE_IMAGE_COLORIZATION_MODELS = [
    'deoldify-artistic',
    'deoldify-stable',
    'mlhubber_colorize',
];
exports.IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE = "multipart/form-data";
exports.IMAGE_IMAGE_DEBLURRING_MODELS = [
    'CMFNet',
];
exports.IMAGE_IMAGE_DEBLURRING_CONTENT_TYPE = "multipart/form-data";
exports.IMAGE_IMAGE_ENHANCEMENT_MODELS = [
    'FiveK',
    'LOL',
];
exports.IMAGE_IMAGE_ENHANCEMENT_CONTENT_TYPE = "multipart/form-data";
exports.IMAGE_IMAGE_FACE_BLURING_MODELS = [
    'ageitgey',
];
exports.IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE = "multipart/form-data";
exports.IMAGE_IMAGE_GUIDED_INPAINTING_MODELS = [
    'stable-diffusion',
];
exports.IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE = "multipart/form-data";
exports.IMAGE_IMAGE_INPAINTING_MODELS = [
    'fcf',
    'lama',
    'latent-diffusion',
    'mat',
    'zits',
];
exports.IMAGE_IMAGE_INPAINTING_CONTENT_TYPE = "multipart/form-data";
exports.IMAGE_IMAGE_SUPER_RESOLUTION_MODELS = [];
exports.IMAGE_IMAGE_SUPER_RESOLUTION_CONTENT_TYPE = "multipart/form-data";
exports.IMAGE_IMAGE_UNCOLORIZATION_MODELS = [
    'v1',
];
exports.IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE = "multipart/form-data";
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
exports.IMAGE_TEXT_CLASSIFICATION_CONTENT_TYPE = "multipart/form-data";
exports.IMAGE_TEXT_OCR_MODELS = [
    'easy-ocr',
    'tesseract-default',
    'tesseract-denoising',
    'textract-extractor',
];
exports.IMAGE_TEXT_OCR_CONTENT_TYPE = "multipart/form-data";
exports.TEXT_IMAGE_IMAGE_GENERATION_MODELS = [
    'dream-studio',
    'stable-diffusion',
];
exports.TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_AD_GENERATION_MODELS = [
    'gpt-j',
];
exports.TEXT_TEXT_AD_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_ADDRESS_FORMATTING_MODELS = [
    'geopy-formatter',
];
exports.TEXT_TEXT_ADDRESS_FORMATTING_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_AGE_FROM_NAME_MODELS = [
    'jpt',
];
exports.TEXT_TEXT_AGE_FROM_NAME_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_ANONYMIZATION_MODELS = [
    'ms-presidio',
];
exports.TEXT_TEXT_ANONYMIZATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_ARTICLE_GENERATION_MODELS = [
    'fast-gpt-j',
];
exports.TEXT_TEXT_ARTICLE_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_AUTOCORRECT_MODELS = [
    'flexudy-t5-base-multi-sentence-doctor',
];
exports.TEXT_TEXT_AUTOCORRECT_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_BULLET_POINT_GENERATION_MODELS = [
    'jpt',
];
exports.TEXT_TEXT_BULLET_POINT_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_COMMAND_GENERATION_MODELS = [
    'jpt',
];
exports.TEXT_TEXT_COMMAND_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_COMPANY_CATEGORIZATION_MODELS = [
    'jpt',
];
exports.TEXT_TEXT_COMPANY_CATEGORIZATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_COMPANY_NAME_NORMALIZATION_MODELS = [
    'jpt',
];
exports.TEXT_TEXT_COMPANY_NAME_NORMALIZATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_COMPANY_STOCK_CODE_MODELS = [
    'jpt',
];
exports.TEXT_TEXT_COMPANY_STOCK_CODE_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_CONVERSATION_SUMMARIZATION_MODELS = [
    'bart-large-xsum-samsum',
];
exports.TEXT_TEXT_CONVERSATION_SUMMARIZATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_COUNTRY_FROM_NAME_MODELS = [
    'jpt',
];
exports.TEXT_TEXT_COUNTRY_FROM_NAME_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_DATE_CLEANING_MODELS = [
    'dataprep-formatter',
];
exports.TEXT_TEXT_DATE_CLEANING_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_EMOTION_RECOGNITION_MODELS = [
    'distilbert-base-uncased-emotion',
    'mrm8488-t5-base-finetuned-emotion',
];
exports.TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_GENDER_FROM_NAME_MODELS = [
    'jpt',
];
exports.TEXT_TEXT_GENDER_FROM_NAME_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_GPS_ADDRESS_FORMATTING_MODELS = [
    'geopy-formatter',
];
exports.TEXT_TEXT_GPS_ADDRESS_FORMATTING_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_GPT3_MODELS = [
    'jpt',
];
exports.TEXT_TEXT_GPT3_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_GUESS_CITY_MODELS = [
    'jpt',
];
exports.TEXT_TEXT_GUESS_CITY_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_GUESS_COUNTRY_MODELS = [
    'jpt',
];
exports.TEXT_TEXT_GUESS_COUNTRY_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_HATE_SPEECH_DETECTION_MODELS = [
    'byt5-base-tweet-hate-detection',
    'distilbert-base-uncased-emotion',
];
exports.TEXT_TEXT_HATE_SPEECH_DETECTION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_HEADLINE_GENERATION_MODELS = [
    'jpt',
    'michau-t5-base-en-generate-headline',
];
exports.TEXT_TEXT_HEADLINE_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_INTENT_CLASSIFICATION_MODELS = [
    'fast-gpt-j',
];
exports.TEXT_TEXT_INTENT_CLASSIFICATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_KEYWORD_EXTRACTION_MODELS = [
    'keybert-paraphrase-multilingual-MiniLM-L12-v2',
];
exports.TEXT_TEXT_KEYWORD_EXTRACTION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_LANGUAGE_DETECTION_MODELS = [
    'jpt',
    'toftrup-etal-2021',
];
exports.TEXT_TEXT_LANGUAGE_DETECTION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_LANGUAGE_GENERATION_MODELS = [
    'EleutherAI-gpt-neo-2_7B',
    'bloom-560m',
];
exports.TEXT_TEXT_LANGUAGE_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_NAMED_ENTITY_RECOGNITION_MODELS = [
    'dbmdz-bert-large-cased-finetuned-conll03-english',
];
exports.TEXT_TEXT_NAMED_ENTITY_RECOGNITION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_NEXT_SENTENCE_PREDICTION_MODELS = [
    'bert-base-uncased',
];
exports.TEXT_TEXT_NEXT_SENTENCE_PREDICTION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_NEXT_WORD_PREDICTION_MODELS = [
    'albert-base-v2',
    'bert-base-uncased',
    'distilbert-base-uncased',
    'roberta-base',
];
exports.TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_MODELS = [
    'sentdex-GPyT',
];
exports.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_PUNCTUATION_RESTORATION_MODELS = [
    'kredor-punctuate-all',
];
exports.TEXT_TEXT_PUNCTUATION_RESTORATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_QUESTION_ANSWERING_MODELS = [
    'deepset-roberta-base-squad2',
    'deepset_bert-base-cased-squad2',
    'distilbert-base-cased-distilled-squad',
    'mfeb-albert-xxlarge-v2-squad2',
    'mrm8488-bert-tiny-5-finetuned-squadv2',
];
exports.TEXT_TEXT_QUESTION_ANSWERING_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_SENTENCE_PARAPHRASER_MODELS = [
    'ramsrigouthamg-t5-large-paraphraser-diverse-high-quality',
    'ramsrigouthamg-t5_sentence_paraphraser',
];
exports.TEXT_TEXT_SENTENCE_PARAPHRASER_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_SENTIMENT_ANALYSIS_MODELS = [
    'distilbert-base-uncased',
    'distilbert-base-uncased-finetuned-sst-2-english',
    'zero-shot-classification-facebook-bart-large-mnli',
];
exports.TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_SIMILARITY_MODELS = [
    'all-MiniLM-L6-v2',
];
exports.TEXT_TEXT_SIMILARITY_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_SUMMARIZATION_MODELS = [
    'all-MiniLM-L6-v2',
    'bart-large-cnn',
];
exports.TEXT_TEXT_SUMMARIZATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_TRANSLATION_MODELS = [
    'facebook-nllb-200-distilled-600M',
    'jpt',
];
exports.TEXT_TEXT_TRANSLATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_VAT_COUNTRY_GUESSING_MODELS = [
    'jpt',
];
exports.TEXT_TEXT_VAT_COUNTRY_GUESSING_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_WEBSITE_CLASSIFICATION_MODELS = [
    'jpt',
];
exports.TEXT_TEXT_WEBSITE_CLASSIFICATION_CONTENT_TYPE = "application/x-www-form-urlencoded";
exports.TEXT_TEXT_WORD_ALIGNMENT_MODELS = [
    'bert-base-multilingual-cased',
];
exports.TEXT_TEXT_WORD_ALIGNMENT_CONTENT_TYPE = "application/x-www-form-urlencoded";
