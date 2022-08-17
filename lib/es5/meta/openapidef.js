"use strict";
/* Generated file with "scripts/generate-metasdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.openApiJson = void 0;
exports.openApiJson = {
    "openapi": "3.0.2",
    "info": {
        "title": "FastAPI",
        "version": "0.1.0"
    },
    "paths": {
        "/audio/text/audio-transcription/": {
            "get": {
                "tags": [
                    "audio.text.audio-transcription"
                ],
                "summary": "Get list of models available for audio-transcription",
                "operationId": "get_versions_audio_text_audio_transcription__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "audio.text.audio-transcription"
                ],
                "summary": "Apply model for the audio-transcription task for a given models",
                "operationId": "apply_audio_text_audio_transcription__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "coqui_english_huge_vocab"
                            ],
                            "type": "string",
                            "default": "coqui_english_huge_vocab"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_audio_text_audio_transcription__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/image/image/background-removal/": {
            "get": {
                "tags": [
                    "image.image.background-removal"
                ],
                "summary": "Get list of models available for background-removal",
                "operationId": "get_versions_image_image_background_removal__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "image.image.background-removal"
                ],
                "summary": "Apply model for the background-removal task for a given models",
                "operationId": "apply_image_image_background_removal__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "xception",
                                "mobilenet"
                            ],
                            "type": "string",
                            "default": "xception"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_image_background_removal__post"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "image/*": {
                                "schema": {
                                    "type": "string",
                                    "format": "binary"
                                }
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/image/image/colorization/": {
            "get": {
                "tags": [
                    "image.image.colorization"
                ],
                "summary": "Get list of models available for colorization",
                "operationId": "get_versions_image_image_colorization__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "image.image.colorization"
                ],
                "summary": "Apply model for the colorization task for a given models",
                "operationId": "apply_image_image_colorization__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "deoldify-artistic",
                                "deoldify-stable"
                            ],
                            "type": "string",
                            "default": "deoldify-stable"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_image_colorization__post"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "image/*": {
                                "schema": {
                                    "type": "string",
                                    "format": "binary"
                                }
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/image/image/face-bluring/": {
            "get": {
                "tags": [
                    "image.image.face-bluring"
                ],
                "summary": "Get list of models available for face-bluring",
                "operationId": "get_versions_image_image_face_bluring__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "image.image.face-bluring"
                ],
                "summary": "Apply model for the face-bluring task for a given models",
                "operationId": "apply_image_image_face_bluring__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "ageitgey"
                            ],
                            "type": "string",
                            "default": "ageitgey"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_image_face_bluring__post"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "image/*": {
                                "schema": {
                                    "type": "string",
                                    "format": "binary"
                                }
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/image/image/uncolorization/": {
            "get": {
                "tags": [
                    "image.image.uncolorization"
                ],
                "summary": "Get list of models available for uncolorization",
                "operationId": "get_versions_image_image_uncolorization__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "image.image.uncolorization"
                ],
                "summary": "Apply model for the uncolorization task for a given models",
                "operationId": "apply_image_image_uncolorization__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "v1"
                            ],
                            "type": "string",
                            "default": "v1"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_image_uncolorization__post"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "image/*": {
                                "schema": {
                                    "type": "string",
                                    "format": "binary"
                                }
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/image/text/asciify/": {
            "get": {
                "tags": [
                    "image.text.asciify"
                ],
                "summary": "Get list of models available for asciify",
                "operationId": "get_versions_image_text_asciify__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "image.text.asciify"
                ],
                "summary": "Apply model for the asciify task for a given models",
                "operationId": "apply_image_text_asciify__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "ramesh-aditya"
                            ],
                            "type": "string",
                            "default": "ramesh-aditya"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_text_asciify__post"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/image/text/classification/": {
            "get": {
                "tags": [
                    "image.text.classification"
                ],
                "summary": "Get list of models available for classification",
                "operationId": "get_versions_image_text_classification__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "image.text.classification"
                ],
                "summary": "Apply model for the classification task for a given models",
                "operationId": "apply_image_text_classification__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "swin_t",
                                "regnet_y_16gf_swag_e2e_v1",
                                "regnet_x_8gf_v1",
                                "vgg11",
                                "googlenet_quantized_fbgemm_v1",
                                "regnet_y_8gf_v1",
                                "vit_b_16_swag_e2e_v1",
                                "swin_s",
                                "resnet50_quantized_fbgemm_v1",
                                "vit_l_16_swag_e2e_v1",
                                "squeezenet1_1",
                                "resnext101_32x8d_v1",
                                "efficientnet_b3",
                                "vit_l_32",
                                "efficientnet_b0",
                                "squeezenet1_0",
                                "regnet_x_16gf_v2",
                                "regnet_y_16gf_v2",
                                "resnext101_32x8d_quantized_fbgemm_v2",
                                "wide_resnet101_2_v2",
                                "resnet50_v2",
                                "densenet169",
                                "inception_v3",
                                "mnasnet1_0",
                                "regnet_y_3_2gf_v1",
                                "vit_h_14_swag_linear_v1",
                                "regnet_y_1_6gf_v2",
                                "wide_resnet101_2_v1",
                                "efficientnet_b6",
                                "vit_l_16_v1",
                                "resnext101_32x8d_v2",
                                "efficientnet_b4",
                                "regnet_y_400mf_v1",
                                "mnasnet0_5",
                                "efficientnet_b7",
                                "regnet_y_128gf_swag_linear_v1",
                                "regnet_y_32gf_v2",
                                "resnet50_v1",
                                "vit_h_14_swag_e2e_v1",
                                "swin_b",
                                "vit_b_16_v1",
                                "regnet_y_32gf_v1",
                                "densenet121",
                                "vgg16_v1",
                                "regnet_x_8gf_v2",
                                "resnet18_quantized_fbgemm_v1",
                                "mobilenet_v2_v2",
                                "shufflenet_v2_x1_0_quantized_fbgemm_v1",
                                "shufflenet_v2_x0_5",
                                "regnet_y_8gf_v2",
                                "regnet_x_3_2gf_v1",
                                "shufflenet_v2_x1_5_quantized_fbgemm_v1",
                                "efficientnet_b2",
                                "mobilenet_v3_large_v2",
                                "resnet18",
                                "alexnet",
                                "efficientnet_b1_v2",
                                "regnet_y_32gf_swag_linear_v1",
                                "convnext_tiny",
                                "inception_v3_fbgemm_v1",
                                "shufflenet_v2_x0_5_quantized_fbgemm_v1",
                                "mobilenet_v2_v1",
                                "vgg19",
                                "regnet_x_800mf_v2",
                                "vgg11_bn",
                                "regnet_x_400mf_v2",
                                "mobilenet_v3_large_v1",
                                "vit_b_16_swag_linear_v1",
                                "resnet34",
                                "convnext_large",
                                "regnet_x_32gf_v2",
                                "vit_l_16_swag_linear_v1",
                                "regnet_x_1_6gf_v1",
                                "regnet_x_16gf_v1",
                                "resnext50_32x4d_v1",
                                "regnet_y_16gf_v1",
                                "densenet201",
                                "vit_b_32",
                                "regnet_y_400mf_v2",
                                "shufflenet_v2_x2_0",
                                "mnasnet1_3",
                                "regnet_y_3_2gf_v2",
                                "efficientnet_b5",
                                "googlenet",
                                "regnet_y_16gf_swag_linear_v1",
                                "shufflenet_v2_x2_0_quantized_fbgemm_v1",
                                "shufflenet_v2_x1_5",
                                "regnet_y_128gf_swag_e2e_v1",
                                "regnet_y_1_6gf_v1",
                                "densenet161",
                                "convnext_base",
                                "resnet152_v2",
                                "vgg16_bn",
                                "mobilenet_v3_small",
                                "regnet_y_32gf_swag_e2e_v1",
                                "regnet_x_3_2gf_v2",
                                "resnext101_32x8d_quantized_fbgemm_v1",
                                "shufflenet_v2_x1_0",
                                "regnet_x_800mf_v1",
                                "mobilenet_v2_quantized_qnnpack_v1",
                                "mobilenet_v3_large_quantized_qnnpack_v1",
                                "resnext101_64x4d_quantized_fbgemm_v1",
                                "convnext_small",
                                "resnext101_64x4d_v1",
                                "efficientnet_v2_l",
                                "resnext50_32x4d_v2",
                                "efficientnet_v2_m",
                                "regnet_x_32gf_v1",
                                "efficientnet_b1_v1",
                                "mnasnet0_75",
                                "efficientnet_v2_s",
                                "vgg19_bn",
                                "regnet_x_400mf_v1",
                                "resnet50_quantized_fbgemm_v2",
                                "vgg13_bn",
                                "vgg13",
                                "regnet_x_1_6gf_v2",
                                "resnet152_v1"
                            ],
                            "type": "string",
                            "default": "alexnet"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_text_classification__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/image/text/ocr/": {
            "get": {
                "tags": [
                    "image.text.ocr"
                ],
                "summary": "Get list of models available for ocr",
                "operationId": "get_versions_image_text_ocr__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "image.text.ocr"
                ],
                "summary": "Apply model for the ocr task for a given models",
                "operationId": "apply_image_text_ocr__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "tesseract-default",
                                "tesseract-denoising",
                                "easy-ocr"
                            ],
                            "type": "string",
                            "default": "easy-ocr"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_text_ocr__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/autocorrect/": {
            "get": {
                "tags": [
                    "text.text.autocorrect"
                ],
                "summary": "Get list of models available for autocorrect",
                "operationId": "get_versions_text_text_autocorrect__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.autocorrect"
                ],
                "summary": "Apply model for the autocorrect task for a given models",
                "operationId": "apply_text_text_autocorrect__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "flexudy-t5-base-multi-sentence-doctor"
                            ],
                            "type": "string",
                            "default": "flexudy-t5-base-multi-sentence-doctor"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_autocorrect__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/emotion-recognition/": {
            "get": {
                "tags": [
                    "text.text.emotion-recognition"
                ],
                "summary": "Get list of models available for emotion-recognition",
                "operationId": "get_versions_text_text_emotion_recognition__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.emotion-recognition"
                ],
                "summary": "Apply model for the emotion-recognition task for a given models",
                "operationId": "apply_text_text_emotion_recognition__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "mrm8488-t5-base-finetuned-emotion"
                            ],
                            "type": "string",
                            "default": "mrm8488-t5-base-finetuned-emotion"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_emotion_recognition__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/hate-speech-detection/": {
            "get": {
                "tags": [
                    "text.text.hate-speech-detection"
                ],
                "summary": "Get list of models available for hate-speech-detection",
                "operationId": "get_versions_text_text_hate_speech_detection__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.hate-speech-detection"
                ],
                "summary": "Apply model for the hate-speech-detection task for a given models",
                "operationId": "apply_text_text_hate_speech_detection__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "Hate-speech-CNERG-dehatebert-mono-english"
                            ],
                            "type": "string",
                            "default": "Hate-speech-CNERG-dehatebert-mono-english"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_hate_speech_detection__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/keyword-extraction/": {
            "get": {
                "tags": [
                    "text.text.keyword-extraction"
                ],
                "summary": "Get list of models available for keyword-extraction",
                "operationId": "get_versions_text_text_keyword_extraction__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.keyword-extraction"
                ],
                "summary": "Apply model for the keyword-extraction task for a given models",
                "operationId": "apply_text_text_keyword_extraction__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "keybert-paraphrase-MiniLM-L6-v2",
                                "keybert-paraphrase-multilingual-MiniLM-L12-v2"
                            ],
                            "type": "string",
                            "default": "keybert-paraphrase-MiniLM-L6-v2"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_keyword_extraction__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/language-detection/": {
            "get": {
                "tags": [
                    "text.text.language-detection"
                ],
                "summary": "Get list of models available for language-detection",
                "operationId": "get_versions_text_text_language_detection__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.language-detection"
                ],
                "summary": "Apply model for the language-detection task for a given models",
                "operationId": "apply_text_text_language_detection__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "xlm-roberta-base-language-detection",
                                "toftrup-etal-2021"
                            ],
                            "type": "string",
                            "default": "xlm-roberta-base-language-detection"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_language_detection__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/language-generation/": {
            "get": {
                "tags": [
                    "text.text.language-generation"
                ],
                "summary": "Get list of models available for language-generation",
                "operationId": "get_versions_text_text_language_generation__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.language-generation"
                ],
                "summary": "Apply model for the language-generation task for a given models",
                "operationId": "apply_text_text_language_generation__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "EleutherAI-gpt-neo-2_7B"
                            ],
                            "type": "string",
                            "default": "EleutherAI-gpt-neo-2_7B"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_language_generation__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/named-entity-recognition/": {
            "get": {
                "tags": [
                    "text.text.named-entity-recognition"
                ],
                "summary": "Get list of models available for named-entity-recognition",
                "operationId": "get_versions_text_text_named_entity_recognition__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.named-entity-recognition"
                ],
                "summary": "Apply model for the named-entity-recognition task for a given models",
                "operationId": "apply_text_text_named_entity_recognition__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "dbmdz-bert-large-cased-finetuned-conll03-english"
                            ],
                            "type": "string",
                            "default": "dbmdz-bert-large-cased-finetuned-conll03-english"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_named_entity_recognition__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/next-sentence-prediction/": {
            "get": {
                "tags": [
                    "text.text.next-sentence-prediction"
                ],
                "summary": "Get list of models available for next-sentence-prediction",
                "operationId": "get_versions_text_text_next_sentence_prediction__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.next-sentence-prediction"
                ],
                "summary": "Apply model for the next-sentence-prediction task for a given models",
                "operationId": "apply_text_text_next_sentence_prediction__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "bert-base-uncased"
                            ],
                            "type": "string",
                            "default": "bert-base-uncased"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_next_sentence_prediction__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/next-word-prediction/": {
            "get": {
                "tags": [
                    "text.text.next-word-prediction"
                ],
                "summary": "Get list of models available for next-word-prediction",
                "operationId": "get_versions_text_text_next_word_prediction__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.next-word-prediction"
                ],
                "summary": "Apply model for the next-word-prediction task for a given models",
                "operationId": "apply_text_text_next_word_prediction__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "roberta-base",
                                "distilbert-base-uncased",
                                "albert-base-v2",
                                "bert-base-uncased"
                            ],
                            "type": "string",
                            "default": "distilbert-base-uncased"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_next_word_prediction__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/plural/": {
            "get": {
                "tags": [
                    "text.text.plural"
                ],
                "summary": "Get list of models available for plural",
                "operationId": "get_versions_text_text_plural__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.plural"
                ],
                "summary": "Apply model for the plural task for a given models",
                "operationId": "apply_text_text_plural__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "inflect"
                            ],
                            "type": "string",
                            "default": "inflect"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_plural__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/programming-language-generation/": {
            "get": {
                "tags": [
                    "text.text.programming-language-generation"
                ],
                "summary": "Get list of models available for programming-language-generation",
                "operationId": "get_versions_text_text_programming_language_generation__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.programming-language-generation"
                ],
                "summary": "Apply model for the programming-language-generation task for a given models",
                "operationId": "apply_text_text_programming_language_generation__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "sentdex-GPyT"
                            ],
                            "type": "string",
                            "default": "sentdex-GPyT"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_programming_language_generation__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/question-answering/": {
            "get": {
                "tags": [
                    "text.text.question-answering"
                ],
                "summary": "Get list of models available for question-answering",
                "operationId": "get_versions_text_text_question_answering__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.question-answering"
                ],
                "summary": "Apply model for the question-answering task for a given models",
                "operationId": "apply_text_text_question_answering__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "deepset_bert-base-cased-squad2",
                                "distilbert-base-cased-distilled-squad",
                                "deepset-roberta-base-squad2",
                                "mfeb-albert-xxlarge-v2-squad2",
                                "mrm8488-bert-tiny-5-finetuned-squadv2"
                            ],
                            "type": "string",
                            "default": "deepset_bert-base-cased-squad2"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_question_answering__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/sentence-paraphraser/": {
            "get": {
                "tags": [
                    "text.text.sentence-paraphraser"
                ],
                "summary": "Get list of models available for sentence-paraphraser",
                "operationId": "get_versions_text_text_sentence_paraphraser__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.sentence-paraphraser"
                ],
                "summary": "Apply model for the sentence-paraphraser task for a given models",
                "operationId": "apply_text_text_sentence_paraphraser__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "ramsrigouthamg-t5-large-paraphraser-diverse-high-quality"
                            ],
                            "type": "string",
                            "default": "ramsrigouthamg-t5-large-paraphraser-diverse-high-quality"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_sentence_paraphraser__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/sentiment-analysis/": {
            "get": {
                "tags": [
                    "text.text.sentiment-analysis"
                ],
                "summary": "Get list of models available for sentiment-analysis",
                "operationId": "get_versions_text_text_sentiment_analysis__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.sentiment-analysis"
                ],
                "summary": "Apply model for the sentiment-analysis task for a given models",
                "operationId": "apply_text_text_sentiment_analysis__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "zero-shot-classification-facebook-bart-large-mnli",
                                "distilbert-base-uncased",
                                "nlptown-bert-base-multilingual-uncased-sentiment",
                                "distilbert-base-uncased-finetuned-sst-2-english"
                            ],
                            "type": "string",
                            "default": "nlptown-bert-base-multilingual-uncased-sentiment"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_sentiment_analysis__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/similarity/": {
            "get": {
                "tags": [
                    "text.text.similarity"
                ],
                "summary": "Get list of models available for similarity",
                "operationId": "get_versions_text_text_similarity__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.similarity"
                ],
                "summary": "Apply model for the similarity task for a given models",
                "operationId": "apply_text_text_similarity__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "all-MiniLM-L6-v2"
                            ],
                            "type": "string",
                            "default": "all-MiniLM-L6-v2"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_similarity__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/text/text/word-alignment/": {
            "get": {
                "tags": [
                    "text.text.word-alignment"
                ],
                "summary": "Get list of models available for word-alignment",
                "operationId": "get_versions_text_text_word_alignment__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "text.text.word-alignment"
                ],
                "summary": "Apply model for the word-alignment task for a given models",
                "operationId": "apply_text_text_word_alignment__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "bert-base-multilingual-cased"
                            ],
                            "type": "string",
                            "default": "bert-base-multilingual-cased"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_word_alignment__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "Body_apply_audio_text_audio_transcription__post": {
                "title": "Body_apply_audio_text_audio_transcription__post",
                "required": [
                    "language"
                ],
                "type": "object",
                "properties": {
                    "audio": {
                        "title": "audio",
                        "type": "string",
                        "format": "binary",
                        "data_type": "audio",
                        "_examples": [
                            "https://anshe.org/audio/3Weeks-080715.mp3"
                        ]
                    },
                    "audio_url": {
                        "title": "audio_url",
                        "type": "string",
                        "_examples": [
                            "https://anshe.org/audio/3Weeks-080715.mp3"
                        ],
                        "data_type": "url"
                    },
                    "language": {
                        "title": "language",
                        "type": "string",
                        "_examples": [
                            "en"
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_image_image_background_removal__post": {
                "title": "Body_apply_image_image_background_removal__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "image",
                        "type": "string",
                        "format": "binary",
                        "data_type": "image",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ]
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ],
                        "data_type": "url"
                    }
                }
            },
            "Body_apply_image_image_colorization__post": {
                "title": "Body_apply_image_image_colorization__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "image",
                        "type": "string",
                        "format": "binary",
                        "data_type": "image",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ]
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ],
                        "data_type": "url"
                    }
                }
            },
            "Body_apply_image_image_face_bluring__post": {
                "title": "Body_apply_image_image_face_bluring__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "image",
                        "type": "string",
                        "format": "binary",
                        "data_type": "image",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ]
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ],
                        "data_type": "url"
                    }
                }
            },
            "Body_apply_image_image_uncolorization__post": {
                "title": "Body_apply_image_image_uncolorization__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "image",
                        "type": "string",
                        "format": "binary",
                        "data_type": "image",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ]
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ],
                        "data_type": "url"
                    }
                }
            },
            "Body_apply_image_text_asciify__post": {
                "title": "Body_apply_image_text_asciify__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "image",
                        "type": "string",
                        "format": "binary",
                        "data_type": "image",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ]
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ],
                        "data_type": "url"
                    }
                }
            },
            "Body_apply_image_text_classification__post": {
                "title": "Body_apply_image_text_classification__post",
                "required": [
                    "top_k"
                ],
                "type": "object",
                "properties": {
                    "image": {
                        "title": "image",
                        "type": "string",
                        "format": "binary",
                        "data_type": "image",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ]
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ],
                        "data_type": "url"
                    },
                    "top_k": {
                        "title": "top_k",
                        "type": "integer",
                        "_examples": [
                            1
                        ],
                        "data_type": "int"
                    }
                }
            },
            "Body_apply_image_text_ocr__post": {
                "title": "Body_apply_image_text_ocr__post",
                "required": [
                    "source_language"
                ],
                "type": "object",
                "properties": {
                    "image": {
                        "title": "image",
                        "type": "string",
                        "format": "binary",
                        "data_type": "image",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ]
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "_examples": [
                            "http://files.gladia.io/test/test.png"
                        ],
                        "data_type": "url"
                    },
                    "source_language": {
                        "title": "source_language",
                        "type": "string",
                        "_examples": [
                            "en"
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_autocorrect__post": {
                "title": "Body_apply_text_text_autocorrect__post",
                "required": [
                    "sentence"
                ],
                "type": "object",
                "properties": {
                    "sentence": {
                        "title": "sentence",
                        "type": "string",
                        "_examples": [
                            "Text to corrcte"
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_emotion_recognition__post": {
                "title": "Body_apply_text_text_emotion_recognition__post",
                "required": [
                    "text"
                ],
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "_examples": [
                            "I like you. I love you"
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_hate_speech_detection__post": {
                "title": "Body_apply_text_text_hate_speech_detection__post",
                "required": [
                    "text"
                ],
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "_examples": [
                            "I hate you piece of shit"
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_keyword_extraction__post": {
                "title": "Body_apply_text_text_keyword_extraction__post",
                "required": [
                    "text"
                ],
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "_examples": [
                            "The Crown is a historical drama streaming television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan, and produced by Left Bank Pictures and Sony Pictures Television for Netflix."
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_language_detection__post": {
                "title": "Body_apply_text_text_language_detection__post",
                "required": [
                    "text"
                ],
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "_examples": [
                            "Input text to perform language detection on"
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_language_generation__post": {
                "title": "Body_apply_text_text_language_generation__post",
                "required": [
                    "text"
                ],
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "_examples": [
                            "Input text to start generation from"
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_named_entity_recognition__post": {
                "title": "Body_apply_text_text_named_entity_recognition__post",
                "required": [
                    "text"
                ],
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "_examples": [
                            "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, therefore very close to the Manhattan Bridge."
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_next_sentence_prediction__post": {
                "title": "Body_apply_text_text_next_sentence_prediction__post",
                "required": [
                    "sentence_1",
                    "sentence_2"
                ],
                "type": "object",
                "properties": {
                    "sentence_1": {
                        "title": "sentence_1",
                        "type": "string",
                        "_examples": [
                            "I like you."
                        ],
                        "data_type": "text"
                    },
                    "sentence_2": {
                        "title": "sentence_2",
                        "type": "string",
                        "_examples": [
                            "But it's not about you."
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_next_word_prediction__post": {
                "title": "Body_apply_text_text_next_word_prediction__post",
                "required": [
                    "sentence"
                ],
                "type": "object",
                "properties": {
                    "sentence": {
                        "title": "sentence",
                        "type": "string",
                        "_examples": [
                            "I think therefore I"
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_plural__post": {
                "title": "Body_apply_text_text_plural__post",
                "required": [
                    "word",
                    "count"
                ],
                "type": "object",
                "properties": {
                    "word": {
                        "title": "word",
                        "type": "string",
                        "_examples": [
                            "cat"
                        ],
                        "data_type": "text"
                    },
                    "count": {
                        "title": "count",
                        "type": "integer",
                        "_examples": [
                            2
                        ],
                        "data_type": "int"
                    }
                }
            },
            "Body_apply_text_text_programming_language_generation__post": {
                "title": "Body_apply_text_text_programming_language_generation__post",
                "required": [
                    "code_snippet"
                ],
                "type": "object",
                "properties": {
                    "code_snippet": {
                        "title": "code_snippet",
                        "type": "string",
                        "_examples": [
                            "def is_palendrome(s):"
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_question_answering__post": {
                "title": "Body_apply_text_text_question_answering__post",
                "required": [
                    "context",
                    "question"
                ],
                "type": "object",
                "properties": {
                    "context": {
                        "title": "context",
                        "type": "string",
                        "_examples": [
                            "My name is Clara and I live in Berkeley."
                        ],
                        "data_type": "text"
                    },
                    "question": {
                        "title": "question",
                        "type": "string",
                        "_examples": [
                            "What's my name?"
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_sentence_paraphraser__post": {
                "title": "Body_apply_text_text_sentence_paraphraser__post",
                "required": [
                    "context"
                ],
                "type": "object",
                "properties": {
                    "context": {
                        "title": "context",
                        "type": "string",
                        "_examples": [
                            "Once, a group of frogs was roaming around the forest in search of water."
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_sentiment_analysis__post": {
                "title": "Body_apply_text_text_sentiment_analysis__post",
                "required": [
                    "text"
                ],
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "_examples": [
                            "I like you. I love you"
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_similarity__post": {
                "title": "Body_apply_text_text_similarity__post",
                "required": [
                    "sentence_1",
                    "sentence_2"
                ],
                "type": "object",
                "properties": {
                    "sentence_1": {
                        "title": "sentence_1",
                        "type": "string",
                        "_examples": [
                            "I like banana"
                        ],
                        "data_type": "text"
                    },
                    "sentence_2": {
                        "title": "sentence_2",
                        "type": "string",
                        "_examples": [
                            "I hate banana"
                        ],
                        "data_type": "text"
                    }
                }
            },
            "Body_apply_text_text_word_alignment__post": {
                "title": "Body_apply_text_text_word_alignment__post",
                "required": [
                    "input_string_language_1",
                    "input_string_language_2"
                ],
                "type": "object",
                "properties": {
                    "input_string_language_1": {
                        "title": "input_string_language_1",
                        "type": "string",
                        "_examples": [
                            "Sentence from first language"
                        ],
                        "data_type": "text"
                    },
                    "input_string_language_2": {
                        "title": "input_string_language_2",
                        "type": "string",
                        "_examples": [
                            "来自 第一 语言的 句子"
                        ],
                        "data_type": "text"
                    }
                }
            },
            "HTTPValidationError": {
                "title": "HTTPValidationError",
                "type": "object",
                "properties": {
                    "detail": {
                        "title": "Detail",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ValidationError"
                        }
                    }
                }
            },
            "ValidationError": {
                "title": "ValidationError",
                "required": [
                    "loc",
                    "msg",
                    "type"
                ],
                "type": "object",
                "properties": {
                    "loc": {
                        "title": "Location",
                        "type": "array",
                        "items": {
                            "anyOf": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "integer"
                                }
                            ]
                        }
                    },
                    "msg": {
                        "title": "Message",
                        "type": "string"
                    },
                    "type": {
                        "title": "Error Type",
                        "type": "string"
                    }
                }
            }
        },
        "securitySchemes": {
            "x_gladia_key": {
                "type": "apiKey",
                "in": "header",
                "name": "x-gladia-key"
            }
        }
    },
    "security": [
        {
            "x_gladia_key": []
        }
    ]
};
