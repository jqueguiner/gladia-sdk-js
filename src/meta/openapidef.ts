/* Generated file with "scripts/generate-metasdk.ts" */

import { OpenApiJson } from './openapideftype';

export const openApiJson: OpenApiJson = {
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
                "openai-whisper-base",
                "openai-whisper-tiny",
                "coqui_english_huge_vocab",
                "openai-whisper-small",
                "openai-whisper-large"
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
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
            },
            "examples": {
              "coqui_english_huge_vocab": {},
              "openai-whisper-medium": {},
              "openai-whisper-large": {},
              "openai-whisper-base": {},
              "openai-whisper-tiny": {},
              "openai-whisper-small": {}
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
                "mobilenet",
                "xception"
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
            "example": {
              "mobilenet": "http://files.gladia.io/output/image/image/background-removal/mobilenet/example/from_owl2_png.png",
              "xception": "http://files.gladia.io/output/image/image/background-removal/xception/example/from_owl2_png.png"
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
            "example": {
              "mobilenet": "http://files.gladia.io/output/image/image/background-removal/mobilenet/example/from_owl2_png.png"
            },
            "examples": {
              "mobilenet": {
                "from_owl2_jpg": "http://files.gladia.io/output/image/image/background-removal/mobilenet/examples/from_owl2_jpg.png",
                "from_owl2_png": "http://files.gladia.io/output/image/image/background-removal/mobilenet/examples/from_owl2_png.png"
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
            "example": {
              "mlhubber_colorize": "http://files.gladia.io/output/image/image/colorization/deoldify-stable/example/from_rsz_paris_jpg.png",
              "deoldify-stable": "http://files.gladia.io/output/image/image/colorization/deoldify-stable/example/from_rsz_paris_jpg.png",
              "deoldify-artistic": "http://files.gladia.io/output/image/image/colorization/deoldify-artistic/example/from_rsz_paris_jpg.png"
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
            "example": {
              "CMFNet": ""
            },
            "examples": {
              "CMFNet": {}
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
                "FiveK",
                "LOL"
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
            "example": {
              "LOL": "",
              "FiveK": ""
            },
            "examples": {
              "LOL": {},
              "FiveK": {}
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
            "example": {
              "ageitgey": "http://files.gladia.io/output/image/image/face-bluring/ageitgey/example/from_face-bluring_png.png"
            },
            "examples": {
              "ageitgey": {
                "from_face-bluring_jpg": "http://files.gladia.io/output/image/image/face-bluring/ageitgey/examples/from_face-bluring_jpg.png",
                "from_face-bluring_png": "http://files.gladia.io/output/image/image/face-bluring/ageitgey/examples/from_face-bluring_png.png"
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
            "example": {
              "stable-diffusion": ""
            },
            "examples": {
              "stable-diffusion": {}
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
                "lama",
                "fcf",
                "latent-diffusion",
                "zits",
                "mat"
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
            "example": {
              "mat": "",
              "zits": "",
              "lama": "",
              "latent-diffusion": "",
              "fcf": ""
            },
            "examples": {
              "mat": {},
              "zits": {},
              "lama": {},
              "latent-diffusion": {},
              "fcf": {}
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
            "example": {},
            "examples": {}
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
            "example": {
              "v1": "http://files.gladia.io/output/image/image/uncolorization/v1/example/from_landscape-pics-wallpapers_png.png"
            },
            "examples": {
              "v1": {
                "from_landscape-pics-wallpapers_jpg": "http://files.gladia.io/output/image/image/uncolorization/v1/examples/from_landscape-pics-wallpapers_jpg.png",
                "from_landscape-pics-wallpapers_png": "http://files.gladia.io/output/image/image/uncolorization/v1/examples/from_landscape-pics-wallpapers_png.png"
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
                "vit_l_32",
                "regnet_y_32gf_swag_e2e_v1",
                "squeezenet1_0",
                "vgg16_v1",
                "regnet_x_8gf_v1",
                "convnext_large",
                "vit_b_16_swag_linear_v1",
                "shufflenet_v2_x1_5",
                "regnet_y_16gf_swag_e2e_v1",
                "efficientnet_v2_l",
                "vit_h_14_swag_linear_v1",
                "wide_resnet101_2_v1",
                "swin_b",
                "shufflenet_v2_x0_5",
                "regnet_y_32gf_v2",
                "resnext101_32x8d_quantized_fbgemm_v2",
                "efficientnet_b0",
                "vit_l_16_v1",
                "regnet_y_128gf_swag_e2e_v1",
                "vit_l_16_swag_e2e_v1",
                "regnet_x_3_2gf_v1",
                "inception_v3",
                "regnet_y_128gf_swag_linear_v1",
                "inception_v3_fbgemm_v1",
                "mobilenet_v2_quantized_qnnpack_v1",
                "shufflenet_v2_x1_0",
                "densenet169",
                "regnet_y_3_2gf_v2",
                "efficientnet_v2_s",
                "vit_h_14_swag_e2e_v1",
                "regnet_y_16gf_v1",
                "regnet_x_32gf_v1",
                "shufflenet_v2_x1_5_quantized_fbgemm_v1",
                "regnet_x_32gf_v2",
                "efficientnet_b7",
                "resnext101_32x8d_v2",
                "regnet_x_800mf_v2",
                "efficientnet_b3",
                "regnet_x_800mf_v1",
                "regnet_y_400mf_v1",
                "mobilenet_v3_large_v1",
                "resnet50_v2",
                "efficientnet_b4",
                "mobilenet_v3_small",
                "alexnet",
                "regnet_x_400mf_v1",
                "densenet161",
                "regnet_x_400mf_v2",
                "resnet50_quantized_fbgemm_v1",
                "vit_l_16_swag_linear_v1",
                "convnext_base",
                "resnet34",
                "resnet50_v1",
                "shufflenet_v2_x2_0",
                "regnet_x_8gf_v2",
                "regnet_y_1_6gf_v2",
                "resnet152_v2",
                "regnet_x_1_6gf_v1",
                "shufflenet_v2_x2_0_quantized_fbgemm_v1",
                "regnet_y_16gf_v2",
                "regnet_y_8gf_v2",
                "regnet_y_32gf_swag_linear_v1",
                "squeezenet1_1",
                "vgg13_bn",
                "regnet_x_1_6gf_v2",
                "regnet_y_1_6gf_v1",
                "densenet121",
                "efficientnet_b2",
                "googlenet_quantized_fbgemm_v1",
                "resnext101_32x8d_quantized_fbgemm_v1",
                "mobilenet_v2_v2",
                "convnext_small",
                "vgg13",
                "swin_s",
                "resnet18_quantized_fbgemm_v1",
                "shufflenet_v2_x0_5_quantized_fbgemm_v1",
                "mnasnet1_0",
                "efficientnet_b1_v1",
                "vit_b_16_v1",
                "mnasnet1_3",
                "googlenet",
                "vgg16_bn",
                "resnext101_32x8d_v1",
                "vgg11",
                "mnasnet0_5",
                "resnet50_quantized_fbgemm_v2",
                "regnet_y_8gf_v1",
                "vgg11_bn",
                "regnet_y_16gf_swag_linear_v1",
                "efficientnet_b6",
                "regnet_x_3_2gf_v2",
                "mobilenet_v2_v1",
                "resnext101_64x4d_v1",
                "vgg19_bn",
                "vit_b_32",
                "resnext101_64x4d_quantized_fbgemm_v1",
                "convnext_tiny",
                "swin_t",
                "resnet18",
                "vgg19",
                "mobilenet_v3_large_v2",
                "resnet152_v1",
                "resnext50_32x4d_v2",
                "efficientnet_v2_m",
                "shufflenet_v2_x1_0_quantized_fbgemm_v1",
                "mnasnet0_75",
                "resnext50_32x4d_v1",
                "regnet_y_3_2gf_v1",
                "mobilenet_v3_large_quantized_qnnpack_v1",
                "regnet_y_400mf_v2",
                "vit_b_16_swag_e2e_v1",
                "wide_resnet101_2_v2",
                "regnet_x_16gf_v1",
                "efficientnet_b1_v2",
                "densenet201",
                "efficientnet_b5",
                "regnet_x_16gf_v2",
                "regnet_y_32gf_v1"
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
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
                "tesseract-denoising",
                "textract-extractor"
              ],
              "type": "string",
              "default": "textract-extractor"
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
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
            },
            "examples": {
              "easy-ocr": {},
              "tesseract-default": {},
              "tesseract-denoising": {},
              "textract-extractor": {}
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
            "example": {
              "dream-studio": {
                "output": "http://files.gladia.io/output/text/image/image-generation/dream-studio/example/output.png"
              },
              "stable-diffusion": {
                "output": "http://files.gladia.io/output/text/image/image-generation/stable-diffusion/example/output.png"
              }
            },
            "examples": {
              "dream-studio": {},
              "stable-diffusion": {}
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
    "/text/text/address-formatting/": {
      "get": {
        "tags": [
          "text.text.address-formatting"
        ],
        "summary": "Get list of models available for address-formatting",
        "operationId": "get_versions_text_text_address_formatting__get",
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
          "text.text.address-formatting"
        ],
        "summary": "Apply model for the address-formatting task for a given models",
        "operationId": "apply_text_text_address_formatting__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "geopy-formatter"
              ],
              "type": "string",
              "default": "geopy-formatter"
            },
            "name": "model",
            "in": "query"
          }
        ],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Body_apply_text_text_address_formatting__post"
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "geopy-formatter": ""
            },
            "examples": {
              "geopy-formatter": {}
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
    "/text/text/anonymization/": {
      "get": {
        "tags": [
          "text.text.anonymization"
        ],
        "summary": "Get list of models available for anonymization",
        "operationId": "get_versions_text_text_anonymization__get",
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
          "text.text.anonymization"
        ],
        "summary": "Apply model for the anonymization task for a given models",
        "operationId": "apply_text_text_anonymization__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "ms-presidio"
              ],
              "type": "string",
              "default": "ms-presidio"
            },
            "name": "model",
            "in": "query"
          }
        ],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Body_apply_text_text_anonymization__post"
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "ms-presidio": ""
            },
            "examples": {
              "ms-presidio": {}
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "flexudy-t5-base-multi-sentence-doctor": {
                "output": {
                  "prediction": "Text to correct.",
                  "prediction_raw": "Text to correct."
                }
              }
            },
            "examples": {
              "flexudy-t5-base-multi-sentence-doctor": {}
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "bart-large-xsum-samsum": {
                "output": {
                  "prediction": "Amanda can't find Betty's number. She wants to ask Larry to text her.",
                  "prediction_raw": "Amanda can't find Betty's number. She wants to ask Larry to text her."
                }
              }
            },
            "examples": {
              "bart-large-xsum-samsum": {}
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
    "/text/text/date-cleaning/": {
      "get": {
        "tags": [
          "text.text.date-cleaning"
        ],
        "summary": "Get list of models available for date-cleaning",
        "operationId": "get_versions_text_text_date_cleaning__get",
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
          "text.text.date-cleaning"
        ],
        "summary": "Apply model for the date-cleaning task for a given models",
        "operationId": "apply_text_text_date_cleaning__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "dataprep-formatter"
              ],
              "type": "string",
              "default": "dataprep-formatter"
            },
            "name": "model",
            "in": "query"
          }
        ],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Body_apply_text_text_date_cleaning__post"
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "dataprep-formatter": ""
            },
            "examples": {
              "dataprep-formatter": {}
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "mrm8488-t5-base-finetuned-emotion": {
                "output": {
                  "prediction": "love",
                  "prediction_raw": "love"
                }
              }
            },
            "examples": {
              "mrm8488-t5-base-finetuned-emotion": {}
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
    "/text/text/gps-address-formatting/": {
      "get": {
        "tags": [
          "text.text.gps-address-formatting"
        ],
        "summary": "Get list of models available for gps-address-formatting",
        "operationId": "get_versions_text_text_gps_address_formatting__get",
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
          "text.text.gps-address-formatting"
        ],
        "summary": "Apply model for the gps-address-formatting task for a given models",
        "operationId": "apply_text_text_gps_address_formatting__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "geopy-formatter"
              ],
              "type": "string",
              "default": "geopy-formatter"
            },
            "name": "model",
            "in": "query"
          }
        ],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Body_apply_text_text_gps_address_formatting__post"
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "geopy-formatter": ""
            },
            "examples": {
              "geopy-formatter": {}
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "byt5-base-tweet-hate-detection": {
                "output": {
                  "prediction": "hate-speech",
                  "prediction_raw": "hate-speech"
                }
              }
            },
            "examples": {
              "byt5-base-tweet-hate-detection": {}
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "michau-t5-base-en-generate-headline": ""
            },
            "examples": {
              "michau-t5-base-en-generate-headline": {}
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
                "keybert-paraphrase-multilingual-MiniLM-L12-v2"
              ],
              "type": "string",
              "default": "keybert-paraphrase-multilingual-MiniLM-L12-v2"
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
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
            },
            "examples": {
              "keybert-paraphrase-multilingual-MiniLM-L12-v2": {}
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
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
              }
            },
            "examples": {
              "toftrup-etal-2021": {}
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
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
            },
            "examples": {
              "bloom-560m": {},
              "EleutherAI-gpt-neo-2_7B": {}
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
                  "prediction": "array",
                  "prediction_raw": {}
                }
              }
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
            },
            "examples": {
              "dbmdz-bert-large-cased-finetuned-conll03-english": {}
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
                  "prediction": "number",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "bert-base-uncased": {
                "output": {
                  "prediction": 0.9999550580978394,
                  "prediction_raw": 0.9999550580978394
                }
              }
            },
            "examples": {
              "bert-base-uncased": {}
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
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
            },
            "examples": {
              "roberta-base": {},
              "albert-base-v2": {},
              "distilbert-base-uncased": {},
              "bert-base-uncased": {}
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "sentdex-GPyT": {
                "output": {
                  "prediction": "def is_palendrome(s): return False\n    if s == 'a':\n        return True\n    if s == 'b':\n        return False\n    if s == 'c':\n        return False\n    if s == 'd':\n        return False\n    if s == 'e':\n        return False\n    if s == 'f':\n        return",
                  "prediction_raw": "def is_palendrome(s): return False<N>    if s == 'a':<N>        return True<N>    if s == 'b':<N>        return False<N>    if s == 'c':<N>        return False<N>    if s == 'd':<N>        return False<N>    if s == 'e':<N>        return False<N>    if s == 'f':<N>        return"
                }
              }
            },
            "examples": {
              "sentdex-GPyT": {}
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
    "/text/text/punctuation-restoration/": {
      "get": {
        "tags": [
          "text.text.punctuation-restoration"
        ],
        "summary": "Get list of models available for punctuation-restoration",
        "operationId": "get_versions_text_text_punctuation_restoration__get",
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
          "text.text.punctuation-restoration"
        ],
        "summary": "Apply model for the punctuation-restoration task for a given models",
        "operationId": "apply_text_text_punctuation_restoration__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "kredor-punctuate-all"
              ],
              "type": "string",
              "default": "kredor-punctuate-all"
            },
            "name": "model",
            "in": "query"
          }
        ],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Body_apply_text_text_punctuation_restoration__post"
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "kredor-punctuate-all": {
                "output": "My name is Clara and I live in Berkeley, California."
              }
            },
            "examples": {
              "kredor-punctuate-all": {}
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
                "distilbert-base-cased-distilled-squad",
                "deepset-roberta-base-squad2",
                "mfeb-albert-xxlarge-v2-squad2",
                "mrm8488-bert-tiny-5-finetuned-squadv2",
                "deepset_bert-base-cased-squad2"
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
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
            },
            "examples": {
              "mrm8488-bert-tiny-5-finetuned-squadv2": {},
              "deepset-roberta-base-squad2": {},
              "mfeb-albert-xxlarge-v2-squad2": {},
              "distilbert-base-cased-distilled-squad": {},
              "deepset_bert-base-cased-squad2": {}
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
                "ramsrigouthamg-t5_sentence_paraphraser",
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
                "schema": {
                  "type": "object",
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
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
            },
            "examples": {
              "ramsrigouthamg-t5-large-paraphraser-diverse-high-quality": {},
              "ramsrigouthamg-t5_sentence_paraphraser": {}
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
                "zero-shot-classification-facebook-bart-large-mnli"
              ],
              "type": "string",
              "default": "distilbert-base-uncased-finetuned-sst-2-english"
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
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
              }
            },
            "examples": {
              "zero-shot-classification-facebook-bart-large-mnli": {},
              "distilbert-base-uncased-finetuned-sst-2-english": {},
              "distilbert-base-uncased": {}
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
                  "prediction": "number",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "all-MiniLM-L6-v2": {
                "output": {
                  "prediction": 0.9097199440002441,
                  "prediction_raw": 0.9097199440002441
                }
              }
            },
            "examples": {
              "all-MiniLM-L6-v2": {}
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
                  "prediction": "string",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "all-MiniLM-L6-v2": {
                "output": {
                  "prediction": "The Crown is a British historical drama series on Netflix. Created by Peter Morgan and produced by Left Bank Pictures and Sony Pictures Television. First season was released by Netflix on 4 November 2016, the second on 8 December 2017, the third on 17 November 2019, and the fourth on 15 November 2020. As of 2020, the estimated production budget of The Crown has been reported to be $260 million, making it one of the most expensive television series in history.",
                  "prediction_raw": "The Crown is a British historical drama series on Netflix. Created by Peter Morgan and produced by Left Bank Pictures and Sony Pictures Television. First season was released by Netflix on 4 November 2016, the second on 8 December 2017, the third on 17 November 2019, and the fourth on 15 November 2020. As of 2020, the estimated production budget of The Crown has been reported to be $260 million, making it one of the most expensive television series in history."
                }
              }
            },
            "examples": {
              "all-MiniLM-L6-v2": {}
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
                  "prediction": "str",
                  "prediction_raw": {}
                }
              }
            },
            "example": {
              "facebook-nllb-200-distilled-600M": {
                "output": {
                  "prediction": "Le texte à traduire",
                  "prediction_raw": "Le texte à traduire"
                }
              }
            },
            "examples": {
              "facebook-nllb-200-distilled-600M": {}
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
                  "prediction": "array",
                  "prediction_raw": {}
                }
              }
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
            },
            "examples": {
              "bert-base-multilingual-cased": {}
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
    "/text/text/country-from-name/": {
      "post": {
        "tags": [
          "text.text.country-from-name"
        ],
        "summary": "Apply model for the country from name task for a given model",
        "operationId": "apply_text_text_country_from_name__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_country_from_name__post"
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
    "/text/text/age-from-name/": {
      "post": {
        "tags": [
          "text.text.age-from-name"
        ],
        "summary": "Apply model for the age from name task for a given model",
        "operationId": "apply_text_text_age_from_name__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_age_from_name__post"
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
    "/text/text/gender-from-name/": {
      "post": {
        "tags": [
          "text.text.gender-from-name"
        ],
        "summary": "Apply model for the gender from name task for a given model",
        "operationId": "apply_text_text_gender_from_name__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_gender_from_name__post"
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
    },
    "/text/text/command-generation/": {
      "post": {
        "tags": [
          "text.text.command-generation"
        ],
        "summary": "Apply model for the headline generation task for a given model",
        "operationId": "apply_text_text_command_generation__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_command_generation__post"
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
    "/text/text/guess-city/": {
      "post": {
        "tags": [
          "text.text.guess-city"
        ],
        "summary": "Apply model to guess the city task for a given model",
        "operationId": "apply_text_text_guess_city__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_guess_city__post"
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
    "/text/text/guess-country/": {
      "post": {
        "tags": [
          "text.text.guess-country"
        ],
        "summary": "Apply model to guess the country name for a given model",
        "operationId": "apply_text_text_guess_country__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_guess_country__post"
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
    "/text/text/company-categorization/": {
      "post": {
        "tags": [
          "text.text.company-categorization"
        ],
        "summary": "Categorize the company",
        "operationId": "apply_text_text_company_categorization__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_company_categorization__post"
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
    "/text/text/company-name-normalization/": {
      "post": {
        "tags": [
          "text.text.company-name-normalization"
        ],
        "summary": "Normalize company name",
        "operationId": "apply_text_text_company_name_normalization__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_company_name_normalization__post"
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
    "/text/text/company-stock-code/": {
      "post": {
        "tags": [
          "text.text.company-stock-code"
        ],
        "summary": "Get the company stock code",
        "operationId": "apply_text_text_company_stock_code__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_company_stock_code__post"
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
    "/text/text/website-classification/": {
      "post": {
        "tags": [
          "text.text.website-classification"
        ],
        "summary": "Get the company stock code",
        "operationId": "apply_text_text_website_classification__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_website_classification__post"
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
    "/text/text/vat-country-guessing/": {
      "post": {
        "tags": [
          "text.text.vat-country-guessing"
        ],
        "summary": "Guess the country of the provided VAT number",
        "operationId": "apply_text_text_vat_country_guessing__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_vat_country_guessing__post"
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
    "/text/text/gpt3/": {
      "post": {
        "tags": [
          "text.text.gpt3"
        ],
        "summary": "GPT3",
        "operationId": "apply_text_text_gpt3__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_gpt3__post"
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
      "Body_apply_text_text_summarization__post": {
        "title": "Body_apply_text_text_summarization__post",
        "required": [
          "text",
          "source_language"
        ],
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "description": "Insert the text to summarize here",
            "example": "The Crown is a historical drama streaming television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan, and produced by Left Bank Pictures and Sony Pictures Television for Netflix. Morgan developed it from his drama film The Queen (2006) and especially his stage play The Audience (2013). The first season covers the period from Elizabeth's marriage to Philip, Duke of Edinburgh in 1947 to the disintegration of her sister Princess Margaret's engagement to Group Captain Peter Townsend in 1955. The second season covers the period from the Suez Crisis in 1956 to the retirement of Prime Minister Harold Macmillan in 1963 and the birth of Prince Edward in 1964. The third season spans 1964 to 1977, includes Harold Wilson's two periods as prime minister, and introduces Camilla Shand. The fourth season spans 1979 to the early 1990s and includes Margaret Thatcher's tenure as prime minister and Prince Charles's marriage to Lady Diana Spencer. The fifth and sixth seasons, which will close the series, will cover the Queen's reign into the 21st century. For each of the two-season increments, new actors fill the roles to account for the ageing process in the periods of time portrayed. Claire Foy portrays the Queen in the first two seasons, alongside Matt Smith as Prince Philip and Vanessa Kirby as Princess Margaret. For the third and fourth seasons, Olivia Colman takes over as the Queen, Tobias Menzies as Prince Philip, and Helena Bonham Carter as Princess Margaret. Also added to the cast in season 3 is Josh O'Connor as Prince Charles. In the fourth season, new cast members include Emma Corrin as Lady Diana Spencer and Gillian Anderson as Margaret Thatcher. Imelda Staunton, Jonathan Pryce, and Lesley Manville will succeed Colman, Menzies, and Bonham Carter, respectively, for the final two seasons, while Elizabeth Debicki and Dominic West are expected to assume the role of Princess Diana and Prince Charles, respectively. Filming takes place at Elstree Studios in Borehamwood, Hertfordshire, with location shooting throughout the United Kingdom and internationally. The first season was released by Netflix on 4 November 2016, the second on 8 December 2017, the third on 17 November 2019, and the fourth on 15 November 2020. The fifth season is anticipated in 2022. As of 2020, the estimated production budget of The Crown has been reported to be $260 million, making it one of the most expensive television series in history.[4] The Crown was praised by critics for its acting, directing, writing, cinematography, and production values, although its historical inaccuracies have received some criticism, particularly within the fourth season. Nonetheless, it received accolades at the 23rd Screen Actors Guild Awards, Foy won Best Actress in the lead role and Best Actor for John Lithgow as Winston Churchill, and has secured a total of sixty three nominations for its first four seasons at the Primetime Emmy Awards, including four for Outstanding Drama Series.[5] The series has also twice won the Golden Globe Award for Best Television Series - Drama, at the 74th and 78th ceremonies, with additional acting wins for Foy, Colman, Corrin, O'Connor and Anderson.[6] ",
            "data_type": "string",
            "examples": [
              "The Crown is a historical drama streaming television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan, and produced by Left Bank Pictures and Sony Pictures Television for Netflix. Morgan developed it from his drama film The Queen (2006) and especially his stage play The Audience (2013). The first season covers the period from Elizabeth's marriage to Philip, Duke of Edinburgh in 1947 to the disintegration of her sister Princess Margaret's engagement to Group Captain Peter Townsend in 1955. The second season covers the period from the Suez Crisis in 1956 to the retirement of Prime Minister Harold Macmillan in 1963 and the birth of Prince Edward in 1964. The third season spans 1964 to 1977, includes Harold Wilson's two periods as prime minister, and introduces Camilla Shand. The fourth season spans 1979 to the early 1990s and includes Margaret Thatcher's tenure as prime minister and Prince Charles's marriage to Lady Diana Spencer. The fifth and sixth seasons, which will close the series, will cover the Queen's reign into the 21st century. For each of the two-season increments, new actors fill the roles to account for the ageing process in the periods of time portrayed. Claire Foy portrays the Queen in the first two seasons, alongside Matt Smith as Prince Philip and Vanessa Kirby as Princess Margaret. For the third and fourth seasons, Olivia Colman takes over as the Queen, Tobias Menzies as Prince Philip, and Helena Bonham Carter as Princess Margaret. Also added to the cast in season 3 is Josh O'Connor as Prince Charles. In the fourth season, new cast members include Emma Corrin as Lady Diana Spencer and Gillian Anderson as Margaret Thatcher. Imelda Staunton, Jonathan Pryce, and Lesley Manville will succeed Colman, Menzies, and Bonham Carter, respectively, for the final two seasons, while Elizabeth Debicki and Dominic West are expected to assume the role of Princess Diana and Prince Charles, respectively. Filming takes place at Elstree Studios in Borehamwood, Hertfordshire, with location shooting throughout the United Kingdom and internationally. The first season was released by Netflix on 4 November 2016, the second on 8 December 2017, the third on 17 November 2019, and the fourth on 15 November 2020. The fifth season is anticipated in 2022. As of 2020, the estimated production budget of The Crown has been reported to be $260 million, making it one of the most expensive television series in history.[4] The Crown was praised by critics for its acting, directing, writing, cinematography, and production values, although its historical inaccuracies have received some criticism, particularly within the fourth season. Nonetheless, it received accolades at the 23rd Screen Actors Guild Awards, Foy won Best Actress in the lead role and Best Actor for John Lithgow as Winston Churchill, and has secured a total of sixty three nominations for its first four seasons at the Primetime Emmy Awards, including four for Outstanding Drama Series.[5] The series has also twice won the Golden Globe Award for Best Television Series - Drama, at the 74th and 78th ceremonies, with additional acting wins for Foy, Colman, Corrin, O'Connor and Anderson.[6] "
            ]
          },
          "source_language": {
            "title": "source_language",
            "type": "string",
            "description": "Use the ISO 3 letters representation for source language",
            "example": "eng",
            "data_type": "string",
            "examples": [
              "eng"
            ]
          },
          "min_length": {
            "title": "min_length",
            "type": "integer",
            "description": "Minimum lenght of the summary",
            "default": 40,
            "example": 40,
            "data_type": "integer",
            "examples": [
              40
            ]
          },
          "max_length": {
            "title": "max_length",
            "type": "integer",
            "description": "Maximum lenght of the summary",
            "default": 512,
            "example": 512,
            "data_type": "integer",
            "examples": [
              512
            ]
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
            "description": "Insert the text to anlayse sentiment from",
            "example": "I love you.",
            "data_type": "string",
            "examples": [
              "I love you."
            ]
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
      },
      "Body_apply_text_text_headline_generation__post": {
        "title": "Body_apply_text_text_headline_generation__post",
        "required": [
          "text",
          "max_length"
        ],
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "description": "Insert text here to generate the headline from",
            "example": "Very early yesterday morning, the United States President Donald Trump reported he and his wife First Lady Melania Trump tested positive for COVID-19. Officials said the Trumps' 14-year-old son Barron tested negative as did First Family and Senior Advisors Jared Kushner and Ivanka Trump.\nTrump took to social media, posting at 12:54 am local time (0454 UTC) on Twitter, \"Tonight, [Melania] and I tested positive for COVID-19. We will begin our quarantine and recovery process immediately. We will get through this TOGETHER!\" Yesterday afternoon Marine One landed on the White House's South Lawn flying Trump to Walter Reed National Military Medical Center (WRNMMC) in Bethesda, Maryland.\nReports said both were showing \"mild symptoms\". Senior administration officials were tested as people were informed of the positive test. Senior advisor Hope Hicks had tested positive on Thursday.\nPresidential physician Sean Conley issued a statement saying Trump has been given zinc, vitamin D, Pepcid and a daily Aspirin. Conley also gave a single dose of the experimental polyclonal antibodies drug from Regeneron Pharmaceuticals.\nAccording to official statements, Trump, now operating from the WRNMMC, is to continue performing his duties as president during a 14-day quarantine. In the event of Trump becoming incapacitated, Vice President Mike Pence could take over the duties of president via the 25th Amendment of the US Constitution. The Pence family all tested negative as of yesterday and there were no changes regarding Pence's campaign events.\n",
            "data_type": "string",
            "examples": [
              "Very early yesterday morning, the United States President Donald Trump reported he and his wife First Lady Melania Trump tested positive for COVID-19. Officials said the Trumps' 14-year-old son Barron tested negative as did First Family and Senior Advisors Jared Kushner and Ivanka Trump.\nTrump took to social media, posting at 12:54 am local time (0454 UTC) on Twitter, \"Tonight, [Melania] and I tested positive for COVID-19. We will begin our quarantine and recovery process immediately. We will get through this TOGETHER!\" Yesterday afternoon Marine One landed on the White House's South Lawn flying Trump to Walter Reed National Military Medical Center (WRNMMC) in Bethesda, Maryland.\nReports said both were showing \"mild symptoms\". Senior administration officials were tested as people were informed of the positive test. Senior advisor Hope Hicks had tested positive on Thursday.\nPresidential physician Sean Conley issued a statement saying Trump has been given zinc, vitamin D, Pepcid and a daily Aspirin. Conley also gave a single dose of the experimental polyclonal antibodies drug from Regeneron Pharmaceuticals.\nAccording to official statements, Trump, now operating from the WRNMMC, is to continue performing his duties as president during a 14-day quarantine. In the event of Trump becoming incapacitated, Vice President Mike Pence could take over the duties of president via the 25th Amendment of the US Constitution. The Pence family all tested negative as of yesterday and there were no changes regarding Pence's campaign events.\n"
            ]
          },
          "max_length": {
            "title": "max_length",
            "type": "integer",
            "description": "Maximum length for the headline",
            "example": 16,
            "data_type": "integer",
            "examples": [
              16,
              100
            ]
          }
        }
      },
      "Body_apply_text_text_command_generation__post": {
        "title": "Body_apply_text_text_command_generation__post",
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "example": "Is this text hateful ?",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_guess_country__post": {
        "title": "Body_apply_text_text_guess_country__post",
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "example": "fr",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_guess_city__post": {
        "title": "Body_apply_text_text_guess_city__post",
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "example": "sf",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_website_classification__post": {
        "title": "Body_apply_text_text_website_classification__post",
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "example": "youtube.com",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_company_categorization__post": {
        "title": "Body_apply_text_text_company_categorization__post",
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "example": "bouygues",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_company_name_normalization__post": {
        "title": "Body_apply_text_text_company_name_normalization__post",
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "example": "oracle inc",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_company_stock_code__post": {
        "title": "Body_apply_text_text_company_stock_code__post",
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "example": "AMZN",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_vat_country_guessing__post": {
        "title": "Body_apply_text_text_vat_country_guessing__post",
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "example": "FR123456789",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_gpt3__post": {
        "title": "Body_apply_text_text_gpt3__post",
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "example": "what color is the sky ?",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_gender_from_name__post": {
        "title": "Body_apply_text_text_gender_from_name__post",
        "type": "object",
        "properties": {
          "name": {
            "title": "name",
            "type": "string",
            "example": "Laurent",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_age_from_name__post": {
        "title": "Body_apply_text_text_age_from_name__post",
        "type": "object",
        "properties": {
          "name": {
            "title": "name",
            "type": "string",
            "example": "Laurent",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_country_from_name__post": {
        "title": "Body_apply_text_text_country_from_name__post",
        "type": "object",
        "properties": {
          "name": {
            "title": "name",
            "type": "string",
            "example": "Laurent",
            "data_type": "string",
            "examples": {}
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
            "description": "Insert the text to classify as hate or not",
            "example": "I hate you piece of shit",
            "data_type": "string",
            "examples": [
              "I hate you piece of shit"
            ]
          }
        }
      },
      "Body_apply_text_text_translation__post": {
        "title": "Body_apply_text_text_translation__post",
        "required": [
          "input_string",
          "source_language",
          "target_language"
        ],
        "type": "object",
        "properties": {
          "input_string": {
            "title": "input_string",
            "type": "string",
            "description": "Insert the text to translate here",
            "example": "Text to translate",
            "data_type": "string",
            "examples": [
              "Text to translate"
            ]
          },
          "source_language": {
            "title": "source_language",
            "type": "string",
            "description": "Use the ISO 3 letters (ISO 639-3) representation for source language",
            "example": "eng",
            "data_type": "string",
            "examples": [
              "eng"
            ]
          },
          "target_language": {
            "title": "target_language",
            "type": "string",
            "description": "Use the ISO 3 letters (ISO 639-3) representation for target language",
            "example": "fra",
            "data_type": "string",
            "examples": [
              "fra"
            ]
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
            "data_type": "string",
            "examples": [
              "Input text to perform language detection on"
            ]
          }
        }
      },
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
            "data_type": "audio",
            "examples": {
              "from_audio_mp3": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
              "from_audio_m4a": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.m4a",
              "from_audio_wav": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.wav"
            }
          },
          "audio_url": {
            "title": "audio_url",
            "type": "string",
            "description": "Audio to transcribe (url) - ignored if \"audio\" file is provided",
            "example": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
            "data_type": "url",
            "examples": {
              "from_audio_mp3": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
              "from_audio_m4a": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.m4a",
              "from_audio_wav": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.wav"
            }
          },
          "language": {
            "title": "language",
            "type": "string",
            "description": "Language of the audio",
            "default": "en",
            "example": "en",
            "data_type": "string",
            "examples": [
              "en"
            ]
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
            "data_type": "image",
            "examples": {
              "from_owl2_png": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
              "from_owl2_jpg": "http://files.gladia.io/examples/image/image/background-removal/owl2.jpg",
              "from_lions-4_jpg": "https://15pictures.com/wp-content/gallery/15-pictures-lions/lions-4.jpg"
            }
          },
          "image_url": {
            "title": "image_url",
            "type": "string",
            "description": "Image to remove the background from (url) - ignored if \"image\" file is provided",
            "example": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
            "data_type": "url",
            "examples": {
              "from_owl2_png": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
              "from_owl2_jpg": "http://files.gladia.io/examples/image/image/background-removal/owl2.jpg",
              "from_lions-4_jpg": "https://15pictures.com/wp-content/gallery/15-pictures-lions/lions-4.jpg"
            }
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
            "data_type": "image",
            "examples": {
              "from_owl2_png": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
              "from_owl2_jpg": "http://files.gladia.io/examples/image/image/background-removal/owl2.jpg",
              "from_lions-4_jpg": "https://15pictures.com/wp-content/gallery/15-pictures-lions/lions-4.jpg"
            }
          },
          "original_image_url": {
            "title": "original_image_url",
            "type": "string",
            "description": "Image to replace the background from (url) - ignored if \"original_image\" file is provided",
            "example": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
            "data_type": "url",
            "examples": {
              "from_owl2_png": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
              "from_owl2_jpg": "http://files.gladia.io/examples/image/image/background-removal/owl2.jpg",
              "from_lions-4_jpg": "https://15pictures.com/wp-content/gallery/15-pictures-lions/lions-4.jpg"
            }
          },
          "background_image": {
            "title": "background_image",
            "type": "string",
            "description": "Image the background will be replaced with",
            "format": "binary",
            "example": "http://files.gladia.io/examples/image/image/bck-grd/green-forest.png",
            "data_type": "image",
            "examples": {
              "from_green-forest_png": "http://files.gladia.io/examples/image/image/bck-grd/green-forest.png"
            }
          },
          "background_image_url": {
            "title": "background_image_url",
            "type": "string",
            "description": "Image the background will be replaced with (url) - ignored if \"background_image\" file is provided",
            "example": "http://files.gladia.io/examples/image/image/bck-grd/green-forest.png",
            "data_type": "url",
            "examples": {
              "from_green-forest_png": "http://files.gladia.io/examples/image/image/bck-grd/green-forest.png"
            }
          },
          "alignment": {
            "title": "alignment",
            "allOf": [
              {
                "$ref": "#/components/schemas/DynamicEnum_1668776930.0080674"
              }
            ],
            "description": "original image insertion position in the background image",
            "example": "center",
            "data_type": "list",
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
            ]
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
            "data_type": "image",
            "examples": {
              "from_rsz_paris_jpg": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.jpg",
              "from_rsz_paris_png": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.png",
              "from_rsz_paris_gif": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.gif"
            }
          },
          "image_url": {
            "title": "image_url",
            "type": "string",
            "description": "Image to colorize (url) - ignored if \"image\" file is provided",
            "example": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.jpg",
            "data_type": "url",
            "examples": {
              "from_rsz_paris_jpg": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.jpg",
              "from_rsz_paris_png": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.png",
              "from_rsz_paris_gif": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.gif"
            }
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
            "data_type": "image",
            "examples": {
              "from_deblurring_png": "http://files.gladia.io/image/image/deblurring/deblurring.png",
              "from_deblurring_jpg": "http://files.gladia.io/image/image/deblurring/deblurring.jpg"
            }
          },
          "image_url": {
            "title": "image_url",
            "type": "string",
            "description": "Image to deblur (url) - ignored if \"image\" file is provided",
            "example": "http://files.gladia.io/image/image/deblurring/deblurring.png",
            "data_type": "url",
            "examples": {
              "from_deblurring_png": "http://files.gladia.io/image/image/deblurring/deblurring.png",
              "from_deblurring_jpg": "http://files.gladia.io/image/image/deblurring/deblurring.jpg"
            }
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
            "data_type": "image",
            "examples": {
              "from_enhancement_retouching_png": "http://files.gladia.io/image/image/enhancement/enhancement_retouching.png",
              "from_enhancement_retouching_jpg": "http://files.gladia.io/image/image/enhancement/enhancement_retouching.jpg",
              "from_enhancement_low-light_png": "http://files.gladia.io/image/image/enhancement/enhancement_low-light.png",
              "from_enhancement_low-light_jpg": "http://files.gladia.io/image/image/enhancement/enhancement_low-light.jpg"
            }
          },
          "image_url": {
            "title": "image_url",
            "type": "string",
            "description": "Image to blur face from (url) - ignored if \"image\" file is provided",
            "example": "http://files.gladia.io/image/image/enhancement/enhancement_retouching.png",
            "data_type": "url",
            "examples": {
              "from_enhancement_retouching_png": "http://files.gladia.io/image/image/enhancement/enhancement_retouching.png",
              "from_enhancement_retouching_jpg": "http://files.gladia.io/image/image/enhancement/enhancement_retouching.jpg",
              "from_enhancement_low-light_png": "http://files.gladia.io/image/image/enhancement/enhancement_low-light.png",
              "from_enhancement_low-light_jpg": "http://files.gladia.io/image/image/enhancement/enhancement_low-light.jpg"
            }
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
            "data_type": "image",
            "examples": {
              "from_face-bluring_jpg": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.jpg",
              "from_face-bluring_png": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.png",
              "from_face-bluring_gif": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.gif"
            }
          },
          "image_url": {
            "title": "image_url",
            "type": "string",
            "description": "Image to blur face from (url) - ignored if \"image\" file is provided",
            "example": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.jpg",
            "data_type": "url",
            "examples": {
              "from_face-bluring_jpg": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.jpg",
              "from_face-bluring_png": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.png",
              "from_face-bluring_gif": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.gif"
            }
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
            "data_type": "image",
            "examples": {
              "from_overture-creations-5sI6fQgYIuo_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
            }
          },
          "original_image_url": {
            "title": "original_image_url",
            "type": "string",
            "description": "Image to inpaint (url) - ignored if \"original_image\" file is provided",
            "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
            "data_type": "url",
            "examples": {
              "from_overture-creations-5sI6fQgYIuo_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
            }
          },
          "mask_image": {
            "title": "mask_image",
            "type": "string",
            "description": "Mask to guide inpainting",
            "format": "binary",
            "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
            "data_type": "image",
            "examples": {
              "from_overture-creations-5sI6fQgYIuo_mask_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"
            }
          },
          "mask_image_url": {
            "title": "mask_image_url",
            "type": "string",
            "description": "Mask to guide inpainting (url) - ignored if \"mask_image\" file is provided",
            "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
            "data_type": "url",
            "examples": {
              "from_overture-creations-5sI6fQgYIuo_mask_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"
            }
          },
          "prompt": {
            "title": "prompt",
            "type": "string",
            "description": "Mask to guide inpainting",
            "example": "a cat sitting on a bench",
            "data_type": "string",
            "examples": [
              "a cat sitting on a bench"
            ]
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
            "data_type": "image",
            "examples": {
              "from_overture-creations-5sI6fQgYIuo_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
            }
          },
          "original_image_url": {
            "title": "original_image_url",
            "type": "string",
            "description": "Image to inpaint (url) - ignored if \"original_image\" file is provided",
            "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
            "data_type": "url",
            "examples": {
              "from_overture-creations-5sI6fQgYIuo_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
            }
          },
          "mask_image": {
            "title": "mask_image",
            "type": "string",
            "description": "Mask to guide inpainting",
            "format": "binary",
            "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
            "data_type": "image",
            "examples": {
              "from_overture-creations-5sI6fQgYIuo_mask_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"
            }
          },
          "mask_image_url": {
            "title": "mask_image_url",
            "type": "string",
            "description": "Mask to guide inpainting (url) - ignored if \"mask_image\" file is provided",
            "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
            "data_type": "url",
            "examples": {
              "from_overture-creations-5sI6fQgYIuo_mask_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"
            }
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
            "data_type": "image",
            "examples": {
              "from_test_png": "http://files.gladia.io/test/test.png"
            }
          },
          "image_url": {
            "title": "image_url",
            "type": "string",
            "description": "Image to restore (url) - ignored if \"image\" file is provided",
            "example": "http://files.gladia.io/test/test.png",
            "data_type": "url",
            "examples": {
              "from_test_png": "http://files.gladia.io/test/test.png"
            }
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
            "data_type": "image",
            "examples": {
              "from_landscape-pics-wallpapers_png": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.png",
              "from_landscape-pics-wallpapers_jpg": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.jpg"
            }
          },
          "image_url": {
            "title": "image_url",
            "type": "string",
            "description": "Image to uncolorize (url) - ignored if \"image\" file is provided",
            "example": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.png",
            "data_type": "url",
            "examples": {
              "from_landscape-pics-wallpapers_png": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.png",
              "from_landscape-pics-wallpapers_jpg": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.jpg"
            }
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
            "data_type": "image",
            "examples": {
              "from_image_png": "http://files.gladia.io/examples/image/text/classification/image.png",
              "from_image_jpg": "http://files.gladia.io/examples/image/text/classification/image.jpg",
              "from_image_gif": "http://files.gladia.io/examples/image/text/classification/image.gif"
            }
          },
          "image_url": {
            "title": "image_url",
            "type": "string",
            "description": "Image to classify (url) - ignored if \"image\" file is provided",
            "example": "http://files.gladia.io/examples/image/text/classification/image.png",
            "data_type": "url",
            "examples": {
              "from_image_png": "http://files.gladia.io/examples/image/text/classification/image.png",
              "from_image_jpg": "http://files.gladia.io/examples/image/text/classification/image.jpg",
              "from_image_gif": "http://files.gladia.io/examples/image/text/classification/image.gif"
            }
          },
          "top_k": {
            "title": "top_k",
            "type": "integer",
            "description": "Top K",
            "default": 1,
            "example": 1,
            "data_type": "integer",
            "examples": [
              1,
              2,
              100
            ]
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
            "data_type": "image",
            "examples": {
              "from_testocr_png": "http://files.gladia.io/examples/image/text/ocr/testocr.png",
              "from_testocr_jpg": "http://files.gladia.io/examples/image/text/ocr/testocr.jpg",
              "from_testocr_gif": "http://files.gladia.io/examples/image/text/ocr/testocr.gif"
            }
          },
          "image_url": {
            "title": "image_url",
            "type": "string",
            "description": "Image to extract text from (url) - ignored if \"image\" file is provided",
            "example": "http://files.gladia.io/examples/image/text/ocr/testocr.png",
            "data_type": "url",
            "examples": {
              "from_testocr_png": "http://files.gladia.io/examples/image/text/ocr/testocr.png",
              "from_testocr_jpg": "http://files.gladia.io/examples/image/text/ocr/testocr.jpg",
              "from_testocr_gif": "http://files.gladia.io/examples/image/text/ocr/testocr.gif"
            }
          },
          "source_language": {
            "title": "source_language",
            "type": "string",
            "description": "ISO 639-2 Source language (3 letters)",
            "default": "eng",
            "example": "eng",
            "data_type": "string",
            "examples": [
              "eng",
              "fra"
            ]
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
            "data_type": "string",
            "examples": [
              "The Eiffel tower landing on the moon, unreal engine."
            ]
          },
          "samples": {
            "title": "samples",
            "type": "integer",
            "description": "Number of predictions",
            "default": 1,
            "example": 1,
            "data_type": "integer",
            "examples": [
              1
            ]
          },
          "steps": {
            "title": "steps",
            "type": "integer",
            "description": "Number of steps",
            "default": 40,
            "example": 40,
            "data_type": "integer",
            "examples": [
              40
            ]
          },
          "seed": {
            "title": "seed",
            "type": "integer",
            "description": "Seed for predictions",
            "default": 396916372,
            "example": 396916372,
            "data_type": "integer",
            "examples": [
              396916372
            ]
          }
        }
      },
      "Body_apply_text_text_address_formatting__post": {
        "title": "Body_apply_text_text_address_formatting__post",
        "required": [
          "address"
        ],
        "type": "object",
        "properties": {
          "address": {
            "title": "address",
            "type": "string",
            "description": "Insert the address to format",
            "example": "Taj Mahal, Agra, Uttar Pradesh 282001",
            "data_type": "string",
            "examples": [
              "Taj Mahal, Agra, Uttar Pradesh 282001"
            ]
          }
        }
      },
      "Body_apply_text_text_anonymization__post": {
        "title": "Body_apply_text_text_anonymization__post",
        "required": [
          "text",
          "language",
          "entities"
        ],
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "description": "Insert the text to anonymize",
            "example": "Here are a few examples sentences we currently support:\nHello, my name is David Johnson and I live in Maine. My credit card number is 4095-2609-9393-4932 and my crypto wallet id is 16Yeky6GMjeNkAiNcBY7ZhrLoMSgg1BoyZ.\nOn September 18 I visited microsoft.com and sent an email to test@presidio.site,  from the IP 192.168.0.1.\nMy passport: 191280342 and my phone number: (212) 555-1234.\nThis is a valid International Bank Account Number: IL150120690000003111111 . Can you please check the status on bank account 954567876544?\nKate's social security number is 078-05-1126.  Her driver license? it is 1234567A.\n\nThis project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.microsoft.com When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA. This project has adopted the Microsoft Open Source Code of Conduct.\nFor more information see the Code of Conduct FAQ or contact opencode@microsoft.com with any additional questions or comments.",
            "data_type": "string",
            "examples": [
              "Here are a few examples sentences we currently support:\nHello, my name is David Johnson and I live in Maine. My credit card number is 4095-2609-9393-4932 and my crypto wallet id is 16Yeky6GMjeNkAiNcBY7ZhrLoMSgg1BoyZ.\nOn September 18 I visited microsoft.com and sent an email to test@presidio.site,  from the IP 192.168.0.1.\nMy passport: 191280342 and my phone number: (212) 555-1234.\nThis is a valid International Bank Account Number: IL150120690000003111111 . Can you please check the status on bank account 954567876544?\nKate's social security number is 078-05-1126.  Her driver license? it is 1234567A.\n\nThis project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.microsoft.com When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA. This project has adopted the Microsoft Open Source Code of Conduct.\nFor more information see the Code of Conduct FAQ or contact opencode@microsoft.com with any additional questions or comments."
            ]
          },
          "language": {
            "title": "language",
            "type": "string",
            "description": "Insert the language of the text to anonymize",
            "example": "en",
            "data_type": "string",
            "examples": [
              "en",
              "es",
              "fr"
            ]
          },
          "entities": {
            "title": "entities",
            "type": "string",
            "description": "Entities to anonymize (default: None=all)",
            "example": "PERSON, LOCATION, ORGANIZATION, CREDIT_CARD, CRYPTO, DATE_TIME, DOMAIN_NAME, EMAIL_ADDRESS, IBAN_CODE, IP_ADDRESS, NRP, PASSPORT, PHONE_NUMBER, US_BANK_NUMBER, US_DRIVER_LICENSE, US_ITIN, US_PASSPORT, US_SSN, US_VEHICLE, US_ZIP_CODE",
            "data_type": "string",
            "examples": [
              "PERSON, LOCATION, ORGANIZATION, CREDIT_CARD, CRYPTO, DATE_TIME, DOMAIN_NAME, EMAIL_ADDRESS, IBAN_CODE, IP_ADDRESS, NRP, PASSPORT, PHONE_NUMBER, US_BANK_NUMBER, US_DRIVER_LICENSE, US_ITIN, US_PASSPORT, US_SSN, US_VEHICLE, US_ZIP_CODE"
            ]
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
            "data_type": "string",
            "examples": [
              "Text to corrcte"
            ]
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
            "data_type": "string",
            "examples": [
              "Hannah: Hey, do you have Betty's number? Amanda: Lemme check Amanda: Sorry, can't find it. Amanda: Ask Larry Amanda: He called her last time we were at the park together Hannah: I don't know him well Amanda: Don't be shy, he's very nice Hannah: If you say so.. Hannah: I'd rather you texted him Amanda: Just text him 🙂 Hannah: Urgh.. Alright Hannah: Bye Amanda: Bye bye"
            ]
          }
        }
      },
      "Body_apply_text_text_date_cleaning__post": {
        "title": "Body_apply_text_text_date_cleaning__post",
        "required": [
          "date"
        ],
        "type": "object",
        "properties": {
          "date": {
            "title": "date",
            "type": "string",
            "description": "Insert the date to format",
            "example": "2/24/2003 0:00",
            "data_type": "string",
            "examples": [
              "2/24/2003 0:00"
            ]
          }
        }
      },
      "Body_apply_text_text_gps_address_formatting__post": {
        "title": "Body_apply_text_text_gps_address_formatting__post",
        "required": [
          "latitude",
          "longitude"
        ],
        "type": "object",
        "properties": {
          "latitude": {
            "title": "latitude",
            "type": "number",
            "description": "Insert the latitude of the address to fetch",
            "example": 43.2965,
            "data_type": "float",
            "examples": [
              43.2965
            ]
          },
          "longitude": {
            "title": "longitude",
            "type": "number",
            "description": "Insert the longitude of the address to fetch",
            "example": 5.36978,
            "data_type": "float",
            "examples": [
              5.36978
            ]
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
            "data_type": "string",
            "examples": [
              "The Crown is a historical drama streaming television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan, and produced by Left Bank Pictures and Sony Pictures Television for Netflix."
            ]
          },
          "top_k": {
            "title": "top_k",
            "type": "integer",
            "description": "Top K",
            "default": 10,
            "example": 10,
            "data_type": "integer",
            "examples": [
              1,
              10,
              100
            ]
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
            "data_type": "string",
            "examples": [
              "I'm currently driving while eating a"
            ]
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
            "data_type": "string",
            "examples": [
              "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, therefore very close to the Manhattan Bridge."
            ]
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
            "data_type": "string",
            "examples": [
              "I like you."
            ]
          },
          "sentence_2": {
            "title": "sentence_2",
            "type": "string",
            "description": "Insert the second sentence to estimate the probability from",
            "example": "But it's not about you.",
            "data_type": "string",
            "examples": [
              "But it's not about you."
            ]
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
            "data_type": "string",
            "examples": [
              "I think therefore I"
            ]
          },
          "top_k": {
            "title": "top_k",
            "type": "integer",
            "description": "Top K",
            "default": 3,
            "example": 3,
            "data_type": "integer",
            "examples": [
              1,
              3,
              10
            ]
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
            "data_type": "string",
            "examples": [
              "def is_palendrome(s):"
            ]
          }
        }
      },
      "Body_apply_text_text_punctuation_restoration__post": {
        "title": "Body_apply_text_text_punctuation_restoration__post",
        "required": [
          "sentence"
        ],
        "type": "object",
        "properties": {
          "sentence": {
            "title": "sentence",
            "type": "string",
            "description": "Insert the text to restore punctation from",
            "example": "My name is Clara and I live in Berkeley California",
            "data_type": "string",
            "examples": [
              "My name is Clara and I live in Berkeley California",
              "My name is Sarah and I live in London",
              "My name is Clara and I live in Berkeley, California."
            ]
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
            "data_type": "string",
            "examples": [
              "My name is Clara and I live in Berkeley."
            ]
          },
          "question": {
            "title": "question",
            "type": "string",
            "description": "Insert the question to be answered",
            "example": "What's my name?",
            "data_type": "string",
            "examples": [
              "What's my name?"
            ]
          },
          "top_k": {
            "title": "top_k",
            "type": "integer",
            "description": "Top K",
            "default": 1,
            "example": 1,
            "data_type": "integer",
            "examples": [
              1,
              10
            ]
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
            "data_type": "string",
            "examples": [
              "Once, a group of frogs was roaming around the forest in search of water."
            ]
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
            "data_type": "string",
            "examples": [
              "I like you. I love you"
            ]
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
            "data_type": "string",
            "examples": [
              "I like banana"
            ]
          },
          "sentence_2": {
            "title": "sentence_2",
            "type": "string",
            "description": "Insert the second text to compare here",
            "example": "I hate banana",
            "data_type": "string",
            "examples": [
              "I hate banana"
            ]
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
            "data_type": "string",
            "examples": [
              "Sentence from first language"
            ]
          },
          "input_string_language_2": {
            "title": "input_string_language_2",
            "type": "string",
            "description": "Insert the Sentence from second language",
            "example": "来自 第一 语言的 句子",
            "data_type": "string",
            "examples": [
              "来自 第一 语言的 句子"
            ]
          }
        }
      },
      "DynamicEnum_1668776930.0080674": {
        "title": "DynamicEnum_1668776930.0080674",
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