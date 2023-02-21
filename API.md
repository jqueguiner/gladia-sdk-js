# API

Pay attention default model may be outdated.
The default model of this doc is designed on SDK generation time.
The runtime default model is defined on the GladIA server.

## AUDIO => TEXT

### `audio-transcription`

#### `models`

- **large-v2 (default)**
- medium

#### other params

- `audio`: audio
- `audio_url`: url
- `language_behaviour`: enum
  - _`manual`_
  - _`automatic single language`_
  - _`automatic multiple languages`_
- `language`: enum
  - _`english`_
  - _`chinese`_
  - _`german`_
  - _`spanish`_
  - _`russian`_
  - _`korean`_
  - _`french`_
  - _`japanese`_
  - _`portuguese`_
  - _`turkish`_
  - _`polish`_
  - _`catalan`_
  - _`dutch`_
  - _`arabic`_
  - _`swedish`_
  - _`italian`_
  - _`indonesian`_
  - _`hindi`_
  - _`finnish`_
  - _`vietnamese`_
  - _`hebrew`_
  - _`ukrainian`_
  - _`greek`_
  - _`malay`_
  - _`czech`_
  - _`romanian`_
  - _`danish`_
  - _`hungarian`_
  - _`tamil`_
  - _`norwegian`_
  - _`thai`_
  - _`urdu`_
  - _`croatian`_
  - _`bulgarian`_
  - _`lithuanian`_
  - _`latin`_
  - _`maori`_
  - _`malayalam`_
  - _`welsh`_
  - _`slovak`_
  - _`telugu`_
  - _`persian`_
  - _`latvian`_
  - _`bengali`_
  - _`serbian`_
  - _`azerbaijani`_
  - _`slovenian`_
  - _`kannada`_
  - _`estonian`_
  - _`macedonian`_
  - _`breton`_
  - _`basque`_
  - _`icelandic`_
  - _`armenian`_
  - _`nepali`_
  - _`mongolian`_
  - _`bosnian`_
  - _`kazakh`_
  - _`albanian`_
  - _`swahili`_
  - _`galician`_
  - _`marathi`_
  - _`punjabi`_
  - _`sinhala`_
  - _`khmer`_
  - _`shona`_
  - _`yoruba`_
  - _`somali`_
  - _`afrikaans`_
  - _`occitan`_
  - _`georgian`_
  - _`belarusian`_
  - _`tajik`_
  - _`sindhi`_
  - _`gujarati`_
  - _`amharic`_
  - _`yiddish`_
  - _`lao`_
  - _`uzbek`_
  - _`faroese`_
  - _`haitian creole`_
  - _`pashto`_
  - _`turkmen`_
  - _`nynorsk`_
  - _`maltese`_
  - _`sanskrit`_
  - _`luxembourgish`_
  - _`myanmar`_
  - _`tibetan`_
  - _`tagalog`_
  - _`malagasy`_
  - _`assamese`_
  - _`tatar`_
  - _`hawaiian`_
  - _`lingala`_
  - _`hausa`_
  - _`bashkir`_
  - _`javanese`_
  - _`sundanese`_
- `noise_reduction`: boolean
- `output_format`: string

### `audio-translated-transcription`

#### `models`

- **large-v2 (default)**
- medium

#### other params

- `audio`: audio
- `audio_url`: url
- `language`: enum
  - _`english`_
  - _`chinese`_
  - _`german`_
  - _`spanish`_
  - _`russian`_
  - _`korean`_
  - _`french`_
  - _`japanese`_
  - _`portuguese`_
  - _`turkish`_
  - _`polish`_
  - _`catalan`_
  - _`dutch`_
  - _`arabic`_
  - _`swedish`_
  - _`italian`_
  - _`indonesian`_
  - _`hindi`_
  - _`finnish`_
  - _`vietnamese`_
  - _`hebrew`_
  - _`ukrainian`_
  - _`greek`_
  - _`malay`_
  - _`czech`_
  - _`romanian`_
  - _`danish`_
  - _`hungarian`_
  - _`tamil`_
  - _`norwegian`_
  - _`thai`_
  - _`urdu`_
  - _`croatian`_
  - _`bulgarian`_
  - _`lithuanian`_
  - _`latin`_
  - _`maori`_
  - _`malayalam`_
  - _`welsh`_
  - _`slovak`_
  - _`telugu`_
  - _`persian`_
  - _`latvian`_
  - _`bengali`_
  - _`serbian`_
  - _`azerbaijani`_
  - _`slovenian`_
  - _`kannada`_
  - _`estonian`_
  - _`macedonian`_
  - _`breton`_
  - _`basque`_
  - _`icelandic`_
  - _`armenian`_
  - _`nepali`_
  - _`mongolian`_
  - _`bosnian`_
  - _`kazakh`_
  - _`albanian`_
  - _`swahili`_
  - _`galician`_
  - _`marathi`_
  - _`punjabi`_
  - _`sinhala`_
  - _`khmer`_
  - _`shona`_
  - _`yoruba`_
  - _`somali`_
  - _`afrikaans`_
  - _`occitan`_
  - _`georgian`_
  - _`belarusian`_
  - _`tajik`_
  - _`sindhi`_
  - _`gujarati`_
  - _`amharic`_
  - _`yiddish`_
  - _`lao`_
  - _`uzbek`_
  - _`faroese`_
  - _`haitian creole`_
  - _`pashto`_
  - _`turkmen`_
  - _`nynorsk`_
  - _`maltese`_
  - _`sanskrit`_
  - _`luxembourgish`_
  - _`myanmar`_
  - _`tibetan`_
  - _`tagalog`_
  - _`malagasy`_
  - _`assamese`_
  - _`tatar`_
  - _`hawaiian`_
  - _`lingala`_
  - _`hausa`_
  - _`bashkir`_
  - _`javanese`_
  - _`sundanese`_
- `noise_reduction`: boolean

### `speaker-diarization`

#### `models`

- **pyannote-speaker_diarization (default)**

#### other params

- `audio`: audio
- `audio_url`: url
- `nb_speakers`: integer

### `speaker-gender-classification`

#### `models`

- **inafoss-inaSpeechSegmenter (default)**

#### other params

- `audio`: audio
- `audio_url`: url

### `speech-emotion-classification`

#### `models`

- **cnn_lstm_parallel_model (default)**

#### other params

- `audio`: audio
- `audio_url`: url

## IMAGE => IMAGE

### `background-removal`

#### `models`

- **mobilenet (default)**
- xception

#### other params

- `image`: image
- `image_url`: url

### `background-replacement`

#### `models`

- **mobilenet (default)**

#### other params

- `original_image`: image
- `original_image_url`: url
- `background_image`: image
- `background_image_url`: url
- `alignment`: enum _(required)_
  - _`center`_
  - _`top`_
  - _`bottom`_
  - _`left`_
  - _`right`_
  - _`top-left`_
  - _`top-center`_
  - _`top-right`_
  - _`bottom-left`_
  - _`bottom-center`_
  - _`bottom-right`_
  - _`cropped`_

### `colorization`

#### `models`

- deoldify-artistic
- deoldify-stable
- **mlhubber_colorize (default)**

#### other params

- `image`: image
- `image_url`: url

### `deblurring`

#### `models`

- **CMFNet (default)**

#### other params

- `image`: image
- `image_url`: url

### `enhancement`

#### `models`

- **FiveK (default)**
- LOL

#### other params

- `image`: image
- `image_url`: url

### `face-bluring`

#### `models`

- **ageitgey (default)**

#### other params

- `image`: image
- `image_url`: url

### `guided-inpainting`

#### `models`

- compvis
- **runwayml (default)**

#### other params

- `original_image`: image
- `original_image_url`: url
- `mask_image`: image
- `mask_image_url`: url
- `prompt`: string _(required)_

### `image-guided-inpainting`

#### `models`

- **fantasy-studio (default)**

#### other params

- `original_image`: image
- `original_image_url`: url
- `example_image`: image
- `example_image_url`: url
- `mask_image`: image
- `mask_image_url`: url
- `seed`: integer _(required)_
- `steps`: integer _(required)_
- `guidance_scale`: integer _(required)_

### `inpainting`

#### `models`

- fcf
- lama
- latent-diffusion
- mat
- **zits (default)**

#### other params

- `original_image`: image
- `original_image_url`: url
- `mask_image`: image
- `mask_image_url`: url

### `instruction-guided-inpainting`

#### `models`

- **timbrooks-instruct-pix2pix (default)**

#### other params

- `original_image`: image
- `original_image_url`: url
- `instruction`: string _(required)_
- `negative_prompt`: string _(required)_
- `image_guidance_scale`: float _(required)_
- `text_guidance_scale`: float _(required)_
- `seed`: integer _(required)_
- `steps`: integer _(required)_

### `uncolorization`

#### `models`

- **v1 (default)**

#### other params

- `image`: image
- `image_url`: url

## IMAGE => TEXT

### `classification`

#### `models`

- **alexnet (default)**
- convnext_base
- convnext_large
- convnext_small
- convnext_tiny
- densenet121
- densenet161
- densenet169
- densenet201
- efficientnet_b0
- efficientnet_b1_v1
- efficientnet_b1_v2
- efficientnet_b2
- efficientnet_b3
- efficientnet_b4
- efficientnet_b5
- efficientnet_b6
- efficientnet_b7
- efficientnet_v2_l
- efficientnet_v2_m
- efficientnet_v2_s
- googlenet
- googlenet_quantized_fbgemm_v1
- inception_v3
- inception_v3_fbgemm_v1
- mnasnet0_5
- mnasnet0_75
- mnasnet1_0
- mnasnet1_3
- mobilenet_v2_quantized_qnnpack_v1
- mobilenet_v2_v1
- mobilenet_v2_v2
- mobilenet_v3_large_quantized_qnnpack_v1
- mobilenet_v3_large_v1
- mobilenet_v3_large_v2
- mobilenet_v3_small
- regnet_x_16gf_v1
- regnet_x_16gf_v2
- regnet_x_1_6gf_v1
- regnet_x_1_6gf_v2
- regnet_x_32gf_v1
- regnet_x_32gf_v2
- regnet_x_3_2gf_v1
- regnet_x_3_2gf_v2
- regnet_x_400mf_v1
- regnet_x_400mf_v2
- regnet_x_800mf_v1
- regnet_x_800mf_v2
- regnet_x_8gf_v1
- regnet_x_8gf_v2
- regnet_y_128gf_swag_e2e_v1
- regnet_y_128gf_swag_linear_v1
- regnet_y_16gf_swag_e2e_v1
- regnet_y_16gf_swag_linear_v1
- regnet_y_16gf_v1
- regnet_y_16gf_v2
- regnet_y_1_6gf_v1
- regnet_y_1_6gf_v2
- regnet_y_32gf_swag_e2e_v1
- regnet_y_32gf_swag_linear_v1
- regnet_y_32gf_v1
- regnet_y_32gf_v2
- regnet_y_3_2gf_v1
- regnet_y_3_2gf_v2
- regnet_y_400mf_v1
- regnet_y_400mf_v2
- regnet_y_8gf_v1
- regnet_y_8gf_v2
- resnet152_v1
- resnet152_v2
- resnet18
- resnet18_quantized_fbgemm_v1
- resnet34
- resnet50_quantized_fbgemm_v1
- resnet50_quantized_fbgemm_v2
- resnet50_v1
- resnet50_v2
- resnext101_32x8d_quantized_fbgemm_v1
- resnext101_32x8d_quantized_fbgemm_v2
- resnext101_32x8d_v1
- resnext101_32x8d_v2
- resnext101_64x4d_quantized_fbgemm_v1
- resnext101_64x4d_v1
- resnext50_32x4d_v1
- resnext50_32x4d_v2
- shufflenet_v2_x0_5
- shufflenet_v2_x0_5_quantized_fbgemm_v1
- shufflenet_v2_x1_0
- shufflenet_v2_x1_0_quantized_fbgemm_v1
- shufflenet_v2_x1_5
- shufflenet_v2_x1_5_quantized_fbgemm_v1
- shufflenet_v2_x2_0
- shufflenet_v2_x2_0_quantized_fbgemm_v1
- squeezenet1_0
- squeezenet1_1
- swin_b
- swin_s
- swin_t
- vgg11
- vgg11_bn
- vgg13
- vgg13_bn
- vgg16_bn
- vgg16_v1
- vgg19
- vgg19_bn
- vit_b_16_swag_e2e_v1
- vit_b_16_swag_linear_v1
- vit_b_16_v1
- vit_b_32
- vit_h_14_swag_e2e_v1
- vit_h_14_swag_linear_v1
- vit_l_16_swag_e2e_v1
- vit_l_16_swag_linear_v1
- vit_l_16_v1
- vit_l_32
- wide_resnet101_2_v1
- wide_resnet101_2_v2

#### other params

- `image`: image
- `image_url`: url
- `top_k`: integer _(required)_

### `ocr`

#### `models`

- easy-ocr
- tesseract-default
- tesseract-denoising
- **textract-extractor (default)**

#### other params

- `image`: image
- `image_url`: url
- `source_language`: string _(required)_

## TEXT => IMAGE

### `image-generation`

#### `models`

- dream-studio
- stable-diffusion--compvis-sd-14
- stable-diffusion--runwayml-sd-15
- stable-diffusion--stabilityai-sd-20
- **stable-diffusion--stabilityai-sd-21 (default)**

#### other params

- `prompt`: string _(required)_
- `samples`: integer
- `steps`: integer
- `seed`: integer

## TEXT => TEXT

### `address-formatting`

#### `models`

- **geopy-formatter (default)**

#### other params

- `address`: string _(required)_

### `age-from-name`

#### `models`

- **jpt (default)**

#### other params

- `name`: string _(required)_

### `anonymization`

#### `models`

- **ms-presidio (default)**

#### other params

- `language`: string _(required)_
- `entities`: string _(required)_
- `text`: string _(required)_

### `autocorrect`

#### `models`

- **flexudy-t5-base-multi-sentence-doctor (default)**

#### other params

- `sentence`: string _(required)_

### `bullet-point-generation`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_
- `bullets`: integer

### `command-generation`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_

### `company-categorization`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_

### `company-name-normalization`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_

### `company-stock-code`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_

### `conversation-summarization`

#### `models`

- **bart-large-xsum-samsum (default)**

#### other params

- `text`: string _(required)_

### `country-from-name`

#### `models`

- **jpt (default)**

#### other params

- `name`: string _(required)_

### `date-cleaning`

#### `models`

- **dataprep-formatter (default)**

#### other params

- `date`: string _(required)_

### `emotion-recognition`

#### `models`

- **bhadresh-savani_distilbert-base-uncased-emotion (default)**

#### other params

- `texts`: array _(required)_

### `gender-from-name`

#### `models`

- **jpt (default)**

#### other params

- `name`: string _(required)_

### `gps-address-formatting`

#### `models`

- **geopy-formatter (default)**

#### other params

- `latitude`: float _(required)_
- `longitude`: float _(required)_

### `gpt3`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_

### `guess-city`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_

### `guess-country`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_

### `guess-intent`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_

### `hate-speech-detection`

#### `models`

- byt5-base-tweet-hate-detection
- **distilbert-base-uncased-emotion (default)**
- dkleczek_Polish-Hate-Speech-Detection-Herbert-Large

#### other params

- `text`: string _(required)_

### `headline-generation`

#### `models`

- **jpt (default)**
- michau-t5-base-en-generate-headline

#### other params

- `text`: string _(required)_
- `max_length`: integer _(required)_

### `image-generation-prompt-beautifier`

#### `models`

- **ms-promptist (default)**

#### other params

- `prompt`: string _(required)_

### `keyword-extraction`

#### `models`

- **keybert-paraphrase-multilingual-MiniLM-L12-v2 (default)**

#### other params

- `text`: string _(required)_
- `top_k`: integer

### `language-codes`

#### `models`

- **language-codes (default)**

#### other params

- `language_code`: string _(required)_
- `display_output_language`: string _(required)_

### `language-detection`

#### `models`

- **jpt (default)**
- toftrup-etal-2021

#### other params

- `text`: string _(required)_

### `language-generation`

#### `models`

- EleutherAI-gpt-neo-2_7B
- bloom-560m
- **gpt2_xl (default)**

#### other params

- `text`: string _(required)_

### `named-entity-recognition`

#### `models`

- **spacy-multilingual (default)**

#### other params

- `text`: string _(required)_

### `next-sentence-prediction`

#### `models`

- **bert-base-uncased (default)**

#### other params

- `sentence_1`: string _(required)_
- `sentence_2`: string _(required)_

### `next-word-prediction`

#### `models`

- **distilbert-base-uncased (default)**

#### other params

- `sentence`: string _(required)_
- `top_k`: integer _(required)_

### `product-ownership`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_

### `product-sentiment`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_

### `programming-language-generation`

#### `models`

- **sentdex-GPyT (default)**

#### other params

- `code_snippet`: string _(required)_

### `punctuation-restoration`

#### `models`

- **notaitech-fastpunct (default)**

#### other params

- `sentence`: string _(required)_

### `question-answering`

#### `models`

- **deepset_roberta-large-squad2 (default)**
- distilbert-base-cased-distilled-squad

#### other params

- `context`: string _(required)_
- `question`: string _(required)_
- `top_k`: integer

### `sentence-paraphraser`

#### `models`

- **ramsrigouthamg-t5-large-paraphraser-diverse-high-quality (default)**
- ramsrigouthamg-t5_sentence_paraphraser

#### other params

- `context`: string _(required)_

### `sentiment-analysis`

#### `models`

- **distilbert-base-uncased-finetuned-sst-2-english (default)**

#### other params

- `texts`: array _(required)_

### `similarity`

#### `models`

- **all-MiniLM-L12-v2 (default)**

#### other params

- `sentence_1`: string _(required)_
- `sentence_2`: string _(required)_

### `speaker-recognition`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_

### `summarization`

#### `models`

- **google_pegasus-cnn_dailymail (default)**

#### other params

- `text`: string _(required)_
- `source_language`: string _(required)_
- `min_length`: integer
- `max_length`: integer

### `translation`

#### `models`

- facebook-nllb-200-distilled-600M
- **jpt (default)**

#### other params

- `input_string`: string _(required)_
- `source_language`: string _(required)_
- `target_language`: string _(required)_

### `vat-country-guessing`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_

### `website-classification`

#### `models`

- **jpt (default)**

#### other params

- `text`: string _(required)_

### `word-alignment`

#### `models`

- **bert-base-multilingual-cased (default)**

#### other params

- `input_string_language_1`: string _(required)_
- `input_string_language_2`: string _(required)_

## VIDEO => TEXT

### `action-classifications`

#### `models`

- **kinetics--MCG-NJU/videomae-base-finetuned-kinetics (default)**
- kinetics--facebook/timesformer-base-finetuned-k400

#### other params

- `video`: video
- `video_url`: url

> Generated file with "scripts/generate-sdk.ts"
