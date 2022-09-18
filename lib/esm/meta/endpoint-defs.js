/* Generated file with "scripts/generate-metasdk.ts" */
export const ENDPOINT_DEFS = [
    {
        "url": "/audio/text/audio-transcription/",
        "inputType": "audio",
        "outputType": "text",
        "taskName": "audio-transcription",
        "models": [
            "coqui_english_huge_vocab"
        ],
        "defaultModel": "coqui_english_huge_vocab",
        "inputBodyContentType": "multipart/form-data",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "audio",
                "name": "audio",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "audio_url",
                "required": false
            },
            {
                "in": "formData",
                "type": "string",
                "name": "language",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/image/image/background-removal/",
        "inputType": "image",
        "outputType": "image",
        "taskName": "background-removal",
        "models": [
            "mobilenet",
            "xception"
        ],
        "defaultModel": "mobilenet",
        "inputBodyContentType": "multipart/form-data",
        "outputBodyContentType": {
            "type": "binary"
        },
        "params": [
            {
                "in": "formData",
                "type": "image",
                "name": "image",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "image_url",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/image/image/colorization/",
        "inputType": "image",
        "outputType": "image",
        "taskName": "colorization",
        "models": [
            "deoldify-artistic",
            "deoldify-stable",
            "mlhubber_colorize"
        ],
        "defaultModel": "mlhubber_colorize",
        "inputBodyContentType": "multipart/form-data",
        "outputBodyContentType": {
            "type": "binary"
        },
        "params": [
            {
                "in": "formData",
                "type": "image",
                "name": "image",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "image_url",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/image/image/deblurring/",
        "inputType": "image",
        "outputType": "image",
        "taskName": "deblurring",
        "models": [
            "CMFNet"
        ],
        "defaultModel": "CMFNet",
        "inputBodyContentType": "multipart/form-data",
        "outputBodyContentType": {
            "type": "binary"
        },
        "params": [
            {
                "in": "formData",
                "type": "image",
                "name": "image",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "image_url",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/image/image/face-bluring/",
        "inputType": "image",
        "outputType": "image",
        "taskName": "face-bluring",
        "models": [
            "ageitgey"
        ],
        "defaultModel": "ageitgey",
        "inputBodyContentType": "multipart/form-data",
        "outputBodyContentType": {
            "type": "binary"
        },
        "params": [
            {
                "in": "formData",
                "type": "image",
                "name": "image",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "image_url",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/image/image/guided-inpainting/",
        "inputType": "image",
        "outputType": "image",
        "taskName": "guided-inpainting",
        "models": [
            "stable-diffusion"
        ],
        "defaultModel": "stable-diffusion",
        "inputBodyContentType": "multipart/form-data",
        "outputBodyContentType": {
            "type": "binary"
        },
        "params": [
            {
                "in": "formData",
                "type": "image",
                "name": "original_image",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "original_image_url",
                "required": false
            },
            {
                "in": "formData",
                "type": "image",
                "name": "mask_image",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "mask_image_url",
                "required": false
            },
            {
                "in": "formData",
                "type": "string",
                "name": "prompt",
                "required": true
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/image/image/inpainting/",
        "inputType": "image",
        "outputType": "image",
        "taskName": "inpainting",
        "models": [
            "fcf",
            "lama",
            "latent-diffusion",
            "mat",
            "zits"
        ],
        "defaultModel": "zits",
        "inputBodyContentType": "multipart/form-data",
        "outputBodyContentType": {
            "type": "binary"
        },
        "params": [
            {
                "in": "formData",
                "type": "image",
                "name": "original_image",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "original_image_url",
                "required": false
            },
            {
                "in": "formData",
                "type": "image",
                "name": "mask_image",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "mask_image_url",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/image/image/super-resolution/",
        "inputType": "image",
        "outputType": "image",
        "taskName": "super-resolution",
        "models": [],
        "defaultModel": "latent-sr",
        "inputBodyContentType": "multipart/form-data",
        "outputBodyContentType": {
            "type": "binary"
        },
        "params": [
            {
                "in": "formData",
                "type": "image",
                "name": "image",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "image_url",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/image/image/uncolorization/",
        "inputType": "image",
        "outputType": "image",
        "taskName": "uncolorization",
        "models": [
            "v1"
        ],
        "defaultModel": "v1",
        "inputBodyContentType": "multipart/form-data",
        "outputBodyContentType": {
            "type": "binary"
        },
        "params": [
            {
                "in": "formData",
                "type": "image",
                "name": "image",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "image_url",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/image/text/asciify/",
        "inputType": "image",
        "outputType": "text",
        "taskName": "asciify",
        "models": [
            "ramesh-aditya"
        ],
        "defaultModel": "ramesh-aditya",
        "inputBodyContentType": "multipart/form-data",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "image",
                "name": "image",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "image_url",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/image/text/classification/",
        "inputType": "image",
        "outputType": "text",
        "taskName": "classification",
        "models": [
            "alexnet",
            "convnext_base",
            "convnext_large",
            "convnext_small",
            "convnext_tiny",
            "densenet121",
            "densenet161",
            "densenet169",
            "densenet201",
            "efficientnet_b0",
            "efficientnet_b1_v1",
            "efficientnet_b1_v2",
            "efficientnet_b2",
            "efficientnet_b3",
            "efficientnet_b4",
            "efficientnet_b5",
            "efficientnet_b6",
            "efficientnet_b7",
            "efficientnet_v2_l",
            "efficientnet_v2_m",
            "efficientnet_v2_s",
            "googlenet",
            "googlenet_quantized_fbgemm_v1",
            "inception_v3",
            "inception_v3_fbgemm_v1",
            "mnasnet0_5",
            "mnasnet0_75",
            "mnasnet1_0",
            "mnasnet1_3",
            "mobilenet_v2_quantized_qnnpack_v1",
            "mobilenet_v2_v1",
            "mobilenet_v2_v2",
            "mobilenet_v3_large_quantized_qnnpack_v1",
            "mobilenet_v3_large_v1",
            "mobilenet_v3_large_v2",
            "mobilenet_v3_small",
            "regnet_x_16gf_v1",
            "regnet_x_16gf_v2",
            "regnet_x_1_6gf_v1",
            "regnet_x_1_6gf_v2",
            "regnet_x_32gf_v1",
            "regnet_x_32gf_v2",
            "regnet_x_3_2gf_v1",
            "regnet_x_3_2gf_v2",
            "regnet_x_400mf_v1",
            "regnet_x_400mf_v2",
            "regnet_x_800mf_v1",
            "regnet_x_800mf_v2",
            "regnet_x_8gf_v1",
            "regnet_x_8gf_v2",
            "regnet_y_128gf_swag_e2e_v1",
            "regnet_y_128gf_swag_linear_v1",
            "regnet_y_16gf_swag_e2e_v1",
            "regnet_y_16gf_swag_linear_v1",
            "regnet_y_16gf_v1",
            "regnet_y_16gf_v2",
            "regnet_y_1_6gf_v1",
            "regnet_y_1_6gf_v2",
            "regnet_y_32gf_swag_e2e_v1",
            "regnet_y_32gf_swag_linear_v1",
            "regnet_y_32gf_v1",
            "regnet_y_32gf_v2",
            "regnet_y_3_2gf_v1",
            "regnet_y_3_2gf_v2",
            "regnet_y_400mf_v1",
            "regnet_y_400mf_v2",
            "regnet_y_8gf_v1",
            "regnet_y_8gf_v2",
            "resnet152_v1",
            "resnet152_v2",
            "resnet18",
            "resnet18_quantized_fbgemm_v1",
            "resnet34",
            "resnet50_quantized_fbgemm_v1",
            "resnet50_quantized_fbgemm_v2",
            "resnet50_v1",
            "resnet50_v2",
            "resnext101_32x8d_quantized_fbgemm_v1",
            "resnext101_32x8d_quantized_fbgemm_v2",
            "resnext101_32x8d_v1",
            "resnext101_32x8d_v2",
            "resnext101_64x4d_quantized_fbgemm_v1",
            "resnext101_64x4d_v1",
            "resnext50_32x4d_v1",
            "resnext50_32x4d_v2",
            "shufflenet_v2_x0_5",
            "shufflenet_v2_x0_5_quantized_fbgemm_v1",
            "shufflenet_v2_x1_0",
            "shufflenet_v2_x1_0_quantized_fbgemm_v1",
            "shufflenet_v2_x1_5",
            "shufflenet_v2_x1_5_quantized_fbgemm_v1",
            "shufflenet_v2_x2_0",
            "shufflenet_v2_x2_0_quantized_fbgemm_v1",
            "squeezenet1_0",
            "squeezenet1_1",
            "swin_b",
            "swin_s",
            "swin_t",
            "vgg11",
            "vgg11_bn",
            "vgg13",
            "vgg13_bn",
            "vgg16_bn",
            "vgg16_v1",
            "vgg19",
            "vgg19_bn",
            "vit_b_16_swag_e2e_v1",
            "vit_b_16_swag_linear_v1",
            "vit_b_16_v1",
            "vit_b_32",
            "vit_h_14_swag_e2e_v1",
            "vit_h_14_swag_linear_v1",
            "vit_l_16_swag_e2e_v1",
            "vit_l_16_swag_linear_v1",
            "vit_l_16_v1",
            "vit_l_32",
            "wide_resnet101_2_v1",
            "wide_resnet101_2_v2"
        ],
        "defaultModel": "alexnet",
        "inputBodyContentType": "multipart/form-data",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "image",
                "name": "image",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "image_url",
                "required": false
            },
            {
                "in": "formData",
                "type": "integer",
                "name": "top_k",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/image/text/ocr/",
        "inputType": "image",
        "outputType": "text",
        "taskName": "ocr",
        "models": [
            "easy-ocr",
            "tesseract-default",
            "tesseract-denoising"
        ],
        "defaultModel": "tesseract-denoising",
        "inputBodyContentType": "multipart/form-data",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "image",
                "name": "image",
                "required": false
            },
            {
                "in": "formData",
                "type": "url",
                "name": "image_url",
                "required": false
            },
            {
                "in": "formData",
                "type": "string",
                "name": "source_language",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/image/image-generation/",
        "inputType": "text",
        "outputType": "image",
        "taskName": "image-generation",
        "models": [
            "dream-studio",
            "stable-diffusion"
        ],
        "defaultModel": "stable-diffusion",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "binary"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "prompt",
                "required": true
            },
            {
                "in": "formData",
                "type": "integer",
                "name": "samples",
                "required": false
            },
            {
                "in": "formData",
                "type": "integer",
                "name": "steps",
                "required": false
            },
            {
                "in": "formData",
                "type": "integer",
                "name": "seed",
                "required": false
            }
        ],
        "hasSamplesParam": true
    },
    {
        "url": "/text/text/ad-generation/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "ad-generation",
        "models": [
            "gpt-j"
        ],
        "defaultModel": "gpt-j",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "unknown"
        },
        "params": [
            {
                "in": "formData",
                "type": "array",
                "name": "keywords",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/article-generation/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "article-generation",
        "models": [
            "fast-gpt-j"
        ],
        "defaultModel": "fast-gpt-j",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "unknown"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "title",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/autocorrect/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "autocorrect",
        "models": [
            "flexudy-t5-base-multi-sentence-doctor"
        ],
        "defaultModel": "flexudy-t5-base-multi-sentence-doctor",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "sentence",
                "required": true
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/bullet-point-generation/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "bullet-point-generation",
        "models": [
            "jpt"
        ],
        "defaultModel": "jpt",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "unknown"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "text",
                "required": false
            },
            {
                "in": "formData",
                "type": "integer",
                "name": "bullets",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/emotion-recognition/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "emotion-recognition",
        "models": [
            "mrm8488-t5-base-finetuned-emotion"
        ],
        "defaultModel": "mrm8488-t5-base-finetuned-emotion",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "text",
                "required": true
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/hate-speech-detection/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "hate-speech-detection",
        "models": [
            "Hate-speech-CNERG-dehatebert-mono-english",
            "byt5-base-tweet-hate-detection"
        ],
        "defaultModel": "byt5-base-tweet-hate-detection",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "text",
                "required": true
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/headline-generation/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "headline-generation",
        "models": [
            "t5-base-en-generate-headline"
        ],
        "defaultModel": "t5-base-en-generate-headline",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "unknown"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "text",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/intent-classification/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "intent-classification",
        "models": [
            "fast-gpt-j"
        ],
        "defaultModel": "fast-gpt-j",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "unknown"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "text",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/keyword-extraction/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "keyword-extraction",
        "models": [
            "keybert-paraphrase-MiniLM-L6-v2",
            "keybert-paraphrase-multilingual-MiniLM-L12-v2"
        ],
        "defaultModel": "keybert-paraphrase-MiniLM-L6-v2",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "text",
                "required": true
            },
            {
                "in": "formData",
                "type": "integer",
                "name": "top_k",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/language-detection/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "language-detection",
        "models": [
            "toftrup-etal-2021",
            "xlm-roberta-base-language-detection"
        ],
        "defaultModel": "xlm-roberta-base-language-detection",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "text",
                "required": true
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/language-generation/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "language-generation",
        "models": [
            "EleutherAI-gpt-neo-2_7B",
            "bloom-560m"
        ],
        "defaultModel": "bloom-560m",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "text",
                "required": true
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/named-entity-recognition/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "named-entity-recognition",
        "models": [
            "dbmdz-bert-large-cased-finetuned-conll03-english"
        ],
        "defaultModel": "dbmdz-bert-large-cased-finetuned-conll03-english",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "array"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "text",
                "required": true
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/next-sentence-prediction/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "next-sentence-prediction",
        "models": [
            "bert-base-uncased"
        ],
        "defaultModel": "bert-base-uncased",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "number"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "sentence_1",
                "required": true
            },
            {
                "in": "formData",
                "type": "string",
                "name": "sentence_2",
                "required": true
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/next-word-prediction/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "next-word-prediction",
        "models": [
            "albert-base-v2",
            "bert-base-uncased",
            "distilbert-base-uncased",
            "roberta-base"
        ],
        "defaultModel": "distilbert-base-uncased",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "sentence",
                "required": true
            },
            {
                "in": "formData",
                "type": "integer",
                "name": "top_k",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/programming-language-generation/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "programming-language-generation",
        "models": [
            "sentdex-GPyT"
        ],
        "defaultModel": "sentdex-GPyT",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "code_snippet",
                "required": true
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/question-answering/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "question-answering",
        "models": [
            "deepset-roberta-base-squad2",
            "deepset_bert-base-cased-squad2",
            "distilbert-base-cased-distilled-squad",
            "mfeb-albert-xxlarge-v2-squad2",
            "mrm8488-bert-tiny-5-finetuned-squadv2"
        ],
        "defaultModel": "distilbert-base-cased-distilled-squad",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "context",
                "required": true
            },
            {
                "in": "formData",
                "type": "string",
                "name": "question",
                "required": true
            },
            {
                "in": "formData",
                "type": "integer",
                "name": "top_k",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/sentence-paraphraser/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "sentence-paraphraser",
        "models": [
            "ramsrigouthamg-t5-large-paraphraser-diverse-high-quality",
            "ramsrigouthamg-t5_sentence_paraphraser"
        ],
        "defaultModel": "ramsrigouthamg-t5-large-paraphraser-diverse-high-quality",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "context",
                "required": true
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/sentiment-analysis/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "sentiment-analysis",
        "models": [
            "distilbert-base-uncased",
            "distilbert-base-uncased-finetuned-sst-2-english",
            "nlptown-bert-base-multilingual-uncased-sentiment",
            "zero-shot-classification-facebook-bart-large-mnli"
        ],
        "defaultModel": "nlptown-bert-base-multilingual-uncased-sentiment",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "string"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "text",
                "required": true
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/similarity/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "similarity",
        "models": [
            "all-MiniLM-L6-v2"
        ],
        "defaultModel": "all-MiniLM-L6-v2",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "number"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "sentence_1",
                "required": true
            },
            {
                "in": "formData",
                "type": "string",
                "name": "sentence_2",
                "required": true
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/summarization/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "summarization",
        "models": [
            "bart-large-cnn"
        ],
        "defaultModel": "bart-large-cnn",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "unknown"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "text",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/translation/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "translation",
        "models": [
            "nllb-200-3-3b"
        ],
        "defaultModel": "nllb-200-3-3b",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "unknown"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "text",
                "required": false
            },
            {
                "in": "formData",
                "type": "string",
                "name": "source",
                "required": false
            },
            {
                "in": "formData",
                "type": "string",
                "name": "target",
                "required": false
            }
        ],
        "hasSamplesParam": false
    },
    {
        "url": "/text/text/word-alignment/",
        "inputType": "text",
        "outputType": "text",
        "taskName": "word-alignment",
        "models": [
            "bert-base-multilingual-cased"
        ],
        "defaultModel": "bert-base-multilingual-cased",
        "inputBodyContentType": "application/x-www-form-urlencoded",
        "outputBodyContentType": {
            "type": "prediction-standard-output",
            "predictionType": "array"
        },
        "params": [
            {
                "in": "formData",
                "type": "string",
                "name": "input_string_language_1",
                "required": true
            },
            {
                "in": "formData",
                "type": "string",
                "name": "input_string_language_2",
                "required": true
            }
        ],
        "hasSamplesParam": false
    }
];
