/* Generated file with "scripts/generate-sdk.ts" */

export const AUDIO_TEXT_AUDIO_TRANSCRIPTION_MODELS = [
   'coqui_english_huge_vocab',
   'openai-whisper--base',
   'openai-whisper--large',
   'openai-whisper--large-v1',
   'openai-whisper--large-v2',
   'openai-whisper--medium',
   'openai-whisper--small',
   'openai-whisper--tiny',
] as const;
export const AUDIO_TEXT_AUDIO_TRANSCRIPTION_CONTENT_TYPE = "multipart/form-data" as const;
export type AudioTextAudioTranscriptionModel = typeof AUDIO_TEXT_AUDIO_TRANSCRIPTION_MODELS[number];

export const AUDIO_TEXT_SPEAKER_DIARIZATION_MODELS = [
   'pyannote-speaker_diarization',
] as const;
export const AUDIO_TEXT_SPEAKER_DIARIZATION_CONTENT_TYPE = "multipart/form-data" as const;
export type AudioTextSpeakerDiarizationModel = typeof AUDIO_TEXT_SPEAKER_DIARIZATION_MODELS[number];

export const AUDIO_TEXT_SPEAKER_GENDER_CLASSIFICATION_MODELS = [
   'inafoss-inaSpeechSegmenter',
] as const;
export const AUDIO_TEXT_SPEAKER_GENDER_CLASSIFICATION_CONTENT_TYPE = "multipart/form-data" as const;
export type AudioTextSpeakerGenderClassificationModel = typeof AUDIO_TEXT_SPEAKER_GENDER_CLASSIFICATION_MODELS[number];

export const IMAGE_IMAGE_BACKGROUND_REMOVAL_MODELS = [
   'mobilenet',
   'xception',
] as const;
export const IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE = "multipart/form-data" as const;
export type ImageImageBackgroundRemovalModel = typeof IMAGE_IMAGE_BACKGROUND_REMOVAL_MODELS[number];

export const IMAGE_IMAGE_BACKGROUND_REPLACEMENT_MODELS = [
   'mobilenet',
] as const;
export const IMAGE_IMAGE_BACKGROUND_REPLACEMENT_CONTENT_TYPE = "multipart/form-data" as const;
export type ImageImageBackgroundReplacementModel = typeof IMAGE_IMAGE_BACKGROUND_REPLACEMENT_MODELS[number];

export const IMAGE_IMAGE_COLORIZATION_MODELS = [
   'deoldify-artistic',
   'deoldify-stable',
   'mlhubber_colorize',
] as const;
export const IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE = "multipart/form-data" as const;
export type ImageImageColorizationModel = typeof IMAGE_IMAGE_COLORIZATION_MODELS[number];

export const IMAGE_IMAGE_DEBLURRING_MODELS = [
   'CMFNet',
] as const;
export const IMAGE_IMAGE_DEBLURRING_CONTENT_TYPE = "multipart/form-data" as const;
export type ImageImageDeblurringModel = typeof IMAGE_IMAGE_DEBLURRING_MODELS[number];

export const IMAGE_IMAGE_ENHANCEMENT_MODELS = [
   'FiveK',
   'LOL',
] as const;
export const IMAGE_IMAGE_ENHANCEMENT_CONTENT_TYPE = "multipart/form-data" as const;
export type ImageImageEnhancementModel = typeof IMAGE_IMAGE_ENHANCEMENT_MODELS[number];

export const IMAGE_IMAGE_FACE_BLURING_MODELS = [
   'ageitgey',
] as const;
export const IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE = "multipart/form-data" as const;
export type ImageImageFaceBluringModel = typeof IMAGE_IMAGE_FACE_BLURING_MODELS[number];

export const IMAGE_IMAGE_GUIDED_INPAINTING_MODELS = [
   'compvis',
   'runwayml',
] as const;
export const IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE = "multipart/form-data" as const;
export type ImageImageGuidedInpaintingModel = typeof IMAGE_IMAGE_GUIDED_INPAINTING_MODELS[number];

export const IMAGE_IMAGE_IMAGE_GUIDED_INPAINTING_MODELS = [
   'fantasy-studio',
] as const;
export const IMAGE_IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE = "multipart/form-data" as const;
export type ImageImageImageGuidedInpaintingModel = typeof IMAGE_IMAGE_IMAGE_GUIDED_INPAINTING_MODELS[number];

export const IMAGE_IMAGE_INPAINTING_MODELS = [
   'fcf',
   'lama',
   'latent-diffusion',
   'mat',
   'zits',
] as const;
export const IMAGE_IMAGE_INPAINTING_CONTENT_TYPE = "multipart/form-data" as const;
export type ImageImageInpaintingModel = typeof IMAGE_IMAGE_INPAINTING_MODELS[number];

export const IMAGE_IMAGE_UNCOLORIZATION_MODELS = [
   'v1',
] as const;
export const IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE = "multipart/form-data" as const;
export type ImageImageUncolorizationModel = typeof IMAGE_IMAGE_UNCOLORIZATION_MODELS[number];

export const IMAGE_TEXT_CLASSIFICATION_MODELS = [
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
] as const;
export const IMAGE_TEXT_CLASSIFICATION_CONTENT_TYPE = "multipart/form-data" as const;
export type ImageTextClassificationModel = typeof IMAGE_TEXT_CLASSIFICATION_MODELS[number];

export const IMAGE_TEXT_OCR_MODELS = [
   'easy-ocr',
   'tesseract-default',
   'tesseract-denoising',
   'textract-extractor',
] as const;
export const IMAGE_TEXT_OCR_CONTENT_TYPE = "multipart/form-data" as const;
export type ImageTextOcrModel = typeof IMAGE_TEXT_OCR_MODELS[number];

export const TEXT_IMAGE_IMAGE_GENERATION_MODELS = [
   'dream-studio',
   'stable-diffusion--compvis-sd-14',
   'stable-diffusion--runwayml-sd-15',
   'stable-diffusion--stabilityai-sd-20',
   'stable-diffusion--stabilityai-sd-21',
] as const;
export const TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextImageImageGenerationModel = typeof TEXT_IMAGE_IMAGE_GENERATION_MODELS[number];

export const TEXT_TEXT_ADDRESS_FORMATTING_MODELS = [
   'geopy-formatter',
] as const;
export const TEXT_TEXT_ADDRESS_FORMATTING_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextAddressFormattingModel = typeof TEXT_TEXT_ADDRESS_FORMATTING_MODELS[number];

export const TEXT_TEXT_AGE_FROM_NAME_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_AGE_FROM_NAME_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextAgeFromNameModel = typeof TEXT_TEXT_AGE_FROM_NAME_MODELS[number];

export const TEXT_TEXT_ANONYMIZATION_MODELS = [
   'ms-presidio',
] as const;
export const TEXT_TEXT_ANONYMIZATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextAnonymizationModel = typeof TEXT_TEXT_ANONYMIZATION_MODELS[number];

export const TEXT_TEXT_AUTOCORRECT_MODELS = [
   'flexudy-t5-base-multi-sentence-doctor',
] as const;
export const TEXT_TEXT_AUTOCORRECT_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextAutocorrectModel = typeof TEXT_TEXT_AUTOCORRECT_MODELS[number];

export const TEXT_TEXT_BULLET_POINT_GENERATION_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_BULLET_POINT_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextBulletPointGenerationModel = typeof TEXT_TEXT_BULLET_POINT_GENERATION_MODELS[number];

export const TEXT_TEXT_COMMAND_GENERATION_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_COMMAND_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextCommandGenerationModel = typeof TEXT_TEXT_COMMAND_GENERATION_MODELS[number];

export const TEXT_TEXT_COMPANY_CATEGORIZATION_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_COMPANY_CATEGORIZATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextCompanyCategorizationModel = typeof TEXT_TEXT_COMPANY_CATEGORIZATION_MODELS[number];

export const TEXT_TEXT_COMPANY_NAME_NORMALIZATION_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_COMPANY_NAME_NORMALIZATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextCompanyNameNormalizationModel = typeof TEXT_TEXT_COMPANY_NAME_NORMALIZATION_MODELS[number];

export const TEXT_TEXT_COMPANY_STOCK_CODE_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_COMPANY_STOCK_CODE_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextCompanyStockCodeModel = typeof TEXT_TEXT_COMPANY_STOCK_CODE_MODELS[number];

export const TEXT_TEXT_CONVERSATION_SUMMARIZATION_MODELS = [
   'bart-large-xsum-samsum',
] as const;
export const TEXT_TEXT_CONVERSATION_SUMMARIZATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextConversationSummarizationModel = typeof TEXT_TEXT_CONVERSATION_SUMMARIZATION_MODELS[number];

export const TEXT_TEXT_COUNTRY_FROM_NAME_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_COUNTRY_FROM_NAME_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextCountryFromNameModel = typeof TEXT_TEXT_COUNTRY_FROM_NAME_MODELS[number];

export const TEXT_TEXT_DATE_CLEANING_MODELS = [
   'dataprep-formatter',
] as const;
export const TEXT_TEXT_DATE_CLEANING_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextDateCleaningModel = typeof TEXT_TEXT_DATE_CLEANING_MODELS[number];

export const TEXT_TEXT_EMOTION_RECOGNITION_MODELS = [
   'mrm8488-t5-base-finetuned-emotion',
] as const;
export const TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextEmotionRecognitionModel = typeof TEXT_TEXT_EMOTION_RECOGNITION_MODELS[number];

export const TEXT_TEXT_GENDER_FROM_NAME_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_GENDER_FROM_NAME_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextGenderFromNameModel = typeof TEXT_TEXT_GENDER_FROM_NAME_MODELS[number];

export const TEXT_TEXT_GPS_ADDRESS_FORMATTING_MODELS = [
   'geopy-formatter',
] as const;
export const TEXT_TEXT_GPS_ADDRESS_FORMATTING_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextGpsAddressFormattingModel = typeof TEXT_TEXT_GPS_ADDRESS_FORMATTING_MODELS[number];

export const TEXT_TEXT_GPT3_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_GPT3_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextGpt3Model = typeof TEXT_TEXT_GPT3_MODELS[number];

export const TEXT_TEXT_GUESS_CITY_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_GUESS_CITY_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextGuessCityModel = typeof TEXT_TEXT_GUESS_CITY_MODELS[number];

export const TEXT_TEXT_GUESS_COUNTRY_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_GUESS_COUNTRY_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextGuessCountryModel = typeof TEXT_TEXT_GUESS_COUNTRY_MODELS[number];

export const TEXT_TEXT_GUESS_INTENT_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_GUESS_INTENT_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextGuessIntentModel = typeof TEXT_TEXT_GUESS_INTENT_MODELS[number];

export const TEXT_TEXT_HATE_SPEECH_DETECTION_MODELS = [
   'byt5-base-tweet-hate-detection',
   'distilbert-base-uncased-emotion',
   'dkleczek_Polish-Hate-Speech-Detection-Herbert-Large',
] as const;
export const TEXT_TEXT_HATE_SPEECH_DETECTION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextHateSpeechDetectionModel = typeof TEXT_TEXT_HATE_SPEECH_DETECTION_MODELS[number];

export const TEXT_TEXT_HEADLINE_GENERATION_MODELS = [
   'jpt',
   'michau-t5-base-en-generate-headline',
] as const;
export const TEXT_TEXT_HEADLINE_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextHeadlineGenerationModel = typeof TEXT_TEXT_HEADLINE_GENERATION_MODELS[number];

export const TEXT_TEXT_IMAGE_GENERATION_PROMPT_BEAUTIFIER_MODELS = [
   'ms-promptist',
] as const;
export const TEXT_TEXT_IMAGE_GENERATION_PROMPT_BEAUTIFIER_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextImageGenerationPromptBeautifierModel = typeof TEXT_TEXT_IMAGE_GENERATION_PROMPT_BEAUTIFIER_MODELS[number];

export const TEXT_TEXT_KEYWORD_EXTRACTION_MODELS = [
   'keybert-paraphrase-multilingual-MiniLM-L12-v2',
] as const;
export const TEXT_TEXT_KEYWORD_EXTRACTION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextKeywordExtractionModel = typeof TEXT_TEXT_KEYWORD_EXTRACTION_MODELS[number];

export const TEXT_TEXT_LANGUAGE_CODES_MODELS = [
   'language-codes',
] as const;
export const TEXT_TEXT_LANGUAGE_CODES_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextLanguageCodesModel = typeof TEXT_TEXT_LANGUAGE_CODES_MODELS[number];

export const TEXT_TEXT_LANGUAGE_DETECTION_MODELS = [
   'jpt',
   'toftrup-etal-2021',
] as const;
export const TEXT_TEXT_LANGUAGE_DETECTION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextLanguageDetectionModel = typeof TEXT_TEXT_LANGUAGE_DETECTION_MODELS[number];

export const TEXT_TEXT_LANGUAGE_GENERATION_MODELS = [
   'EleutherAI-gpt-neo-2_7B',
   'bloom-560m',
   'gpt2_xl',
] as const;
export const TEXT_TEXT_LANGUAGE_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextLanguageGenerationModel = typeof TEXT_TEXT_LANGUAGE_GENERATION_MODELS[number];

export const TEXT_TEXT_NAMED_ENTITY_RECOGNITION_MODELS = [
   'spacy-multilingual',
] as const;
export const TEXT_TEXT_NAMED_ENTITY_RECOGNITION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextNamedEntityRecognitionModel = typeof TEXT_TEXT_NAMED_ENTITY_RECOGNITION_MODELS[number];

export const TEXT_TEXT_NEXT_SENTENCE_PREDICTION_MODELS = [
   'bert-base-uncased',
] as const;
export const TEXT_TEXT_NEXT_SENTENCE_PREDICTION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextNextSentencePredictionModel = typeof TEXT_TEXT_NEXT_SENTENCE_PREDICTION_MODELS[number];

export const TEXT_TEXT_NEXT_WORD_PREDICTION_MODELS = [
   'albert-base-v2',
   'bert-base-uncased',
   'distilbert-base-uncased',
   'roberta-base',
] as const;
export const TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextNextWordPredictionModel = typeof TEXT_TEXT_NEXT_WORD_PREDICTION_MODELS[number];

export const TEXT_TEXT_PRODUCT_OWNERSHIP_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_PRODUCT_OWNERSHIP_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextProductOwnershipModel = typeof TEXT_TEXT_PRODUCT_OWNERSHIP_MODELS[number];

export const TEXT_TEXT_PRODUCT_SENTIMENT_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_PRODUCT_SENTIMENT_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextProductSentimentModel = typeof TEXT_TEXT_PRODUCT_SENTIMENT_MODELS[number];

export const TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_MODELS = [
   'sentdex-GPyT',
] as const;
export const TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextProgrammingLanguageGenerationModel = typeof TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_MODELS[number];

export const TEXT_TEXT_PUNCTUATION_RESTORATION_MODELS = [
   'oguhr-multilingualpunctuation',
] as const;
export const TEXT_TEXT_PUNCTUATION_RESTORATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextPunctuationRestorationModel = typeof TEXT_TEXT_PUNCTUATION_RESTORATION_MODELS[number];

export const TEXT_TEXT_QUESTION_ANSWERING_MODELS = [
   'deepset-roberta-base-squad2',
   'deepset_bert-base-cased-squad2',
   'deepset_roberta-large-squad2',
   'distilbert-base-cased-distilled-squad',
   'mfeb-albert-xxlarge-v2-squad2',
   'mrm8488-bert-tiny-5-finetuned-squadv2',
] as const;
export const TEXT_TEXT_QUESTION_ANSWERING_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextQuestionAnsweringModel = typeof TEXT_TEXT_QUESTION_ANSWERING_MODELS[number];

export const TEXT_TEXT_SENTENCE_PARAPHRASER_MODELS = [
   'ramsrigouthamg-t5-large-paraphraser-diverse-high-quality',
   'ramsrigouthamg-t5_sentence_paraphraser',
] as const;
export const TEXT_TEXT_SENTENCE_PARAPHRASER_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextSentenceParaphraserModel = typeof TEXT_TEXT_SENTENCE_PARAPHRASER_MODELS[number];

export const TEXT_TEXT_SENTIMENT_ANALYSIS_MODELS = [
   'distilbert-base-uncased',
   'distilbert-base-uncased-finetuned-sst-2-english',
   'zero-shot-classification-facebook-bart-large-mnli',
] as const;
export const TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextSentimentAnalysisModel = typeof TEXT_TEXT_SENTIMENT_ANALYSIS_MODELS[number];

export const TEXT_TEXT_SIMILARITY_MODELS = [
   'all-MiniLM-L6-v2',
] as const;
export const TEXT_TEXT_SIMILARITY_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextSimilarityModel = typeof TEXT_TEXT_SIMILARITY_MODELS[number];

export const TEXT_TEXT_SPEAKER_RECOGNITION_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_SPEAKER_RECOGNITION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextSpeakerRecognitionModel = typeof TEXT_TEXT_SPEAKER_RECOGNITION_MODELS[number];

export const TEXT_TEXT_SUMMARIZATION_MODELS = [
   'all-MiniLM-L6-v2',
] as const;
export const TEXT_TEXT_SUMMARIZATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextSummarizationModel = typeof TEXT_TEXT_SUMMARIZATION_MODELS[number];

export const TEXT_TEXT_TRANSLATION_MODELS = [
   'facebook-nllb-200-distilled-600M',
   'jpt',
] as const;
export const TEXT_TEXT_TRANSLATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextTranslationModel = typeof TEXT_TEXT_TRANSLATION_MODELS[number];

export const TEXT_TEXT_VAT_COUNTRY_GUESSING_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_VAT_COUNTRY_GUESSING_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextVatCountryGuessingModel = typeof TEXT_TEXT_VAT_COUNTRY_GUESSING_MODELS[number];

export const TEXT_TEXT_WEBSITE_CLASSIFICATION_MODELS = [
   'jpt',
] as const;
export const TEXT_TEXT_WEBSITE_CLASSIFICATION_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextWebsiteClassificationModel = typeof TEXT_TEXT_WEBSITE_CLASSIFICATION_MODELS[number];

export const TEXT_TEXT_WORD_ALIGNMENT_MODELS = [
   'bert-base-multilingual-cased',
] as const;
export const TEXT_TEXT_WORD_ALIGNMENT_CONTENT_TYPE = "application/x-www-form-urlencoded" as const;
export type TextTextWordAlignmentModel = typeof TEXT_TEXT_WORD_ALIGNMENT_MODELS[number];

export const VIDEO_TEXT_ACTION_CLASSIFICATIONS_MODELS = [
   'kinetics--MCG-NJU/videomae-base-finetuned-kinetics',
   'kinetics--facebook/timesformer-base-finetuned-k400',
] as const;
export const VIDEO_TEXT_ACTION_CLASSIFICATIONS_CONTENT_TYPE = "multipart/form-data" as const;
export type VideoTextActionClassificationsModel = typeof VIDEO_TEXT_ACTION_CLASSIFICATIONS_MODELS[number];
