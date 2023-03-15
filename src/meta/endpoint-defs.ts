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
      "type": "prediction-standard-output",
      "predictionType": {
        "array": "object"
      }
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
        "name": "toggle_noise_reduction",
        "example": false,
        "required": false
      },
      {
        "in": "formData",
        "type": "string",
        "name": "initial_prompt",
        "example": "",
        "required": false
      },
      {
        "in": "formData",
        "type": "boolean",
        "name": "toggle_diarization",
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
          "srt",
          "vtt",
          "txt",
          "plain"
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
      "type": "prediction-standard-output",
      "predictionType": {
        "array": "object"
      }
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
        "name": "toggle_noise_reduction",
        "example": false,
        "required": false
      },
      {
        "in": "formData",
        "type": "boolean",
        "name": "toggle_diarization",
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
          "srt",
          "vtt",
          "txt",
          "plain"
        ]
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
      "type": "prediction-standard-output",
      "predictionType": {
        "array": "object"
      }
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
        "name": "toggle_noise_reduction",
        "example": false,
        "required": false
      },
      {
        "in": "formData",
        "type": "boolean",
        "name": "toggle_diarization",
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
          "srt",
          "vtt",
          "txt",
          "plain"
        ]
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
      "distilbert-base-uncased-emotion"
    ],
    "defaultModel": "distilbert-base-uncased-emotion",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "example": "I hate you",
        "required": false
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
        "name": "text",
        "example": "Input text to perform language detection on",
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
    "url": "/text/text/translation/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "translation",
    "models": [
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
        "name": "text",
        "example": "Text to translate",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "target",
        "example": "FR",
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
  }
];