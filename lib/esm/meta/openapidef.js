/* Generated file with "scripts/generate-metasdk.ts" */
export const openApiJson = {
    "openapi": "3.0.2",
    "info": {
        "title": "FastAPI",
        "version": "0.1.0"
    },
    "paths": {
        "/audio/text/speech_to_text/": {
            "get": {
                "tags": [
                    "audio.text.speech_to_text"
                ],
                "summary": "Get list of models available for speech_to_text",
                "operationId": "get_versions_audio_text_speech_to_text__get",
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
                    "audio.text.speech_to_text"
                ],
                "summary": "Apply model for the speech_to_text task for a given models",
                "operationId": "apply_audio_text_speech_to_text__post",
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
                                "$ref": "#/components/schemas/Body_apply_audio_text_speech_to_text__post"
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
                                "deoldify-stable",
                                "deoldify-artistic"
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
                                "mnasnet1_3",
                                "efficientnet_b6",
                                "vgg13_bn",
                                "vgg13",
                                "vgg11_bn",
                                "shufflenet_v2_x2_0_quantized_fbgemm_v1",
                                "efficientnet_v2_m",
                                "vit_b_16_v1",
                                "resnet50_quantized_fbgemm_v2",
                                "vit_h_14_swag_linear_v1",
                                "regnet_y_1_6gf_v1",
                                "vit_b_16_swag_linear_v1",
                                "inception_v3",
                                "densenet201",
                                "vgg16_bn",
                                "vit_l_16_swag_e2e_v1",
                                "squeezenet1_1",
                                "regnet_y_8gf_v1",
                                "resnext101_32x8d_v1",
                                "mobilenet_v3_large_v2",
                                "vit_l_32",
                                "shufflenet_v2_x0_5_quantized_fbgemm_v1",
                                "regnet_y_1_6gf_v2",
                                "regnet_x_16gf_v2",
                                "regnet_x_400mf_v2",
                                "efficientnet_b1_v2",
                                "regnet_x_1_6gf_v2",
                                "vit_l_16_v1",
                                "efficientnet_b1_v1",
                                "regnet_y_400mf_v1",
                                "resnext101_64x4d_quantized_fbgemm_v1",
                                "resnet152_v1",
                                "inception_v3_fbgemm_v1",
                                "regnet_y_3_2gf_v2",
                                "efficientnet_b5",
                                "regnet_y_16gf_v1",
                                "mobilenet_v3_large_quantized_qnnpack_v1",
                                "regnet_x_3_2gf_v1",
                                "efficientnet_b7",
                                "resnext101_32x8d_quantized_fbgemm_v2",
                                "resnet18",
                                "shufflenet_v2_x0_5",
                                "googlenet",
                                "shufflenet_v2_x1_0_quantized_fbgemm_v1",
                                "regnet_x_1_6gf_v1",
                                "densenet121",
                                "regnet_y_32gf_v1",
                                "regnet_y_32gf_swag_linear_v1",
                                "resnet50_v1",
                                "shufflenet_v2_x2_0",
                                "efficientnet_v2_s",
                                "vit_b_16_swag_e2e_v1",
                                "convnext_large",
                                "regnet_y_128gf_swag_e2e_v1",
                                "mnasnet0_75",
                                "resnet50_quantized_fbgemm_v1",
                                "regnet_x_3_2gf_v2",
                                "swin_s",
                                "googlenet_quantized_fbgemm_v1",
                                "regnet_x_8gf_v2",
                                "mobilenet_v2_v2",
                                "mnasnet1_0",
                                "densenet169",
                                "resnext50_32x4d_v2",
                                "densenet161",
                                "regnet_x_32gf_v2",
                                "efficientnet_v2_l",
                                "regnet_y_400mf_v2",
                                "shufflenet_v2_x1_5_quantized_fbgemm_v1",
                                "regnet_y_32gf_v2",
                                "resnet18_quantized_fbgemm_v1",
                                "regnet_x_800mf_v2",
                                "swin_b",
                                "efficientnet_b0",
                                "mobilenet_v3_large_v1",
                                "regnet_y_16gf_swag_e2e_v1",
                                "regnet_x_8gf_v1",
                                "regnet_x_32gf_v1",
                                "mobilenet_v2_v1",
                                "vgg16_v1",
                                "regnet_x_800mf_v1",
                                "vit_h_14_swag_e2e_v1",
                                "resnet152_v2",
                                "efficientnet_b4",
                                "resnext101_32x8d_quantized_fbgemm_v1",
                                "regnet_y_3_2gf_v1",
                                "wide_resnet101_2_v2",
                                "regnet_x_16gf_v1",
                                "vgg11",
                                "shufflenet_v2_x1_5",
                                "vgg19_bn",
                                "alexnet",
                                "resnext101_32x8d_v2",
                                "regnet_y_16gf_v2",
                                "efficientnet_b2",
                                "vgg19",
                                "convnext_base",
                                "convnext_small",
                                "regnet_x_400mf_v1",
                                "wide_resnet101_2_v1",
                                "shufflenet_v2_x1_0",
                                "resnext101_64x4d_v1",
                                "regnet_y_8gf_v2",
                                "squeezenet1_0",
                                "resnext50_32x4d_v1",
                                "resnet34",
                                "regnet_y_16gf_swag_linear_v1",
                                "mobilenet_v3_small",
                                "resnet50_v2",
                                "vit_l_16_swag_linear_v1",
                                "regnet_y_32gf_swag_e2e_v1",
                                "mobilenet_v2_quantized_qnnpack_v1",
                                "vit_b_32",
                                "convnext_tiny",
                                "mnasnet0_5",
                                "efficientnet_b3",
                                "regnet_y_128gf_swag_linear_v1"
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
                                "easy-ocr",
                                "tesseract-denoising",
                                "tesseract-default"
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
                        "application/json": {
                            "schema": {
                                "title": "Sentence",
                                "type": "string",
                                "default": "Text to corrcte"
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
                        "application/json": {
                            "schema": {
                                "title": "Text",
                                "type": "string",
                                "default": "I like you. I love you"
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
                        "application/json": {
                            "schema": {
                                "title": "Text",
                                "type": "string",
                                "default": "I hate you piece of shit"
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
                                "keybert-paraphrase-multilingual-MiniLM-L12-v2",
                                "keybert-paraphrase-MiniLM-L6-v2"
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
                        "application/json": {
                            "schema": {
                                "title": "Text",
                                "type": "string",
                                "default": "The Crown is a historical drama streaming television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan, and produced by Left Bank Pictures and Sony Pictures Television for Netflix. Morgan developed it from his drama film The Queen (2006) and especially his stage play The Audience (2013). The first season covers the period from Elizabeth's marriage to Philip, Duke of Edinburgh in 1947 to the disintegration of her sister Princess Margaret's engagement to Group Captain Peter Townsend in 1955. The second season covers the period from the Suez Crisis in 1956 to the retirement of Prime Minister Harold Macmillan in 1963 and the birth of Prince Edward in 1964. The third season spans 1964 to 1977, includes Harold Wilson's two periods as prime minister, and introduces Camilla Shand. The fourth season spans 1979 to the early 1990s and includes Margaret Thatcher's tenure as prime minister and Prince Charles's marriage to Lady Diana Spencer. The fifth and sixth seasons, which will close the series, will cover the Queen's reign into the 21st century. For each of the two-season increments, new actors fill the roles to account for the ageing process in the periods of time portrayed. Claire Foy portrays the Queen in the first two seasons, alongside Matt Smith as Prince Philip and Vanessa Kirby as Princess Margaret. For the third and fourth seasons, Olivia Colman takes over as the Queen, Tobias Menzies as Prince Philip, and Helena Bonham Carter as Princess Margaret. Also added to the cast in season 3 is Josh O'Connor as Prince Charles. In the fourth season, new cast members include Emma Corrin as Lady Diana Spencer and Gillian Anderson as Margaret Thatcher. Imelda Staunton, Jonathan Pryce, and Lesley Manville will succeed Colman, Menzies, and Bonham Carter, respectively, for the final two seasons, while Elizabeth Debicki and Dominic West are expected to assume the role of Princess Diana and Prince Charles, respectively. Filming takes place at Elstree Studios in Borehamwood, Hertfordshire, with location shooting throughout the United Kingdom and internationally. The first season was released by Netflix on 4 November 2016, the second on 8 December 2017, the third on 17 November 2019, and the fourth on 15 November 2020. The fifth season is anticipated in 2022. As of 2020, the estimated production budget of The Crown has been reported to be $260 million, making it one of the most expensive television series in history.[4] The Crown was praised by critics for its acting, directing, writing, cinematography, and production values, although its historical inaccuracies have received some criticism, particularly within the fourth season. Nonetheless, it received accolades at the 23rd Screen Actors Guild Awards, Foy won Best Actress in the lead role and Best Actor for John Lithgow as Winston Churchill, and has secured a total of sixty three nominations for its first four seasons at the Primetime Emmy Awards, including four for Outstanding Drama Series.[5] The series has also twice won the Golden Globe Award for Best Television Series - Drama, at the 74th and 78th ceremonies, with additional acting wins for Foy, Colman, Corrin, O'Connor and Anderson.[6] "
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
                                "toftrup-etal-2021",
                                "xlm-roberta-base-language-detection"
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
                        "application/json": {
                            "schema": {
                                "title": "Text",
                                "type": "string",
                                "default": "Input text to perform language detection on"
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
                        "application/json": {
                            "schema": {
                                "title": "Text",
                                "type": "string",
                                "default": "Input text to start generation from"
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
                        "application/json": {
                            "schema": {
                                "title": "Text",
                                "type": "string",
                                "default": "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, therefore very close to the Manhattan Bridge."
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
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_next_sentence_prediction__post"
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
                                "distilbert-base-uncased",
                                "bert-base-uncased",
                                "roberta-base",
                                "albert-base-v2"
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
                        "application/json": {
                            "schema": {
                                "title": "Sentence",
                                "type": "string",
                                "default": "I think therefore I"
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
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_plural__post"
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
                        "application/json": {
                            "schema": {
                                "title": "Code Snippet",
                                "type": "string",
                                "default": "def is_palendrome(s):"
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
                                "deepset-roberta-base-squad2",
                                "deepset_bert-base-cased-squad2",
                                "mrm8488-bert-tiny-5-finetuned-squadv2",
                                "distilbert-base-cased-distilled-squad",
                                "mfeb-albert-xxlarge-v2-squad2"
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
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_question_answering__post"
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
                        "application/json": {
                            "schema": {
                                "title": "Context",
                                "type": "string",
                                "default": "Once, a group of frogs was roaming around the forest in search of water."
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
                                "distilbert-base-uncased",
                                "distilbert-base-uncased-finetuned-sst-2-english",
                                "nlptown-bert-base-multilingual-uncased-sentiment",
                                "zero-shot-classification-facebook-bart-large-mnli"
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
                        "application/json": {
                            "schema": {
                                "title": "Text",
                                "type": "string",
                                "default": "I like you. I love you"
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
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_similarity__post"
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
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_word_alignment__post"
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
        }
    },
    "components": {
        "schemas": {
            "Body_apply_audio_text_speech_to_text__post": {
                "title": "Body_apply_audio_text_speech_to_text__post",
                "type": "object",
                "properties": {
                    "audio": {
                        "title": "Audio",
                        "type": "string",
                        "format": "binary"
                    },
                    "audio_url": {
                        "title": "Audio Url",
                        "type": "string",
                        "description": "File URL if no file upload",
                        "default": "https://anshe.org/audio/3Weeks-080715.mp3"
                    },
                    "language": {
                        "title": "Language",
                        "type": "string",
                        "default": "en"
                    }
                }
            },
            "Body_apply_image_image_background_removal__post": {
                "title": "Body_apply_image_image_background_removal__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "Image",
                        "type": "string",
                        "format": "binary"
                    },
                    "image_url": {
                        "title": "Image Url",
                        "type": "string",
                        "description": "File URL if no file upload",
                        "default": "http://files.gladia.io/test/test.png"
                    }
                }
            },
            "Body_apply_image_image_colorization__post": {
                "title": "Body_apply_image_image_colorization__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "Image",
                        "type": "string",
                        "format": "binary"
                    },
                    "image_url": {
                        "title": "Image Url",
                        "type": "string",
                        "description": "File URL if no file upload",
                        "default": "http://files.gladia.io/test/test.png"
                    }
                }
            },
            "Body_apply_image_image_face_bluring__post": {
                "title": "Body_apply_image_image_face_bluring__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "Image",
                        "type": "string",
                        "format": "binary"
                    },
                    "image_url": {
                        "title": "Image Url",
                        "type": "string",
                        "description": "File URL if no file upload",
                        "default": "http://files.gladia.io/test/test.png"
                    }
                }
            },
            "Body_apply_image_image_uncolorization__post": {
                "title": "Body_apply_image_image_uncolorization__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "Image",
                        "type": "string",
                        "format": "binary"
                    },
                    "image_url": {
                        "title": "Image Url",
                        "type": "string",
                        "description": "File URL if no file upload",
                        "default": "http://files.gladia.io/test/test.png"
                    }
                }
            },
            "Body_apply_image_text_asciify__post": {
                "title": "Body_apply_image_text_asciify__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "Image",
                        "type": "string",
                        "format": "binary"
                    },
                    "image_url": {
                        "title": "Image Url",
                        "type": "string",
                        "description": "File URL if no file upload",
                        "default": "http://files.gladia.io/test/test.png"
                    }
                }
            },
            "Body_apply_image_text_classification__post": {
                "title": "Body_apply_image_text_classification__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "Image",
                        "type": "string",
                        "format": "binary"
                    },
                    "image_url": {
                        "title": "Image Url",
                        "type": "string",
                        "description": "File URL if no file upload",
                        "default": "http://files.gladia.io/test/test.png"
                    },
                    "top_k": {
                        "title": "Top K",
                        "type": "integer",
                        "default": 1
                    }
                }
            },
            "Body_apply_image_text_ocr__post": {
                "title": "Body_apply_image_text_ocr__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "Image",
                        "type": "string",
                        "format": "binary"
                    },
                    "image_url": {
                        "title": "Image Url",
                        "type": "string",
                        "description": "File URL if no file upload",
                        "default": "http://files.gladia.io/test/test.png"
                    },
                    "source_language": {
                        "title": "Source Language",
                        "type": "string",
                        "default": "en"
                    }
                }
            },
            "Body_apply_text_text_next_sentence_prediction__post": {
                "title": "Body_apply_text_text_next_sentence_prediction__post",
                "type": "object",
                "properties": {
                    "sentence_1": {
                        "title": "Sentence 1",
                        "type": "string",
                        "default": "I like you."
                    },
                    "sentence_2": {
                        "title": "Sentence 2",
                        "type": "string",
                        "default": "But it's not about you."
                    }
                }
            },
            "Body_apply_text_text_plural__post": {
                "title": "Body_apply_text_text_plural__post",
                "type": "object",
                "properties": {
                    "word": {
                        "title": "Word",
                        "type": "string",
                        "default": "cat"
                    },
                    "count": {
                        "title": "Count",
                        "type": "integer",
                        "default": 2
                    }
                }
            },
            "Body_apply_text_text_question_answering__post": {
                "title": "Body_apply_text_text_question_answering__post",
                "type": "object",
                "properties": {
                    "context": {
                        "title": "Context",
                        "type": "string",
                        "default": "My name is Clara and I live in Berkeley."
                    },
                    "question": {
                        "title": "Question",
                        "type": "string",
                        "default": "What's my name?"
                    }
                }
            },
            "Body_apply_text_text_similarity__post": {
                "title": "Body_apply_text_text_similarity__post",
                "type": "object",
                "properties": {
                    "sentence_1": {
                        "title": "Sentence 1",
                        "type": "string",
                        "default": ""
                    },
                    "sentence_2": {
                        "title": "Sentence 2",
                        "type": "string",
                        "default": ""
                    }
                }
            },
            "Body_apply_text_text_word_alignment__post": {
                "title": "Body_apply_text_text_word_alignment__post",
                "type": "object",
                "properties": {
                    "input_string_language_1": {
                        "title": "Input String Language 1",
                        "type": "string",
                        "default": "Sentence from first language"
                    },
                    "input_string_language_2": {
                        "title": "Input String Language 2",
                        "type": "string",
                        "default": "来自 第一 语言的 句子"
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
                            "type": "string"
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
