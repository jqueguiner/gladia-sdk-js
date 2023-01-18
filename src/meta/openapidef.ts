/* Generated file with "scripts/generate-metasdk.ts" */

import { OpenApiJson } from './openapideftype';

export const openApiJson: OpenApiJson = {
  "components": {
    "schemas": {
      "Body_create_model_multimodal_create_model_post": {
        "title": "Body_create_model_multimodal_create_model_post",
        "required": [
          "data",
          "label"
        ],
        "type": "object",
        "properties": {
          "data": {
            "title": "Data",
            "type": "array",
            "items": {
              "type": "object"
            },
            "example": [
              {
                "description": "I hate it.",
                "label": 0
              },
              {
                "description": "I love it.",
                "label": 1
              },
              {
                "description": "I don't like it.",
                "label": 0
              },
              {
                "description": "I like it.",
                "label": 1
              },
              {
                "description": "It's bad",
                "label": 0
              },
              {
                "description": "It's good",
                "label": 1
              },
              {
                "description": "It's really bad",
                "label": 0
              },
              {
                "description": "It's really good",
                "label": 1
              }
            ]
          },
          "label": {
            "title": "Label",
            "type": "string",
            "example": "label"
          },
          "time_limit": {
            "title": "Time Limit",
            "type": "integer",
            "default": 60
          },
          "eval_metric": {
            "title": "Eval Metric",
            "type": "string"
          }
        }
      },
      "Body_create_model_tabular_create_model_post": {
        "title": "Body_create_model_tabular_create_model_post",
        "required": [
          "data",
          "label"
        ],
        "type": "object",
        "properties": {
          "data": {
            "title": "Data",
            "type": "array",
            "items": {
              "type": "object"
            },
            "example": [
              {
                "fruit": "apple",
                "category": "C1"
              },
              {
                "fruit": "banana",
                "category": "C2"
              },
              {
                "fruit": "apple",
                "category": "C1"
              },
              {
                "fruit": "banana",
                "category": "C2"
              },
              {
                "fruit": "apple",
                "category": "C1"
              },
              {
                "fruit": "banana",
                "category": "C2"
              }
            ]
          },
          "label": {
            "title": "Label",
            "type": "string",
            "example": "category"
          },
          "time_limit": {
            "title": "Time Limit",
            "type": "integer",
            "default": 60
          }
        }
      },
      "Body_create_model_text_create_model_post": {
        "title": "Body_create_model_text_create_model_post",
        "required": [
          "data",
          "label"
        ],
        "type": "object",
        "properties": {
          "data": {
            "title": "Data",
            "type": "array",
            "items": {
              "type": "object"
            },
            "example": [
              {
                "description": "I hate it.",
                "label": 0
              },
              {
                "description": "I love it.",
                "label": 1
              },
              {
                "description": "I don't like it.",
                "label": 0
              },
              {
                "description": "I like it.",
                "label": 1
              },
              {
                "description": "It's bad",
                "label": 0
              },
              {
                "description": "It's good",
                "label": 1
              },
              {
                "description": "It's really bad",
                "label": 0
              },
              {
                "description": "It's really good",
                "label": 1
              }
            ]
          },
          "label": {
            "title": "Label",
            "type": "string",
            "example": "label"
          },
          "time_limit": {
            "title": "Time Limit",
            "type": "integer",
            "default": 60
          },
          "eval_metric": {
            "title": "Eval Metric",
            "type": "string"
          }
        }
      },
      "Body_create_model_time_series_create_model_post": {
        "title": "Body_create_model_time_series_create_model_post",
        "required": [
          "data"
        ],
        "type": "object",
        "properties": {
          "data": {
            "title": "Data",
            "type": "array",
            "items": {
              "type": "object"
            },
            "example": [
              {
                "data": "9.590761",
                "date": "2007-12-10T00:00:00"
              },
              {
                "data": "8.519590",
                "date": "2007-12-11T00:00:00"
              },
              {
                "data": "8.183677",
                "date": "2007-12-12T00:00:00z"
              },
              {
                "data": "8.072467",
                "date": "2007-12-13T00:00:00"
              },
              {
                "data": "7.893572",
                "date": "2007-12-14T00:00:00"
              }
            ]
          },
          "growth": {
            "title": "Growth",
            "type": "string",
            "default": "linear"
          },
          "label": {
            "title": "Label",
            "type": "string",
            "default": "data"
          }
        }
      },
      "Body_predict_multimodal_predict_post": {
        "title": "Body_predict_multimodal_predict_post",
        "required": [
          "model_id",
          "data"
        ],
        "type": "object",
        "properties": {
          "model_id": {
            "title": "Model Id",
            "type": "string"
          },
          "data": {
            "title": "Data",
            "anyOf": [
              {
                "type": "array",
                "items": {}
              },
              {
                "type": "object"
              }
            ],
            "example": [
              {
                "description": "I hate it."
              },
              {
                "description": "I love it."
              },
              {
                "description": "I don't like it."
              },
              {
                "description": "I like it."
              },
              {
                "description": "It's bad"
              },
              {
                "description": "It's good"
              },
              {
                "description": "It's really bad"
              },
              {
                "description": "It's really good"
              }
            ]
          }
        }
      },
      "Body_predict_tabular_predict_post": {
        "title": "Body_predict_tabular_predict_post",
        "required": [
          "model_id",
          "data"
        ],
        "type": "object",
        "properties": {
          "model_id": {
            "title": "Model Id",
            "type": "string"
          },
          "data": {
            "title": "Data",
            "anyOf": [
              {
                "type": "array",
                "items": {}
              },
              {
                "type": "object"
              }
            ],
            "example": [
              {
                "fruit": "apple"
              },
              {
                "fruit": "banana"
              },
              {
                "fruit": "apple"
              },
              {
                "fruit": "banana"
              },
              {
                "fruit": "apple"
              },
              {
                "fruit": "banana"
              }
            ]
          }
        }
      },
      "Body_predict_text_predict_post": {
        "title": "Body_predict_text_predict_post",
        "required": [
          "model_id",
          "data"
        ],
        "type": "object",
        "properties": {
          "model_id": {
            "title": "Model Id",
            "type": "string"
          },
          "data": {
            "title": "Data",
            "anyOf": [
              {
                "type": "array",
                "items": {}
              },
              {
                "type": "object"
              }
            ],
            "example": [
              {
                "description": "I hate it."
              },
              {
                "description": "I love it."
              },
              {
                "description": "I don't like it."
              },
              {
                "description": "I like it."
              },
              {
                "description": "It's bad"
              },
              {
                "description": "It's good"
              },
              {
                "description": "It's really bad"
              },
              {
                "description": "It's really good"
              }
            ]
          }
        }
      },
      "Body_predict_time_series_predict_post": {
        "title": "Body_predict_time_series_predict_post",
        "required": [
          "model_id",
          "data"
        ],
        "type": "object",
        "properties": {
          "model_id": {
            "title": "Model Id",
            "type": "string"
          },
          "data": {
            "title": "Data",
            "type": "array",
            "items": {},
            "example": [
              "2007-12-15T00:00:00z",
              "2007-12-16T00:00:00",
              "2007-12-18T00:00:00",
              "2007-12-19T00:00:00",
              "2007-12-20T00:00:00"
            ]
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
      },
      "Body_apply_text_text_bullet_point_generation__post": {
        "title": "Body_apply_text_text_bullet_point_generation__post",
        "required": [
          "text"
        ],
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
            "description": "input text",
            "example": "Very early yesterday morning, the United States President Donald Trump reported he and his wife First Lady Melania Trump tested positive for COVID-19. Officials said the Trumps' 14-year-old son Barron tested negative as did First Family and Senior Advisors Jared Kushner and Ivanka Trump.\nTrump took to social media, posting at 12:54 am local time (0454 UTC) on Twitter, \"Tonight, [Melania] and I tested positive for COVID-19. We will begin our quarantine and recovery process immediately. We will get through this TOGETHER!\" Yesterday afternoon Marine One landed on the White House's South Lawn flying Trump to Walter Reed National Military Medical Center (WRNMMC) in Bethesda, Maryland.\nReports said both were showing \"mild symptoms\". Senior administration officials were tested as people were informed of the positive test. Senior advisor Hope Hicks had tested positive on Thursday.\nPresidential physician Sean Conley issued a statement saying Trump has been given zinc, vitamin D, Pepcid and a daily Aspirin. Conley also gave a single dose of the experimental polyclonal antibodies drug from Regeneron Pharmaceuticals.\nAccording to official statements, Trump, now operating from the WRNMMC, is to continue performing his duties as president during a 14-day quarantine. In the event of Trump becoming incapacitated, Vice President Mike Pence could take over the duties of president via the 25th Amendment of the US Constitution. The Pence family all tested negative as of yesterday and there were no changes regarding Pence's campaign events.\n",
            "examples": [
              "Very early yesterday morning, the United States President Donald Trump reported he and his wife First Lady Melania Trump tested positive for COVID-19. Officials said the Trumps' 14-year-old son Barron tested negative as did First Family and Senior Advisors Jared Kushner and Ivanka Trump.\nTrump took to social media, posting at 12:54 am local time (0454 UTC) on Twitter, \"Tonight, [Melania] and I tested positive for COVID-19. We will begin our quarantine and recovery process immediately. We will get through this TOGETHER!\" Yesterday afternoon Marine One landed on the White House's South Lawn flying Trump to Walter Reed National Military Medical Center (WRNMMC) in Bethesda, Maryland.\nReports said both were showing \"mild symptoms\". Senior administration officials were tested as people were informed of the positive test. Senior advisor Hope Hicks had tested positive on Thursday.\nPresidential physician Sean Conley issued a statement saying Trump has been given zinc, vitamin D, Pepcid and a daily Aspirin. Conley also gave a single dose of the experimental polyclonal antibodies drug from Regeneron Pharmaceuticals.\nAccording to official statements, Trump, now operating from the WRNMMC, is to continue performing his duties as president during a 14-day quarantine. In the event of Trump becoming incapacitated, Vice President Mike Pence could take over the duties of president via the 25th Amendment of the US Constitution. The Pence family all tested negative as of yesterday and there were no changes regarding Pence's campaign events.\n"
            ],
            "data_type": "str"
          },
          "max_length": {
            "title": "max_length",
            "type": "integer",
            "description": "maximum lenght for the headline to generate",
            "example": 16,
            "examples": [
              16,
              100
            ],
            "data_type": "int"
          }
        }
      },
      "Body_apply_text_text_command_generation__post": {
        "title": "Body_apply_text_text_command_generation__post",
        "required": [
          "text"
        ],
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
        "required": [
          "text"
        ],
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
        "required": [
          "text"
        ],
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
        "required": [
          "text"
        ],
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
        "required": [
          "text"
        ],
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
        "required": [
          "text"
        ],
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
        "required": [
          "text"
        ],
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
        "required": [
          "text"
        ],
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
        "required": [
          "text"
        ],
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
      "Body_apply_text_text_product_ownership__post": {
        "title": "Body_apply_text_text_product_ownership__post",
        "required": [
          "text"
        ],
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "example": "I love ETFs and have invested some money in the stock market and also have a pension plan",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_product_sentiment__post": {
        "title": "Body_apply_text_text_product_sentiment__post",
        "required": [
          "text"
        ],
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "example": "I love ETFs and have invested some money in the stock market and also have a pension plan",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_speaker_recognition__post": {
        "title": "Body_apply_text_text_speaker_recognition__post",
        "required": [
          "text"
        ],
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "example": "speaker_001: bonjour je suis monsieur Roger president du conseil et je vais vous accompagner aujourd’hui dans ce meeting \n speaker_002; je suis Anna Clarence, secrétaire du conseil municipal et je répond à vos questions si besoin \n speaker_003: bonjour \n speaker_001: binjour \n speaker_002: bonjour à toutes et à tous  speaker_001: on y Va ? Allez Jacques à toi. \n speaker_003: merci donc bonjour à tous et à toutes on va aujourd’hui parler de jonathan qui est jaune et qui attend  \n speaker_004: merci donc oui on va parler de moi aujourd’hui ",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_guess_intent__post": {
        "title": "Body_apply_text_text_guess_intent__post",
        "required": [
          "text"
        ],
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "example": "[{\"start\":\"0.00\",\"end\":\"5.00\",\"speaker\":\"SPEAKER_00\",\"sentence\":\"I regret to inform you that we will no longer require your services. Indeed, we believe that your participation in our activity is longer required. I hope you will understand our decision.\"},{\"start\":\"5.00\",\"end\":\"7.00\",\"speaker\":\"SPEAKER_01\",\"sentence\":\"What can I do to convince you to stay?\"},{\"start\":\"8.00\",\"end\":\"15.00\",\"speaker\":\"SPEAKER_00\",\"sentence\":\"I guess there is nothing you can, the decision is made, I'm sorry.\"}]",
            "data_type": "string",
            "examples": {}
          }
        }
      },
      "Body_apply_text_text_gender_from_name__post": {
        "title": "Body_apply_text_text_gender_from_name__post",
        "required": [
          "name"
        ],
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
        "required": [
          "name"
        ],
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
        "required": [
          "name"
        ],
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
            "description": "Insert the text to anlayse",
            "example": "I hate you piece of shit",
            "examples": [
              "I hate you piece of shit"
            ],
            "data_type": "string"
          }
        }
      },
      "Body_apply_text_text_translation__post": {
        "title": "Body_apply_text_text_translation__post",
        "required": [
          "text",
          "target"
        ],
        "type": "object",
        "properties": {
          "text": {
            "title": "text",
            "type": "string",
            "description": "Insert the text to translate here",
            "example": "Text to translate",
            "examples": [
              "Text to translate"
            ],
            "data_type": "string"
          },
          "target": {
            "title": "target",
            "type": "string",
            "description": "Use the ISO 2 letters (ISO 639-1) representation for target language",
            "example": "FR",
            "examples": [
              "FR"
            ],
            "data_type": "string"
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
            "description": "input text",
            "example": "Input text to perform language detection on",
            "examples": [
              "Input text to perform language detection on"
            ],
            "data_type": "str"
          }
        }
      },
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
            "description": "Audio to use",
            "format": "binary",
            "example": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.wav",
            "examples": {
              "from_audio_wav": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.wav",
              "from_audio_mp3": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
              "from_audio_m4a": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.m4a"
            },
            "data_type": "audio"
          },
          "audio_url": {
            "title": "audio_url",
            "type": "string",
            "description": "Audio to use (url) - ignored if \"audio\" file is provided",
            "example": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.wav",
            "examples": {
              "from_audio_wav": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.wav",
              "from_audio_mp3": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
              "from_audio_m4a": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.m4a"
            },
            "data_type": "url"
          },
          "language": {
            "title": "language",
            "type": "string",
            "description": "Language of the input audio",
            "example": "en-US",
            "examples": [
              "en-US"
            ],
            "data_type": "str"
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
            "description": "Original image to remove the background from",
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
            "description": "Original image to remove the background from (url) - ignored if \"original_image\" file is provided",
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
            "description": "Background image to apply",
            "format": "binary",
            "example": "http://files.gladia.io/examples/image/image/bck-grd/green-forest.png",
            "examples": {
              "from_green-forest_png": "http://files.gladia.io/examples/image/image/bck-grd/green-forest.png"
            },
            "data_type": "image"
          },
          "background_image_url": {
            "title": "background_image_url",
            "type": "string",
            "description": "Background image to apply (url) - ignored if \"background_image\" file is provided",
            "example": "http://files.gladia.io/examples/image/image/bck-grd/green-forest.png",
            "examples": {
              "from_green-forest_png": "http://files.gladia.io/examples/image/image/bck-grd/green-forest.png"
            },
            "data_type": "url"
          },
          "alignment": {
            "title": "alignment",
            "allOf": [
              {
                "$ref": "#/components/schemas/DynamicEnum_1674053337.712697"
              }
            ],
            "description": "Alignment to use",
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
            "data_type": "enum"
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
            "description": "Image to classify",
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
            "description": "Image to classify (url) - ignored if \"image\" file is provided",
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
            "description": "Image to deblure",
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
            "description": "Image to deblure (url) - ignored if \"image\" file is provided",
            "example": "http://files.gladia.io/image/image/deblurring/deblurring.png",
            "examples": {
              "from_deblurring_png": "http://files.gladia.io/image/image/deblurring/deblurring.png",
              "from_deblurring_jpg": "http://files.gladia.io/image/image/deblurring/deblurring.jpg"
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
            "description": "Image to use",
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
            "description": "Image to use (url) - ignored if \"image\" file is provided",
            "example": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.png",
            "examples": {
              "from_landscape-pics-wallpapers_png": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.png",
              "from_landscape-pics-wallpapers_jpg": "http://files.gladia.io/examples/image/image/uncolorization/landscape-pics-wallpapers.jpg"
            },
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
            "description": "Image to use",
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
            "description": "Image to use (url) - ignored if \"image\" file is provided",
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
            "description": "Number of possible prediction to return",
            "example": 1,
            "examples": [
              1,
              2,
              100
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
            "description": "Image to use",
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
            "description": "Image to use (url) - ignored if \"image\" file is provided",
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
            "description": "Language present in the image",
            "example": "eng",
            "examples": [
              "eng",
              "fra"
            ],
            "data_type": "str"
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
            "description": "prompt",
            "example": "The Eiffel tower landing on the moon, unreal engine.",
            "examples": [
              "The Eiffel tower landing on the moon, unreal engine."
            ],
            "data_type": "str"
          },
          "samples": {
            "title": "samples",
            "type": "integer",
            "description": "number of samples to return",
            "default": 1,
            "example": 1,
            "examples": [
              1
            ],
            "data_type": "int"
          },
          "steps": {
            "title": "steps",
            "type": "integer",
            "description": "number of steps to execute",
            "default": 40,
            "example": 40,
            "examples": [
              40
            ],
            "data_type": "int"
          },
          "seed": {
            "title": "seed",
            "type": "integer",
            "description": "seed to use (0 for random)",
            "default": 424242,
            "example": 424242,
            "examples": [
              424242
            ],
            "data_type": "int"
          }
        }
      },
      "Body_apply_text_text_anonymization__post": {
        "title": "Body_apply_text_text_anonymization__post",
        "required": [
          "language",
          "entities",
          "text"
        ],
        "type": "object",
        "properties": {
          "language": {
            "title": "language",
            "type": "string",
            "description": "input language using iso 639-3 codes",
            "example": "eng",
            "examples": [
              "eng",
              "spa",
              "fra"
            ],
            "data_type": "str"
          },
          "entities": {
            "title": "entities",
            "type": "string",
            "description": "entities",
            "example": "PERSON, LOCATION, ORGANIZATION, CREDIT_CARD, CRYPTO, DATE_TIME, DOMAIN_NAME, EMAIL_ADDRESS, IBAN_CODE, IP_ADDRESS, NRP, PASSPORT, PHONE_NUMBER, US_BANK_NUMBER, US_DRIVER_LICENSE, US_ITIN, US_PASSPORT, US_SSN, US_VEHICLE, US_ZIP_CODE",
            "examples": [
              "PERSON, LOCATION, ORGANIZATION, CREDIT_CARD, CRYPTO, DATE_TIME, DOMAIN_NAME, EMAIL_ADDRESS, IBAN_CODE, IP_ADDRESS, NRP, PASSPORT, PHONE_NUMBER, US_BANK_NUMBER, US_DRIVER_LICENSE, US_ITIN, US_PASSPORT, US_SSN, US_VEHICLE, US_ZIP_CODE"
            ],
            "data_type": "str"
          },
          "text": {
            "title": "text",
            "type": "string",
            "description": "input text",
            "example": "Here are a few examples sentences we currently support:\nHello, my name is David Johnson and I live in Maine. My credit card number is 4095-2609-9393-4932 and my crypto wallet id is 16Yeky6GMjeNkAiNcBY7ZhrLoMSgg1BoyZ.\nOn September 18 I visited microsoft.com and sent an email to test@presidio.site,  from the IP 192.168.0.1.\nMy passport: 191280342 and my phone number: (212) 555-1234.\nThis is a valid International Bank Account Number: IL150120690000003111111 . Can you please check the status on bank account 954567876544?\nKate's social security number is 078-05-1126.  Her driver license? it is 1234567A.\n\nThis project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.microsoft.com When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA. This project has adopted the Microsoft Open Source Code of Conduct.\nFor more information see the Code of Conduct FAQ or contact opencode@microsoft.com with any additional questions or comments.",
            "examples": [
              "Here are a few examples sentences we currently support:\nHello, my name is David Johnson and I live in Maine. My credit card number is 4095-2609-9393-4932 and my crypto wallet id is 16Yeky6GMjeNkAiNcBY7ZhrLoMSgg1BoyZ.\nOn September 18 I visited microsoft.com and sent an email to test@presidio.site,  from the IP 192.168.0.1.\nMy passport: 191280342 and my phone number: (212) 555-1234.\nThis is a valid International Bank Account Number: IL150120690000003111111 . Can you please check the status on bank account 954567876544?\nKate's social security number is 078-05-1126.  Her driver license? it is 1234567A.\n\nThis project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.microsoft.com When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA. This project has adopted the Microsoft Open Source Code of Conduct.\nFor more information see the Code of Conduct FAQ or contact opencode@microsoft.com with any additional questions or comments."
            ],
            "data_type": "str"
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
            "description": "date to clean",
            "example": "2/24/2003 0:00",
            "examples": [
              "2/24/2003 0:00"
            ],
            "data_type": "str"
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
            "description": "latitude",
            "example": 43.2965,
            "examples": [
              43.2965
            ],
            "data_type": "float"
          },
          "longitude": {
            "title": "longitude",
            "type": "number",
            "description": "longitude",
            "example": 5.36978,
            "examples": [
              5.36978
            ],
            "data_type": "float"
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
            "description": "input text",
            "example": "The Crown is a historical drama streaming television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan, and produced by Left Bank Pictures and Sony Pictures Television for Netflix.",
            "examples": [
              "The Crown is a historical drama streaming television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan, and produced by Left Bank Pictures and Sony Pictures Television for Netflix."
            ],
            "data_type": "str"
          },
          "top_k": {
            "title": "top_k",
            "type": "integer",
            "description": "number of of keywords to extract",
            "default": 3,
            "example": 1,
            "examples": [
              1,
              10,
              100
            ],
            "data_type": "int"
          }
        }
      },
      "Body_apply_text_text_language_codes__post": {
        "title": "Body_apply_text_text_language_codes__post",
        "required": [
          "language_code",
          "display_output_language"
        ],
        "type": "object",
        "properties": {
          "language_code": {
            "title": "language_code",
            "type": "string",
            "description": "eng",
            "example": "fra",
            "examples": [
              "fra"
            ],
            "data_type": "str"
          },
          "display_output_language": {
            "title": "display_output_language",
            "type": "string",
            "description": "eng",
            "example": "fra",
            "examples": [
              "fra"
            ],
            "data_type": "str"
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
            "description": "input text",
            "example": "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, therefore very close to the Manhattan Bridge.",
            "examples": [
              "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, therefore very close to the Manhattan Bridge."
            ],
            "data_type": "str"
          }
        }
      },
      "Body_apply_text_text_next_word_prediction__post": {
        "title": "Body_apply_text_text_next_word_prediction__post",
        "required": [
          "sentence",
          "top_k"
        ],
        "type": "object",
        "properties": {
          "sentence": {
            "title": "sentence",
            "type": "string",
            "description": "input text",
            "example": "I think therefore I",
            "examples": [
              "I think therefore I"
            ],
            "data_type": "str"
          },
          "top_k": {
            "title": "top_k",
            "type": "integer",
            "description": "number of prediction to return",
            "example": 1,
            "examples": [
              1,
              3,
              10
            ],
            "data_type": "int"
          }
        }
      },
      "Body_apply_text_text_sentiment_analysis__post": {
        "title": "Body_apply_text_text_sentiment_analysis__post",
        "required": [
          "texts"
        ],
        "type": "object",
        "properties": {
          "texts": {
            "title": "texts",
            "type": "array",
            "items": {},
            "description": "input text",
            "example": [
              "I think you are a good person.",
              "I think you are a bad person."
            ],
            "examples": [
              [
                "I think you are a good person.",
                "I think you are a bad person."
              ],
              [
                "I like you. I love you",
                "I hate you. you are so bad"
              ]
            ],
            "data_type": "array"
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
            "description": "input text",
            "example": "I like banana",
            "examples": [
              "I like banana"
            ],
            "data_type": "str"
          },
          "sentence_2": {
            "title": "sentence_2",
            "type": "string",
            "description": "input text",
            "example": "I hate banana",
            "examples": [
              "I hate banana"
            ],
            "data_type": "str"
          }
        }
      },
      "DynamicEnum_1674053337.712697": {
        "title": "DynamicEnum_1674053337.712697",
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
            "description": "Some input text to continue [...]",
            "example": "I'm currently driving while eating a",
            "examples": [
              "I'm currently driving while eating a"
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
            "description": "context to use",
            "example": "My name is Clara and I live in Berkeley.",
            "examples": [
              "My name is Clara and I live in Berkeley."
            ],
            "data_type": "text"
          },
          "question": {
            "title": "question",
            "type": "string",
            "description": "question to ask",
            "example": "What's my name?",
            "examples": [
              "What's my name?"
            ],
            "data_type": "text"
          },
          "top_k": {
            "title": "top_k",
            "type": "integer",
            "description": "number of prediction to return",
            "default": 1,
            "example": 1,
            "examples": [
              1,
              10
            ],
            "data_type": "int"
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
  "info": {
    "title": "GladIA API",
    "version": "0.1.0"
  },
  "openapi": "3.0.2",
  "paths": {
    "/audio/text/audio-transcription/": {
      "get": {
        "tags": [
          "audio.text.audio-transcription"
        ],
        "summary": "Get list of models available for audio-transcript",
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
        "summary": "Apply model for the audio-transcript task for a given models",
        "operationId": "apply_audio_text_audio_transcription__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "coqui_english_huge_vocab",
                "openai-whisper--base",
                "openai-whisper--large",
                "openai-whisper--large-v1",
                "openai-whisper--large-v2",
                "openai-whisper--medium",
                "openai-whisper--small",
                "openai-whisper--tiny",
                "riva_default_asr"
              ],
              "type": "string",
              "default": "riva_default_asr"
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
                  "prediction": "str"
                }
              }
            },
            "examples": {
              "coqui_english_huge_vocab": {},
              "openai-whisper--tiny": {},
              "openai-whisper--base": {},
              "openai-whisper--small": {},
              "openai-whisper--medium": {},
              "openai-whisper--large": {},
              "openai-whisper--large-v1": {},
              "openai-whisper--large-v2": {}
            },
            "example": {
              "coqui_english_huge_vocab": "",
              "openai-whisper--tiny": "",
              "openai-whisper--base": "",
              "openai-whisper--small": "",
              "openai-whisper--medium": "",
              "openai-whisper--large": "",
              "openai-whisper--large-v1": "",
              "openai-whisper--large-v2": ""
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
        "summary": "Get list of models available for background-remo",
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
        "summary": "Apply model for the background-remo task for a given models",
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
            "examples": {
              "xception": {},
              "mobilenet": {}
            },
            "example": {
              "xception": "",
              "mobilenet": ""
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
        "summary": "Get list of models available for background-replacem",
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
        "summary": "Apply model for the background-replacem task for a given models",
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
              "mobilenet": {}
            },
            "example": {
              "mobilenet": ""
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
        "summary": "Get list of models available for colorizat",
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
        "summary": "Apply model for the colorizat task for a given models",
        "operationId": "apply_image_image_colorization__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "deoldify-artistic",
                "deoldify-stable",
                "mlhubber_colorize"
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
              "deoldify-artistic": {},
              "mlhubber_colorize": {},
              "deoldify-stable": {}
            },
            "example": {
              "deoldify-artistic": "",
              "mlhubber_colorize": "",
              "deoldify-stable": ""
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
        "summary": "Get list of models available for deblurr",
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
        "summary": "Apply model for the deblurr task for a given models",
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
    "/image/image/uncolorization/": {
      "get": {
        "tags": [
          "image.image.uncolorization"
        ],
        "summary": "Get list of models available for uncolorizat",
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
        "summary": "Apply model for the uncolorizat task for a given models",
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
              "v1": {}
            },
            "example": {
              "v1": ""
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
        "summary": "Get list of models available for classificat",
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
        "summary": "Apply model for the classificat task for a given models",
        "operationId": "apply_image_text_classification__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "shufflenet_v2_x0_5",
                "vgg19",
                "efficientnet_v2_m",
                "shufflenet_v2_x1_0",
                "resnext101_32x8d_quantized_fbgemm_v2",
                "efficientnet_b2",
                "resnet50_quantized_fbgemm_v1",
                "densenet161",
                "resnet34",
                "resnet18_quantized_fbgemm_v1",
                "efficientnet_v2_s",
                "vgg13",
                "vgg16_v1",
                "mobilenet_v2_v2",
                "inception_v3_fbgemm_v1",
                "mnasnet1_3",
                "vit_h_14_swag_linear_v1",
                "shufflenet_v2_x1_5_quantized_fbgemm_v1",
                "regnet_x_16gf_v1",
                "regnet_x_8gf_v1",
                "vit_b_16_swag_linear_v1",
                "efficientnet_b1_v1",
                "regnet_x_400mf_v2",
                "regnet_x_8gf_v2",
                "mobilenet_v3_small",
                "mobilenet_v2_v1",
                "regnet_y_3_2gf_v2",
                "densenet169",
                "convnext_base",
                "vgg16_bn",
                "regnet_y_32gf_v1",
                "squeezenet1_1",
                "regnet_y_1_6gf_v2",
                "efficientnet_b1_v2",
                "regnet_x_1_6gf_v2",
                "regnet_x_800mf_v1",
                "resnext101_64x4d_v1",
                "mobilenet_v3_large_quantized_qnnpack_v1",
                "densenet201",
                "vgg11",
                "convnext_large",
                "regnet_y_32gf_swag_linear_v1",
                "shufflenet_v2_x2_0_quantized_fbgemm_v1",
                "regnet_y_16gf_swag_linear_v1",
                "resnet50_v1",
                "resnext101_32x8d_v1",
                "vit_b_16_swag_e2e_v1",
                "regnet_y_3_2gf_v1",
                "mnasnet0_5",
                "resnet18",
                "regnet_x_16gf_v2",
                "regnet_y_400mf_v2",
                "squeezenet1_0",
                "regnet_y_16gf_v1",
                "regnet_y_16gf_v2",
                "shufflenet_v2_x1_0_quantized_fbgemm_v1",
                "densenet121",
                "mobilenet_v3_large_v1",
                "vit_l_16_v1",
                "swin_s",
                "shufflenet_v2_x1_5",
                "vit_l_16_swag_e2e_v1",
                "inception_v3",
                "resnet152_v2",
                "resnet50_v2",
                "vit_h_14_swag_e2e_v1",
                "regnet_y_8gf_v2",
                "regnet_x_400mf_v1",
                "resnext50_32x4d_v2",
                "regnet_y_400mf_v1",
                "swin_t",
                "googlenet",
                "resnext50_32x4d_v1",
                "convnext_small",
                "efficientnet_v2_l",
                "vgg11_bn",
                "efficientnet_b3",
                "regnet_x_3_2gf_v1",
                "regnet_y_128gf_swag_e2e_v1",
                "mobilenet_v3_large_v2",
                "efficientnet_b6",
                "vgg19_bn",
                "vit_b_16_v1",
                "googlenet_quantized_fbgemm_v1",
                "regnet_y_128gf_swag_linear_v1",
                "resnext101_32x8d_quantized_fbgemm_v1",
                "vit_l_16_swag_linear_v1",
                "vit_b_32",
                "shufflenet_v2_x2_0",
                "efficientnet_b4",
                "resnext101_32x8d_v2",
                "vgg13_bn",
                "wide_resnet101_2_v1",
                "efficientnet_b5",
                "convnext_tiny",
                "mnasnet0_75",
                "swin_b",
                "regnet_y_16gf_swag_e2e_v1",
                "regnet_y_8gf_v1",
                "mnasnet1_0",
                "resnet50_quantized_fbgemm_v2",
                "regnet_x_1_6gf_v1",
                "regnet_x_32gf_v1",
                "wide_resnet101_2_v2",
                "resnext101_64x4d_quantized_fbgemm_v1",
                "regnet_y_32gf_v2",
                "regnet_x_3_2gf_v2",
                "regnet_y_32gf_swag_e2e_v1",
                "shufflenet_v2_x0_5_quantized_fbgemm_v1",
                "vit_l_32",
                "efficientnet_b0",
                "regnet_x_32gf_v2",
                "regnet_x_800mf_v2",
                "resnet152_v1",
                "alexnet",
                "mobilenet_v2_quantized_qnnpack_v1",
                "regnet_y_1_6gf_v1",
                "efficientnet_b7"
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
                "schema": {
                  "type": "object",
                  "prediction_raw": {},
                  "prediction": "str"
                }
              }
            },
            "examples": {
              "regnet_x_1_6gf_v2": {},
              "regnet_y_1_6gf_v1": {},
              "vgg13_bn": {},
              "regnet_y_8gf_v2": {},
              "resnext50_32x4d_v1": {},
              "mnasnet0_75": {},
              "swin_t": {},
              "alexnet": {},
              "vgg16_bn": {},
              "efficientnet_b0": {},
              "efficientnet_b4": {},
              "regnet_y_32gf_swag_linear_v1": {},
              "inception_v3": {},
              "efficientnet_v2_l": {},
              "regnet_y_8gf_v1": {},
              "vit_b_16_swag_e2e_v1": {},
              "regnet_x_8gf_v1": {},
              "vgg16_v1": {},
              "resnet50_v1": {},
              "efficientnet_b6": {},
              "regnet_y_16gf_v1": {},
              "vit_l_16_swag_linear_v1": {},
              "efficientnet_b2": {},
              "mnasnet1_0": {},
              "wide_resnet101_2_v2": {},
              "mobilenet_v2_quantized_qnnpack_v1": {},
              "resnet50_quantized_fbgemm_v2": {},
              "resnext101_64x4d_v1": {},
              "shufflenet_v2_x1_5_quantized_fbgemm_v1": {},
              "efficientnet_b3": {},
              "regnet_x_32gf_v1": {},
              "vgg19": {},
              "wide_resnet101_2_v1": {},
              "mobilenet_v2_v2": {},
              "regnet_x_32gf_v2": {},
              "regnet_y_3_2gf_v1": {},
              "efficientnet_b1_v2": {},
              "shufflenet_v2_x1_0": {},
              "vgg11_bn": {},
              "mnasnet0_5": {},
              "regnet_y_16gf_swag_linear_v1": {},
              "squeezenet1_1": {},
              "regnet_x_3_2gf_v1": {},
              "regnet_x_16gf_v1": {},
              "squeezenet1_0": {},
              "shufflenet_v2_x0_5_quantized_fbgemm_v1": {},
              "resnext101_64x4d_quantized_fbgemm_v1": {},
              "resnet50_quantized_fbgemm_v1": {},
              "inception_v3_fbgemm_v1": {},
              "resnext101_32x8d_quantized_fbgemm_v1": {},
              "convnext_base": {},
              "mnasnet1_3": {},
              "resnet152_v1": {},
              "efficientnet_b7": {},
              "regnet_y_1_6gf_v2": {},
              "mobilenet_v3_large_v2": {},
              "swin_s": {},
              "mobilenet_v2_v1": {},
              "vit_h_14_swag_linear_v1": {},
              "resnet18_quantized_fbgemm_v1": {},
              "convnext_large": {},
              "mobilenet_v3_small": {},
              "shufflenet_v2_x1_0_quantized_fbgemm_v1": {},
              "regnet_y_400mf_v2": {},
              "resnet18": {},
              "regnet_y_128gf_swag_linear_v1": {},
              "resnet50_v2": {},
              "vit_l_16_v1": {},
              "shufflenet_v2_x0_5": {},
              "densenet121": {},
              "shufflenet_v2_x2_0_quantized_fbgemm_v1": {},
              "resnext50_32x4d_v2": {},
              "regnet_x_400mf_v2": {},
              "vit_b_16_swag_linear_v1": {},
              "vgg13": {},
              "regnet_x_800mf_v1": {},
              "regnet_y_400mf_v1": {},
              "densenet169": {},
              "convnext_tiny": {},
              "vit_b_32": {},
              "efficientnet_v2_m": {},
              "regnet_y_16gf_v2": {},
              "regnet_x_800mf_v2": {},
              "resnext101_32x8d_quantized_fbgemm_v2": {},
              "regnet_y_16gf_swag_e2e_v1": {},
              "googlenet_quantized_fbgemm_v1": {},
              "regnet_x_16gf_v2": {},
              "efficientnet_b5": {},
              "densenet201": {},
              "resnet152_v2": {},
              "vgg19_bn": {},
              "resnext101_32x8d_v1": {},
              "vit_h_14_swag_e2e_v1": {},
              "mobilenet_v3_large_quantized_qnnpack_v1": {},
              "vit_l_32": {},
              "shufflenet_v2_x2_0": {},
              "vit_b_16_v1": {},
              "efficientnet_b1_v1": {},
              "vgg11": {},
              "swin_b": {},
              "vit_l_16_swag_e2e_v1": {},
              "regnet_y_32gf_v1": {},
              "resnext101_32x8d_v2": {},
              "regnet_y_32gf_swag_e2e_v1": {},
              "efficientnet_v2_s": {},
              "densenet161": {},
              "regnet_x_400mf_v1": {},
              "convnext_small": {},
              "regnet_x_3_2gf_v2": {},
              "mobilenet_v3_large_v1": {},
              "regnet_x_8gf_v2": {},
              "regnet_y_128gf_swag_e2e_v1": {},
              "googlenet": {},
              "resnet34": {},
              "regnet_x_1_6gf_v1": {},
              "regnet_y_3_2gf_v2": {},
              "regnet_y_32gf_v2": {},
              "shufflenet_v2_x1_5": {}
            },
            "example": {
              "regnet_x_1_6gf_v2": "",
              "regnet_y_1_6gf_v1": "",
              "vgg13_bn": "",
              "regnet_y_8gf_v2": "",
              "resnext50_32x4d_v1": "",
              "mnasnet0_75": "",
              "swin_t": "",
              "alexnet": "",
              "vgg16_bn": "",
              "efficientnet_b0": "",
              "efficientnet_b4": "",
              "regnet_y_32gf_swag_linear_v1": "",
              "inception_v3": "",
              "efficientnet_v2_l": "",
              "regnet_y_8gf_v1": "",
              "vit_b_16_swag_e2e_v1": "",
              "regnet_x_8gf_v1": "",
              "vgg16_v1": "",
              "resnet50_v1": "",
              "efficientnet_b6": "",
              "regnet_y_16gf_v1": "",
              "vit_l_16_swag_linear_v1": "",
              "efficientnet_b2": "",
              "mnasnet1_0": "",
              "wide_resnet101_2_v2": "",
              "mobilenet_v2_quantized_qnnpack_v1": "",
              "resnet50_quantized_fbgemm_v2": "",
              "resnext101_64x4d_v1": "",
              "shufflenet_v2_x1_5_quantized_fbgemm_v1": "",
              "efficientnet_b3": "",
              "regnet_x_32gf_v1": "",
              "vgg19": "",
              "wide_resnet101_2_v1": "",
              "mobilenet_v2_v2": "",
              "regnet_x_32gf_v2": "",
              "regnet_y_3_2gf_v1": "",
              "efficientnet_b1_v2": "",
              "shufflenet_v2_x1_0": "",
              "vgg11_bn": "",
              "mnasnet0_5": "",
              "regnet_y_16gf_swag_linear_v1": "",
              "squeezenet1_1": "",
              "regnet_x_3_2gf_v1": "",
              "regnet_x_16gf_v1": "",
              "squeezenet1_0": "",
              "shufflenet_v2_x0_5_quantized_fbgemm_v1": "",
              "resnext101_64x4d_quantized_fbgemm_v1": "",
              "resnet50_quantized_fbgemm_v1": "",
              "inception_v3_fbgemm_v1": "",
              "resnext101_32x8d_quantized_fbgemm_v1": "",
              "convnext_base": "",
              "mnasnet1_3": "",
              "resnet152_v1": "",
              "efficientnet_b7": "",
              "regnet_y_1_6gf_v2": "",
              "mobilenet_v3_large_v2": "",
              "swin_s": "",
              "mobilenet_v2_v1": "",
              "vit_h_14_swag_linear_v1": "",
              "resnet18_quantized_fbgemm_v1": "",
              "convnext_large": "",
              "mobilenet_v3_small": "",
              "shufflenet_v2_x1_0_quantized_fbgemm_v1": "",
              "regnet_y_400mf_v2": "",
              "resnet18": "",
              "regnet_y_128gf_swag_linear_v1": "",
              "resnet50_v2": "",
              "vit_l_16_v1": "",
              "shufflenet_v2_x0_5": "",
              "densenet121": "",
              "shufflenet_v2_x2_0_quantized_fbgemm_v1": "",
              "resnext50_32x4d_v2": "",
              "regnet_x_400mf_v2": "",
              "vit_b_16_swag_linear_v1": "",
              "vgg13": "",
              "regnet_x_800mf_v1": "",
              "regnet_y_400mf_v1": "",
              "densenet169": "",
              "convnext_tiny": "",
              "vit_b_32": "",
              "efficientnet_v2_m": "",
              "regnet_y_16gf_v2": "",
              "regnet_x_800mf_v2": "",
              "resnext101_32x8d_quantized_fbgemm_v2": "",
              "regnet_y_16gf_swag_e2e_v1": "",
              "googlenet_quantized_fbgemm_v1": "",
              "regnet_x_16gf_v2": "",
              "efficientnet_b5": "",
              "densenet201": "",
              "resnet152_v2": "",
              "vgg19_bn": "",
              "resnext101_32x8d_v1": "",
              "vit_h_14_swag_e2e_v1": "",
              "mobilenet_v3_large_quantized_qnnpack_v1": "",
              "vit_l_32": "",
              "shufflenet_v2_x2_0": "",
              "vit_b_16_v1": "",
              "efficientnet_b1_v1": "",
              "vgg11": "",
              "swin_b": "",
              "vit_l_16_swag_e2e_v1": "",
              "regnet_y_32gf_v1": "",
              "resnext101_32x8d_v2": "",
              "regnet_y_32gf_swag_e2e_v1": "",
              "efficientnet_v2_s": "",
              "densenet161": "",
              "regnet_x_400mf_v1": "",
              "convnext_small": "",
              "regnet_x_3_2gf_v2": "",
              "mobilenet_v3_large_v1": "",
              "regnet_x_8gf_v2": "",
              "regnet_y_128gf_swag_e2e_v1": "",
              "googlenet": "",
              "resnet34": "",
              "regnet_x_1_6gf_v1": "",
              "regnet_y_3_2gf_v2": "",
              "regnet_y_32gf_v2": "",
              "shufflenet_v2_x1_5": ""
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
        "summary": "Get list of models available for ",
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
        "summary": "Apply model for the  task for a given models",
        "operationId": "apply_image_text_ocr__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "easy-ocr",
                "tesseract-default",
                "textract-extractor",
                "tesseract-denoising"
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
              "textract-extractor": {},
              "easy-ocr": {},
              "tesseract-default": {},
              "tesseract-denoising": {}
            },
            "example": {
              "textract-extractor": "",
              "easy-ocr": "",
              "tesseract-default": "",
              "tesseract-denoising": ""
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
        "summary": "Get list of models available for image-generat",
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
        "summary": "Apply model for the image-generat task for a given models",
        "operationId": "apply_text_image_image_generation__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "stable-diffusion--stabilityai-sd-20",
                "stable-diffusion--stabilityai-sd-21",
                "stable-diffusion--runwayml-sd-15",
                "stable-diffusion--compvis-sd-14",
                "dream-studio"
              ],
              "type": "string",
              "default": "stable-diffusion--stabilityai-sd-21"
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
              "stable-diffusion--compvis-sd-14": {},
              "stable-diffusion--runwayml-sd-15": {},
              "stable-diffusion--stabilityai-sd-20": {},
              "stable-diffusion--stabilityai-sd-21": {},
              "dream-studio": {}
            },
            "example": {
              "stable-diffusion--compvis-sd-14": "",
              "stable-diffusion--runwayml-sd-15": "",
              "stable-diffusion--stabilityai-sd-20": "",
              "stable-diffusion--stabilityai-sd-21": "",
              "dream-studio": ""
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
        "summary": "Get list of models available for anonymizat",
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
        "summary": "Apply model for the anonymizat task for a given models",
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
                  "prediction_raw": {},
                  "prediction": "text"
                }
              }
            },
            "examples": {
              "ms-presidio": {}
            },
            "example": {
              "ms-presidio": ""
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
        "summary": "Get list of models available for date-clean",
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
        "summary": "Apply model for the date-clean task for a given models",
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
                  "prediction_raw": {},
                  "prediction": "text"
                }
              }
            },
            "examples": {
              "dataprep-formatter": {}
            },
            "example": {
              "dataprep-formatter": ""
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
        "summary": "Get list of models available for gps-address-formatt",
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
        "summary": "Apply model for the gps-address-formatt task for a given models",
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
                  "prediction_raw": {},
                  "prediction": "text"
                }
              }
            },
            "examples": {
              "geopy-formatter": {}
            },
            "example": {
              "geopy-formatter": ""
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
        "summary": "Get list of models available for headline-generat",
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
        "summary": "Apply model for the headline-generat task for a given models",
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
                  "prediction_raw": {},
                  "prediction": "text"
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
        "summary": "Get list of models available for keyword-extract",
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
        "summary": "Apply model for the keyword-extract task for a given models",
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
                  "prediction_raw": {},
                  "prediction": "text"
                }
              }
            },
            "examples": {
              "keybert-paraphrase-multilingual-MiniLM-L12-v2": {}
            },
            "example": {
              "keybert-paraphrase-multilingual-MiniLM-L12-v2": ""
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
    "/text/text/language-codes/": {
      "get": {
        "tags": [
          "text.text.language-codes"
        ],
        "summary": "Get list of models available for language-co",
        "operationId": "get_versions_text_text_language_codes__get",
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
          "text.text.language-codes"
        ],
        "summary": "Apply model for the language-co task for a given models",
        "operationId": "apply_text_text_language_codes__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "language-codes"
              ],
              "type": "string",
              "default": "language-codes"
            },
            "name": "model",
            "in": "query"
          }
        ],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Body_apply_text_text_language_codes__post"
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
                  "prediction": "text"
                }
              }
            },
            "examples": {
              "language-codes": {}
            },
            "example": {
              "language-codes": ""
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
        "summary": "Get list of models available for language-detect",
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
        "summary": "Apply model for the language-detect task for a given models",
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
                  "prediction_raw": {},
                  "prediction": "text"
                }
              }
            },
            "examples": {
              "toftrup-etal-2021": {}
            },
            "example": {
              "toftrup-etal-2021": ""
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
        "summary": "Get list of models available for named-entity-recognit",
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
        "summary": "Apply model for the named-entity-recognit task for a given models",
        "operationId": "apply_text_text_named_entity_recognition__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "spacy-multilingual"
              ],
              "type": "string",
              "default": "spacy-multilingual"
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
                  "prediction": "text"
                }
              }
            },
            "examples": {
              "spacy-multilingual": {}
            },
            "example": {
              "spacy-multilingual": ""
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
        "summary": "Get list of models available for next-word-predict",
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
        "summary": "Apply model for the next-word-predict task for a given models",
        "operationId": "apply_text_text_next_word_prediction__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "bert-base-uncased",
                "albert-base-v2",
                "roberta-base",
                "distilbert-base-uncased"
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
                  "prediction": "text"
                }
              }
            },
            "examples": {
              "distilbert-base-uncased": {},
              "bert-base-uncased": {},
              "albert-base-v2": {},
              "roberta-base": {}
            },
            "example": {
              "distilbert-base-uncased": "",
              "bert-base-uncased": "",
              "albert-base-v2": "",
              "roberta-base": ""
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
        "summary": "Get list of models available for sentiment-analy",
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
        "summary": "Apply model for the sentiment-analy task for a given models",
        "operationId": "apply_text_text_sentiment_analysis__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "zero-shot-classification-facebook-bart-large-mnli",
                "distilbert-base-uncased",
                "distilbert-base-uncased-finetuned-sst-2-english"
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
                  "prediction_raw": {},
                  "prediction": "array"
                }
              }
            },
            "examples": {
              "distilbert-base-uncased": {},
              "zero-shot-classification-facebook-bart-large-mnli": {},
              "distilbert-base-uncased-finetuned-sst-2-english": {}
            },
            "example": {
              "distilbert-base-uncased": "",
              "zero-shot-classification-facebook-bart-large-mnli": "",
              "distilbert-base-uncased-finetuned-sst-2-english": ""
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
        "summary": "Get list of models available for similar",
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
        "summary": "Apply model for the similar task for a given models",
        "operationId": "apply_text_text_similarity__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "all-MiniLM-L12-v2"
              ],
              "type": "string",
              "default": "all-MiniLM-L12-v2"
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
                  "prediction": "text"
                }
              }
            },
            "examples": {
              "all-MiniLM-L12-v2": {}
            },
            "example": {
              "all-MiniLM-L12-v2": ""
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
        "summary": "Get list of models available for hate-speech-detect",
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
        "summary": "Apply model for the hate-speech-detect task for a given models",
        "operationId": "apply_text_text_hate_speech_detection__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "dkleczek_Polish-Hate-Speech-Detection-Herbert-Large",
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
                  "prediction": "text"
                }
              }
            },
            "examples": {
              "dkleczek_Polish-Hate-Speech-Detection-Herbert-Large": {}
            },
            "example": {
              "dkleczek_Polish-Hate-Speech-Detection-Herbert-Large": ""
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
        "summary": "Get list of models available for language-generat",
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
        "summary": "Apply model for the language-generat task for a given models",
        "operationId": "apply_text_text_language_generation__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "gpt2_xl"
              ],
              "type": "string",
              "default": "gpt2_xl"
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
                  "prediction": "text"
                }
              }
            },
            "examples": {
              "gpt2_xl": {}
            },
            "example": {
              "gpt2_xl": ""
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
        "summary": "Get list of models available for question-answer",
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
        "summary": "Apply model for the question-answer task for a given models",
        "operationId": "apply_text_text_question_answering__post",
        "parameters": [
          {
            "required": false,
            "schema": {
              "title": "Model",
              "enum": [
                "deepset_roberta-large-squad2"
              ],
              "type": "string",
              "default": "deepset_roberta-large-squad2"
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
                  "prediction": "text"
                }
              }
            },
            "examples": {
              "deepset_roberta-large-squad2": {}
            },
            "example": {
              "deepset_roberta-large-squad2": ""
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
    },
    "/text/text/product-ownership/": {
      "post": {
        "tags": [
          "text.text.product-ownership"
        ],
        "summary": "product ownership",
        "operationId": "apply_text_text_product_ownership__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_product_ownership__post"
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
    "/text/text/product-sentiment/": {
      "post": {
        "tags": [
          "text.text.product-sentiment"
        ],
        "summary": "product sentiment",
        "operationId": "apply_text_text_product_sentiment__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_product_sentiment__post"
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
    "/text/text/speaker-recognition/": {
      "post": {
        "tags": [
          "text.text.speaker-recognition"
        ],
        "summary": "speaker recognition",
        "operationId": "apply_text_text_speaker_recognition__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_speaker_recognition__post"
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
    "/text/text/guess-intent/": {
      "post": {
        "tags": [
          "text.text.guess-intent"
        ],
        "summary": "Apply model to guess the intent task for a given model",
        "operationId": "apply_text_text_guess_intent__post",
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
                "$ref": "#/components/schemas/Body_apply_text_text_guess_intent__post"
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
    "/text/text/translation/": {
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
              "jpt": {
                "output": {
                  "prediction": "Texte à traduire",
                  "prediction_raw": "Texte à traduire"
                }
              }
            },
            "examples": {
              "jpt": {}
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
    "/automl/text/create-model": {
      "post": {
        "summary": "Create Model",
        "description": "Generate a model based on the provided data\n\nArgs:\n    data (Dict[str, Any]): data to train the model on. Defaults to Body(...).\n    label (str, optional): label to predict. Defaults to Body(...).\n    time_limit (int, optional): maximum time to train the model on data. Defaults to Body(60).\n\nExample of data: list: [{\"key1\": x1, \"key2\": y1}, {\"key1\": x2, \"key2\": y2}]\n\nReturns:\n    int: id of the model",
        "operationId": "create_model_text_create_model_post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Body_create_model_text_create_model_post"
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
    "/automl/text/predict": {
      "post": {
        "summary": "Predict",
        "description": "Inferer the required model on the provided data\n\nArgs:\n    model_id (str, optional): id of the model to use. Defaults to Body(...).\n    data (Union[list, dict], optional): data to infer the model on. Defaults to Form(...).\n\nExample of data:\n    list: [{\"key1\": x1, \"key2\": y1}, {\"key1\": x2, \"key2\": y2}]\n    dict: {\"key1\": [x1, x2], \"key2\": [y1, y2]}\n\nReturns:\n    list: predictions of the model",
        "operationId": "predict_text_predict_post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Body_predict_text_predict_post"
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
    "/automl/tabular/create-model": {
      "post": {
        "summary": "Create Model",
        "description": "Generate a model based on the provided data\n\nArgs:\n    data (Dict[str, Any]): data to train the model on. Defaults to Body(...).\n    label (str, optional): label to predict. Defaults to Body(...).\n    time_limit (int, optional): maximum time to train the model on data. Defaults to Body(60).\n\nExample of data: [{\"key1\": x1, \"key2\": y1}, {\"key1\": x2, \"key2\": y2}]\n\nReturns:\n    int: id of the model",
        "operationId": "create_model_tabular_create_model_post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Body_create_model_tabular_create_model_post"
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
    "/automl/tabular/predict": {
      "post": {
        "summary": "Predict",
        "description": "Inferer the required model on the provided data\n\nArgs:\n    model_id (str, optional): id of the model to use. Defaults to Body(...).\n    data (Union[list, dict], optional): data to infer the model on. Defaults to Form(...).\n\nExample of data:\n    list: [{\"key1\": x1, \"key2\": y1}, {\"key1\": x2, \"key2\": y2}]\n    dict: {\"key1\": [x1, x2], \"key2\": [y1, y2]}\n\nReturns:\n    list: predictions of the model",
        "operationId": "predict_tabular_predict_post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Body_predict_tabular_predict_post"
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
    "/automl/multimodal/create-model": {
      "post": {
        "summary": "Create Model",
        "description": "Images are expected to be in base64",
        "operationId": "create_model_multimodal_create_model_post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Body_create_model_multimodal_create_model_post"
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
    "/automl/multimodal/predict": {
      "post": {
        "summary": "Predict",
        "description": "Inferer the required model on the provided data\n\nArgs:\n    model_id (str, optional): id of the model to use. Defaults to Body(...).\n    data (Union[list, dict], optional): data to infer the model on. Defaults to Form(...).\n\nExample of data:\n    list: [{\"key1\": x1, \"key2\": y1}, {\"key1\": x2, \"key2\": y2}]\n    dict: {\"key1\": [x1, x2], \"key2\": [y1, y2]}\n\nReturns:\n    list: predictions of the model",
        "operationId": "predict_multimodal_predict_post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Body_predict_multimodal_predict_post"
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
    "/automl/time-series/create-model": {
      "post": {
        "summary": "Create Model",
        "description": "Generate a model based on the provided data\n\nArgs:\n    data (Dict[str, Any]): data to train the model on. Defaults to Body(...).\n    label (str, optional): label to predict. Defaults to Body(...).\n    growth (str, optional): 'linear', 'logistic' or 'flat' to specify a linear, logistic or flat trend\n\nExample of data: [{\"date\": \"2007-12-10\", \"data\": \"9.590761\"}, {\"date\": 2007-12-11, \"data\": 8.519590}]\n\nReturns:\n    int: id of the model",
        "operationId": "create_model_time_series_create_model_post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Body_create_model_time_series_create_model_post"
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
    "/automl/time-series/predict": {
      "post": {
        "summary": "Predict",
        "description": "Inferer the required model on the provided data\n\nArgs:\n    model_id (str, optional): id of the model to use. Defaults to Body(...).\n    period (Union[list, dict], optional): period to infer the model on. Defaults to Form(...).\n\nReturns:\n    list: predictions of the model",
        "operationId": "predict_time_series_predict_post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Body_predict_time_series_predict_post"
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
    "/automl/train": {
      "post": {
        "summary": "Default Create Model",
        "description": "Default route trying to guess the modalities and redirect the query to the appropriate model\n\nArgs:\n    request (Request): User's http request\n    data Union[List[Any], Dict[str, Any]]: data to train the model on.\n\nRaises:\n    HTTPException: missing parameter\n\nReturns:\n    Dict[str, int]: model's id",
        "operationId": "default_create_model_train_post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "title": "data",
                "anyOf": [
                  {
                    "type": "array",
                    "items": {}
                  },
                  {
                    "type": "object"
                  }
                ]
              },
              "example": {
                "data": [
                  {
                    "data": "9.590761",
                    "date": "2007-12-10T00:00:00"
                  },
                  {
                    "data": "8.519590",
                    "date": "2007-12-11T00:00:00"
                  },
                  {
                    "data": "8.183677",
                    "date": "2007-12-12T00:00:00z"
                  },
                  {
                    "data": "8.072467",
                    "date": "2007-12-13T00:00:00"
                  },
                  {
                    "data": "7.893572",
                    "date": "2007-12-14T00:00:00"
                  }
                ],
                "growth": "linear"
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
    "/automl/predict": {
      "post": {
        "summary": "Default Create Model",
        "description": "Default route trying to guess the modalities and redirect the query to the appropriate model\n\nArgs:\n    request (Request): received http request\n\nRaises:\n    HTTPException: missing value in the body\n\nReturns:\n    Dict[str, int]: model's prediction",
        "operationId": "default_create_model_predict_post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "title": "data",
                "anyOf": [
                  {
                    "type": "array",
                    "items": {}
                  },
                  {
                    "type": "object"
                  }
                ]
              },
              "example": {
                "model_id": "string",
                "data": [
                  "2007-12-15T00:00:00z",
                  "2007-12-16T00:00:00",
                  "2007-12-18T00:00:00",
                  "2007-12-19T00:00:00",
                  "2007-12-20T00:00:00"
                ]
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
  "security": [
    {
      "x_gladia_key": []
    }
  ]
};