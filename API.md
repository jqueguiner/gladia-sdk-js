# API

Pay attention default model may be outdated.
The default model of this doc is designed on SDK generation time.
The runtime default model is defined on the GladIA server.

## AUDIO => TEXT

### `audio-transcription`

#### `models`

 - **coqui_english_huge_vocab (default)**

#### other params

 - `audio`: audio
 - `audio_url`: url
 - `language`: string

## IMAGE => IMAGE

### `background-removal`

#### `models`

 - **mobilenet (default)**
 - xception

#### other params

 - `image`: image
 - `image_url`: url

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

### `face-bluring`

#### `models`

 - **ageitgey (default)**

#### other params

 - `image`: image
 - `image_url`: url

### `guided-inpainting`

#### `models`

 - **stable-diffusion (default)**

#### other params

 - `original_image`: image
 - `original_image_url`: url
 - `mask_image`: image
 - `mask_image_url`: url
 - `prompt`: string *(required)*

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

### `super-resolution`

#### `models`


#### other params

 - `image`: image
 - `image_url`: url

### `uncolorization`

#### `models`

 - **v1 (default)**

#### other params

 - `image`: image
 - `image_url`: url

## IMAGE => TEXT

### `asciify`

#### `models`

 - **ramesh-aditya (default)**

#### other params

 - `image`: image
 - `image_url`: url

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
 - `top_k`: integer

### `ocr`

#### `models`

 - easy-ocr
 - tesseract-default
 - **tesseract-denoising (default)**

#### other params

 - `image`: image
 - `image_url`: url
 - `source_language`: string

## TEXT => IMAGE

### `image-generation`

#### `models`

 - dream-studio
 - **stable-diffusion (default)**

#### other params

 - `prompt`: string *(required)*
 - `samples`: integer
 - `steps`: integer
 - `seed`: integer

## TEXT => TEXT

### `ad-generation`

#### `models`

 - **gpt-j (default)**

#### other params

 - `keywords`: array

### `article-generation`

#### `models`

 - **fast-gpt-j (default)**

#### other params

 - `title`: string

### `autocorrect`

#### `models`

 - **flexudy-t5-base-multi-sentence-doctor (default)**

#### other params

 - `sentence`: string *(required)*

### `bullet-point-generation`

#### `models`

 - **jpt (default)**

#### other params

 - `text`: string
 - `bullets`: integer

### `emotion-recognition`

#### `models`

 - **mrm8488-t5-base-finetuned-emotion (default)**

#### other params

 - `text`: string *(required)*

### `hate-speech-detection`

#### `models`

 - Hate-speech-CNERG-dehatebert-mono-english
 - **byt5-base-tweet-hate-detection (default)**

#### other params

 - `text`: string *(required)*

### `headline-generation`

#### `models`

 - **t5-base-en-generate-headline (default)**

#### other params

 - `text`: string

### `intent-classification`

#### `models`

 - **fast-gpt-j (default)**

#### other params

 - `text`: string

### `keyword-extraction`

#### `models`

 - **keybert-paraphrase-MiniLM-L6-v2 (default)**
 - keybert-paraphrase-multilingual-MiniLM-L12-v2

#### other params

 - `text`: string *(required)*
 - `top_k`: integer

### `language-detection`

#### `models`

 - toftrup-etal-2021
 - **xlm-roberta-base-language-detection (default)**

#### other params

 - `text`: string *(required)*

### `language-generation`

#### `models`

 - EleutherAI-gpt-neo-2_7B
 - **bloom-560m (default)**

#### other params

 - `text`: string *(required)*

### `named-entity-recognition`

#### `models`

 - **dbmdz-bert-large-cased-finetuned-conll03-english (default)**

#### other params

 - `text`: string *(required)*

### `next-sentence-prediction`

#### `models`

 - **bert-base-uncased (default)**

#### other params

 - `sentence_1`: string *(required)*
 - `sentence_2`: string *(required)*

### `next-word-prediction`

#### `models`

 - albert-base-v2
 - bert-base-uncased
 - **distilbert-base-uncased (default)**
 - roberta-base

#### other params

 - `sentence`: string *(required)*
 - `top_k`: integer

### `programming-language-generation`

#### `models`

 - **sentdex-GPyT (default)**

#### other params

 - `code_snippet`: string *(required)*

### `question-answering`

#### `models`

 - deepset-roberta-base-squad2
 - deepset_bert-base-cased-squad2
 - **distilbert-base-cased-distilled-squad (default)**
 - mfeb-albert-xxlarge-v2-squad2
 - mrm8488-bert-tiny-5-finetuned-squadv2

#### other params

 - `context`: string *(required)*
 - `question`: string *(required)*
 - `top_k`: integer

### `sentence-paraphraser`

#### `models`

 - **ramsrigouthamg-t5-large-paraphraser-diverse-high-quality (default)**
 - ramsrigouthamg-t5_sentence_paraphraser

#### other params

 - `context`: string *(required)*

### `sentiment-analysis`

#### `models`

 - distilbert-base-uncased
 - distilbert-base-uncased-finetuned-sst-2-english
 - **nlptown-bert-base-multilingual-uncased-sentiment (default)**
 - zero-shot-classification-facebook-bart-large-mnli

#### other params

 - `text`: string *(required)*

### `similarity`

#### `models`

 - **all-MiniLM-L6-v2 (default)**

#### other params

 - `sentence_1`: string *(required)*
 - `sentence_2`: string *(required)*

### `summarization`

#### `models`

 - **bart-large-cnn (default)**

#### other params

 - `text`: string

### `translation`

#### `models`

 - **nllb-200-3-3b (default)**

#### other params

 - `text`: string
 - `source`: string
 - `target`: string

### `word-alignment`

#### `models`

 - **bert-base-multilingual-cased (default)**

#### other params

 - `input_string_language_1`: string *(required)*
 - `input_string_language_2`: string *(required)*

/* Generated file with "scripts/generate-sdk.ts" */

