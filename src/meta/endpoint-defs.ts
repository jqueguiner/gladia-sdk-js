/* Generated file with "scripts/generate-metasdk.ts" */

import { EndpointDef } from "./endpoint-defs-type";

export const ENDPOINT_DEFS: EndpointDef[] = [
  {
    "url": "/audio/text/audio-transcription/",
    "inputType": "audio",
    "outputType": "text",
    "taskName": "audio-transcription",
    "models": [
      "large-v2",
      "medium"
    ],
    "defaultModel": "large-v2",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "audio",
        "name": "audio",
        "example": "http://files.gladia.io/example/audio-transcription/split_infinity.wav",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "audio_url",
        "example": "http://files.gladia.io/example/audio-transcription/split_infinity.wav",
        "required": false
      },
      {
        "in": "formData",
        "type": "enum",
        "name": "language_behaviour",
        "example": "automatic single language",
        "required": false,
        "enumValues": [
          "manual",
          "automatic single language",
          "automatic multiple languages"
        ]
      },
      {
        "in": "formData",
        "type": "enum",
        "name": "language",
        "example": "english",
        "required": false,
        "enumValues": [
          "afrikaans",
          "albanian",
          "amharic",
          "arabic",
          "armenian",
          "assamese",
          "azerbaijani",
          "bashkir",
          "basque",
          "belarusian",
          "bengali",
          "bosnian",
          "breton",
          "bulgarian",
          "catalan",
          "chinese",
          "croatian",
          "czech",
          "danish",
          "dutch",
          "english",
          "estonian",
          "faroese",
          "finnish",
          "french",
          "galician",
          "georgian",
          "german",
          "greek",
          "gujarati",
          "haitian creole",
          "hausa",
          "hawaiian",
          "hebrew",
          "hindi",
          "hungarian",
          "icelandic",
          "indonesian",
          "italian",
          "japanese",
          "javanese",
          "kannada",
          "kazakh",
          "khmer",
          "korean",
          "lao",
          "latin",
          "latvian",
          "lingala",
          "lithuanian",
          "luxembourgish",
          "macedonian",
          "malagasy",
          "malay",
          "malayalam",
          "maltese",
          "maori",
          "marathi",
          "mongolian",
          "myanmar",
          "nepali",
          "norwegian",
          "nynorsk",
          "occitan",
          "pashto",
          "persian",
          "polish",
          "portuguese",
          "punjabi",
          "romanian",
          "russian",
          "sanskrit",
          "serbian",
          "shona",
          "sindhi",
          "sinhala",
          "slovak",
          "slovenian",
          "somali",
          "spanish",
          "sundanese",
          "swahili",
          "swedish",
          "tagalog",
          "tajik",
          "tamil",
          "tatar",
          "telugu",
          "thai",
          "tibetan",
          "turkish",
          "turkmen",
          "ukrainian",
          "urdu",
          "uzbek",
          "vietnamese",
          "welsh",
          "wolof",
          "yiddish",
          "yoruba"
        ]
      },
      {
        "in": "formData",
        "type": "boolean",
        "name": "noise_reduction",
        "example": false,
        "required": false
      },
      {
        "in": "formData",
        "type": "enum",
        "name": "output_format",
        "example": "json",
        "required": false,
        "enumValues": [
          "json",
          "srt"
        ]
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/audio/text/audio-translated-transcription/",
    "inputType": "audio",
    "outputType": "text",
    "taskName": "audio-translated-transcription",
    "models": [
      "large-v2",
      "medium"
    ],
    "defaultModel": "large-v2",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "audio",
        "name": "audio",
        "example": "http://files.gladia.io/example/audio-transcription/split_infinity.wav",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "audio_url",
        "example": "http://files.gladia.io/example/audio-transcription/split_infinity.wav",
        "required": false
      },
      {
        "in": "formData",
        "type": "enum",
        "name": "language",
        "example": "english",
        "required": false,
        "enumValues": [
          "afrikaans",
          "albanian",
          "amharic",
          "arabic",
          "armenian",
          "assamese",
          "azerbaijani",
          "bashkir",
          "basque",
          "belarusian",
          "bengali",
          "bosnian",
          "breton",
          "bulgarian",
          "catalan",
          "chinese",
          "croatian",
          "czech",
          "danish",
          "dutch",
          "english",
          "estonian",
          "faroese",
          "finnish",
          "french",
          "galician",
          "georgian",
          "german",
          "greek",
          "gujarati",
          "haitian creole",
          "hausa",
          "hawaiian",
          "hebrew",
          "hindi",
          "hungarian",
          "icelandic",
          "indonesian",
          "italian",
          "japanese",
          "javanese",
          "kannada",
          "kazakh",
          "khmer",
          "korean",
          "lao",
          "latin",
          "latvian",
          "lingala",
          "lithuanian",
          "luxembourgish",
          "macedonian",
          "malagasy",
          "malay",
          "malayalam",
          "maltese",
          "maori",
          "marathi",
          "mongolian",
          "myanmar",
          "nepali",
          "norwegian",
          "nynorsk",
          "occitan",
          "pashto",
          "persian",
          "polish",
          "portuguese",
          "punjabi",
          "romanian",
          "russian",
          "sanskrit",
          "serbian",
          "shona",
          "sindhi",
          "sinhala",
          "slovak",
          "slovenian",
          "somali",
          "spanish",
          "sundanese",
          "swahili",
          "swedish",
          "tagalog",
          "tajik",
          "tamil",
          "tatar",
          "telugu",
          "thai",
          "tibetan",
          "turkish",
          "turkmen",
          "ukrainian",
          "urdu",
          "uzbek",
          "vietnamese",
          "welsh",
          "wolof",
          "yiddish",
          "yoruba"
        ]
      },
      {
        "in": "formData",
        "type": "boolean",
        "name": "noise_reduction",
        "example": false,
        "required": false
      },
      {
        "in": "formData",
        "type": "enum",
        "name": "output_format",
        "example": "json",
        "required": false,
        "enumValues": [
          "json",
          "srt"
        ]
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/audio/text/speaker-diarization/",
    "inputType": "audio",
    "outputType": "text",
    "taskName": "speaker-diarization",
    "models": [
      "pyannote-speaker_diarization"
    ],
    "defaultModel": "pyannote-speaker_diarization",
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
        "example": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "audio_url",
        "example": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
        "required": false
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "nb_speakers",
        "example": 0,
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/audio/text/speaker-gender-classification/",
    "inputType": "audio",
    "outputType": "text",
    "taskName": "speaker-gender-classification",
    "models": [
      "inafoss-inaSpeechSegmenter"
    ],
    "defaultModel": "inafoss-inaSpeechSegmenter",
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
        "example": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "audio_url",
        "example": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/audio/text/speech-emotion-classification/",
    "inputType": "audio",
    "outputType": "text",
    "taskName": "speech-emotion-classification",
    "models": [
      "cnn_lstm_parallel_model"
    ],
    "defaultModel": "cnn_lstm_parallel_model",
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
        "example": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "audio_url",
        "example": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/audio/text/youtube-audio-transcription/",
    "inputType": "audio",
    "outputType": "text",
    "taskName": "youtube-audio-transcription",
    "models": [
      "large-v2",
      "medium"
    ],
    "defaultModel": "large-v2",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "audio",
        "name": "audio",
        "example": "https://www.youtube.com/watch?v=3g8x9QAdw5c",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "audio_url",
        "example": "https://www.youtube.com/watch?v=3g8x9QAdw5c",
        "required": false
      },
      {
        "in": "formData",
        "type": "enum",
        "name": "language_behaviour",
        "example": "automatic single language",
        "required": false,
        "enumValues": [
          "manual",
          "automatic single language",
          "automatic multiple languages"
        ]
      },
      {
        "in": "formData",
        "type": "enum",
        "name": "language",
        "example": "english",
        "required": false,
        "enumValues": [
          "afrikaans",
          "albanian",
          "amharic",
          "arabic",
          "armenian",
          "assamese",
          "azerbaijani",
          "bashkir",
          "basque",
          "belarusian",
          "bengali",
          "bosnian",
          "breton",
          "bulgarian",
          "catalan",
          "chinese",
          "croatian",
          "czech",
          "danish",
          "dutch",
          "english",
          "estonian",
          "faroese",
          "finnish",
          "french",
          "galician",
          "georgian",
          "german",
          "greek",
          "gujarati",
          "haitian creole",
          "hausa",
          "hawaiian",
          "hebrew",
          "hindi",
          "hungarian",
          "icelandic",
          "indonesian",
          "italian",
          "japanese",
          "javanese",
          "kannada",
          "kazakh",
          "khmer",
          "korean",
          "lao",
          "latin",
          "latvian",
          "lingala",
          "lithuanian",
          "luxembourgish",
          "macedonian",
          "malagasy",
          "malay",
          "malayalam",
          "maltese",
          "maori",
          "marathi",
          "mongolian",
          "myanmar",
          "nepali",
          "norwegian",
          "nynorsk",
          "occitan",
          "pashto",
          "persian",
          "polish",
          "portuguese",
          "punjabi",
          "romanian",
          "russian",
          "sanskrit",
          "serbian",
          "shona",
          "sindhi",
          "sinhala",
          "slovak",
          "slovenian",
          "somali",
          "spanish",
          "sundanese",
          "swahili",
          "swedish",
          "tagalog",
          "tajik",
          "tamil",
          "tatar",
          "telugu",
          "thai",
          "tibetan",
          "turkish",
          "turkmen",
          "ukrainian",
          "urdu",
          "uzbek",
          "vietnamese",
          "welsh",
          "wolof",
          "yiddish",
          "yoruba"
        ]
      },
      {
        "in": "formData",
        "type": "boolean",
        "name": "noise_reduction",
        "example": false,
        "required": false
      },
      {
        "in": "formData",
        "type": "enum",
        "name": "output_format",
        "example": "json",
        "required": false,
        "enumValues": [
          "json",
          "srt"
        ]
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
        "example": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "example": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/background-replacement/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "background-replacement",
    "models": [
      "mobilenet"
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
        "name": "original_image",
        "example": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "original_image_url",
        "example": "http://files.gladia.io/examples/image/image/background-removal/owl2.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "image",
        "name": "background_image",
        "example": "http://files.gladia.io/examples/image/image/bck-grd/green-forest.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "background_image_url",
        "example": "http://files.gladia.io/examples/image/image/bck-grd/green-forest.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "enum",
        "name": "alignment",
        "example": "center",
        "required": true,
        "enumValues": [
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
        "example": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.jpg",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "example": "http://files.gladia.io/examples/image/image/colorization/rsz_paris.jpg",
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
        "example": "http://files.gladia.io/image/image/deblurring/deblurring.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "example": "http://files.gladia.io/image/image/deblurring/deblurring.png",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/enhancement/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "enhancement",
    "models": [
      "FiveK",
      "LOL"
    ],
    "defaultModel": "FiveK",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "image",
        "example": "http://files.gladia.io/image/image/enhancement/enhancement_retouching.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "example": "http://files.gladia.io/image/image/enhancement/enhancement_retouching.png",
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
        "example": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.jpg",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "example": "http://files.gladia.io/examples/image/image/face-bluring/face-bluring.jpg",
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
      "compvis",
      "runwayml"
    ],
    "defaultModel": "runwayml",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "original_image",
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "original_image_url",
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "image",
        "name": "mask_image",
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "mask_image_url",
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "string",
        "name": "prompt",
        "example": "a cat sitting on a bench",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/image-guided-inpainting/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "image-guided-inpainting",
    "models": [
      "fantasy-studio"
    ],
    "defaultModel": "fantasy-studio",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "original_image",
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "original_image_url",
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "image",
        "name": "example_image",
        "example": "https://huggingface.co/spaces/Fantasy-Studio/Paint-by-Example/resolve/main/examples/reference/0.jpg",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "example_image_url",
        "example": "https://huggingface.co/spaces/Fantasy-Studio/Paint-by-Example/resolve/main/examples/reference/0.jpg",
        "required": false
      },
      {
        "in": "formData",
        "type": "image",
        "name": "mask_image",
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "mask_image_url",
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "seed",
        "example": 424242,
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "steps",
        "example": 75,
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "guidance_scale",
        "example": 15,
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
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "original_image_url",
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "image",
        "name": "mask_image",
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "mask_image_url",
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/instruction-guided-inpainting/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "instruction-guided-inpainting",
    "models": [
      "timbrooks-instruct-pix2pix"
    ],
    "defaultModel": "timbrooks-instruct-pix2pix",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "original_image",
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "original_image_url",
        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "string",
        "name": "instruction",
        "example": "Turn the dog into a pink cat",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "negative_prompt",
        "example": "dog",
        "required": true
      },
      {
        "in": "formData",
        "type": "float",
        "name": "image_guidance_scale",
        "example": 1.5,
        "required": true
      },
      {
        "in": "formData",
        "type": "float",
        "name": "text_guidance_scale",
        "example": 5.5,
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "seed",
        "example": 424242,
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "steps",
        "example": 75,
        "required": true
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
        "example": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "example": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.png",
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
        "example": "http://files.gladia.io/examples/image/text/classification/image.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "example": "http://files.gladia.io/examples/image/text/classification/image.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "top_k",
        "example": 1,
        "required": true
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
      "tesseract-denoising",
      "textract-extractor"
    ],
    "defaultModel": "textract-extractor",
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
        "example": "http://files.gladia.io/examples/image/text/ocr/testocr.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "example": "http://files.gladia.io/examples/image/text/ocr/testocr.png",
        "required": false
      },
      {
        "in": "formData",
        "type": "string",
        "name": "source_language",
        "example": "eng",
        "required": true
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
      "stable-diffusion--compvis-sd-14",
      "stable-diffusion--runwayml-sd-15",
      "stable-diffusion--stabilityai-sd-20",
      "stable-diffusion--stabilityai-sd-21"
    ],
    "defaultModel": "stable-diffusion--stabilityai-sd-21",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "prompt",
        "example": "The Eiffel tower landing on the moon, unreal engine.",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "samples",
        "example": 1,
        "required": false
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "steps",
        "example": 40,
        "required": false
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "seed",
        "example": 424242,
        "required": false
      }
    ],
    "hasSamplesParam": true
  },
  {
    "url": "/text/text/address-formatting/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "address-formatting",
    "models": [
      "geopy-formatter"
    ],
    "defaultModel": "geopy-formatter",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "address",
        "example": "Taj Mahal, Agra, Uttar Pradesh 282001",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/age-from-name/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "age-from-name",
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
        "name": "name",
        "example": "Laurent",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/anonymization/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "anonymization",
    "models": [
      "ms-presidio"
    ],
    "defaultModel": "ms-presidio",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "language",
        "example": "eng",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "entities",
        "example": "PERSON, LOCATION, ORGANIZATION, CREDIT_CARD, CRYPTO, DATE_TIME, DOMAIN_NAME, EMAIL_ADDRESS, IBAN_CODE, IP_ADDRESS, NRP, PASSPORT, PHONE_NUMBER, US_BANK_NUMBER, US_DRIVER_LICENSE, US_ITIN, US_PASSPORT, US_SSN, US_VEHICLE, US_ZIP_CODE",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "example": "Here are a few examples sentences we currently support:\nHello, my name is David Johnson and I live in Maine. My credit card number is 4095-2609-9393-4932 and my crypto wallet id is 16Yeky6GMjeNkAiNcBY7ZhrLoMSgg1BoyZ.\nOn September 18 I visited microsoft.com and sent an email to test@presidio.site,  from the IP 192.168.0.1.\nMy passport: 191280342 and my phone number: (212) 555-1234.\nThis is a valid International Bank Account Number: IL150120690000003111111 . Can you please check the status on bank account 954567876544?\nKate's social security number is 078-05-1126.  Her driver license? it is 1234567A.\n\nThis project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.microsoft.com When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA. This project has adopted the Microsoft Open Source Code of Conduct.\nFor more information see the Code of Conduct FAQ or contact opencode@microsoft.com with any additional questions or comments.",
        "required": true
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
        "example": "Text to corrcte",
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
        "example": "Deep learning (also known as deep structured learning) is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.[2]Deep-learning architectures such as deep neural networks, deep belief networks, deep reinforcement learning, recurrent neural networks, convolutional neural networks and Transformers have been applied to fields including computer vision, speech recognition, natural language processing, machine translation, bioinformatics, drug design, medical image analysis, climate science, material inspection and board game programs, where they have produced results comparable to and in some cases surpassing human expert performance.[3][4][5]Artificial neural networks (ANNs) were inspired by information processing and distributed communication nodes in biological systems. ANNs have various differences from biological brains. Specifically, artificial neural networks tend to be static and symbolic, while the biological brain of most living organisms is dynamic (plastic) and analogue.[6][7]The adjective deep in deep learning refers to the use of multiple layers in the network. Early work showed that a linear perceptron cannot be a universal classifier, but that a network with a nonpolynomial activation function with one hidden layer of unbounded width can. Deep learning is a modern variation which is concerned with an unbounded number of layers of bounded size, which permits practical application and optimized implementation, while retaining theoretical universality under mild conditions. In deep learning the layers are also permitted to be heterogeneous and to deviate widely from biologically informed connectionist models, for the sake of efficiency, trainability and understandability, hence the structured part.",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "bullets",
        "example": 3,
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/command-generation/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "command-generation",
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
        "example": "Is this text hateful ?",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/company-categorization/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "company-categorization",
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
        "example": "bouygues",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/company-name-normalization/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "company-name-normalization",
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
        "example": "oracle inc",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/company-stock-code/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "company-stock-code",
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
        "example": "AMZN",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/conversation-summarization/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "conversation-summarization",
    "models": [
      "bart-large-xsum-samsum"
    ],
    "defaultModel": "bart-large-xsum-samsum",
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
        "example": "Hannah: Hey, do you have Betty's number? Amanda: Lemme check Amanda: Sorry, can't find it. Amanda: Ask Larry Amanda: He called her last time we were at the park together Hannah: I don't know him well Amanda: Don't be shy, he's very nice Hannah: If you say so.. Hannah: I'd rather you texted him Amanda: Just text him 🙂 Hannah: Urgh.. Alright Hannah: Bye Amanda: Bye bye",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/country-from-name/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "country-from-name",
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
        "name": "name",
        "example": "Laurent",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/date-cleaning/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "date-cleaning",
    "models": [
      "dataprep-formatter"
    ],
    "defaultModel": "dataprep-formatter",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "date",
        "example": "2/24/2003 0:00",
        "required": true
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
      "bhadresh-savani_distilbert-base-uncased-emotion"
    ],
    "defaultModel": "bhadresh-savani_distilbert-base-uncased-emotion",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "array"
    },
    "params": [
      {
        "in": "formData",
        "type": "array",
        "name": "texts",
        "example": [
          "I love you.",
          "I hate you.",
          "I am happy."
        ],
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/gender-from-name/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "gender-from-name",
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
        "name": "name",
        "example": "Laurent",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/gps-address-formatting/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "gps-address-formatting",
    "models": [
      "geopy-formatter"
    ],
    "defaultModel": "geopy-formatter",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "float",
        "name": "latitude",
        "example": 43.2965,
        "required": true
      },
      {
        "in": "formData",
        "type": "float",
        "name": "longitude",
        "example": 5.36978,
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/gpt3/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "gpt3",
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
        "example": "what color is the sky ?",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/guess-city/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "guess-city",
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
        "example": "sf",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/guess-country/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "guess-country",
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
        "example": "fr",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/guess-intent/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "guess-intent",
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
        "example": "[{\"start\":\"0.00\",\"end\":\"5.00\",\"speaker\":\"SPEAKER_00\",\"sentence\":\"I regret to inform you that we will no longer require your services. Indeed, we believe that your participation in our activity is longer required. I hope you will understand our decision.\"},{\"start\":\"5.00\",\"end\":\"7.00\",\"speaker\":\"SPEAKER_01\",\"sentence\":\"What can I do to convince you to stay?\"},{\"start\":\"8.00\",\"end\":\"15.00\",\"speaker\":\"SPEAKER_00\",\"sentence\":\"I guess there is nothing you can, the decision is made, I'm sorry.\"}]",
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
      "byt5-base-tweet-hate-detection",
      "distilbert-base-uncased-emotion",
      "dkleczek_Polish-Hate-Speech-Detection-Herbert-Large"
    ],
    "defaultModel": "distilbert-base-uncased-emotion",
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
        "example": "I hate you piece of shit",
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
      "jpt",
      "michau-t5-base-en-generate-headline"
    ],
    "defaultModel": "jpt",
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
        "example": "Very early yesterday morning, the United States President Donald Trump reported he and his wife First Lady Melania Trump tested positive for COVID-19. Officials said the Trumps' 14-year-old son Barron tested negative as did First Family and Senior Advisors Jared Kushner and Ivanka Trump.\nTrump took to social media, posting at 12:54 am local time (0454 UTC) on Twitter, \"Tonight, [Melania] and I tested positive for COVID-19. We will begin our quarantine and recovery process immediately. We will get through this TOGETHER!\" Yesterday afternoon Marine One landed on the White House's South Lawn flying Trump to Walter Reed National Military Medical Center (WRNMMC) in Bethesda, Maryland.\nReports said both were showing \"mild symptoms\". Senior administration officials were tested as people were informed of the positive test. Senior advisor Hope Hicks had tested positive on Thursday.\nPresidential physician Sean Conley issued a statement saying Trump has been given zinc, vitamin D, Pepcid and a daily Aspirin. Conley also gave a single dose of the experimental polyclonal antibodies drug from Regeneron Pharmaceuticals.\nAccording to official statements, Trump, now operating from the WRNMMC, is to continue performing his duties as president during a 14-day quarantine. In the event of Trump becoming incapacitated, Vice President Mike Pence could take over the duties of president via the 25th Amendment of the US Constitution. The Pence family all tested negative as of yesterday and there were no changes regarding Pence's campaign events.\n",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "max_length",
        "example": 16,
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/image-generation-prompt-beautifier/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "image-generation-prompt-beautifier",
    "models": [
      "ms-promptist"
    ],
    "defaultModel": "ms-promptist",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "prompt",
        "example": "A rabbit is wearing a space suit",
        "required": true
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
      "keybert-paraphrase-multilingual-MiniLM-L12-v2"
    ],
    "defaultModel": "keybert-paraphrase-multilingual-MiniLM-L12-v2",
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
        "example": "The Crown is a historical drama streaming television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan, and produced by Left Bank Pictures and Sony Pictures Television for Netflix.",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "top_k",
        "example": 1,
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/language-codes/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "language-codes",
    "models": [
      "language-codes"
    ],
    "defaultModel": "language-codes",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "language_code",
        "example": "fra",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "display_output_language",
        "example": "fra",
        "required": true
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
      "jpt",
      "toftrup-etal-2021"
    ],
    "defaultModel": "jpt",
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
        "example": "Input text to perform language detection on",
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
      "bloom-560m",
      "gpt2_xl"
    ],
    "defaultModel": "gpt2_xl",
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
        "example": "I'm currently driving while eating a",
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
      "spacy-multilingual"
    ],
    "defaultModel": "spacy-multilingual",
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
        "example": "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, therefore very close to the Manhattan Bridge.",
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
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "sentence_1",
        "example": "I like you.",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "sentence_2",
        "example": "But it's not about you.",
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
      "distilbert-base-uncased"
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
        "example": "I think therefore I",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "top_k",
        "example": 1,
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/product-ownership/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "product-ownership",
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
        "example": "I love ETFs and have invested some money in the stock market and also have a pension plan",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/product-sentiment/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "product-sentiment",
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
        "example": "I love ETFs and have invested some money in the stock market and also have a pension plan",
        "required": true
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
        "example": "def is_palendrome(s):",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/punctuation-restoration/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "punctuation-restoration",
    "models": [
      "notaitech-fastpunct"
    ],
    "defaultModel": "notaitech-fastpunct",
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
        "example": "My name is Clara and I live in Berkeley California",
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
      "deepset_roberta-large-squad2",
      "distilbert-base-cased-distilled-squad"
    ],
    "defaultModel": "deepset_roberta-large-squad2",
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
        "example": "My name is Clara and I live in Berkeley.",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "question",
        "example": "What's my name?",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "top_k",
        "example": 1,
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
        "example": "Once, a group of frogs was roaming around the forest in search of water.",
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
      "distilbert-base-uncased-finetuned-sst-2-english"
    ],
    "defaultModel": "distilbert-base-uncased-finetuned-sst-2-english",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "array"
    },
    "params": [
      {
        "in": "formData",
        "type": "array",
        "name": "texts",
        "example": [
          "I think you are a good person.",
          "I think you are a bad person."
        ],
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
      "all-MiniLM-L12-v2"
    ],
    "defaultModel": "all-MiniLM-L12-v2",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "sentence_1",
        "example": "I like banana",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "sentence_2",
        "example": "I hate banana",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/speaker-recognition/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "speaker-recognition",
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
        "example": "speaker_001: bonjour je suis monsieur Roger president du conseil et je vais vous accompagner aujourd’hui dans ce meeting \n speaker_002; je suis Anna Clarence, secrétaire du conseil municipal et je répond à vos questions si besoin \n speaker_003: bonjour \n speaker_001: binjour \n speaker_002: bonjour à toutes et à tous  speaker_001: on y Va ? Allez Jacques à toi. \n speaker_003: merci donc bonjour à tous et à toutes on va aujourd’hui parler de jonathan qui est jaune et qui attend  \n speaker_004: merci donc oui on va parler de moi aujourd’hui ",
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
      "google_pegasus-cnn_dailymail"
    ],
    "defaultModel": "google_pegasus-cnn_dailymail",
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
        "example": "The Crown is a historical drama streaming television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan, and produced by Left Bank Pictures and Sony Pictures Television for Netflix. Morgan developed it from his drama film The Queen (2006) and especially his stage play The Audience (2013). The first season covers the period from Elizabeth's marriage to Philip, Duke of Edinburgh in 1947 to the disintegration of her sister Princess Margaret's engagement to Group Captain Peter Townsend in 1955. The second season covers the period from the Suez Crisis in 1956 to the retirement of Prime Minister Harold Macmillan in 1963 and the birth of Prince Edward in 1964. The third season spans 1964 to 1977, includes Harold Wilson's two periods as prime minister, and introduces Camilla Shand. The fourth season spans 1979 to the early 1990s and includes Margaret Thatcher's tenure as prime minister and Prince Charles's marriage to Lady Diana Spencer. The fifth and sixth seasons, which will close the series, will cover the Queen's reign into the 21st century. For each of the two-season increments, new actors fill the roles to account for the ageing process in the periods of time portrayed. Claire Foy portrays the Queen in the first two seasons, alongside Matt Smith as Prince Philip and Vanessa Kirby as Princess Margaret. For the third and fourth seasons, Olivia Colman takes over as the Queen, Tobias Menzies as Prince Philip, and Helena Bonham Carter as Princess Margaret. Also added to the cast in season 3 is Josh O'Connor as Prince Charles. In the fourth season, new cast members include Emma Corrin as Lady Diana Spencer and Gillian Anderson as Margaret Thatcher. Imelda Staunton, Jonathan Pryce, and Lesley Manville will succeed Colman, Menzies, and Bonham Carter, respectively, for the final two seasons, while Elizabeth Debicki and Dominic West are expected to assume the role of Princess Diana and Prince Charles, respectively. Filming takes place at Elstree Studios in Borehamwood, Hertfordshire, with location shooting throughout the United Kingdom and internationally. The first season was released by Netflix on 4 November 2016, the second on 8 December 2017, the third on 17 November 2019, and the fourth on 15 November 2020. The fifth season is anticipated in 2022. As of 2020, the estimated production budget of The Crown has been reported to be $260 million, making it one of the most expensive television series in history.[4] The Crown was praised by critics for its acting, directing, writing, cinematography, and production values, although its historical inaccuracies have received some criticism, particularly within the fourth season. Nonetheless, it received accolades at the 23rd Screen Actors Guild Awards, Foy won Best Actress in the lead role and Best Actor for John Lithgow as Winston Churchill, and has secured a total of sixty three nominations for its first four seasons at the Primetime Emmy Awards, including four for Outstanding Drama Series.[5] The series has also twice won the Golden Globe Award for Best Television Series - Drama, at the 74th and 78th ceremonies, with additional acting wins for Foy, Colman, Corrin, O'Connor and Anderson.[6] ",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "source_language",
        "example": "eng",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "min_length",
        "example": 40,
        "required": false
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "max_length",
        "example": 512,
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
      "facebook-nllb-200-distilled-600M",
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "input_string",
        "example": "Text to translate",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "source_language",
        "example": "eng",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "target_language",
        "example": "fra",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/vat-country-guessing/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "vat-country-guessing",
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
        "example": "FR123456789",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/website-classification/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "website-classification",
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
        "example": "youtube.com",
        "required": true
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
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "input_string_language_1",
        "example": "Sentence from first language",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "input_string_language_2",
        "example": "来自 第一 语言的 句子",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/video/text/action-classifications/",
    "inputType": "video",
    "outputType": "text",
    "taskName": "action-classifications",
    "models": [
      "kinetics--MCG-NJU/videomae-base-finetuned-kinetics",
      "kinetics--facebook/timesformer-base-finetuned-k400"
    ],
    "defaultModel": "kinetics--MCG-NJU/videomae-base-finetuned-kinetics",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "video",
        "name": "video",
        "example": "http://files.gladia.io/examples/video/text/classif/archery.mp4",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "video_url",
        "example": "http://files.gladia.io/examples/video/text/classif/archery.mp4",
        "required": false
      }
    ],
    "hasSamplesParam": false
  }
];