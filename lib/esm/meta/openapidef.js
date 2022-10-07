/* Generated file with "scripts/generate-metasdk.ts" */
export const openApiJson = {
    "openapi": "3.0.2",
    "info": {
        "title": "GladIA API",
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
                                "openai-whisper-medium",
                                "openai-whisper-large",
                                "openai-whisper-base",
                                "openai-whisper-small",
                                "openai-whisper-tiny",
                                "coqui_english_huge_vocab"
                            ],
                            "type": "string",
                            "default": "openai-whisper-tiny"
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
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "coqui_english_huge_vocab": {},
                            "openai-whisper-medium": {},
                            "openai-whisper-large": {},
                            "openai-whisper-base": {},
                            "openai-whisper-tiny": {},
                            "openai-whisper-small": {}
                        },
                        "example": {
                            "coqui_english_huge_vocab": {
                                "output": {
                                    "prediction": "hi there in the day's english listening practice i'd like to help you with phrases and words about the supermarket",
                                    "prediction_raw": "hi there in the day's english listening practice i'd like to help you with phrases and words about the supermarket"
                                }
                            },
                            "openai-whisper-medium": {
                                "output": {
                                    "prediction": "hi there in the day's english listening practice i'd like to help you with phrases and words about the supermarket",
                                    "prediction_raw": "hi there in the day's english listening practice i'd like to help you with phrases and words about the supermarket"
                                }
                            },
                            "openai-whisper-large": {
                                "output": {
                                    "prediction": "hi there in the day's english listening practice i'd like to help you with phrases and words about the supermarket",
                                    "prediction_raw": "hi there in the day's english listening practice i'd like to help you with phrases and words about the supermarket"
                                }
                            },
                            "openai-whisper-base": {
                                "output": {
                                    "prediction": "hi there in the day's english listening practice i'd like to help you with phrases and words about the supermarket",
                                    "prediction_raw": "hi there in the day's english listening practice i'd like to help you with phrases and words about the supermarket"
                                }
                            },
                            "openai-whisper-tiny": {
                                "output": {
                                    "prediction": "hi there in the day's english listening practice i'd like to help you with phrases and words about the supermarket",
                                    "prediction_raw": "hi there in the day's english listening practice i'd like to help you with phrases and words about the supermarket"
                                }
                            },
                            "openai-whisper-small": {
                                "output": {
                                    "prediction": "hi there in the day's english listening practice i'd like to help you with phrases and words about the supermarket",
                                    "prediction_raw": "hi there in the day's english listening practice i'd like to help you with phrases and words about the supermarket"
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
                            "default": "mobilenet"
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
                                    "format": "binary",
                                    "data_type": "image"
                                }
                            }
                        },
                        "examples": {
                            "mobilenet": {
                                "from_owl2_jpg": "http://files.gladia.io/output/image/image/background-removal/mobilenet/examples/from_owl2_jpg.png",
                                "from_owl2_png": "http://files.gladia.io/output/image/image/background-removal/mobilenet/examples/from_owl2_png.png"
                            },
                            "xception": {
                                "from_owl2_jpg": "http://files.gladia.io/output/image/image/background-removal/xception/examples/from_owl2_jpg.png",
                                "from_owl2_png": "http://files.gladia.io/output/image/image/background-removal/xception/examples/from_owl2_png.png"
                            }
                        },
                        "example": {
                            "mobilenet": "http://files.gladia.io/output/image/image/background-removal/mobilenet/example/from_owl2_png.png",
                            "xception": "http://files.gladia.io/output/image/image/background-removal/xception/example/from_owl2_png.png"
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
        "/image/image/background-replacement/": {
            "get": {
                "tags": [
                    "image.image.background-replacement"
                ],
                "summary": "Get list of models available for background-replacement",
                "operationId": "get_versions_image_image_background_replacement__get",
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
                    "image.image.background-replacement"
                ],
                "summary": "Apply model for the background-replacement task for a given models",
                "operationId": "apply_image_image_background_replacement__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "mobilenet"
                            ],
                            "type": "string",
                            "default": "mobilenet"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_image_background_replacement__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "image/*": {
                                "schema": {
                                    "type": "string",
                                    "format": "binary",
                                    "data_type": "image"
                                }
                            }
                        },
                        "examples": {
                            "mobilenet": {
                                "from_owl2_jpg": "http://files.gladia.io/output/image/image/background-removal/mobilenet/examples/from_owl2_jpg.png",
                                "from_owl2_png": "http://files.gladia.io/output/image/image/background-removal/mobilenet/examples/from_owl2_png.png"
                            }
                        },
                        "example": {
                            "mobilenet": "http://files.gladia.io/output/image/image/background-removal/mobilenet/example/from_owl2_png.png"
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
                                "mlhubber_colorize",
                                "deoldify-artistic"
                            ],
                            "type": "string",
                            "default": "mlhubber_colorize"
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
                                    "format": "binary",
                                    "data_type": "image"
                                }
                            }
                        },
                        "examples": {
                            "mlhubber_colorize": {
                                "from_rsz_paris_jpg": "http://files.gladia.io/output/image/image/colorization/deoldify-stable/examples/from_rsz_paris_jpg.png",
                                "from_rsz_paris_png": "http://files.gladia.io/output/image/image/colorization/deoldify-stable/examples/from_rsz_paris_png.png"
                            },
                            "deoldify-stable": {
                                "from_rsz_paris_jpg": "http://files.gladia.io/output/image/image/colorization/deoldify-stable/examples/from_rsz_paris_jpg.png",
                                "from_rsz_paris_png": "http://files.gladia.io/output/image/image/colorization/deoldify-stable/examples/from_rsz_paris_png.png"
                            },
                            "deoldify-artistic": {
                                "from_rsz_paris_jpg": "http://files.gladia.io/output/image/image/colorization/deoldify-artistic/examples/from_rsz_paris_jpg.png",
                                "from_rsz_paris_png": "http://files.gladia.io/output/image/image/colorization/deoldify-artistic/examples/from_rsz_paris_png.png"
                            }
                        },
                        "example": {
                            "mlhubber_colorize": "http://files.gladia.io/output/image/image/colorization/deoldify-stable/example/from_rsz_paris_jpg.png",
                            "deoldify-stable": "http://files.gladia.io/output/image/image/colorization/deoldify-stable/example/from_rsz_paris_jpg.png",
                            "deoldify-artistic": "http://files.gladia.io/output/image/image/colorization/deoldify-artistic/example/from_rsz_paris_jpg.png"
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
        "/image/image/deblurring/": {
            "get": {
                "tags": [
                    "image.image.deblurring"
                ],
                "summary": "Get list of models available for deblurring",
                "operationId": "get_versions_image_image_deblurring__get",
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
                    "image.image.deblurring"
                ],
                "summary": "Apply model for the deblurring task for a given models",
                "operationId": "apply_image_image_deblurring__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "CMFNet"
                            ],
                            "type": "string",
                            "default": "CMFNet"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_image_deblurring__post"
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
                                    "format": "binary",
                                    "data_type": "image"
                                }
                            }
                        },
                        "examples": {
                            "CMFNet": {}
                        },
                        "example": {
                            "CMFNet": ""
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
        "/image/image/enhancement/": {
            "get": {
                "tags": [
                    "image.image.enhancement"
                ],
                "summary": "Get list of models available for enhancement",
                "operationId": "get_versions_image_image_enhancement__get",
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
                    "image.image.enhancement"
                ],
                "summary": "Apply model for the enhancement task for a given models",
                "operationId": "apply_image_image_enhancement__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "LOL",
                                "FiveK"
                            ],
                            "type": "string",
                            "default": "FiveK"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_image_enhancement__post"
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
                                    "format": "binary",
                                    "data_type": "image"
                                }
                            }
                        },
                        "examples": {
                            "LOL": {},
                            "FiveK": {}
                        },
                        "example": {
                            "LOL": "",
                            "FiveK": ""
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
                                    "format": "binary",
                                    "data_type": "image"
                                }
                            }
                        },
                        "examples": {
                            "ageitgey": {
                                "from_face-bluring_jpg": "http://files.gladia.io/output/image/image/face-bluring/ageitgey/examples/from_face-bluring_jpg.png",
                                "from_face-bluring_png": "http://files.gladia.io/output/image/image/face-bluring/ageitgey/examples/from_face-bluring_png.png"
                            }
                        },
                        "example": {
                            "ageitgey": "http://files.gladia.io/output/image/image/face-bluring/ageitgey/example/from_face-bluring_png.png"
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
        "/image/image/guided-inpainting/": {
            "get": {
                "tags": [
                    "image.image.guided-inpainting"
                ],
                "summary": "Get list of models available for guided-inpainting",
                "operationId": "get_versions_image_image_guided_inpainting__get",
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
                    "image.image.guided-inpainting"
                ],
                "summary": "Apply model for the guided-inpainting task for a given models",
                "operationId": "apply_image_image_guided_inpainting__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "stable-diffusion"
                            ],
                            "type": "string",
                            "default": "stable-diffusion"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_image_guided_inpainting__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "image/*": {
                                "schema": {
                                    "type": "string",
                                    "format": "binary",
                                    "data_type": "image"
                                }
                            }
                        },
                        "examples": {
                            "stable-diffusion": {}
                        },
                        "example": {
                            "stable-diffusion": ""
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
        "/image/image/inpainting/": {
            "get": {
                "tags": [
                    "image.image.inpainting"
                ],
                "summary": "Get list of models available for inpainting",
                "operationId": "get_versions_image_image_inpainting__get",
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
                    "image.image.inpainting"
                ],
                "summary": "Apply model for the inpainting task for a given models",
                "operationId": "apply_image_image_inpainting__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "latent-diffusion",
                                "lama",
                                "zits",
                                "mat",
                                "fcf"
                            ],
                            "type": "string",
                            "default": "zits"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_image_inpainting__post"
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
                                    "format": "binary",
                                    "data_type": "image"
                                }
                            }
                        },
                        "examples": {
                            "mat": {},
                            "zits": {},
                            "lama": {},
                            "latent-diffusion": {},
                            "fcf": {}
                        },
                        "example": {
                            "mat": "",
                            "zits": "",
                            "lama": "",
                            "latent-diffusion": "",
                            "fcf": ""
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
        "/image/image/super-resolution/": {
            "get": {
                "tags": [
                    "image.image.super-resolution"
                ],
                "summary": "Get list of models available for super-resolution",
                "operationId": "get_versions_image_image_super_resolution__get",
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
                    "image.image.super-resolution"
                ],
                "summary": "Apply model for the super-resolution task for a given models",
                "operationId": "apply_image_image_super_resolution__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [],
                            "type": "string",
                            "default": "latent-sr"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_image_super_resolution__post"
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
                                    "format": "binary",
                                    "data_type": "image"
                                }
                            }
                        },
                        "examples": {},
                        "example": {}
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
                                    "format": "binary",
                                    "data_type": "image"
                                }
                            }
                        },
                        "examples": {
                            "v1": {
                                "from_landscape-pics-wallpapers_jpg": "http://files.gladia.io/output/image/image/uncolorization/v1/examples/from_landscape-pics-wallpapers_jpg.png",
                                "from_landscape-pics-wallpapers_png": "http://files.gladia.io/output/image/image/uncolorization/v1/examples/from_landscape-pics-wallpapers_png.png"
                            }
                        },
                        "example": {
                            "v1": "http://files.gladia.io/output/image/image/uncolorization/v1/example/from_landscape-pics-wallpapers_png.png"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "ramesh-aditya": {}
                        },
                        "example": {
                            "ramesh-aditya": {
                                "output": {
                                    "prediction": "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#SS%%%%%SS#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@S?+;:,,,,,,,,,:;+*%#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#%+:,,,,,,,,,,,,,,,,,,,:+%#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*:,,,,,,,,,,,,,,,,,,,,,,,,,:*S@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@S+:,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,+S@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@?:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+#@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@S:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@%:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@%:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@#:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:S@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@;,,,,,,,,,,,,,,,,+SS*:,,,,,,,,,,,,,,;%S?;,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,?@@@@%:,,,,,,,,,,,,;#@@@#;,,,,,,,,,,,,,,,,,+@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@S:,,,,,,,,,,,,,,,+@@@@@@?,,,,,,,,,,,:#@@@@@#:,,,,,,,,,,,,,,,,,%@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@;,,,,,,,,,,,,,,,:#@@@@@@@;,,,,,,,,,,?@@@@@@@*,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,+@@@@@@@@?,,,,,,,,,:#@@@@@@@S:,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@:,,,,,,,,,,,,,,,,%@@@@@@@@S:,,,,,,,,+@@@@@@@@@;,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,:S@@@@@@@@@:,,,,,,,,*@@@@@@@@@*,,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@;,,,,,,,,,,,,,,,,:#@@@@@@@@@;,,,,,,,,%@@@@@@@@@?,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@%,:,,,,,,,,,,,,,,,;@@@@@@@@@@+,,,,,,,,S@@@@@@@@@%,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@+,,,,,,,,,,,,,,,,,;@@@@@@@@@@+,,,,,,,,S@@@@@@@@@%,,,,,,,,,,,,,,,,,,,;@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@#:,,,,,,,,,,,,,,,,,;@@@@@@@@@@+,,,,,,,,S@@@@@@@@@%,,,,,,,,,,,,,,,,,,,,S@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,,,:@@@@@@@@@@;,,,,,,,,%@@@@@@@@@?,,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@+,,,,,,,,,,,,,,,,,,:#@@@@@@@@@:,,,,,,,,?@@@@@@@@@*,,,,,,,,,,,,,,,,,,,,;@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@:,,,,,,,,,,,,,,,,,,,%@@@@@@@@#:,,,,,,,,+@@@@@@@@@;,,,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@@\n@@@@@@@@@@@@@@S:,,,,,,,,,,,,,,,,,,,+@@@@@@@@?,,,,,,,,,:#@@@@@@@#:,,,,,,,,,,,,,,,,,,,,,S@@@@@@@@@@@@@\n@@@@@@@@@@@@@@%,,,,,,,,,,,,,,,,,,,,:#@@@@@@@;,,,,,,,,,,?@@@@@@@?,,,,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@\n@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,,,,,,*@@@@@@%,,,,,,,,,,,;@@@@@@#:,,,,,,,,,,,,,,,,,,,,,,+@@@@@@@@@@@@@\n@@@@@@@@@@@@@@+,,,,,,,,,,,,,,,,,,,,,,%@@@@S:,,,,,,,,,,,,+@@@@@+,,,,,,,,,,,,,,,,,,,,,,,;@@@@@@@@@@@@@\n@@@@@@@@@@@@@@;,,,,,,,,,,,,,,,,,,,,,,,?##%:,,,,,,,,,,,,,,+S#S;,,,,,,,,,,,,,,,,,,,,,,,,;@@@@@@@@@@@@@\n@@@@@@@@@@@@@@;,,,,,,,,,,,,,,,,,,,,,,,,::,,,,,,,,,,,,,,,,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,:@@@@@@@@@@@@@\n@@@@@@@@@@@@@@:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@\n@@@@@@@@@@@@@@:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@\n@@@@@@@@@@@@@@:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@\n@@@@@@@@@@@@@@:,,,,,,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@\n@@@@@@@@@@@@@@;,,,,,,,,;:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:;,,,,,,,,:#@@@@@@@@@@@@\n@@@@@@@@@@@@@@;,,,,,,,,:*:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:?:,,,,,,,,;@@@@@@@@@@@@@\n@@@@@@@@@@@@@@+,,,,,,,,,;%:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%+,,,,,,,,,;@@@@@@@@@@@@@\n@@@@@@@@@@@@@@*,,,,,,,,,,*%:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:S%,,,,,,,,,,+@@@@@@@@@@@@@\n@@@@@@@@@@@@@@?,,,,,,,,,,,S%:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%#:,,,,,,,,,,*@@@@@@@@@@@@@\n@@@@@@@@@@@@@@S,,,,,,,,,,,:#S:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%@;,,,,,,,,,,,%@@@@@@@@@@@@@\n@@@@@@@@@@@@@@#:,,,,,,,,,,,;@#;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%@?,,,,,,,,,,,:#@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@+,,,,,,,,,,,,+@@*:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:S@%,,,,,,,,,,,,;@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@?,,,,,,,,,,,,,*@@S;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+#@#:,,,,,,,,,,,,*@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@S:,,,,,,,,,,,,,?@@@?:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:?@@#;,,,,,,,,,,,,,S@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@;,,,,,,,,,,,,,,*@@@#?;,,,,,,,,,,,,,,,,,,,,,,,,,,:*#@@@;,,,,,,,,,,,,,:@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,*@@@@@S+:,,,,,,,,,,,,,,,,,,,,:;?#@@@#;,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@#:,,,,,,,,,,,,,,,;#@@@@@@S?+;::,,,,,,,,::;+*%#@@@@@#;,,,,,,,,,,,,,,:#@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,:S@@@@@@@@@##SS%%%SSS##@@@@@@@@@S:,,,,,,,,,,,,,,,+@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@#:,,,,,,,,,,,,,,,,,*#@@@@@@@@@@@@@@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,:S@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,,,:?@@@@@@@@@@@@@@@@@@@@@@@@%;,,,,,,,,,,,,,,,,,+@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@#:,,,,,,,,,,,,,,,,,,,:?#@@@@@@@@@@@@@@@@@@@%;,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,,,,,,:+%#@@@@@@@@@@@@@S*:,,,,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@+,,,,,,,,,,,,,,,,,,,,,,,:;*?%SSSS%?*;:,,,,,,,,,,,,,,,,,,,,,,;@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@#:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:S@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@%,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@+,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@+,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@?:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@S:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+#@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@?;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:?#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@?;,,,,,,,,,,,,,,,,,,,,,,,,,,,;?#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@S*:,,,,,,,,,,,,,,,,,,,,,:+%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@S*+::,,,,,,,,,,,,:;*%#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@S%?**+++**?%S#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
                                    "prediction_raw": "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#SS%%%%%SS#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@S?+;:,,,,,,,,,:;+*%#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#%+:,,,,,,,,,,,,,,,,,,,:+%#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*:,,,,,,,,,,,,,,,,,,,,,,,,,:*S@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@S+:,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,+S@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@?:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+#@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@S:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@%:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@%:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@#:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:S@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@;,,,,,,,,,,,,,,,,+SS*:,,,,,,,,,,,,,,;%S?;,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,?@@@@%:,,,,,,,,,,,,;#@@@#;,,,,,,,,,,,,,,,,,+@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@S:,,,,,,,,,,,,,,,+@@@@@@?,,,,,,,,,,,:#@@@@@#:,,,,,,,,,,,,,,,,,%@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@;,,,,,,,,,,,,,,,:#@@@@@@@;,,,,,,,,,,?@@@@@@@*,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,+@@@@@@@@?,,,,,,,,,:#@@@@@@@S:,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@:,,,,,,,,,,,,,,,,%@@@@@@@@S:,,,,,,,,+@@@@@@@@@;,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,:S@@@@@@@@@:,,,,,,,,*@@@@@@@@@*,,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@;,,,,,,,,,,,,,,,,:#@@@@@@@@@;,,,,,,,,%@@@@@@@@@?,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@%,:,,,,,,,,,,,,,,,;@@@@@@@@@@+,,,,,,,,S@@@@@@@@@%,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@+,,,,,,,,,,,,,,,,,;@@@@@@@@@@+,,,,,,,,S@@@@@@@@@%,,,,,,,,,,,,,,,,,,,;@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@#:,,,,,,,,,,,,,,,,,;@@@@@@@@@@+,,,,,,,,S@@@@@@@@@%,,,,,,,,,,,,,,,,,,,,S@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,,,:@@@@@@@@@@;,,,,,,,,%@@@@@@@@@?,,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@+,,,,,,,,,,,,,,,,,,:#@@@@@@@@@:,,,,,,,,?@@@@@@@@@*,,,,,,,,,,,,,,,,,,,,;@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@:,,,,,,,,,,,,,,,,,,,%@@@@@@@@#:,,,,,,,,+@@@@@@@@@;,,,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@@\n@@@@@@@@@@@@@@S:,,,,,,,,,,,,,,,,,,,+@@@@@@@@?,,,,,,,,,:#@@@@@@@#:,,,,,,,,,,,,,,,,,,,,,S@@@@@@@@@@@@@\n@@@@@@@@@@@@@@%,,,,,,,,,,,,,,,,,,,,:#@@@@@@@;,,,,,,,,,,?@@@@@@@?,,,,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@\n@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,,,,,,*@@@@@@%,,,,,,,,,,,;@@@@@@#:,,,,,,,,,,,,,,,,,,,,,,+@@@@@@@@@@@@@\n@@@@@@@@@@@@@@+,,,,,,,,,,,,,,,,,,,,,,%@@@@S:,,,,,,,,,,,,+@@@@@+,,,,,,,,,,,,,,,,,,,,,,,;@@@@@@@@@@@@@\n@@@@@@@@@@@@@@;,,,,,,,,,,,,,,,,,,,,,,,?##%:,,,,,,,,,,,,,,+S#S;,,,,,,,,,,,,,,,,,,,,,,,,;@@@@@@@@@@@@@\n@@@@@@@@@@@@@@;,,,,,,,,,,,,,,,,,,,,,,,,::,,,,,,,,,,,,,,,,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,:@@@@@@@@@@@@@\n@@@@@@@@@@@@@@:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@\n@@@@@@@@@@@@@@:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@\n@@@@@@@@@@@@@@:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@\n@@@@@@@@@@@@@@:,,,,,,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@\n@@@@@@@@@@@@@@;,,,,,,,,;:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:;,,,,,,,,:#@@@@@@@@@@@@\n@@@@@@@@@@@@@@;,,,,,,,,:*:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:?:,,,,,,,,;@@@@@@@@@@@@@\n@@@@@@@@@@@@@@+,,,,,,,,,;%:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%+,,,,,,,,,;@@@@@@@@@@@@@\n@@@@@@@@@@@@@@*,,,,,,,,,,*%:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:S%,,,,,,,,,,+@@@@@@@@@@@@@\n@@@@@@@@@@@@@@?,,,,,,,,,,,S%:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%#:,,,,,,,,,,*@@@@@@@@@@@@@\n@@@@@@@@@@@@@@S,,,,,,,,,,,:#S:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%@;,,,,,,,,,,,%@@@@@@@@@@@@@\n@@@@@@@@@@@@@@#:,,,,,,,,,,,;@#;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%@?,,,,,,,,,,,:#@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@+,,,,,,,,,,,,+@@*:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:S@%,,,,,,,,,,,,;@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@?,,,,,,,,,,,,,*@@S;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+#@#:,,,,,,,,,,,,*@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@S:,,,,,,,,,,,,,?@@@?:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:?@@#;,,,,,,,,,,,,,S@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@;,,,,,,,,,,,,,,*@@@#?;,,,,,,,,,,,,,,,,,,,,,,,,,,:*#@@@;,,,,,,,,,,,,,:@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,*@@@@@S+:,,,,,,,,,,,,,,,,,,,,:;?#@@@#;,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@#:,,,,,,,,,,,,,,,;#@@@@@@S?+;::,,,,,,,,::;+*%#@@@@@#;,,,,,,,,,,,,,,:#@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,:S@@@@@@@@@##SS%%%SSS##@@@@@@@@@S:,,,,,,,,,,,,,,,+@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@#:,,,,,,,,,,,,,,,,,*#@@@@@@@@@@@@@@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,:S@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,,,:?@@@@@@@@@@@@@@@@@@@@@@@@%;,,,,,,,,,,,,,,,,,+@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@#:,,,,,,,,,,,,,,,,,,,:?#@@@@@@@@@@@@@@@@@@@%;,,,,,,,,,,,,,,,,,,:#@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,,,,,,:+%#@@@@@@@@@@@@@S*:,,,,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@+,,,,,,,,,,,,,,,,,,,,,,,:;*?%SSSS%?*;:,,,,,,,,,,,,,,,,,,,,,,;@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@#:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:S@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@%,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,?@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@?,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@+,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@+,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@?:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@S:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+#@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@?;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:?#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@?;,,,,,,,,,,,,,,,,,,,,,,,,,,,;?#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@S*:,,,,,,,,,,,,,,,,,,,,,:+%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@S*+::,,,,,,,,,,,,:;*%#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@S%?**+++**?%S#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
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
                                "regnet_y_1_6gf_v2",
                                "resnet50_quantized_fbgemm_v1",
                                "regnet_y_16gf_v1",
                                "regnet_x_16gf_v2",
                                "efficientnet_v2_s",
                                "regnet_y_32gf_swag_linear_v1",
                                "shufflenet_v2_x1_5_quantized_fbgemm_v1",
                                "inception_v3_fbgemm_v1",
                                "resnext101_32x8d_quantized_fbgemm_v1",
                                "densenet169",
                                "mobilenet_v3_large_v2",
                                "regnet_y_8gf_v1",
                                "resnext50_32x4d_v2",
                                "resnet50_quantized_fbgemm_v2",
                                "vit_h_14_swag_e2e_v1",
                                "inception_v3",
                                "shufflenet_v2_x1_5",
                                "densenet161",
                                "efficientnet_b6",
                                "regnet_y_400mf_v2",
                                "vgg16_v1",
                                "mnasnet1_3",
                                "vit_b_16_swag_e2e_v1",
                                "regnet_x_16gf_v1",
                                "vit_b_16_v1",
                                "vgg11",
                                "mobilenet_v3_large_quantized_qnnpack_v1",
                                "mobilenet_v3_small",
                                "regnet_y_16gf_v2",
                                "swin_b",
                                "resnext50_32x4d_v1",
                                "regnet_x_8gf_v2",
                                "vgg19",
                                "vit_b_16_swag_linear_v1",
                                "resnext101_64x4d_quantized_fbgemm_v1",
                                "squeezenet1_1",
                                "regnet_x_800mf_v2",
                                "efficientnet_b5",
                                "regnet_x_1_6gf_v1",
                                "regnet_y_3_2gf_v1",
                                "regnet_x_3_2gf_v1",
                                "vgg16_bn",
                                "googlenet",
                                "vgg13_bn",
                                "efficientnet_b7",
                                "resnext101_32x8d_v2",
                                "regnet_y_3_2gf_v2",
                                "regnet_y_128gf_swag_linear_v1",
                                "regnet_y_32gf_swag_e2e_v1",
                                "densenet201",
                                "vit_l_16_v1",
                                "vit_l_16_swag_e2e_v1",
                                "regnet_y_32gf_v2",
                                "swin_t",
                                "vit_h_14_swag_linear_v1",
                                "shufflenet_v2_x1_0_quantized_fbgemm_v1",
                                "regnet_y_8gf_v2",
                                "resnet18",
                                "regnet_y_400mf_v1",
                                "resnext101_32x8d_v1",
                                "resnet152_v2",
                                "efficientnet_b2",
                                "resnet50_v2",
                                "mobilenet_v2_v1",
                                "regnet_y_32gf_v1",
                                "alexnet",
                                "regnet_x_800mf_v1",
                                "shufflenet_v2_x2_0_quantized_fbgemm_v1",
                                "squeezenet1_0",
                                "mobilenet_v3_large_v1",
                                "efficientnet_v2_m",
                                "mnasnet0_75",
                                "vit_b_32",
                                "vgg11_bn",
                                "mnasnet0_5",
                                "efficientnet_b3",
                                "regnet_x_400mf_v1",
                                "convnext_large",
                                "regnet_x_400mf_v2",
                                "shufflenet_v2_x0_5_quantized_fbgemm_v1",
                                "mnasnet1_0",
                                "efficientnet_b0",
                                "mobilenet_v2_v2",
                                "efficientnet_b4",
                                "vit_l_32",
                                "resnext101_64x4d_v1",
                                "resnet152_v1",
                                "regnet_x_3_2gf_v2",
                                "regnet_y_1_6gf_v1",
                                "efficientnet_b1_v2",
                                "shufflenet_v2_x0_5",
                                "convnext_small",
                                "densenet121",
                                "regnet_x_32gf_v1",
                                "regnet_y_16gf_swag_linear_v1",
                                "vit_l_16_swag_linear_v1",
                                "resnet18_quantized_fbgemm_v1",
                                "vgg19_bn",
                                "wide_resnet101_2_v1",
                                "regnet_y_128gf_swag_e2e_v1",
                                "regnet_x_32gf_v2",
                                "convnext_tiny",
                                "swin_s",
                                "shufflenet_v2_x2_0",
                                "regnet_x_8gf_v1",
                                "wide_resnet101_2_v2",
                                "resnet34",
                                "convnext_base",
                                "shufflenet_v2_x1_0",
                                "mobilenet_v2_quantized_qnnpack_v1",
                                "regnet_y_16gf_swag_e2e_v1",
                                "resnext101_32x8d_quantized_fbgemm_v2",
                                "resnet50_v1",
                                "vgg13",
                                "regnet_x_1_6gf_v2",
                                "googlenet_quantized_fbgemm_v1",
                                "efficientnet_v2_l",
                                "efficientnet_b1_v1"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "swin_b": {},
                            "regnet_y_8gf_v2": {},
                            "vgg13": {},
                            "vgg13_bn": {},
                            "efficientnet_b1_v2": {},
                            "regnet_x_1_6gf_v1": {},
                            "regnet_y_32gf_v1": {},
                            "regnet_y_16gf_swag_linear_v1": {},
                            "mobilenet_v2_v2": {},
                            "efficientnet_b5": {},
                            "resnet18": {},
                            "resnext101_64x4d_v1": {},
                            "googlenet": {},
                            "resnet34": {},
                            "efficientnet_b0": {},
                            "regnet_y_128gf_swag_e2e_v1": {},
                            "shufflenet_v2_x1_0_quantized_fbgemm_v1": {},
                            "efficientnet_b4": {},
                            "resnet18_quantized_fbgemm_v1": {},
                            "squeezenet1_0": {},
                            "mnasnet1_3": {},
                            "regnet_y_32gf_swag_e2e_v1": {},
                            "regnet_x_3_2gf_v2": {},
                            "efficientnet_b6": {},
                            "mobilenet_v3_large_quantized_qnnpack_v1": {},
                            "regnet_y_16gf_v2": {},
                            "regnet_y_3_2gf_v1": {},
                            "vit_l_16_swag_e2e_v1": {},
                            "resnet50_v2": {},
                            "inception_v3": {},
                            "convnext_small": {},
                            "densenet121": {},
                            "regnet_y_1_6gf_v1": {},
                            "shufflenet_v2_x0_5": {},
                            "mobilenet_v3_large_v1": {},
                            "vit_l_32": {},
                            "wide_resnet101_2_v1": {},
                            "regnet_y_32gf_v2": {},
                            "resnext101_32x8d_quantized_fbgemm_v1": {},
                            "regnet_y_1_6gf_v2": {},
                            "convnext_large": {},
                            "regnet_y_32gf_swag_linear_v1": {},
                            "regnet_x_1_6gf_v2": {},
                            "resnet50_quantized_fbgemm_v2": {},
                            "swin_s": {},
                            "regnet_x_16gf_v2": {},
                            "vgg16_bn": {},
                            "regnet_y_16gf_v1": {},
                            "regnet_x_8gf_v2": {},
                            "vit_b_16_v1": {},
                            "resnext50_32x4d_v2": {},
                            "resnext101_64x4d_quantized_fbgemm_v1": {},
                            "inception_v3_fbgemm_v1": {},
                            "mobilenet_v2_quantized_qnnpack_v1": {},
                            "regnet_x_16gf_v1": {},
                            "mobilenet_v3_small": {},
                            "swin_t": {},
                            "resnet50_quantized_fbgemm_v1": {},
                            "wide_resnet101_2_v2": {},
                            "mnasnet0_5": {},
                            "vit_h_14_swag_e2e_v1": {},
                            "efficientnet_v2_s": {},
                            "regnet_x_8gf_v1": {},
                            "mobilenet_v3_large_v2": {},
                            "regnet_y_16gf_swag_e2e_v1": {},
                            "efficientnet_v2_l": {},
                            "efficientnet_b3": {},
                            "vit_l_16_swag_linear_v1": {},
                            "vgg16_v1": {},
                            "regnet_x_400mf_v1": {},
                            "vgg11_bn": {},
                            "resnext101_32x8d_quantized_fbgemm_v2": {},
                            "convnext_base": {},
                            "resnet152_v2": {},
                            "shufflenet_v2_x1_0": {},
                            "regnet_y_128gf_swag_linear_v1": {},
                            "squeezenet1_1": {},
                            "densenet161": {},
                            "resnext101_32x8d_v1": {},
                            "shufflenet_v2_x2_0_quantized_fbgemm_v1": {},
                            "efficientnet_v2_m": {},
                            "mnasnet0_75": {},
                            "vgg19_bn": {},
                            "regnet_x_400mf_v2": {},
                            "shufflenet_v2_x2_0": {},
                            "resnet50_v1": {},
                            "regnet_x_3_2gf_v1": {},
                            "googlenet_quantized_fbgemm_v1": {},
                            "shufflenet_v2_x1_5_quantized_fbgemm_v1": {},
                            "regnet_x_32gf_v1": {},
                            "efficientnet_b7": {},
                            "resnet152_v1": {},
                            "vgg19": {},
                            "densenet169": {},
                            "vit_l_16_v1": {},
                            "mobilenet_v2_v1": {},
                            "regnet_y_3_2gf_v2": {},
                            "shufflenet_v2_x0_5_quantized_fbgemm_v1": {},
                            "efficientnet_b1_v1": {},
                            "resnext50_32x4d_v1": {},
                            "shufflenet_v2_x1_5": {},
                            "regnet_y_8gf_v1": {},
                            "regnet_y_400mf_v1": {},
                            "vit_b_16_swag_linear_v1": {},
                            "resnext101_32x8d_v2": {},
                            "vit_h_14_swag_linear_v1": {},
                            "efficientnet_b2": {},
                            "regnet_x_800mf_v2": {},
                            "vgg11": {},
                            "alexnet": {},
                            "regnet_x_800mf_v1": {},
                            "vit_b_32": {},
                            "regnet_x_32gf_v2": {},
                            "regnet_y_400mf_v2": {},
                            "densenet201": {},
                            "convnext_tiny": {},
                            "vit_b_16_swag_e2e_v1": {},
                            "mnasnet1_0": {}
                        },
                        "example": {
                            "swin_b": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.3932996392250061
                                    }
                                }
                            },
                            "regnet_y_8gf_v2": {
                                "output": {
                                    "prediction": "promontory",
                                    "prediction_raw": {
                                        "promontory": 0.12022505700588226
                                    }
                                }
                            },
                            "vgg13": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.6528533101081848
                                    }
                                }
                            },
                            "vgg13_bn": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.577950656414032
                                    }
                                }
                            },
                            "efficientnet_b1_v2": {
                                "output": {
                                    "prediction": "seashore",
                                    "prediction_raw": {
                                        "seashore": 0.10095896571874619
                                    }
                                }
                            },
                            "regnet_x_1_6gf_v1": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.1722194105386734
                                    }
                                }
                            },
                            "regnet_y_32gf_v1": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.36131247878074646
                                    }
                                }
                            },
                            "regnet_y_16gf_swag_linear_v1": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.10830651223659515
                                    }
                                }
                            },
                            "mobilenet_v2_v2": {
                                "output": {
                                    "prediction": "seashore",
                                    "prediction_raw": {
                                        "seashore": 0.0650380328297615
                                    }
                                }
                            },
                            "efficientnet_b5": {
                                "output": {
                                    "prediction": "lakeside",
                                    "prediction_raw": {
                                        "lakeside": 0.2900703251361847
                                    }
                                }
                            },
                            "resnet18": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.8097574710845947
                                    }
                                }
                            },
                            "resnext101_64x4d_v1": {
                                "output": {
                                    "prediction": "promontory",
                                    "prediction_raw": {
                                        "promontory": 0.13178148865699768
                                    }
                                }
                            },
                            "googlenet": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.16693061590194702
                                    }
                                }
                            },
                            "resnet34": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.699151337146759
                                    }
                                }
                            },
                            "efficientnet_b0": {
                                "output": {
                                    "prediction": "alp",
                                    "prediction_raw": {
                                        "alp": 0.09692889451980591
                                    }
                                }
                            },
                            "regnet_y_128gf_swag_e2e_v1": {
                                "output": {
                                    "prediction": "valley",
                                    "prediction_raw": {
                                        "valley": 0.08818889409303665
                                    }
                                }
                            },
                            "shufflenet_v2_x1_0_quantized_fbgemm_v1": {
                                "output": {
                                    "prediction": "abaya",
                                    "prediction_raw": {
                                        "abaya": 0.23133359849452972
                                    }
                                }
                            },
                            "efficientnet_b4": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.11946076899766922
                                    }
                                }
                            },
                            "resnet18_quantized_fbgemm_v1": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.8313139081001282
                                    }
                                }
                            },
                            "squeezenet1_0": {
                                "output": {
                                    "prediction": "snowmobile",
                                    "prediction_raw": {
                                        "snowmobile": 0.09909936785697937
                                    }
                                }
                            },
                            "mnasnet1_3": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.09166575223207474
                                    }
                                }
                            },
                            "regnet_y_32gf_swag_e2e_v1": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.1421479731798172
                                    }
                                }
                            },
                            "regnet_x_3_2gf_v2": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.04178115725517273
                                    }
                                }
                            },
                            "efficientnet_b6": {
                                "output": {
                                    "prediction": "cliff",
                                    "prediction_raw": {
                                        "cliff": 0.3522721827030182
                                    }
                                }
                            },
                            "mobilenet_v3_large_quantized_qnnpack_v1": {
                                "output": {
                                    "prediction": "lakeside",
                                    "prediction_raw": {
                                        "lakeside": 0.4177060127258301
                                    }
                                }
                            },
                            "regnet_y_16gf_v2": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.35309579968452454
                                    }
                                }
                            },
                            "regnet_y_3_2gf_v1": {
                                "output": {
                                    "prediction": "lakeside",
                                    "prediction_raw": {
                                        "lakeside": 0.353649377822876
                                    }
                                }
                            },
                            "vit_l_16_swag_e2e_v1": {
                                "output": {
                                    "prediction": "cliff",
                                    "prediction_raw": {
                                        "cliff": 0.34419989585876465
                                    }
                                }
                            },
                            "resnet50_v2": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.0555257722735405
                                    }
                                }
                            },
                            "inception_v3": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.48751023411750793
                                    }
                                }
                            },
                            "convnext_small": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.5380098819732666
                                    }
                                }
                            },
                            "densenet121": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.09741620719432831
                                    }
                                }
                            },
                            "regnet_y_1_6gf_v1": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.09617836773395538
                                    }
                                }
                            },
                            "shufflenet_v2_x0_5": {
                                "output": {
                                    "prediction": "paddle",
                                    "prediction_raw": {
                                        "paddle": 0.262510746717453
                                    }
                                }
                            },
                            "mobilenet_v3_large_v1": {
                                "output": {
                                    "prediction": "lakeside",
                                    "prediction_raw": {
                                        "lakeside": 0.2423388510942459
                                    }
                                }
                            },
                            "vit_l_32": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.32558080554008484
                                    }
                                }
                            },
                            "wide_resnet101_2_v1": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.4200357496738434
                                    }
                                }
                            },
                            "regnet_y_32gf_v2": {
                                "output": {
                                    "prediction": "promontory",
                                    "prediction_raw": {
                                        "promontory": 0.16082394123077393
                                    }
                                }
                            },
                            "resnext101_32x8d_quantized_fbgemm_v1": {
                                "output": {
                                    "prediction": "shovel",
                                    "prediction_raw": {
                                        "shovel": 0.1708516776561737
                                    }
                                }
                            },
                            "regnet_y_1_6gf_v2": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.1611064076423645
                                    }
                                }
                            },
                            "convnext_large": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.5777087807655334
                                    }
                                }
                            },
                            "regnet_y_32gf_swag_linear_v1": {
                                "output": {
                                    "prediction": "cliff",
                                    "prediction_raw": {
                                        "cliff": 0.18534152209758759
                                    }
                                }
                            },
                            "regnet_x_1_6gf_v2": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.06593503803014755
                                    }
                                }
                            },
                            "resnet50_quantized_fbgemm_v2": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.11847657710313797
                                    }
                                }
                            },
                            "swin_s": {
                                "output": {
                                    "prediction": "tripod",
                                    "prediction_raw": {
                                        "tripod": 0.37666431069374084
                                    }
                                }
                            },
                            "regnet_x_16gf_v2": {
                                "output": {
                                    "prediction": "cliff",
                                    "prediction_raw": {
                                        "cliff": 0.10201084613800049
                                    }
                                }
                            },
                            "vgg16_bn": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.7308942675590515
                                    }
                                }
                            },
                            "regnet_y_16gf_v1": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.4108821153640747
                                    }
                                }
                            },
                            "regnet_x_8gf_v2": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.06222308799624443
                                    }
                                }
                            },
                            "vit_b_16_v1": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.30405619740486145
                                    }
                                }
                            },
                            "resnext50_32x4d_v2": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.0934772714972496
                                    }
                                }
                            },
                            "resnext101_64x4d_quantized_fbgemm_v1": {
                                "output": {
                                    "prediction": "promontory",
                                    "prediction_raw": {
                                        "promontory": 0.14395612478256226
                                    }
                                }
                            },
                            "inception_v3_fbgemm_v1": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.5571927428245544
                                    }
                                }
                            },
                            "mobilenet_v2_quantized_qnnpack_v1": {
                                "output": {
                                    "prediction": "lakeside",
                                    "prediction_raw": {
                                        "lakeside": 0.07235865294933319
                                    }
                                }
                            },
                            "regnet_x_16gf_v1": {
                                "output": {
                                    "prediction": "bannister",
                                    "prediction_raw": {
                                        "bannister": 0.15585002303123474
                                    }
                                }
                            },
                            "mobilenet_v3_small": {
                                "output": {
                                    "prediction": "seashore",
                                    "prediction_raw": {
                                        "seashore": 0.2199273556470871
                                    }
                                }
                            },
                            "swin_t": {
                                "output": {
                                    "prediction": "barrow",
                                    "prediction_raw": {
                                        "barrow": 0.12124842405319214
                                    }
                                }
                            },
                            "resnet50_quantized_fbgemm_v1": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.1804669052362442
                                    }
                                }
                            },
                            "wide_resnet101_2_v2": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.1473565697669983
                                    }
                                }
                            },
                            "mnasnet0_5": {
                                "output": {
                                    "prediction": "seashore",
                                    "prediction_raw": {
                                        "seashore": 0.09758026152849197
                                    }
                                }
                            },
                            "vit_h_14_swag_e2e_v1": {
                                "output": {
                                    "prediction": "cliff",
                                    "prediction_raw": {
                                        "cliff": 0.36821088194847107
                                    }
                                }
                            },
                            "efficientnet_v2_s": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.1753736436367035
                                    }
                                }
                            },
                            "regnet_x_8gf_v1": {
                                "output": {
                                    "prediction": "beacon",
                                    "prediction_raw": {
                                        "beacon": 0.172464057803154
                                    }
                                }
                            },
                            "mobilenet_v3_large_v2": {
                                "output": {
                                    "prediction": "seashore",
                                    "prediction_raw": {
                                        "seashore": 0.11343847215175629
                                    }
                                }
                            },
                            "regnet_y_16gf_swag_e2e_v1": {
                                "output": {
                                    "prediction": "valley",
                                    "prediction_raw": {
                                        "valley": 0.11854865401983261
                                    }
                                }
                            },
                            "efficientnet_v2_l": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.6270161271095276
                                    }
                                }
                            },
                            "efficientnet_b3": {
                                "output": {
                                    "prediction": "lakeside",
                                    "prediction_raw": {
                                        "lakeside": 0.0925227627158165
                                    }
                                }
                            },
                            "vit_l_16_swag_linear_v1": {
                                "output": {
                                    "prediction": "cliff",
                                    "prediction_raw": {
                                        "cliff": 0.10021310299634933
                                    }
                                }
                            },
                            "vgg16_v1": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.4182645380496979
                                    }
                                }
                            },
                            "regnet_x_400mf_v1": {
                                "output": {
                                    "prediction": "seashore",
                                    "prediction_raw": {
                                        "seashore": 0.2673293948173523
                                    }
                                }
                            },
                            "vgg11_bn": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.6954163908958435
                                    }
                                }
                            },
                            "resnext101_32x8d_quantized_fbgemm_v2": {
                                "output": {
                                    "prediction": "promontory",
                                    "prediction_raw": {
                                        "promontory": 0.03870021179318428
                                    }
                                }
                            },
                            "convnext_base": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.39748141169548035
                                    }
                                }
                            },
                            "resnet152_v2": {
                                "output": {
                                    "prediction": "promontory",
                                    "prediction_raw": {
                                        "promontory": 0.07687747478485107
                                    }
                                }
                            },
                            "shufflenet_v2_x1_0": {
                                "output": {
                                    "prediction": "abaya",
                                    "prediction_raw": {
                                        "abaya": 0.4193829596042633
                                    }
                                }
                            },
                            "regnet_y_128gf_swag_linear_v1": {
                                "output": {
                                    "prediction": "cliff",
                                    "prediction_raw": {
                                        "cliff": 0.14050009846687317
                                    }
                                }
                            },
                            "squeezenet1_1": {
                                "output": {
                                    "prediction": "sandbar",
                                    "prediction_raw": {
                                        "sandbar": 0.0765710100531578
                                    }
                                }
                            },
                            "densenet161": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.1749277114868164
                                    }
                                }
                            },
                            "resnext101_32x8d_v1": {
                                "output": {
                                    "prediction": "beacon",
                                    "prediction_raw": {
                                        "beacon": 0.12177004665136337
                                    }
                                }
                            },
                            "shufflenet_v2_x2_0_quantized_fbgemm_v1": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.08167291432619095
                                    }
                                }
                            },
                            "efficientnet_v2_m": {
                                "output": {
                                    "prediction": "cliff",
                                    "prediction_raw": {
                                        "cliff": 0.3254139721393585
                                    }
                                }
                            },
                            "mnasnet0_75": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.09170877933502197
                                    }
                                }
                            },
                            "vgg19_bn": {
                                "output": {
                                    "prediction": "promontory",
                                    "prediction_raw": {
                                        "promontory": 0.20847973227500916
                                    }
                                }
                            },
                            "regnet_x_400mf_v2": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.05274086818099022
                                    }
                                }
                            },
                            "shufflenet_v2_x2_0": {
                                "output": {
                                    "prediction": "sandbar",
                                    "prediction_raw": {
                                        "sandbar": 0.04349374771118164
                                    }
                                }
                            },
                            "resnet50_v1": {
                                "output": {
                                    "prediction": "cliff",
                                    "prediction_raw": {
                                        "cliff": 0.13162769377231598
                                    }
                                }
                            },
                            "regnet_x_3_2gf_v1": {
                                "output": {
                                    "prediction": "lakeside",
                                    "prediction_raw": {
                                        "lakeside": 0.1827687919139862
                                    }
                                }
                            },
                            "googlenet_quantized_fbgemm_v1": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.16816742718219757
                                    }
                                }
                            },
                            "shufflenet_v2_x1_5_quantized_fbgemm_v1": {
                                "output": {
                                    "prediction": "seashore",
                                    "prediction_raw": {
                                        "seashore": 0.04986368119716644
                                    }
                                }
                            },
                            "regnet_x_32gf_v1": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.5338901281356812
                                    }
                                }
                            },
                            "efficientnet_b7": {
                                "output": {
                                    "prediction": "cliff",
                                    "prediction_raw": {
                                        "cliff": 0.30060410499572754
                                    }
                                }
                            },
                            "resnet152_v1": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.41433727741241455
                                    }
                                }
                            },
                            "vgg19": {
                                "output": {
                                    "prediction": "cliff",
                                    "prediction_raw": {
                                        "cliff": 0.12857191264629364
                                    }
                                }
                            },
                            "densenet169": {
                                "output": {
                                    "prediction": "beacon",
                                    "prediction_raw": {
                                        "beacon": 0.2582046687602997
                                    }
                                }
                            },
                            "vit_l_16_v1": {
                                "output": {
                                    "prediction": "promontory",
                                    "prediction_raw": {
                                        "promontory": 0.3554977476596832
                                    }
                                }
                            },
                            "mobilenet_v2_v1": {
                                "output": {
                                    "prediction": "abaya",
                                    "prediction_raw": {
                                        "abaya": 0.08071760088205338
                                    }
                                }
                            },
                            "regnet_y_3_2gf_v2": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.19120916724205017
                                    }
                                }
                            },
                            "shufflenet_v2_x0_5_quantized_fbgemm_v1": {
                                "output": {
                                    "prediction": "paddle",
                                    "prediction_raw": {
                                        "paddle": 0.16110903024673462
                                    }
                                }
                            },
                            "efficientnet_b1_v1": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.2512894868850708
                                    }
                                }
                            },
                            "resnext50_32x4d_v1": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.2613239288330078
                                    }
                                }
                            },
                            "shufflenet_v2_x1_5": {
                                "output": {
                                    "prediction": "seashore",
                                    "prediction_raw": {
                                        "seashore": 0.04995758458971977
                                    }
                                }
                            },
                            "regnet_y_8gf_v1": {
                                "output": {
                                    "prediction": "promontory",
                                    "prediction_raw": {
                                        "promontory": 0.15991847217082977
                                    }
                                }
                            },
                            "regnet_y_400mf_v1": {
                                "output": {
                                    "prediction": "seashore",
                                    "prediction_raw": {
                                        "seashore": 0.29542624950408936
                                    }
                                }
                            },
                            "vit_b_16_swag_linear_v1": {
                                "output": {
                                    "prediction": "alp",
                                    "prediction_raw": {
                                        "alp": 0.24459868669509888
                                    }
                                }
                            },
                            "resnext101_32x8d_v2": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.04291790723800659
                                    }
                                }
                            },
                            "vit_h_14_swag_linear_v1": {
                                "output": {
                                    "prediction": "cliff",
                                    "prediction_raw": {
                                        "cliff": 0.17356985807418823
                                    }
                                }
                            },
                            "efficientnet_b2": {
                                "output": {
                                    "prediction": "lakeside",
                                    "prediction_raw": {
                                        "lakeside": 0.3715182840824127
                                    }
                                }
                            },
                            "regnet_x_800mf_v2": {
                                "output": {
                                    "prediction": "seashore",
                                    "prediction_raw": {
                                        "seashore": 0.14616985619068146
                                    }
                                }
                            },
                            "vgg11": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.35587963461875916
                                    }
                                }
                            },
                            "alexnet": {
                                "output": {
                                    "prediction": "oystercatcher",
                                    "prediction_raw": {
                                        "oystercatcher": 0.20533981919288635
                                    }
                                }
                            },
                            "regnet_x_800mf_v1": {
                                "output": {
                                    "prediction": "seashore",
                                    "prediction_raw": {
                                        "seashore": 0.14616985619068146
                                    }
                                }
                            },
                            "vit_b_32": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.6326947212219238
                                    }
                                }
                            },
                            "regnet_x_32gf_v2": {
                                "output": {
                                    "prediction": "promontory",
                                    "prediction_raw": {
                                        "promontory": 0.15553943812847137
                                    }
                                }
                            },
                            "regnet_y_400mf_v2": {
                                "output": {
                                    "prediction": "wing",
                                    "prediction_raw": {
                                        "wing": 0.17748476564884186
                                    }
                                }
                            },
                            "densenet201": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.2897392213344574
                                    }
                                }
                            },
                            "convnext_tiny": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.24696601927280426
                                    }
                                }
                            },
                            "vit_b_16_swag_e2e_v1": {
                                "output": {
                                    "prediction": "valley",
                                    "prediction_raw": {
                                        "valley": 0.19425733387470245
                                    }
                                }
                            },
                            "mnasnet1_0": {
                                "output": {
                                    "prediction": "volcano",
                                    "prediction_raw": {
                                        "volcano": 0.134337916970253
                                    }
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
                                "easy-ocr",
                                "textract-extractor",
                                "tesseract-denoising"
                            ],
                            "type": "string",
                            "default": "tesseract-denoising"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "easy-ocr": {},
                            "tesseract-default": {},
                            "tesseract-denoising": {},
                            "textract-extractor": {}
                        },
                        "example": {
                            "easy-ocr": {
                                "output": {
                                    "prediction": "This is a lot of 12 point text to test the\nocr code and see if it works on\nall types\nof file format:\nThe quick brown dog jumped over the\nlazy fox The quick brown dog jumped\nover the lazy fox. The quick brown dog\njumped over the lazy fox. The quick\nbrown dog jumped over the lazy fox.",
                                    "prediction_raw": [
                                        "This is a lot of 12 point text to test the",
                                        "ocr code and see if it works on",
                                        "all types",
                                        "of file format:",
                                        "The quick brown dog jumped over the",
                                        "lazy fox The quick brown dog jumped",
                                        "over the lazy fox. The quick brown dog",
                                        "jumped over the lazy fox. The quick",
                                        "brown dog jumped over the lazy fox."
                                    ]
                                }
                            },
                            "tesseract-default": {
                                "output": {
                                    "prediction": "{'prediction': 'This is a lot of 12 point text to test the\\nocr code and see if it works on all types\\nof file format.\\n\\nThe quick brown dog jumped over the\\nlazy fox. The quick brown dog jumped\\nover the lazy fox. The quick brown dog\\njumped over the lazy fox. The quick\\nbrown dog jumped over the lazy fox.', 'prediction_raw': 'This is a lot of 12 point text to test the\\nocr code and see if it works on all types\\nof file format.\\n\\nThe quick brown dog jumped over the\\nlazy fox. The quick brown dog jumped\\nover the lazy fox. The quick brown dog\\njumped over the lazy fox. The quick\\nbrown dog jumped over the lazy fox.\\n\\x0c'}",
                                    "prediction_raw": "{'prediction': 'This is a lot of 12 point text to test the\\nocr code and see if it works on all types\\nof file format.\\n\\nThe quick brown dog jumped over the\\nlazy fox. The quick brown dog jumped\\nover the lazy fox. The quick brown dog\\njumped over the lazy fox. The quick\\nbrown dog jumped over the lazy fox.', 'prediction_raw': 'This is a lot of 12 point text to test the\\nocr code and see if it works on all types\\nof file format.\\n\\nThe quick brown dog jumped over the\\nlazy fox. The quick brown dog jumped\\nover the lazy fox. The quick brown dog\\njumped over the lazy fox. The quick\\nbrown dog jumped over the lazy fox.\\n\\x0c'}"
                                }
                            },
                            "tesseract-denoising": {
                                "output": {
                                    "prediction": "{'prediction': 'This is a lot of 12 point text to test the\\nocr code and see if it works on all types\\nof file format.\\n\\nThe quick brown dog jumped over the\\nlazy fox. The quick brown dog jumped\\nover the lazy fox. The quick brown dog\\njumped over the lazy fox. The quick\\nbrown dog jumped over the lazy fox.', 'prediction_raw': 'This is a lot of 12 point text to test the\\nocr code and see if it works on all types\\nof file format.\\n\\nThe quick brown dog jumped over the\\nlazy fox. The quick brown dog jumped\\nover the lazy fox. The quick brown dog\\njumped over the lazy fox. The quick\\nbrown dog jumped over the lazy fox.\\n\\x0c'}",
                                    "prediction_raw": "{'prediction': 'This is a lot of 12 point text to test the\\nocr code and see if it works on all types\\nof file format.\\n\\nThe quick brown dog jumped over the\\nlazy fox. The quick brown dog jumped\\nover the lazy fox. The quick brown dog\\njumped over the lazy fox. The quick\\nbrown dog jumped over the lazy fox.', 'prediction_raw': 'This is a lot of 12 point text to test the\\nocr code and see if it works on all types\\nof file format.\\n\\nThe quick brown dog jumped over the\\nlazy fox. The quick brown dog jumped\\nover the lazy fox. The quick brown dog\\njumped over the lazy fox. The quick\\nbrown dog jumped over the lazy fox.\\n\\x0c'}"
                                }
                            },
                            "textract-extractor": {
                                "output": {
                                    "prediction": "{'prediction': 'This is a lot of 12 point text to test the\\nocr code and see if it works on all types\\nof file format.\\n\\nThe quick brown dog jumped over the\\nlazy fox. The quick brown dog jumped\\nover the lazy fox. The quick brown dog\\njumped over the lazy fox. The quick\\nbrown dog jumped over the lazy fox.', 'prediction_raw': 'This is a lot of 12 point text to test the\\nocr code and see if it works on all types\\nof file format.\\n\\nThe quick brown dog jumped over the\\nlazy fox. The quick brown dog jumped\\nover the lazy fox. The quick brown dog\\njumped over the lazy fox. The quick\\nbrown dog jumped over the lazy fox.\\n\\x0c'}",
                                    "prediction_raw": "{'prediction': 'This is a lot of 12 point text to test the\\nocr code and see if it works on all types\\nof file format.\\n\\nThe quick brown dog jumped over the\\nlazy fox. The quick brown dog jumped\\nover the lazy fox. The quick brown dog\\njumped over the lazy fox. The quick\\nbrown dog jumped over the lazy fox.', 'prediction_raw': 'This is a lot of 12 point text to test the\\nocr code and see if it works on all types\\nof file format.\\n\\nThe quick brown dog jumped over the\\nlazy fox. The quick brown dog jumped\\nover the lazy fox. The quick brown dog\\njumped over the lazy fox. The quick\\nbrown dog jumped over the lazy fox.\\n\\x0c'}"
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
        "/text/image/image-generation/": {
            "get": {
                "tags": [
                    "text.image.image-generation"
                ],
                "summary": "Get list of models available for image-generation",
                "operationId": "get_versions_text_image_image_generation__get",
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
                    "text.image.image-generation"
                ],
                "summary": "Apply model for the image-generation task for a given models",
                "operationId": "apply_text_image_image_generation__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "dream-studio",
                                "stable-diffusion"
                            ],
                            "type": "string",
                            "default": "stable-diffusion"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_image_image_generation__post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "image/*": {
                                "schema": {
                                    "type": "string",
                                    "format": "binary",
                                    "data_type": "image"
                                }
                            }
                        },
                        "examples": {
                            "dream-studio": {},
                            "stable-diffusion": {}
                        },
                        "example": {
                            "dream-studio": {
                                "output": "http://files.gladia.io/output/text/image/image-generation/dream-studio/example/output.png"
                            },
                            "stable-diffusion": {
                                "output": "http://files.gladia.io/output/text/image/image-generation/stable-diffusion/example/output.png"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "flexudy-t5-base-multi-sentence-doctor": {}
                        },
                        "example": {
                            "flexudy-t5-base-multi-sentence-doctor": {
                                "output": {
                                    "prediction": "Text to correct.",
                                    "prediction_raw": "Text to correct."
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
        "/text/text/conversation-summarization/": {
            "get": {
                "tags": [
                    "text.text.conversation-summarization"
                ],
                "summary": "Get list of models available for conversation-summarization",
                "operationId": "get_versions_text_text_conversation_summarization__get",
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
                    "text.text.conversation-summarization"
                ],
                "summary": "Apply model for the conversation-summarization task for a given models",
                "operationId": "apply_text_text_conversation_summarization__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "bart-large-xsum-samsum"
                            ],
                            "type": "string",
                            "default": "bart-large-xsum-samsum"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_conversation_summarization__post"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "bart-large-xsum-samsum": {}
                        },
                        "example": {
                            "bart-large-xsum-samsum": {
                                "output": {
                                    "prediction": "Amanda can't find Betty's number. She wants to ask Larry to text her.",
                                    "prediction_raw": "Amanda can't find Betty's number. She wants to ask Larry to text her."
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
                                "mrm8488-t5-base-finetuned-emotion",
                                "distilbert-base-uncased-emotion"
                            ],
                            "type": "string",
                            "default": "distilbert-base-uncased-emotion"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "mrm8488-t5-base-finetuned-emotion": {}
                        },
                        "example": {
                            "mrm8488-t5-base-finetuned-emotion": {
                                "output": {
                                    "prediction": "love",
                                    "prediction_raw": "love"
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
                                "byt5-base-tweet-hate-detection",
                                "Hate-speech-CNERG-dehatebert-mono-english",
                                "distilbert-base-uncased-emotion"
                            ],
                            "type": "string",
                            "default": "distilbert-base-uncased-emotion"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "byt5-base-tweet-hate-detection": {},
                            "Hate-speech-CNERG-dehatebert-mono-english": {}
                        },
                        "example": {
                            "byt5-base-tweet-hate-detection": {
                                "output": {
                                    "prediction": "hate-speech",
                                    "prediction_raw": "hate-speech"
                                }
                            },
                            "Hate-speech-CNERG-dehatebert-mono-english": {
                                "output": {
                                    "prediction": "normal",
                                    "prediction_raw": {
                                        "hate-speech": -1.2259272336959839,
                                        "normal": 0.7596375346183777,
                                        "offensive": -0.14166447520256042
                                    }
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
        "/text/text/headline-generation/": {
            "get": {
                "tags": [
                    "text.text.headline-generation"
                ],
                "summary": "Get list of models available for headline-generation",
                "operationId": "get_versions_text_text_headline_generation__get",
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
                    "text.text.headline-generation"
                ],
                "summary": "Apply model for the headline-generation task for a given models",
                "operationId": "apply_text_text_headline_generation__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "michau-t5-base-en-generate-headline",
                                "t5-base-en-generate-headline",
                                "jpt",
                                "jpt",
                                "jpt",
                                "jpt",
                                "jpt",
                                "jpt",
                                "jpt",
                                "jpt",
                                "jpt",
                                "jpt",
                                "jpt"
                            ],
                            "type": "string",
                            "default": "jpt"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_headline_generation__post"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "michau-t5-base-en-generate-headline": {}
                        },
                        "example": {
                            "michau-t5-base-en-generate-headline": ""
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "keybert-paraphrase-MiniLM-L6-v2": {},
                            "keybert-paraphrase-multilingual-MiniLM-L12-v2": {}
                        },
                        "example": {
                            "keybert-paraphrase-MiniLM-L6-v2": {
                                "output": {
                                    "prediction": "crown",
                                    "prediction_raw": {
                                        "about": 0.24735741847436696,
                                        "and": 0.31554650814351587,
                                        "bank": 0.4026865313411446,
                                        "by": 0.4293189828087821,
                                        "created": 0.33610244669788986,
                                        "crown": 0.6297527379336725,
                                        "drama": 0.4454262384063794,
                                        "elizabeth": 0.421053177125834,
                                        "for": 0.39288703172829187,
                                        "historical": 0.2958510640523947,
                                        "ii": 0.40951230436931274,
                                        "is": 0.347529033355905,
                                        "left": 0.30462632609484713,
                                        "morgan": 0.46438870948490385,
                                        "netflix": 0.6000469165910842,
                                        "of": 0.35768368681539164,
                                        "peter": 0.3262377209817865,
                                        "pictures": 0.3742874978726894,
                                        "principally": 0.31429086674588924,
                                        "produced": 0.41988124006933775,
                                        "queen": 0.5371925538922315,
                                        "reign": 0.35261342190807765,
                                        "series": 0.4277106013320685,
                                        "sony": 0.43125196016868583,
                                        "streaming": 0.45595478675345624,
                                        "television": 0.5015415701766239,
                                        "the": 0.30461606356656057,
                                        "written": 0.3872030505606101
                                    }
                                }
                            },
                            "keybert-paraphrase-multilingual-MiniLM-L12-v2": {
                                "output": {
                                    "prediction": "crown",
                                    "prediction_raw": {
                                        "created": 0.2019,
                                        "crown": 0.4796,
                                        "drama": 0.2053,
                                        "elizabeth": 0.3004,
                                        "netflix": 0.4155,
                                        "produced": 0.2005,
                                        "queen": 0.4424,
                                        "reign": 0.2205,
                                        "streaming": 0.2295,
                                        "television": 0.3308
                                    }
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "toftrup-etal-2021": {},
                            "xlm-roberta-base-language-detection": {}
                        },
                        "example": {
                            "toftrup-etal-2021": {
                                "output": {
                                    "prediction": "en",
                                    "prediction_raw": {
                                        "ca": 8.21634071407817e-15,
                                        "cs": 4.7321993545956786e-11,
                                        "da": 4.473857742604004e-11,
                                        "de": 1.495134398232789e-11,
                                        "en": 1,
                                        "es": 6.605182113279245e-17,
                                        "et": 3.5428931923625617e-12,
                                        "fi": 1.3827705473701268e-11,
                                        "fr": 1.0004761463733303e-9,
                                        "hr": 2.2525141745322746e-13,
                                        "hu": 1.2315837877253846e-16,
                                        "it": 5.734748054442252e-15,
                                        "lt": 1.3730410427739313e-15,
                                        "nl": 1.5426789845562894e-9,
                                        "no": 2.5324322500130947e-11,
                                        "pl": 1.37614474936959e-12,
                                        "pt": 3.1926596664387215e-15,
                                        "ro": 2.7238041683252945e-11,
                                        "sv": 4.5725047012612485e-12,
                                        "tr": 1.4567780515775565e-17
                                    }
                                }
                            },
                            "xlm-roberta-base-language-detection": {
                                "output": {
                                    "prediction": "en",
                                    "prediction_raw": {
                                        "ar": 0.001376415553069437,
                                        "bg": 0.0029424669251411927,
                                        "de": 0.0022904768754592564,
                                        "el": 0.004305503429307771,
                                        "en": 0.9244956260789275,
                                        "es": 0.002683074030362192,
                                        "fr": 0.002248369644105763,
                                        "hi": 0.001967777178071579,
                                        "it": 0.004696885769587887,
                                        "ja": 0.0014298486967355849,
                                        "nl": 0.007786510792034554,
                                        "pl": 0.002553964243190283,
                                        "pt": 0.0035345921895915005,
                                        "ru": 0.004772598415703833,
                                        "sw": 0.00752854235481527,
                                        "th": 0.002198432075768062,
                                        "tr": 0.00766579213146218,
                                        "ur": 0.011671827208697095,
                                        "vi": 0.0030269897147428447,
                                        "zh": 0.0008243066932263367
                                    }
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
                                "bloom-560m",
                                "EleutherAI-gpt-neo-2_7B"
                            ],
                            "type": "string",
                            "default": "bloom-560m"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "bloom-560m": {},
                            "EleutherAI-gpt-neo-2_7B": {}
                        },
                        "example": {
                            "bloom-560m": {
                                "output": {
                                    "prediction": "Input text to start generation from text file\n        @param int lineNumber\n        @return\n        @throws Exception\n        @throws IOException\n        @throws InterruptedException\n        */\n        public void generateTextLine(int lineNumber, String s) throws Exception, IOException, InterruptedException {\n           ",
                                    "prediction_raw": [
                                        {
                                            "generated_text": "Input text to start generation from text file\n        @param int lineNumber\n        @return\n        @throws Exception\n        @throws IOException\n        @throws InterruptedException\n        */\n        public void generateTextLine(int lineNumber, String s) throws Exception, IOException, InterruptedException {\n           "
                                        }
                                    ]
                                }
                            },
                            "EleutherAI-gpt-neo-2_7B": {
                                "output": {
                                    "prediction": "Input text to start generation from\n                       </TextBlock>\n                ",
                                    "prediction_raw": [
                                        {
                                            "generated_text": "Input text to start generation from\n                       </TextBlock>\n                "
                                        }
                                    ]
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "array"
                                }
                            }
                        },
                        "examples": {
                            "dbmdz-bert-large-cased-finetuned-conll03-english": {}
                        },
                        "example": {
                            "dbmdz-bert-large-cased-finetuned-conll03-english": {
                                "output": {
                                    "prediction": [
                                        {
                                            "end": 18,
                                            "entity_group": "ORG",
                                            "score": 0.987525224685669,
                                            "start": 15,
                                            "word": "Inc"
                                        },
                                        {
                                            "end": 55,
                                            "entity_group": "LOC",
                                            "score": 0.9583774209022522,
                                            "start": 42,
                                            "word": "New York City"
                                        },
                                        {
                                            "end": 87,
                                            "entity_group": "ORG",
                                            "score": 0.8003666400909424,
                                            "start": 82,
                                            "word": "Dumbo"
                                        },
                                        {
                                            "end": 126,
                                            "entity_group": "LOC",
                                            "score": 0.9854662418365479,
                                            "start": 117,
                                            "word": "Manhattan"
                                        }
                                    ],
                                    "prediction_raw": [
                                        "[[{\"entity_group\": \"ORG\", \"score\": 0.987525224685669, \"word\": \"Inc\", \"start\": 15, \"end\": 18}, {\"entity_group\": \"LOC\", \"score\": 0.9583774209022522, \"word\": \"New York City\", \"start\": 42, \"end\": 55}, {\"entity_group\": \"ORG\", \"score\": 0.8003666400909424, \"word\": \"Dumbo\", \"start\": 82, \"end\": 87}, {\"entity_group\": \"LOC\", \"score\": 0.9854662418365479, \"word\": \"Manhattan\", \"start\": 117, \"end\": 126}]]"
                                    ]
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "number"
                                }
                            }
                        },
                        "examples": {
                            "bert-base-uncased": {}
                        },
                        "example": {
                            "bert-base-uncased": {
                                "output": {
                                    "prediction": 0.9999550580978394,
                                    "prediction_raw": 0.9999550580978394
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
                                "bert-base-uncased",
                                "distilbert-base-uncased",
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "roberta-base": {},
                            "albert-base-v2": {},
                            "distilbert-base-uncased": {},
                            "bert-base-uncased": {}
                        },
                        "example": {
                            "roberta-base": {
                                "output": {
                                    "prediction": "...",
                                    "prediction_raw": {
                                        " -": 0.08073694258928299,
                                        "...": 0.1309060901403427,
                                        "</s>": 0.0927213802933693
                                    }
                                }
                            },
                            "albert-base-v2": {
                                "output": {
                                    "prediction": "?'",
                                    "prediction_raw": {
                                        "!": 0.08785669505596161,
                                        "!'": 0.2887132167816162,
                                        "?'": 0.31290754675865173
                                    }
                                }
                            },
                            "distilbert-base-uncased": {
                                "output": {
                                    "prediction": "am",
                                    "prediction_raw": {
                                        ".": 0.059710793197155,
                                        "am": 0.10172799229621887,
                                        "shall": 0.07562018185853958
                                    }
                                }
                            },
                            "bert-base-uncased": {
                                "output": {
                                    "prediction": ".",
                                    "prediction_raw": {
                                        "!": 0.02144467830657959,
                                        ".": 0.9096482396125793,
                                        ";": 0.056629203259944916
                                    }
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "sentdex-GPyT": {}
                        },
                        "example": {
                            "sentdex-GPyT": {
                                "output": {
                                    "prediction": "def is_palendrome(s): return False\n    if s == 'a':\n        return True\n    if s == 'b':\n        return False\n    if s == 'c':\n        return False\n    if s == 'd':\n        return False\n    if s == 'e':\n        return False\n    if s == 'f':\n        return",
                                    "prediction_raw": "def is_palendrome(s): return False<N>    if s == 'a':<N>        return True<N>    if s == 'b':<N>        return False<N>    if s == 'c':<N>        return False<N>    if s == 'd':<N>        return False<N>    if s == 'e':<N>        return False<N>    if s == 'f':<N>        return"
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
                                "mrm8488-bert-tiny-5-finetuned-squadv2",
                                "distilbert-base-cased-distilled-squad",
                                "mfeb-albert-xxlarge-v2-squad2",
                                "deepset-roberta-base-squad2"
                            ],
                            "type": "string",
                            "default": "distilbert-base-cased-distilled-squad"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "mrm8488-bert-tiny-5-finetuned-squadv2": {},
                            "deepset-roberta-base-squad2": {},
                            "mfeb-albert-xxlarge-v2-squad2": {},
                            "distilbert-base-cased-distilled-squad": {},
                            "deepset_bert-base-cased-squad2": {}
                        },
                        "example": {
                            "mrm8488-bert-tiny-5-finetuned-squadv2": {
                                "output": {
                                    "prediction": "Clara",
                                    "prediction_raw": [
                                        {
                                            "answer": "Clara",
                                            "end": 16,
                                            "score": 0.9866082668304443,
                                            "start": 11
                                        }
                                    ]
                                }
                            },
                            "deepset-roberta-base-squad2": {
                                "output": {
                                    "prediction": "Clara",
                                    "prediction_raw": [
                                        {
                                            "answer": "Clara",
                                            "end": 16,
                                            "score": 0.9326565265655518,
                                            "start": 11
                                        }
                                    ]
                                }
                            },
                            "mfeb-albert-xxlarge-v2-squad2": {
                                "output": {
                                    "prediction": " Clara",
                                    "prediction_raw": [
                                        {
                                            "answer": " Clara",
                                            "end": 16,
                                            "score": 0.9977526664733887,
                                            "start": 10
                                        }
                                    ]
                                }
                            },
                            "distilbert-base-cased-distilled-squad": {
                                "output": {
                                    "prediction": "Clara",
                                    "prediction_raw": [
                                        {
                                            "answer": "Clara",
                                            "end": 16,
                                            "score": 0.996519148349762,
                                            "start": 11
                                        }
                                    ]
                                }
                            },
                            "deepset_bert-base-cased-squad2": {
                                "output": {
                                    "prediction": "Clara",
                                    "prediction_raw": "Clara"
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
                                "ramsrigouthamg-t5-large-paraphraser-diverse-high-quality",
                                "ramsrigouthamg-t5_sentence_paraphraser"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "ramsrigouthamg-t5-large-paraphraser-diverse-high-quality": {},
                            "ramsrigouthamg-t5_sentence_paraphraser": {}
                        },
                        "example": {
                            "ramsrigouthamg-t5-large-paraphraser-diverse-high-quality": {
                                "output": {
                                    "prediction": "A herd of frogs was wandering around the woods in search of water.",
                                    "prediction_raw": [
                                        "A herd of frogs was wandering around the woods in search of water."
                                    ]
                                }
                            },
                            "ramsrigouthamg-t5_sentence_paraphraser": {
                                "output": {
                                    "prediction": "Once, a group of frogs was roaming around the forest in search of water.",
                                    "prediction_raw": [
                                        "Once, a group of frogs was roaming around the forest in search of water."
                                    ]
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
                                "nlptown-bert-base-multilingual-uncased-sentiment",
                                "distilbert-base-uncased",
                                "distilbert-base-uncased-finetuned-sst-2-english",
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "zero-shot-classification-facebook-bart-large-mnli": {},
                            "distilbert-base-uncased-finetuned-sst-2-english": {},
                            "distilbert-base-uncased": {},
                            "nlptown-bert-base-multilingual-uncased-sentiment": {}
                        },
                        "example": {
                            "zero-shot-classification-facebook-bart-large-mnli": {
                                "output": {
                                    "prediction": "POSITIVE",
                                    "prediction_raw": {
                                        "labels": [
                                            "POSITIVE",
                                            "NEUTRAL",
                                            "NEGATIVE"
                                        ],
                                        "scores": [
                                            0.9236152172088623,
                                            0.05980229377746582,
                                            0.016582505777478218
                                        ],
                                        "sequence": "I like you . I love you"
                                    }
                                }
                            },
                            "distilbert-base-uncased-finetuned-sst-2-english": {
                                "output": {
                                    "prediction": "POSITIVE",
                                    "prediction_raw": {
                                        "label": "POSITIVE",
                                        "score": 0.9998738765716553
                                    }
                                }
                            },
                            "distilbert-base-uncased": {
                                "output": {
                                    "prediction": "NEGATIVE",
                                    "prediction_raw": {
                                        "label": "LABEL_1",
                                        "score": 0.5460877418518066
                                    }
                                }
                            },
                            "nlptown-bert-base-multilingual-uncased-sentiment": {
                                "output": {
                                    "prediction": "POSITIVE",
                                    "prediction_raw": [
                                        -1.69140625,
                                        -1.265625,
                                        -0.1650390625,
                                        0.85791015625,
                                        1.8203125
                                    ]
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "number"
                                }
                            }
                        },
                        "examples": {
                            "all-MiniLM-L6-v2": {}
                        },
                        "example": {
                            "all-MiniLM-L6-v2": {
                                "output": {
                                    "prediction": 0.9097199440002441,
                                    "prediction_raw": 0.9097199440002441
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
        "/text/text/summarization/": {
            "get": {
                "tags": [
                    "text.text.summarization"
                ],
                "summary": "Get list of models available for summarization",
                "operationId": "get_versions_text_text_summarization__get",
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
                    "text.text.summarization"
                ],
                "summary": "Apply model for the summarization task for a given models",
                "operationId": "apply_text_text_summarization__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "all-MiniLM-L6-v2",
                                "bart-large-cnn"
                            ],
                            "type": "string",
                            "default": "bart-large-cnn"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_summarization__post"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "string"
                                }
                            }
                        },
                        "examples": {
                            "all-MiniLM-L6-v2": {}
                        },
                        "example": {
                            "all-MiniLM-L6-v2": {
                                "output": {
                                    "prediction": "The Crown is a British historical drama series on Netflix. Created by Peter Morgan and produced by Left Bank Pictures and Sony Pictures Television. First season was released by Netflix on 4 November 2016, the second on 8 December 2017, the third on 17 November 2019, and the fourth on 15 November 2020. As of 2020, the estimated production budget of The Crown has been reported to be $260 million, making it one of the most expensive television series in history.",
                                    "prediction_raw": "The Crown is a British historical drama series on Netflix. Created by Peter Morgan and produced by Left Bank Pictures and Sony Pictures Television. First season was released by Netflix on 4 November 2016, the second on 8 December 2017, the third on 17 November 2019, and the fourth on 15 November 2020. As of 2020, the estimated production budget of The Crown has been reported to be $260 million, making it one of the most expensive television series in history."
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
        "/text/text/translation/": {
            "get": {
                "tags": [
                    "text.text.translation"
                ],
                "summary": "Get list of models available for translation",
                "operationId": "get_versions_text_text_translation__get",
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
                    "text.text.translation"
                ],
                "summary": "Apply model for the translation task for a given models",
                "operationId": "apply_text_text_translation__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "facebook-nllb-200-distilled-600M",
                                "nllb-200-3-3b"
                            ],
                            "type": "string",
                            "default": "nllb-200-3-3b"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_translation__post"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "str"
                                }
                            }
                        },
                        "examples": {
                            "facebook-nllb-200-distilled-600M": {}
                        },
                        "example": {
                            "facebook-nllb-200-distilled-600M": {
                                "output": {
                                    "prediction": "Le texte à traduire",
                                    "prediction_raw": "Le texte à traduire"
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "array"
                                }
                            }
                        },
                        "examples": {
                            "bert-base-multilingual-cased": {}
                        },
                        "example": {
                            "bert-base-multilingual-cased": {
                                "output": {
                                    "prediction": [
                                        {
                                            "source": "Sentence",
                                            "target": "来自"
                                        },
                                        {
                                            "source": "Sentence",
                                            "target": "句子"
                                        },
                                        {
                                            "source": "from",
                                            "target": "来自"
                                        },
                                        {
                                            "source": "first",
                                            "target": "第一"
                                        },
                                        {
                                            "source": "language",
                                            "target": "语言的"
                                        },
                                        {
                                            "source": "language",
                                            "target": "句子"
                                        }
                                    ],
                                    "prediction_raw": [
                                        {
                                            "source": "Sentence",
                                            "target": "来自"
                                        },
                                        {
                                            "source": "Sentence",
                                            "target": "句子"
                                        },
                                        {
                                            "source": "from",
                                            "target": "来自"
                                        },
                                        {
                                            "source": "first",
                                            "target": "第一"
                                        },
                                        {
                                            "source": "language",
                                            "target": "语言的"
                                        },
                                        {
                                            "source": "language",
                                            "target": "句子"
                                        }
                                    ]
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
        "/text/text/article-generation/": {
            "post": {
                "tags": [
                    "text.text.article-generation"
                ],
                "summary": "Apply model for the article-generation task for a given model",
                "operationId": "apply_text_text_article_generation__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "fast-gpt-j"
                            ],
                            "type": "string",
                            "default": "fast-gpt-j"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_article_generation__post"
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
        "/text/text/ad-generation/": {
            "post": {
                "tags": [
                    "text.text.ad-generation"
                ],
                "summary": "Apply model for the ad-generation task for a given model",
                "operationId": "apply_text_text_ad_generation__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "gpt-j"
                            ],
                            "type": "string",
                            "default": "gpt-j"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_ad_generation__post"
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
        "/text/text/intent-classification/": {
            "post": {
                "tags": [
                    "text.text.intent-classification"
                ],
                "summary": "Apply model for the intent-classification task for a given model",
                "operationId": "apply_text_text_intent_classification__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "fast-gpt-j"
                            ],
                            "type": "string",
                            "default": "fast-gpt-j"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_intent_classification__post"
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
        "/text/text/bullet-point-generation/": {
            "post": {
                "tags": [
                    "text.text.bullet-point-generation"
                ],
                "summary": "Apply model for the bullet point generation task for a given model",
                "operationId": "apply_text_text_bullet_point_generation__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "jpt"
                            ],
                            "type": "string",
                            "default": "jpt"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_bullet_point_generation__post"
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
            "Body_apply_audio_text_audio_transcription__post": {
                "title": "Body_apply_audio_text_audio_transcription__post",
                "type": "object",
                "properties": {
                    "audio": {
                        "title": "audio",
                        "type": "string",
                        "description": "Audio to transcribe",
                        "format": "binary",
                        "example": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
                        "examples": {
                            "from_audio_mp3": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
                            "from_audio_m4a": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.m4a",
                            "from_audio_wav": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.wav"
                        },
                        "data_type": "audio"
                    },
                    "audio_url": {
                        "title": "audio_url",
                        "type": "string",
                        "description": "Audio to transcribe (url) - ignored if \"audio\" file is provided",
                        "example": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
                        "examples": {
                            "from_audio_mp3": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
                            "from_audio_m4a": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.m4a",
                            "from_audio_wav": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.wav"
                        },
                        "data_type": "url"
                    },
                    "language": {
                        "title": "language",
                        "type": "string",
                        "description": "Language of the audio",
                        "default": "en",
                        "example": "en",
                        "examples": [
                            "en"
                        ],
                        "data_type": "string"
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
                        "description": "Image to remove the background from",
                        "format": "binary",
                        "example": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
                        "examples": {
                            "from_owl2_png": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
                            "from_owl2_jpg": "http://files.gladia.io/examples/image/image/background-removal/owl2.jpg",
                            "from_lions-4_jpg": "https://15pictures.com/wp-content/gallery/15-pictures-lions/lions-4.jpg"
                        },
                        "data_type": "image"
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "description": "Image to remove the background from (url) - ignored if \"image\" file is provided",
                        "example": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
                        "examples": {
                            "from_owl2_png": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
                            "from_owl2_jpg": "http://files.gladia.io/examples/image/image/background-removal/owl2.jpg",
                            "from_lions-4_jpg": "https://15pictures.com/wp-content/gallery/15-pictures-lions/lions-4.jpg"
                        },
                        "data_type": "url"
                    }
                }
            },
            "Body_apply_image_image_background_replacement__post": {
                "title": "Body_apply_image_image_background_replacement__post",
                "required": [
                    "alignment"
                ],
                "type": "object",
                "properties": {
                    "original_image": {
                        "title": "original_image",
                        "type": "string",
                        "description": "Image to replace the background from",
                        "format": "binary",
                        "example": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
                        "examples": {
                            "from_owl2_png": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
                            "from_owl2_jpg": "http://files.gladia.io/examples/image/image/background-removal/owl2.jpg",
                            "from_lions-4_jpg": "https://15pictures.com/wp-content/gallery/15-pictures-lions/lions-4.jpg"
                        },
                        "data_type": "image"
                    },
                    "original_image_url": {
                        "title": "original_image_url",
                        "type": "string",
                        "description": "Image to replace the background from (url) - ignored if \"original_image\" file is provided",
                        "example": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
                        "examples": {
                            "from_owl2_png": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
                            "from_owl2_jpg": "http://files.gladia.io/examples/image/image/background-removal/owl2.jpg",
                            "from_lions-4_jpg": "https://15pictures.com/wp-content/gallery/15-pictures-lions/lions-4.jpg"
                        },
                        "data_type": "url"
                    },
                    "background_image": {
                        "title": "background_image",
                        "type": "string",
                        "description": "Image the background will be replaced with",
                        "format": "binary",
                        "example": "https://img.lovepik.com/free-png/20210918/lovepik-green-forest-png-image_400203927_wh1200.png",
                        "examples": {
                            "from_lovepik-green-forest-png-image_400203927_wh1200_png": "https://img.lovepik.com/free-png/20210918/lovepik-green-forest-png-image_400203927_wh1200.png"
                        },
                        "data_type": "image"
                    },
                    "background_image_url": {
                        "title": "background_image_url",
                        "type": "string",
                        "description": "Image the background will be replaced with (url) - ignored if \"background_image\" file is provided",
                        "example": "https://img.lovepik.com/free-png/20210918/lovepik-green-forest-png-image_400203927_wh1200.png",
                        "examples": {
                            "from_lovepik-green-forest-png-image_400203927_wh1200_png": "https://img.lovepik.com/free-png/20210918/lovepik-green-forest-png-image_400203927_wh1200.png"
                        },
                        "data_type": "url"
                    },
                    "alignment": {
                        "title": "alignment",
                        "allOf": [
                            {
                                "$ref": "#/components/schemas/DynamicEnum"
                            }
                        ],
                        "description": "original image insertion position in the background image",
                        "example": "center",
                        "examples": [
                            "center",
                            "top",
                            "bottom",
                            "left",
                            "right",
                            "top-left",
                            "top-center",
                            "top-right",
                            "bottom-left",
                            "bottom-center",
                            "bottom-right",
                            "cropped"
                        ],
                        "data_type": "list"
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
                        "description": "Image to colorize",
                        "format": "binary",
                        "example": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.jpg",
                        "examples": {
                            "from_rsz_paris_jpg": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.jpg",
                            "from_rsz_paris_png": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.png",
                            "from_rsz_paris_gif": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.gif"
                        },
                        "data_type": "image"
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "description": "Image to colorize (url) - ignored if \"image\" file is provided",
                        "example": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.jpg",
                        "examples": {
                            "from_rsz_paris_jpg": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.jpg",
                            "from_rsz_paris_png": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.png",
                            "from_rsz_paris_gif": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.gif"
                        },
                        "data_type": "url"
                    }
                }
            },
            "Body_apply_image_image_deblurring__post": {
                "title": "Body_apply_image_image_deblurring__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "image",
                        "type": "string",
                        "description": "Image to deblur",
                        "format": "binary",
                        "example": "http://files.gladia.io/image/image/deblurring/deblurring.png",
                        "examples": {
                            "from_deblurring_png": "http://files.gladia.io/image/image/deblurring/deblurring.png",
                            "from_deblurring_jpg": "http://files.gladia.io/image/image/deblurring/deblurring.jpg"
                        },
                        "data_type": "image"
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "description": "Image to deblur (url) - ignored if \"image\" file is provided",
                        "example": "http://files.gladia.io/image/image/deblurring/deblurring.png",
                        "examples": {
                            "from_deblurring_png": "http://files.gladia.io/image/image/deblurring/deblurring.png",
                            "from_deblurring_jpg": "http://files.gladia.io/image/image/deblurring/deblurring.jpg"
                        },
                        "data_type": "url"
                    }
                }
            },
            "Body_apply_image_image_enhancement__post": {
                "title": "Body_apply_image_image_enhancement__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "image",
                        "type": "string",
                        "description": "Image to blur face from",
                        "format": "binary",
                        "example": "http://files.gladia.io/image/image/enhancement/enhancement_retouching.png",
                        "examples": {
                            "from_enhancement_retouching_png": "http://files.gladia.io/image/image/enhancement/enhancement_retouching.png",
                            "from_enhancement_retouching_jpg": "http://files.gladia.io/image/image/enhancement/enhancement_retouching.jpg",
                            "from_enhancement_low-light_png": "http://files.gladia.io/image/image/enhancement/enhancement_low-light.png",
                            "from_enhancement_low-light_jpg": "http://files.gladia.io/image/image/enhancement/enhancement_low-light.jpg"
                        },
                        "data_type": "image"
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "description": "Image to blur face from (url) - ignored if \"image\" file is provided",
                        "example": "http://files.gladia.io/image/image/enhancement/enhancement_retouching.png",
                        "examples": {
                            "from_enhancement_retouching_png": "http://files.gladia.io/image/image/enhancement/enhancement_retouching.png",
                            "from_enhancement_retouching_jpg": "http://files.gladia.io/image/image/enhancement/enhancement_retouching.jpg",
                            "from_enhancement_low-light_png": "http://files.gladia.io/image/image/enhancement/enhancement_low-light.png",
                            "from_enhancement_low-light_jpg": "http://files.gladia.io/image/image/enhancement/enhancement_low-light.jpg"
                        },
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
                        "description": "Image to blur face from",
                        "format": "binary",
                        "example": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.jpg",
                        "examples": {
                            "from_face-bluring_jpg": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.jpg",
                            "from_face-bluring_png": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.png",
                            "from_face-bluring_gif": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.gif"
                        },
                        "data_type": "image"
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "description": "Image to blur face from (url) - ignored if \"image\" file is provided",
                        "example": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.jpg",
                        "examples": {
                            "from_face-bluring_jpg": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.jpg",
                            "from_face-bluring_png": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.png",
                            "from_face-bluring_gif": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.gif"
                        },
                        "data_type": "url"
                    }
                }
            },
            "Body_apply_image_image_guided_inpainting__post": {
                "title": "Body_apply_image_image_guided_inpainting__post",
                "required": [
                    "prompt"
                ],
                "type": "object",
                "properties": {
                    "original_image": {
                        "title": "original_image",
                        "type": "string",
                        "description": "Image to inpaint",
                        "format": "binary",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
                        },
                        "data_type": "image"
                    },
                    "original_image_url": {
                        "title": "original_image_url",
                        "type": "string",
                        "description": "Image to inpaint (url) - ignored if \"original_image\" file is provided",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
                        },
                        "data_type": "url"
                    },
                    "mask_image": {
                        "title": "mask_image",
                        "type": "string",
                        "description": "Mask to guide inpainting",
                        "format": "binary",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_mask_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"
                        },
                        "data_type": "image"
                    },
                    "mask_image_url": {
                        "title": "mask_image_url",
                        "type": "string",
                        "description": "Mask to guide inpainting (url) - ignored if \"mask_image\" file is provided",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_mask_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"
                        },
                        "data_type": "url"
                    },
                    "prompt": {
                        "title": "prompt",
                        "type": "string",
                        "description": "Mask to guide inpainting",
                        "example": "a cat sitting on a bench",
                        "examples": [
                            "a cat sitting on a bench"
                        ],
                        "data_type": "string"
                    }
                }
            },
            "Body_apply_image_image_inpainting__post": {
                "title": "Body_apply_image_image_inpainting__post",
                "type": "object",
                "properties": {
                    "original_image": {
                        "title": "original_image",
                        "type": "string",
                        "description": "Image to inpaint",
                        "format": "binary",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
                        },
                        "data_type": "image"
                    },
                    "original_image_url": {
                        "title": "original_image_url",
                        "type": "string",
                        "description": "Image to inpaint (url) - ignored if \"original_image\" file is provided",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
                        },
                        "data_type": "url"
                    },
                    "mask_image": {
                        "title": "mask_image",
                        "type": "string",
                        "description": "Mask to guide inpainting",
                        "format": "binary",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_mask_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"
                        },
                        "data_type": "image"
                    },
                    "mask_image_url": {
                        "title": "mask_image_url",
                        "type": "string",
                        "description": "Mask to guide inpainting (url) - ignored if \"mask_image\" file is provided",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_mask_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"
                        },
                        "data_type": "url"
                    }
                }
            },
            "Body_apply_image_image_super_resolution__post": {
                "title": "Body_apply_image_image_super_resolution__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "image",
                        "type": "string",
                        "description": "Image to restore",
                        "format": "binary",
                        "example": "http://files.gladia.io/test/test.png",
                        "examples": {
                            "from_test_png": "http://files.gladia.io/test/test.png"
                        },
                        "data_type": "image"
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "description": "Image to restore (url) - ignored if \"image\" file is provided",
                        "example": "http://files.gladia.io/test/test.png",
                        "examples": {
                            "from_test_png": "http://files.gladia.io/test/test.png"
                        },
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
                        "description": "Image to uncolorize",
                        "format": "binary",
                        "example": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.png",
                        "examples": {
                            "from_landscape-pics-wallpapers_png": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.png",
                            "from_landscape-pics-wallpapers_jpg": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.jpg"
                        },
                        "data_type": "image"
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "description": "Image to uncolorize (url) - ignored if \"image\" file is provided",
                        "example": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.png",
                        "examples": {
                            "from_landscape-pics-wallpapers_png": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.png",
                            "from_landscape-pics-wallpapers_jpg": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.jpg"
                        },
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
                        "description": "image url to convert to ascii if no file upload",
                        "format": "binary",
                        "example": "http://files.gladia.io/examples/image/text/asciify/asciify.png",
                        "examples": {
                            "from_asciify_png": "http://files.gladia.io/examples/image/text/asciify/asciify.png",
                            "from_asciify_jpg": "http://files.gladia.io/examples/image/text/asciify/asciify.jpg",
                            "from_asciify_gif": "http://files.gladia.io/examples/image/text/asciify/asciify.gif"
                        },
                        "data_type": "image"
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "description": "image url to convert to ascii if no file upload (url) - ignored if \"image\" file is provided",
                        "example": "http://files.gladia.io/examples/image/text/asciify/asciify.png",
                        "examples": {
                            "from_asciify_png": "http://files.gladia.io/examples/image/text/asciify/asciify.png",
                            "from_asciify_jpg": "http://files.gladia.io/examples/image/text/asciify/asciify.jpg",
                            "from_asciify_gif": "http://files.gladia.io/examples/image/text/asciify/asciify.gif"
                        },
                        "data_type": "url"
                    }
                }
            },
            "Body_apply_image_text_classification__post": {
                "title": "Body_apply_image_text_classification__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "image",
                        "type": "string",
                        "description": "Image to classify",
                        "format": "binary",
                        "example": "http://files.gladia.io/examples/image/text/classification/image.png",
                        "examples": {
                            "from_image_png": "http://files.gladia.io/examples/image/text/classification/image.png",
                            "from_image_jpg": "http://files.gladia.io/examples/image/text/classification/image.jpg",
                            "from_image_gif": "http://files.gladia.io/examples/image/text/classification/image.gif"
                        },
                        "data_type": "image"
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "description": "Image to classify (url) - ignored if \"image\" file is provided",
                        "example": "http://files.gladia.io/examples/image/text/classification/image.png",
                        "examples": {
                            "from_image_png": "http://files.gladia.io/examples/image/text/classification/image.png",
                            "from_image_jpg": "http://files.gladia.io/examples/image/text/classification/image.jpg",
                            "from_image_gif": "http://files.gladia.io/examples/image/text/classification/image.gif"
                        },
                        "data_type": "url"
                    },
                    "top_k": {
                        "title": "top_k",
                        "type": "integer",
                        "description": "Top K",
                        "default": 1,
                        "example": 1,
                        "examples": [
                            1,
                            2,
                            100
                        ],
                        "data_type": "integer"
                    }
                }
            },
            "Body_apply_image_text_ocr__post": {
                "title": "Body_apply_image_text_ocr__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "image",
                        "type": "string",
                        "description": "Image to extract text from",
                        "format": "binary",
                        "example": "http://files.gladia.io/examples/image/text/ocr/testocr.png",
                        "examples": {
                            "from_testocr_png": "http://files.gladia.io/examples/image/text/ocr/testocr.png",
                            "from_testocr_jpg": "http://files.gladia.io/examples/image/text/ocr/testocr.jpg",
                            "from_testocr_gif": "http://files.gladia.io/examples/image/text/ocr/testocr.gif"
                        },
                        "data_type": "image"
                    },
                    "image_url": {
                        "title": "image_url",
                        "type": "string",
                        "description": "Image to extract text from (url) - ignored if \"image\" file is provided",
                        "example": "http://files.gladia.io/examples/image/text/ocr/testocr.png",
                        "examples": {
                            "from_testocr_png": "http://files.gladia.io/examples/image/text/ocr/testocr.png",
                            "from_testocr_jpg": "http://files.gladia.io/examples/image/text/ocr/testocr.jpg",
                            "from_testocr_gif": "http://files.gladia.io/examples/image/text/ocr/testocr.gif"
                        },
                        "data_type": "url"
                    },
                    "source_language": {
                        "title": "source_language",
                        "type": "string",
                        "description": "ISO 639-2 Source language (3 letters)",
                        "default": "eng",
                        "example": "eng",
                        "examples": [
                            "eng",
                            "fra"
                        ],
                        "data_type": "string"
                    }
                }
            },
            "Body_apply_text_image_image_generation__post": {
                "title": "Body_apply_text_image_image_generation__post",
                "required": [
                    "prompt"
                ],
                "type": "object",
                "properties": {
                    "prompt": {
                        "title": "prompt",
                        "type": "string",
                        "description": "Prompt to generate image from",
                        "example": "The Eiffel tower landing on the moon, unreal engine.",
                        "examples": [
                            "The Eiffel tower landing on the moon, unreal engine."
                        ],
                        "data_type": "string"
                    },
                    "samples": {
                        "title": "samples",
                        "type": "integer",
                        "description": "Number of predictions",
                        "default": 1,
                        "example": 1,
                        "examples": [
                            1
                        ],
                        "data_type": "integer"
                    },
                    "steps": {
                        "title": "steps",
                        "type": "integer",
                        "description": "Number of steps",
                        "default": 40,
                        "example": 40,
                        "examples": [
                            40
                        ],
                        "data_type": "integer"
                    },
                    "seed": {
                        "title": "seed",
                        "type": "integer",
                        "description": "Seed for predictions",
                        "default": 396916372,
                        "example": 396916372,
                        "examples": [
                            396916372
                        ],
                        "data_type": "integer"
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
                        "description": "Insert the text to correct",
                        "example": "Text to corrcte",
                        "examples": [
                            "Text to corrcte"
                        ],
                        "data_type": "string"
                    }
                }
            },
            "Body_apply_text_text_conversation_summarization__post": {
                "title": "Body_apply_text_text_conversation_summarization__post",
                "required": [
                    "text"
                ],
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "description": "Insert the text to summarize here",
                        "example": "Hannah: Hey, do you have Betty's number? Amanda: Lemme check Amanda: Sorry, can't find it. Amanda: Ask Larry Amanda: He called her last time we were at the park together Hannah: I don't know him well Amanda: Don't be shy, he's very nice Hannah: If you say so.. Hannah: I'd rather you texted him Amanda: Just text him 🙂 Hannah: Urgh.. Alright Hannah: Bye Amanda: Bye bye",
                        "examples": [
                            "Hannah: Hey, do you have Betty's number? Amanda: Lemme check Amanda: Sorry, can't find it. Amanda: Ask Larry Amanda: He called her last time we were at the park together Hannah: I don't know him well Amanda: Don't be shy, he's very nice Hannah: If you say so.. Hannah: I'd rather you texted him Amanda: Just text him 🙂 Hannah: Urgh.. Alright Hannah: Bye Amanda: Bye bye"
                        ],
                        "data_type": "string"
                    }
                }
            },
            "Body_apply_text_text_emotion_recognition__post": {
                "title": "Body_apply_text_text_emotion_recognition__post",
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "example": "Gladia proposes an amazing service!",
                        "data_type": "string",
                        "examples": {}
                    }
                }
            },
            "Body_apply_text_text_hate_speech_detection__post": {
                "title": "Body_apply_text_text_hate_speech_detection__post",
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "example": "I hate you",
                        "data_type": "string",
                        "examples": {}
                    }
                }
            },
            "Body_apply_text_text_headline_generation__post": {
                "title": "Body_apply_text_text_headline_generation__post",
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "example": "One month after the United States began what has become a troubled rollout of a national COVID vaccination campaign, the effort is finally gathering real steam. Close to a million doses -- over 951,000, to be more exact -- made their way into the arms of Americans in the past 24 hours, the U.S. Centers for Disease Control and Prevention reported Wednesday. That s the largest number of shots given in one day since the rollout began and a big jump from the previous day, when just under 340,000 doses were given, CBS News reported. That number is likely to jump quickly after the federal government on Tuesday gave states the OK to vaccinate anyone over 65 and said it would release all the doses of vaccine it has available for distribution. Meanwhile, a number of states have now opened mass vaccination sites in an effort to get larger numbers of people inoculated, CBS News reported.",
                        "data_type": "string",
                        "examples": {}
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
                        "description": "Insert the text to summarize here",
                        "example": "The Crown is a historical drama streaming television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan, and produced by Left Bank Pictures and Sony Pictures Television for Netflix.",
                        "examples": [
                            "The Crown is a historical drama streaming television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan, and produced by Left Bank Pictures and Sony Pictures Television for Netflix."
                        ],
                        "data_type": "string"
                    },
                    "top_k": {
                        "title": "top_k",
                        "type": "integer",
                        "description": "Top K",
                        "default": 10,
                        "example": 10,
                        "examples": [
                            1,
                            10,
                            100
                        ],
                        "data_type": "integer"
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
                        "description": "Insert the text to perform language detection on",
                        "example": "Input text to perform language detection on",
                        "examples": [
                            "Input text to perform language detection on"
                        ],
                        "data_type": "string"
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
                        "description": "Insert the text to generate from",
                        "example": "I'm currently driving while eating a",
                        "examples": [
                            "I'm currently driving while eating a"
                        ],
                        "data_type": "string"
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
                        "description": "Insert the text to anlayse sentiment from",
                        "example": "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, therefore very close to the Manhattan Bridge.",
                        "examples": [
                            "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, therefore very close to the Manhattan Bridge."
                        ],
                        "data_type": "string"
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
                        "description": "Insert the first sentence",
                        "example": "I like you.",
                        "examples": [
                            "I like you."
                        ],
                        "data_type": "string"
                    },
                    "sentence_2": {
                        "title": "sentence_2",
                        "type": "string",
                        "description": "Insert the second sentence to estimate the probability from",
                        "example": "But it's not about you.",
                        "examples": [
                            "But it's not about you."
                        ],
                        "data_type": "string"
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
                        "description": "Insert the text to find the next word from.",
                        "example": "I think therefore I",
                        "examples": [
                            "I think therefore I"
                        ],
                        "data_type": "string"
                    },
                    "top_k": {
                        "title": "top_k",
                        "type": "integer",
                        "description": "Top K",
                        "default": 3,
                        "example": 3,
                        "examples": [
                            1,
                            3,
                            10
                        ],
                        "data_type": "integer"
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
                        "description": "Insert the code to generate from",
                        "example": "def is_palendrome(s):",
                        "examples": [
                            "def is_palendrome(s):"
                        ],
                        "data_type": "string"
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
                        "description": "Insert the text to extract answer from",
                        "example": "My name is Clara and I live in Berkeley.",
                        "examples": [
                            "My name is Clara and I live in Berkeley."
                        ],
                        "data_type": "string"
                    },
                    "question": {
                        "title": "question",
                        "type": "string",
                        "description": "Insert the question to be answered",
                        "example": "What's my name?",
                        "examples": [
                            "What's my name?"
                        ],
                        "data_type": "string"
                    },
                    "top_k": {
                        "title": "top_k",
                        "type": "integer",
                        "description": "Top K",
                        "default": 1,
                        "example": 1,
                        "examples": [
                            1,
                            10
                        ],
                        "data_type": "integer"
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
                        "description": "Insert the text to paraphrase here",
                        "example": "Once, a group of frogs was roaming around the forest in search of water.",
                        "examples": [
                            "Once, a group of frogs was roaming around the forest in search of water."
                        ],
                        "data_type": "string"
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
                        "description": "Insert the text to anlayse sentiment from",
                        "example": "I like you. I love you",
                        "examples": [
                            "I like you. I love you"
                        ],
                        "data_type": "string"
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
                        "description": "Insert the first text to compare here",
                        "example": "I like banana",
                        "examples": [
                            "I like banana"
                        ],
                        "data_type": "string"
                    },
                    "sentence_2": {
                        "title": "sentence_2",
                        "type": "string",
                        "description": "Insert the second text to compare here",
                        "example": "I hate banana",
                        "examples": [
                            "I hate banana"
                        ],
                        "data_type": "string"
                    }
                }
            },
            "Body_apply_text_text_summarization__post": {
                "title": "Body_apply_text_text_summarization__post",
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "example": "One month after the United States began what has become a troubled rollout of a national COVID vaccination campaign, the effort is finally gathering real steam. Close to a million doses -- over 951,000, to be more exact -- made their way into the arms of Americans in the past 24 hours, the U.S. Centers for Disease Control and Prevention reported Wednesday. That s the largest number of shots given in one day since the rollout began and a big jump from the previous day, when just under 340,000 doses were given, CBS News reported. That number is likely to jump quickly after the federal government on Tuesday gave states the OK to vaccinate anyone over 65 and said it would release all the doses of vaccine it has available for distribution. Meanwhile, a number of states have now opened mass vaccination sites in an effort to get larger numbers of people inoculated, CBS News reported.",
                        "data_type": "string",
                        "examples": {}
                    }
                }
            },
            "Body_apply_text_text_translation__post": {
                "title": "Body_apply_text_text_translation__post",
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "example": "John Doe has been working for Microsoft in Seattle since 1999.",
                        "data_type": "string",
                        "examples": {}
                    },
                    "source": {
                        "title": "source",
                        "type": "string",
                        "default": "eng_Latn",
                        "example": "eng_Latn",
                        "data_type": "string",
                        "examples": {}
                    },
                    "target": {
                        "title": "target",
                        "type": "string",
                        "default": "fra_Latn",
                        "example": "fra_Latn",
                        "data_type": "string",
                        "examples": {}
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
                        "description": "Insert the Sentence from first language",
                        "example": "Sentence from first language",
                        "examples": [
                            "Sentence from first language"
                        ],
                        "data_type": "string"
                    },
                    "input_string_language_2": {
                        "title": "input_string_language_2",
                        "type": "string",
                        "description": "Insert the Sentence from second language",
                        "example": "来自 第一 语言的 句子",
                        "examples": [
                            "来自 第一 语言的 句子"
                        ],
                        "data_type": "string"
                    }
                }
            },
            "DynamicEnum": {
                "title": "DynamicEnum",
                "enum": [
                    "center",
                    "top",
                    "bottom",
                    "left",
                    "right",
                    "top-left",
                    "top-center",
                    "top-right",
                    "bottom-left",
                    "bottom-center",
                    "bottom-right",
                    "cropped"
                ],
                "description": "An enumeration."
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
            },
            "Body_apply_text_text_article_generation__post": {
                "title": "Body_apply_text_text_article_generation__post",
                "type": "object",
                "properties": {
                    "title": {
                        "title": "title",
                        "type": "string",
                        "example": "How to become a programmer?",
                        "data_type": "string",
                        "examples": {}
                    }
                }
            },
            "Body_apply_text_text_ad_generation__post": {
                "title": "Body_apply_text_text_ad_generation__post",
                "type": "object",
                "properties": {
                    "keywords": {
                        "title": "keywords",
                        "type": "array",
                        "items": {
                            "type": "string"
                        },
                        "example": [
                            "gpu",
                            "gaming",
                            "$1299"
                        ],
                        "data_type": "array",
                        "examples": {}
                    }
                }
            },
            "Body_apply_text_text_intent_classification__post": {
                "title": "Body_apply_text_text_intent_classification__post",
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "example": "Hello\nI spent some time on your documentation but I could not figure how to add a new credit card.\nIt is a problem because my current card is going to expire soon and I am affraid that it will cause a service disruption.\nHow can I update my credit card?\nThanks in advance,\nLooking forward to hearing from you,\nJohn Doe",
                        "data_type": "string",
                        "examples": {}
                    }
                }
            },
            "Body_apply_text_text_bullet_point_generation__post": {
                "title": "Body_apply_text_text_bullet_point_generation__post",
                "type": "object",
                "properties": {
                    "text": {
                        "title": "text",
                        "type": "string",
                        "example": "Deep learning (also known as deep structured learning) is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.[2]Deep-learning architectures such as deep neural networks, deep belief networks, deep reinforcement learning, recurrent neural networks, convolutional neural networks and Transformers have been applied to fields including computer vision, speech recognition, natural language processing, machine translation, bioinformatics, drug design, medical image analysis, climate science, material inspection and board game programs, where they have produced results comparable to and in some cases surpassing human expert performance.[3][4][5]Artificial neural networks (ANNs) were inspired by information processing and distributed communication nodes in biological systems. ANNs have various differences from biological brains. Specifically, artificial neural networks tend to be static and symbolic, while the biological brain of most living organisms is dynamic (plastic) and analogue.[6][7]The adjective deep in deep learning refers to the use of multiple layers in the network. Early work showed that a linear perceptron cannot be a universal classifier, but that a network with a nonpolynomial activation function with one hidden layer of unbounded width can. Deep learning is a modern variation which is concerned with an unbounded number of layers of bounded size, which permits practical application and optimized implementation, while retaining theoretical universality under mild conditions. In deep learning the layers are also permitted to be heterogeneous and to deviate widely from biologically informed connectionist models, for the sake of efficiency, trainability and understandability, hence the structured part.",
                        "data_type": "string",
                        "examples": {}
                    },
                    "bullets": {
                        "title": "bullets",
                        "type": "integer",
                        "default": 3,
                        "example": 3,
                        "data_type": "integer",
                        "examples": {}
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
