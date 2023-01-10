"use strict";
/* Generated file with "scripts/generate-metasdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.openApiJson = void 0;
exports.openApiJson = {
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
            "Body_apply_text_text_product_ownership__post": {
                "title": "Body_apply_text_text_product_ownership__post",
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
                        "description": "Insert the text to anlayse",
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
                        "description": "input text",
                        "example": "Text to translate",
                        "examples": [
                            "Text to translate"
                        ],
                        "data_type": "str"
                    },
                    "source_language": {
                        "title": "source_language",
                        "type": "string",
                        "description": "ISO 639-2 Source language (3 letters)",
                        "example": "eng",
                        "examples": [
                            "eng"
                        ],
                        "data_type": "str"
                    },
                    "target_language": {
                        "title": "target_language",
                        "type": "string",
                        "description": "ISO 639-2 Source language (3 letters)",
                        "example": "fra",
                        "examples": [
                            "fra"
                        ],
                        "data_type": "str"
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
                "type": "object",
                "properties": {
                    "audio": {
                        "title": "audio",
                        "type": "string",
                        "description": "Audio to use",
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
                        "description": "Audio to use (url) - ignored if \"audio\" file is provided",
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
                        "description": "Language of the input audio",
                        "default": "en",
                        "example": "en",
                        "examples": [
                            "en"
                        ],
                        "data_type": "str"
                    },
                    "nb_speakers": {
                        "title": "nb_speakers",
                        "type": "integer",
                        "description": "Number of speakers (leave 0 to detect automatically)",
                        "default": 1,
                        "example": 0,
                        "examples": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ],
                        "data_type": "int"
                    }
                }
            },
            "Body_apply_audio_text_speaker_diarization__post": {
                "title": "Body_apply_audio_text_speaker_diarization__post",
                "type": "object",
                "properties": {
                    "audio": {
                        "title": "audio",
                        "type": "string",
                        "description": "Audio to use",
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
                        "description": "Audio to use (url) - ignored if \"audio\" file is provided",
                        "example": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
                        "examples": {
                            "from_audio_mp3": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
                            "from_audio_m4a": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.m4a",
                            "from_audio_wav": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.wav"
                        },
                        "data_type": "url"
                    },
                    "nb_speakers": {
                        "title": "nb_speakers",
                        "type": "integer",
                        "description": "Number of speakers (leave 0 to detect automatically)",
                        "default": 1,
                        "example": 0,
                        "examples": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ],
                        "data_type": "int"
                    }
                }
            },
            "Body_apply_audio_text_speaker_gender_classification__post": {
                "title": "Body_apply_audio_text_speaker_gender_classification__post",
                "type": "object",
                "properties": {
                    "audio": {
                        "title": "audio",
                        "type": "string",
                        "description": "Audio to use",
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
                        "description": "Audio to use (url) - ignored if \"audio\" file is provided",
                        "example": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
                        "examples": {
                            "from_audio_mp3": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.mp3",
                            "from_audio_m4a": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.m4a",
                            "from_audio_wav": "http://files.gladia.io/examples/audio/text/audio-transcription/audio.wav"
                        },
                        "data_type": "url"
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
                                "$ref": "#/components/schemas/DynamicEnum_1673289096.1560977"
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
            "Body_apply_image_image_enhancement__post": {
                "title": "Body_apply_image_image_enhancement__post",
                "type": "object",
                "properties": {
                    "image": {
                        "title": "image",
                        "type": "string",
                        "description": "Image to enhance",
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
                        "description": "Image to enhance (url) - ignored if \"image\" file is provided",
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
                        "description": "Image to whith faces to blure",
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
                        "description": "Image to whith faces to blure (url) - ignored if \"image\" file is provided",
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
                        "description": "Image to use",
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
                        "description": "Image to use (url) - ignored if \"original_image\" file is provided",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
                        },
                        "data_type": "url"
                    },
                    "mask_image": {
                        "title": "mask_image",
                        "type": "string",
                        "description": "Mask to use",
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
                        "description": "Mask to use (url) - ignored if \"mask_image\" file is provided",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_mask_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"
                        },
                        "data_type": "url"
                    },
                    "prompt": {
                        "title": "prompt",
                        "type": "string",
                        "description": "Prompt to use",
                        "example": "a cat sitting on a bench",
                        "examples": [
                            "a cat sitting on a bench"
                        ],
                        "data_type": "str"
                    }
                }
            },
            "Body_apply_image_image_image_guided_inpainting__post": {
                "title": "Body_apply_image_image_image_guided_inpainting__post",
                "required": [
                    "seed",
                    "steps",
                    "guidance_scale"
                ],
                "type": "object",
                "properties": {
                    "original_image": {
                        "title": "original_image",
                        "type": "string",
                        "description": "Original image to inpaint",
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
                        "description": "Original image to inpaint (url) - ignored if \"original_image\" file is provided",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
                        },
                        "data_type": "url"
                    },
                    "example_image": {
                        "title": "example_image",
                        "type": "string",
                        "description": "Image to use as a guiding example",
                        "format": "binary",
                        "example": "https://huggingface.co/spaces/Fantasy-Studio/Paint-by-Example/resolve/main/examples/reference/0.jpg",
                        "examples": {
                            "from_0_jpg": "https://huggingface.co/spaces/Fantasy-Studio/Paint-by-Example/resolve/main/examples/reference/0.jpg"
                        },
                        "data_type": "image"
                    },
                    "example_image_url": {
                        "title": "example_image_url",
                        "type": "string",
                        "description": "Image to use as a guiding example (url) - ignored if \"example_image\" file is provided",
                        "example": "https://huggingface.co/spaces/Fantasy-Studio/Paint-by-Example/resolve/main/examples/reference/0.jpg",
                        "examples": {
                            "from_0_jpg": "https://huggingface.co/spaces/Fantasy-Studio/Paint-by-Example/resolve/main/examples/reference/0.jpg"
                        },
                        "data_type": "url"
                    },
                    "mask_image": {
                        "title": "mask_image",
                        "type": "string",
                        "description": "Mask to use for inpainting",
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
                        "description": "Mask to use for inpainting (url) - ignored if \"mask_image\" file is provided",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_mask_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"
                        },
                        "data_type": "url"
                    },
                    "seed": {
                        "title": "seed",
                        "type": "integer",
                        "description": "Fixed seed for the random number generator (0 to leave random)",
                        "example": 424242,
                        "examples": [
                            424242
                        ],
                        "data_type": "int"
                    },
                    "steps": {
                        "title": "steps",
                        "type": "integer",
                        "description": "Number of steps to run",
                        "example": 75,
                        "examples": [
                            75
                        ],
                        "data_type": "int"
                    },
                    "guidance_scale": {
                        "title": "guidance_scale",
                        "type": "integer",
                        "description": "Scale of the guiding example",
                        "example": 15,
                        "examples": [
                            15
                        ],
                        "data_type": "int"
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
                        "description": "Image to use",
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
                        "description": "Image to use (url) - ignored if \"original_image\" file is provided",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
                        },
                        "data_type": "url"
                    },
                    "mask_image": {
                        "title": "mask_image",
                        "type": "string",
                        "description": "Mask to use",
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
                        "description": "Mask to use (url) - ignored if \"mask_image\" file is provided",
                        "example": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
                        "examples": {
                            "from_overture-creations-5sI6fQgYIuo_mask_png": "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"
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
                        "description": "adress to format",
                        "example": "Taj Mahal, Agra, Uttar Pradesh 282001",
                        "examples": [
                            "Taj Mahal, Agra, Uttar Pradesh 282001"
                        ],
                        "data_type": "str"
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
                        "description": "input language",
                        "example": "en",
                        "examples": [
                            "en",
                            "es",
                            "fr"
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
                        "description": "input text",
                        "example": "Text to corrcte",
                        "examples": [
                            "Text to corrcte"
                        ],
                        "data_type": "str"
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
                        "description": "input text",
                        "example": "Hannah: Hey, do you have Betty's number? Amanda: Lemme check Amanda: Sorry, can't find it. Amanda: Ask Larry Amanda: He called her last time we were at the park together Hannah: I don't know him well Amanda: Don't be shy, he's very nice Hannah: If you say so.. Hannah: I'd rather you texted him Amanda: Just text him 🙂 Hannah: Urgh.. Alright Hannah: Bye Amanda: Bye bye",
                        "examples": [
                            "Hannah: Hey, do you have Betty's number? Amanda: Lemme check Amanda: Sorry, can't find it. Amanda: Ask Larry Amanda: He called her last time we were at the park together Hannah: I don't know him well Amanda: Don't be shy, he's very nice Hannah: If you say so.. Hannah: I'd rather you texted him Amanda: Just text him 🙂 Hannah: Urgh.. Alright Hannah: Bye Amanda: Bye bye"
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
            "Body_apply_text_text_emotion_recognition__post": {
                "title": "Body_apply_text_text_emotion_recognition__post",
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
                            "I love you.",
                            "I hate you.",
                            "I am happy."
                        ],
                        "examples": [
                            [
                                "I love you.",
                                "I hate you.",
                                "I am happy."
                            ],
                            [
                                "I think you are a good person.",
                                "I think you are a bad person.",
                                "I think you are a nice person."
                            ],
                            [
                                "I am happy.",
                                "I am sad.",
                                "I am angry."
                            ]
                        ],
                        "data_type": "array"
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
            "Body_apply_text_text_image_generation_prompt_beautifier__post": {
                "title": "Body_apply_text_text_image_generation_prompt_beautifier__post",
                "required": [
                    "prompt"
                ],
                "type": "object",
                "properties": {
                    "prompt": {
                        "title": "prompt",
                        "type": "string",
                        "description": "Prompt to beautify",
                        "example": "A rabbit is wearing a space suit",
                        "examples": [
                            "A rabbit is wearing a space suit",
                            "Several railroad tracks with one train passing by",
                            "The roof is wet from the rain",
                            "Cats dancing in a space club"
                        ],
                        "data_type": "str"
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
                        "description": "input text",
                        "example": "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, therefore very close to the Manhattan Bridge.",
                        "examples": [
                            "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, therefore very close to the Manhattan Bridge."
                        ],
                        "data_type": "str"
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
                        "description": "input text",
                        "example": "I like you.",
                        "examples": [
                            "I like you."
                        ],
                        "data_type": "str"
                    },
                    "sentence_2": {
                        "title": "sentence_2",
                        "type": "string",
                        "description": "input text",
                        "example": "But it's not about you.",
                        "examples": [
                            "But it's not about you."
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
                        "description": "input text",
                        "example": "def is_palendrome(s):",
                        "examples": [
                            "def is_palendrome(s):"
                        ],
                        "data_type": "str"
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
                        "description": "input text",
                        "example": "My name is Clara and I live in Berkeley California",
                        "examples": [
                            "My name is Clara and I live in Berkeley California",
                            "My name is Sarah and I live in London",
                            "My name is Clara and I live in Berkeley, California."
                        ],
                        "data_type": "str"
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
                        "data_type": "text",
                        "examples": [
                            "My name is Clara and I live in Berkeley."
                        ]
                    },
                    "question": {
                        "title": "question",
                        "type": "string",
                        "description": "question to ask",
                        "example": "What's my name?",
                        "data_type": "text",
                        "examples": [
                            "What's my name?"
                        ]
                    },
                    "top_k": {
                        "title": "top_k",
                        "type": "integer",
                        "description": "number of prediction to return",
                        "default": 1,
                        "example": 1,
                        "data_type": "int",
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
                        "description": "input text",
                        "example": "Once, a group of frogs was roaming around the forest in search of water.",
                        "examples": [
                            "Once, a group of frogs was roaming around the forest in search of water."
                        ],
                        "data_type": "str"
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
                        "description": "input text",
                        "example": "The Crown is a historical drama streaming television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan, and produced by Left Bank Pictures and Sony Pictures Television for Netflix. Morgan developed it from his drama film The Queen (2006) and especially his stage play The Audience (2013). The first season covers the period from Elizabeth's marriage to Philip, Duke of Edinburgh in 1947 to the disintegration of her sister Princess Margaret's engagement to Group Captain Peter Townsend in 1955. The second season covers the period from the Suez Crisis in 1956 to the retirement of Prime Minister Harold Macmillan in 1963 and the birth of Prince Edward in 1964. The third season spans 1964 to 1977, includes Harold Wilson's two periods as prime minister, and introduces Camilla Shand. The fourth season spans 1979 to the early 1990s and includes Margaret Thatcher's tenure as prime minister and Prince Charles's marriage to Lady Diana Spencer. The fifth and sixth seasons, which will close the series, will cover the Queen's reign into the 21st century. For each of the two-season increments, new actors fill the roles to account for the ageing process in the periods of time portrayed. Claire Foy portrays the Queen in the first two seasons, alongside Matt Smith as Prince Philip and Vanessa Kirby as Princess Margaret. For the third and fourth seasons, Olivia Colman takes over as the Queen, Tobias Menzies as Prince Philip, and Helena Bonham Carter as Princess Margaret. Also added to the cast in season 3 is Josh O'Connor as Prince Charles. In the fourth season, new cast members include Emma Corrin as Lady Diana Spencer and Gillian Anderson as Margaret Thatcher. Imelda Staunton, Jonathan Pryce, and Lesley Manville will succeed Colman, Menzies, and Bonham Carter, respectively, for the final two seasons, while Elizabeth Debicki and Dominic West are expected to assume the role of Princess Diana and Prince Charles, respectively. Filming takes place at Elstree Studios in Borehamwood, Hertfordshire, with location shooting throughout the United Kingdom and internationally. The first season was released by Netflix on 4 November 2016, the second on 8 December 2017, the third on 17 November 2019, and the fourth on 15 November 2020. The fifth season is anticipated in 2022. As of 2020, the estimated production budget of The Crown has been reported to be $260 million, making it one of the most expensive television series in history.[4] The Crown was praised by critics for its acting, directing, writing, cinematography, and production values, although its historical inaccuracies have received some criticism, particularly within the fourth season. Nonetheless, it received accolades at the 23rd Screen Actors Guild Awards, Foy won Best Actress in the lead role and Best Actor for John Lithgow as Winston Churchill, and has secured a total of sixty three nominations for its first four seasons at the Primetime Emmy Awards, including four for Outstanding Drama Series.[5] The series has also twice won the Golden Globe Award for Best Television Series - Drama, at the 74th and 78th ceremonies, with additional acting wins for Foy, Colman, Corrin, O'Connor and Anderson.[6] ",
                        "examples": [
                            "The Crown is a historical drama streaming television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan, and produced by Left Bank Pictures and Sony Pictures Television for Netflix. Morgan developed it from his drama film The Queen (2006) and especially his stage play The Audience (2013). The first season covers the period from Elizabeth's marriage to Philip, Duke of Edinburgh in 1947 to the disintegration of her sister Princess Margaret's engagement to Group Captain Peter Townsend in 1955. The second season covers the period from the Suez Crisis in 1956 to the retirement of Prime Minister Harold Macmillan in 1963 and the birth of Prince Edward in 1964. The third season spans 1964 to 1977, includes Harold Wilson's two periods as prime minister, and introduces Camilla Shand. The fourth season spans 1979 to the early 1990s and includes Margaret Thatcher's tenure as prime minister and Prince Charles's marriage to Lady Diana Spencer. The fifth and sixth seasons, which will close the series, will cover the Queen's reign into the 21st century. For each of the two-season increments, new actors fill the roles to account for the ageing process in the periods of time portrayed. Claire Foy portrays the Queen in the first two seasons, alongside Matt Smith as Prince Philip and Vanessa Kirby as Princess Margaret. For the third and fourth seasons, Olivia Colman takes over as the Queen, Tobias Menzies as Prince Philip, and Helena Bonham Carter as Princess Margaret. Also added to the cast in season 3 is Josh O'Connor as Prince Charles. In the fourth season, new cast members include Emma Corrin as Lady Diana Spencer and Gillian Anderson as Margaret Thatcher. Imelda Staunton, Jonathan Pryce, and Lesley Manville will succeed Colman, Menzies, and Bonham Carter, respectively, for the final two seasons, while Elizabeth Debicki and Dominic West are expected to assume the role of Princess Diana and Prince Charles, respectively. Filming takes place at Elstree Studios in Borehamwood, Hertfordshire, with location shooting throughout the United Kingdom and internationally. The first season was released by Netflix on 4 November 2016, the second on 8 December 2017, the third on 17 November 2019, and the fourth on 15 November 2020. The fifth season is anticipated in 2022. As of 2020, the estimated production budget of The Crown has been reported to be $260 million, making it one of the most expensive television series in history.[4] The Crown was praised by critics for its acting, directing, writing, cinematography, and production values, although its historical inaccuracies have received some criticism, particularly within the fourth season. Nonetheless, it received accolades at the 23rd Screen Actors Guild Awards, Foy won Best Actress in the lead role and Best Actor for John Lithgow as Winston Churchill, and has secured a total of sixty three nominations for its first four seasons at the Primetime Emmy Awards, including four for Outstanding Drama Series.[5] The series has also twice won the Golden Globe Award for Best Television Series - Drama, at the 74th and 78th ceremonies, with additional acting wins for Foy, Colman, Corrin, O'Connor and Anderson.[6] "
                        ],
                        "data_type": "str"
                    },
                    "source_language": {
                        "title": "source_language",
                        "type": "string",
                        "description": "ISO 639-2 Source language (3 letters)",
                        "example": "eng",
                        "examples": [
                            "eng"
                        ],
                        "data_type": "str"
                    },
                    "min_length": {
                        "title": "min_length",
                        "type": "integer",
                        "description": "Minimum lenght for the summurization to return",
                        "default": 40,
                        "example": 40,
                        "examples": [
                            40
                        ],
                        "data_type": "int"
                    },
                    "max_length": {
                        "title": "max_length",
                        "type": "integer",
                        "description": "Minimum lenght for the summurization to return",
                        "default": 512,
                        "example": 512,
                        "examples": [
                            512
                        ],
                        "data_type": "int"
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
                        "description": "input text",
                        "example": "Sentence from first language",
                        "examples": [
                            "Sentence from first language"
                        ],
                        "data_type": "str"
                    },
                    "input_string_language_2": {
                        "title": "input_string_language_2",
                        "type": "string",
                        "description": "input text",
                        "example": "来自 第一 语言的 句子",
                        "examples": [
                            "来自 第一 语言的 句子"
                        ],
                        "data_type": "str"
                    }
                }
            },
            "Body_apply_video_text_action_classifications__post": {
                "title": "Body_apply_video_text_action_classifications__post",
                "type": "object",
                "properties": {
                    "video": {
                        "title": "video",
                        "type": "string",
                        "description": "Video to analyze",
                        "format": "binary",
                        "example": "http://files.gladia.io/examples/video/text/classif/archery.mp4",
                        "examples": {
                            "from_archery_mp4": "http://files.gladia.io/examples/video/text/classif/archery.mp4"
                        },
                        "data_type": "video"
                    },
                    "video_url": {
                        "title": "video_url",
                        "type": "string",
                        "description": "Video to analyze (url) - ignored if \"video\" file is provided",
                        "example": "http://files.gladia.io/examples/video/text/classif/archery.mp4",
                        "examples": {
                            "from_archery_mp4": "http://files.gladia.io/examples/video/text/classif/archery.mp4"
                        },
                        "data_type": "url"
                    }
                }
            },
            "DynamicEnum_1673289096.1560977": {
                "title": "DynamicEnum_1673289096.1560977",
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
                                "openai-whisper--tiny",
                                "openai-whisper--base",
                                "openai-whisper--large-v1",
                                "openai-whisper--large",
                                "openai-whisper--small",
                                "openai-whisper--large-v2",
                                "openai-whisper--medium",
                                "coqui_english_huge_vocab"
                            ],
                            "type": "string",
                            "default": "openai-whisper--tiny"
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
                        "example": {
                            "openai-whisper--tiny": "",
                            "openai-whisper--base": "",
                            "openai-whisper--small": "",
                            "openai-whisper--medium": "",
                            "openai-whisper--large": "",
                            "openai-whisper--large-v1": "",
                            "openai-whisper--large-v2": "",
                            "coqui_english_huge_vocab": ""
                        },
                        "examples": {
                            "openai-whisper--tiny": {},
                            "openai-whisper--base": {},
                            "openai-whisper--small": {},
                            "openai-whisper--medium": {},
                            "openai-whisper--large": {},
                            "openai-whisper--large-v1": {},
                            "openai-whisper--large-v2": {},
                            "coqui_english_huge_vocab": {}
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
        "/audio/text/speaker-diarization/": {
            "get": {
                "tags": [
                    "audio.text.speaker-diarization"
                ],
                "summary": "Get list of models available for speaker-diarizat",
                "operationId": "get_versions_audio_text_speaker_diarization__get",
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
                    "audio.text.speaker-diarization"
                ],
                "summary": "Apply model for the speaker-diarizat task for a given models",
                "operationId": "apply_audio_text_speaker_diarization__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "pyannote-speaker_diarization"
                            ],
                            "type": "string",
                            "default": "pyannote-speaker_diarization"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_audio_text_speaker_diarization__post"
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
                        "example": {
                            "pyannote-speaker_diarization": ""
                        },
                        "examples": {
                            "pyannote-speaker_diarization": {}
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
        "/audio/text/speaker-gender-classification/": {
            "get": {
                "tags": [
                    "audio.text.speaker-gender-classification"
                ],
                "summary": "Get list of models available for speaker-gender-classificat",
                "operationId": "get_versions_audio_text_speaker_gender_classification__get",
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
                    "audio.text.speaker-gender-classification"
                ],
                "summary": "Apply model for the speaker-gender-classificat task for a given models",
                "operationId": "apply_audio_text_speaker_gender_classification__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "inafoss-inaSpeechSegmenter"
                            ],
                            "type": "string",
                            "default": "inafoss-inaSpeechSegmenter"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_audio_text_speaker_gender_classification__post"
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
                        "example": {
                            "inafoss-inaSpeechSegmenter": ""
                        },
                        "examples": {
                            "inafoss-inaSpeechSegmenter": {}
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
                        "example": {
                            "mobilenet": "",
                            "xception": ""
                        },
                        "examples": {
                            "mobilenet": {},
                            "xception": {}
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
                        "example": {
                            "mobilenet": ""
                        },
                        "examples": {
                            "mobilenet": {}
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
                            "mlhubber_colorize": "",
                            "deoldify-artistic": "",
                            "deoldify-stable": ""
                        },
                        "examples": {
                            "mlhubber_colorize": {},
                            "deoldify-artistic": {},
                            "deoldify-stable": {}
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
                "summary": "Get list of models available for enhancem",
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
                "summary": "Apply model for the enhancem task for a given models",
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
                "summary": "Get list of models available for face-blur",
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
                "summary": "Apply model for the face-blur task for a given models",
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
                            "ageitgey": ""
                        },
                        "examples": {
                            "ageitgey": {}
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
                "summary": "Get list of models available for guided-inpaint",
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
                "summary": "Apply model for the guided-inpaint task for a given models",
                "operationId": "apply_image_image_guided_inpainting__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "runwayml",
                                "compvis"
                            ],
                            "type": "string",
                            "default": "runwayml"
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
                            "compvis": "",
                            "runwayml": ""
                        },
                        "examples": {
                            "compvis": {},
                            "runwayml": {}
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
        "/image/image/image-guided-inpainting/": {
            "get": {
                "tags": [
                    "image.image.image-guided-inpainting"
                ],
                "summary": "Get list of models available for image-guided-inpaint",
                "operationId": "get_versions_image_image_image_guided_inpainting__get",
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
                    "image.image.image-guided-inpainting"
                ],
                "summary": "Apply model for the image-guided-inpaint task for a given models",
                "operationId": "apply_image_image_image_guided_inpainting__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "fantasy-studio"
                            ],
                            "type": "string",
                            "default": "fantasy-studio"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_image_image_image_guided_inpainting__post"
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
                            "fantasy-studio": ""
                        },
                        "examples": {
                            "fantasy-studio": {}
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
                "summary": "Get list of models available for inpaint",
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
                "summary": "Apply model for the inpaint task for a given models",
                "operationId": "apply_image_image_inpainting__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "zits",
                                "latent-diffusion",
                                "mat",
                                "fcf",
                                "lama"
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
                            "latent-diffusion": "",
                            "zits": "",
                            "fcf": "",
                            "lama": ""
                        },
                        "examples": {
                            "mat": {},
                            "latent-diffusion": {},
                            "zits": {},
                            "fcf": {},
                            "lama": {}
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
                        "example": {
                            "v1": ""
                        },
                        "examples": {
                            "v1": {}
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
                                "wide_resnet101_2_v2",
                                "regnet_y_32gf_v1",
                                "vgg19",
                                "swin_t",
                                "resnext101_32x8d_quantized_fbgemm_v2",
                                "densenet161",
                                "efficientnet_v2_m",
                                "vit_b_16_swag_e2e_v1",
                                "mnasnet1_0",
                                "resnext101_32x8d_v1",
                                "resnet50_v1",
                                "regnet_x_8gf_v2",
                                "efficientnet_b1_v1",
                                "efficientnet_b3",
                                "resnext101_64x4d_quantized_fbgemm_v1",
                                "regnet_x_32gf_v1",
                                "efficientnet_b7",
                                "regnet_x_32gf_v2",
                                "mobilenet_v2_v1",
                                "resnext50_32x4d_v1",
                                "inception_v3_fbgemm_v1",
                                "resnet18_quantized_fbgemm_v1",
                                "vgg11",
                                "shufflenet_v2_x0_5_quantized_fbgemm_v1",
                                "resnet50_quantized_fbgemm_v2",
                                "regnet_x_16gf_v1",
                                "vgg13_bn",
                                "efficientnet_b4",
                                "resnet152_v1",
                                "regnet_y_128gf_swag_e2e_v1",
                                "vgg19_bn",
                                "mobilenet_v3_large_v2",
                                "vit_l_32",
                                "vit_l_16_v1",
                                "vit_b_32",
                                "vgg16_bn",
                                "googlenet_quantized_fbgemm_v1",
                                "mobilenet_v2_v2",
                                "vgg11_bn",
                                "regnet_y_8gf_v2",
                                "resnet18",
                                "regnet_y_32gf_swag_e2e_v1",
                                "squeezenet1_0",
                                "vit_b_16_swag_linear_v1",
                                "shufflenet_v2_x1_5",
                                "densenet121",
                                "regnet_x_400mf_v1",
                                "resnext101_32x8d_quantized_fbgemm_v1",
                                "vit_h_14_swag_linear_v1",
                                "regnet_y_400mf_v2",
                                "regnet_y_16gf_v1",
                                "mnasnet0_5",
                                "densenet201",
                                "regnet_y_16gf_v2",
                                "shufflenet_v2_x1_0_quantized_fbgemm_v1",
                                "mobilenet_v2_quantized_qnnpack_v1",
                                "mobilenet_v3_small",
                                "regnet_y_32gf_v2",
                                "regnet_y_400mf_v1",
                                "swin_b",
                                "mnasnet0_75",
                                "regnet_y_32gf_swag_linear_v1",
                                "vit_l_16_swag_linear_v1",
                                "convnext_small",
                                "alexnet",
                                "vgg16_v1",
                                "efficientnet_b0",
                                "regnet_y_16gf_swag_e2e_v1",
                                "vit_h_14_swag_e2e_v1",
                                "regnet_x_8gf_v1",
                                "regnet_y_3_2gf_v1",
                                "convnext_base",
                                "vit_l_16_swag_e2e_v1",
                                "mobilenet_v3_large_v1",
                                "regnet_x_800mf_v1",
                                "efficientnet_b1_v2",
                                "resnet50_v2",
                                "efficientnet_b6",
                                "regnet_x_800mf_v2",
                                "resnet50_quantized_fbgemm_v1",
                                "efficientnet_b2",
                                "efficientnet_v2_l",
                                "regnet_x_3_2gf_v2",
                                "wide_resnet101_2_v1",
                                "resnext101_32x8d_v2",
                                "shufflenet_v2_x2_0_quantized_fbgemm_v1",
                                "shufflenet_v2_x1_5_quantized_fbgemm_v1",
                                "mobilenet_v3_large_quantized_qnnpack_v1",
                                "googlenet",
                                "efficientnet_v2_s",
                                "resnext101_64x4d_v1",
                                "vit_b_16_v1",
                                "regnet_x_1_6gf_v2",
                                "resnet34",
                                "regnet_x_1_6gf_v1",
                                "resnext50_32x4d_v2",
                                "resnet152_v2",
                                "mnasnet1_3",
                                "regnet_x_16gf_v2",
                                "squeezenet1_1",
                                "efficientnet_b5",
                                "shufflenet_v2_x2_0",
                                "shufflenet_v2_x0_5",
                                "regnet_y_128gf_swag_linear_v1",
                                "regnet_y_1_6gf_v1",
                                "regnet_y_16gf_swag_linear_v1",
                                "regnet_y_3_2gf_v2",
                                "inception_v3",
                                "swin_s",
                                "convnext_tiny",
                                "regnet_y_8gf_v1",
                                "convnext_large",
                                "regnet_x_400mf_v2",
                                "shufflenet_v2_x1_0",
                                "regnet_x_3_2gf_v1",
                                "densenet169",
                                "vgg13",
                                "regnet_y_1_6gf_v2"
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
                        "example": {
                            "regnet_x_32gf_v2": "",
                            "vit_b_16_v1": "",
                            "regnet_y_128gf_swag_e2e_v1": "",
                            "regnet_x_400mf_v1": "",
                            "resnext101_64x4d_v1": "",
                            "efficientnet_b3": "",
                            "resnext50_32x4d_v1": "",
                            "regnet_x_1_6gf_v1": "",
                            "densenet161": "",
                            "mobilenet_v3_large_v2": "",
                            "vgg19_bn": "",
                            "resnext101_32x8d_v2": "",
                            "regnet_y_16gf_v1": "",
                            "convnext_tiny": "",
                            "efficientnet_b1_v1": "",
                            "regnet_x_3_2gf_v1": "",
                            "densenet169": "",
                            "resnext101_32x8d_quantized_fbgemm_v2": "",
                            "resnext101_32x8d_v1": "",
                            "resnext101_32x8d_quantized_fbgemm_v1": "",
                            "regnet_y_3_2gf_v2": "",
                            "mobilenet_v2_v1": "",
                            "vgg13_bn": "",
                            "squeezenet1_0": "",
                            "mobilenet_v3_small": "",
                            "vgg16_bn": "",
                            "resnet50_quantized_fbgemm_v1": "",
                            "wide_resnet101_2_v1": "",
                            "efficientnet_b4": "",
                            "regnet_x_16gf_v1": "",
                            "regnet_y_32gf_v1": "",
                            "shufflenet_v2_x0_5": "",
                            "vgg11": "",
                            "regnet_y_1_6gf_v2": "",
                            "regnet_y_128gf_swag_linear_v1": "",
                            "efficientnet_b2": "",
                            "vit_l_32": "",
                            "shufflenet_v2_x1_0": "",
                            "mobilenet_v3_large_v1": "",
                            "convnext_base": "",
                            "vit_l_16_swag_e2e_v1": "",
                            "regnet_y_8gf_v1": "",
                            "swin_t": "",
                            "mobilenet_v3_large_quantized_qnnpack_v1": "",
                            "shufflenet_v2_x0_5_quantized_fbgemm_v1": "",
                            "vit_b_16_swag_e2e_v1": "",
                            "resnet34": "",
                            "vgg19": "",
                            "regnet_y_32gf_swag_e2e_v1": "",
                            "inception_v3": "",
                            "squeezenet1_1": "",
                            "efficientnet_b0": "",
                            "regnet_y_32gf_v2": "",
                            "shufflenet_v2_x1_5_quantized_fbgemm_v1": "",
                            "resnext50_32x4d_v2": "",
                            "regnet_y_16gf_swag_linear_v1": "",
                            "resnet50_quantized_fbgemm_v2": "",
                            "regnet_y_400mf_v2": "",
                            "mnasnet0_5": "",
                            "vgg13": "",
                            "wide_resnet101_2_v2": "",
                            "resnext101_64x4d_quantized_fbgemm_v1": "",
                            "vit_b_16_swag_linear_v1": "",
                            "mnasnet1_3": "",
                            "regnet_x_16gf_v2": "",
                            "resnet152_v2": "",
                            "shufflenet_v2_x2_0_quantized_fbgemm_v1": "",
                            "swin_s": "",
                            "regnet_y_3_2gf_v1": "",
                            "resnet50_v1": "",
                            "mnasnet1_0": "",
                            "densenet121": "",
                            "regnet_y_400mf_v1": "",
                            "regnet_y_16gf_v2": "",
                            "efficientnet_b5": "",
                            "googlenet_quantized_fbgemm_v1": "",
                            "regnet_x_800mf_v1": "",
                            "regnet_y_32gf_swag_linear_v1": "",
                            "efficientnet_v2_l": "",
                            "efficientnet_b1_v2": "",
                            "mnasnet0_75": "",
                            "convnext_small": "",
                            "vit_h_14_swag_linear_v1": "",
                            "regnet_y_1_6gf_v1": "",
                            "vgg16_v1": "",
                            "regnet_x_3_2gf_v2": "",
                            "mobilenet_v2_v2": "",
                            "vit_l_16_v1": "",
                            "resnet50_v2": "",
                            "shufflenet_v2_x1_0_quantized_fbgemm_v1": "",
                            "vgg11_bn": "",
                            "vit_l_16_swag_linear_v1": "",
                            "regnet_x_32gf_v1": "",
                            "regnet_x_1_6gf_v2": "",
                            "regnet_y_16gf_swag_e2e_v1": "",
                            "densenet201": "",
                            "alexnet": "",
                            "convnext_large": "",
                            "inception_v3_fbgemm_v1": "",
                            "efficientnet_v2_m": "",
                            "mobilenet_v2_quantized_qnnpack_v1": "",
                            "shufflenet_v2_x1_5": "",
                            "regnet_x_8gf_v1": "",
                            "efficientnet_b7": "",
                            "regnet_x_8gf_v2": "",
                            "shufflenet_v2_x2_0": "",
                            "vit_h_14_swag_e2e_v1": "",
                            "swin_b": "",
                            "efficientnet_b6": "",
                            "resnet18": "",
                            "resnet152_v1": "",
                            "googlenet": "",
                            "regnet_x_400mf_v2": "",
                            "vit_b_32": "",
                            "efficientnet_v2_s": "",
                            "resnet18_quantized_fbgemm_v1": "",
                            "regnet_x_800mf_v2": "",
                            "regnet_y_8gf_v2": ""
                        },
                        "examples": {
                            "regnet_x_32gf_v2": {},
                            "vit_b_16_v1": {},
                            "regnet_y_128gf_swag_e2e_v1": {},
                            "regnet_x_400mf_v1": {},
                            "resnext101_64x4d_v1": {},
                            "efficientnet_b3": {},
                            "resnext50_32x4d_v1": {},
                            "regnet_x_1_6gf_v1": {},
                            "densenet161": {},
                            "mobilenet_v3_large_v2": {},
                            "vgg19_bn": {},
                            "resnext101_32x8d_v2": {},
                            "regnet_y_16gf_v1": {},
                            "convnext_tiny": {},
                            "efficientnet_b1_v1": {},
                            "regnet_x_3_2gf_v1": {},
                            "densenet169": {},
                            "resnext101_32x8d_quantized_fbgemm_v2": {},
                            "resnext101_32x8d_v1": {},
                            "resnext101_32x8d_quantized_fbgemm_v1": {},
                            "regnet_y_3_2gf_v2": {},
                            "mobilenet_v2_v1": {},
                            "vgg13_bn": {},
                            "squeezenet1_0": {},
                            "mobilenet_v3_small": {},
                            "vgg16_bn": {},
                            "resnet50_quantized_fbgemm_v1": {},
                            "wide_resnet101_2_v1": {},
                            "efficientnet_b4": {},
                            "regnet_x_16gf_v1": {},
                            "regnet_y_32gf_v1": {},
                            "shufflenet_v2_x0_5": {},
                            "vgg11": {},
                            "regnet_y_1_6gf_v2": {},
                            "regnet_y_128gf_swag_linear_v1": {},
                            "efficientnet_b2": {},
                            "vit_l_32": {},
                            "shufflenet_v2_x1_0": {},
                            "mobilenet_v3_large_v1": {},
                            "convnext_base": {},
                            "vit_l_16_swag_e2e_v1": {},
                            "regnet_y_8gf_v1": {},
                            "swin_t": {},
                            "mobilenet_v3_large_quantized_qnnpack_v1": {},
                            "shufflenet_v2_x0_5_quantized_fbgemm_v1": {},
                            "vit_b_16_swag_e2e_v1": {},
                            "resnet34": {},
                            "vgg19": {},
                            "regnet_y_32gf_swag_e2e_v1": {},
                            "inception_v3": {},
                            "squeezenet1_1": {},
                            "efficientnet_b0": {},
                            "regnet_y_32gf_v2": {},
                            "shufflenet_v2_x1_5_quantized_fbgemm_v1": {},
                            "resnext50_32x4d_v2": {},
                            "regnet_y_16gf_swag_linear_v1": {},
                            "resnet50_quantized_fbgemm_v2": {},
                            "regnet_y_400mf_v2": {},
                            "mnasnet0_5": {},
                            "vgg13": {},
                            "wide_resnet101_2_v2": {},
                            "resnext101_64x4d_quantized_fbgemm_v1": {},
                            "vit_b_16_swag_linear_v1": {},
                            "mnasnet1_3": {},
                            "regnet_x_16gf_v2": {},
                            "resnet152_v2": {},
                            "shufflenet_v2_x2_0_quantized_fbgemm_v1": {},
                            "swin_s": {},
                            "regnet_y_3_2gf_v1": {},
                            "resnet50_v1": {},
                            "mnasnet1_0": {},
                            "densenet121": {},
                            "regnet_y_400mf_v1": {},
                            "regnet_y_16gf_v2": {},
                            "efficientnet_b5": {},
                            "googlenet_quantized_fbgemm_v1": {},
                            "regnet_x_800mf_v1": {},
                            "regnet_y_32gf_swag_linear_v1": {},
                            "efficientnet_v2_l": {},
                            "efficientnet_b1_v2": {},
                            "mnasnet0_75": {},
                            "convnext_small": {},
                            "vit_h_14_swag_linear_v1": {},
                            "regnet_y_1_6gf_v1": {},
                            "vgg16_v1": {},
                            "regnet_x_3_2gf_v2": {},
                            "mobilenet_v2_v2": {},
                            "vit_l_16_v1": {},
                            "resnet50_v2": {},
                            "shufflenet_v2_x1_0_quantized_fbgemm_v1": {},
                            "vgg11_bn": {},
                            "vit_l_16_swag_linear_v1": {},
                            "regnet_x_32gf_v1": {},
                            "regnet_x_1_6gf_v2": {},
                            "regnet_y_16gf_swag_e2e_v1": {},
                            "densenet201": {},
                            "alexnet": {},
                            "convnext_large": {},
                            "inception_v3_fbgemm_v1": {},
                            "efficientnet_v2_m": {},
                            "mobilenet_v2_quantized_qnnpack_v1": {},
                            "shufflenet_v2_x1_5": {},
                            "regnet_x_8gf_v1": {},
                            "efficientnet_b7": {},
                            "regnet_x_8gf_v2": {},
                            "shufflenet_v2_x2_0": {},
                            "vit_h_14_swag_e2e_v1": {},
                            "swin_b": {},
                            "efficientnet_b6": {},
                            "resnet18": {},
                            "resnet152_v1": {},
                            "googlenet": {},
                            "regnet_x_400mf_v2": {},
                            "vit_b_32": {},
                            "efficientnet_v2_s": {},
                            "resnet18_quantized_fbgemm_v1": {},
                            "regnet_x_800mf_v2": {},
                            "regnet_y_8gf_v2": {}
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
                                "tesseract-denoising",
                                "tesseract-default",
                                "textract-extractor",
                                "easy-ocr"
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
                        "example": {
                            "tesseract-denoising": "",
                            "easy-ocr": "",
                            "textract-extractor": "",
                            "tesseract-default": ""
                        },
                        "examples": {
                            "tesseract-denoising": {},
                            "easy-ocr": {},
                            "textract-extractor": {},
                            "tesseract-default": {}
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
                                "stable-diffusion--compvis-sd-14",
                                "stable-diffusion--runwayml-sd-15",
                                "stable-diffusion--stabilityai-sd-20",
                                "dream-studio",
                                "stable-diffusion--stabilityai-sd-21"
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
                        "example": {
                            "stable-diffusion--compvis-sd-14": "",
                            "stable-diffusion--runwayml-sd-15": "",
                            "stable-diffusion--stabilityai-sd-20": "",
                            "stable-diffusion--stabilityai-sd-21": "",
                            "dream-studio": ""
                        },
                        "examples": {
                            "stable-diffusion--compvis-sd-14": {},
                            "stable-diffusion--runwayml-sd-15": {},
                            "stable-diffusion--stabilityai-sd-20": {},
                            "stable-diffusion--stabilityai-sd-21": {},
                            "dream-studio": {}
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
                "summary": "Get list of models available for address-formatt",
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
                "summary": "Apply model for the address-formatt task for a given models",
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
                                    "prediction_raw": {},
                                    "prediction": "text"
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
                "summary": "Get list of models available for autocorr",
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
                "summary": "Apply model for the autocorr task for a given models",
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
                                    "prediction": "text"
                                }
                            }
                        },
                        "example": {
                            "flexudy-t5-base-multi-sentence-doctor": ""
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
                "summary": "Get list of models available for conversation-summarizat",
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
                "summary": "Apply model for the conversation-summarizat task for a given models",
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
                                    "prediction": "text"
                                }
                            }
                        },
                        "example": {
                            "bart-large-xsum-samsum": ""
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
                "summary": "Get list of models available for emotion-recognit",
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
                "summary": "Apply model for the emotion-recognit task for a given models",
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
                                "schema": {
                                    "type": "object",
                                    "prediction_raw": {},
                                    "prediction": "text"
                                }
                            }
                        },
                        "example": {
                            "mrm8488-t5-base-finetuned-emotion": ""
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
                                "byt5-base-tweet-hate-detection",
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
                        "example": {
                            "byt5-base-tweet-hate-detection": ""
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
        "/text/text/image-generation-prompt-beautifier/": {
            "get": {
                "tags": [
                    "text.text.image-generation-prompt-beautifier"
                ],
                "summary": "Get list of models available for image-generation-prompt-beautif",
                "operationId": "get_versions_text_text_image_generation_prompt_beautifier__get",
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
                    "text.text.image-generation-prompt-beautifier"
                ],
                "summary": "Apply model for the image-generation-prompt-beautif task for a given models",
                "operationId": "apply_text_text_image_generation_prompt_beautifier__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "ms-promptist"
                            ],
                            "type": "string",
                            "default": "ms-promptist"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_text_text_image_generation_prompt_beautifier__post"
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
                        "example": {
                            "ms-promptist": ""
                        },
                        "examples": {
                            "ms-promptist": {}
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
                        "example": {
                            "keybert-paraphrase-multilingual-MiniLM-L12-v2": ""
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
                        "example": {
                            "language-codes": ""
                        },
                        "examples": {
                            "language-codes": {}
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
                        "example": {
                            "toftrup-etal-2021": ""
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
                                "EleutherAI-gpt-neo-2_7B",
                                "bloom-560m",
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
                        "example": {
                            "bloom-560m": "",
                            "EleutherAI-gpt-neo-2_7B": ""
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
                        "example": {
                            "spacy-multilingual": ""
                        },
                        "examples": {
                            "spacy-multilingual": {}
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
                "summary": "Get list of models available for next-sentence-predict",
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
                "summary": "Apply model for the next-sentence-predict task for a given models",
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
                                    "prediction": "text"
                                }
                            }
                        },
                        "example": {
                            "bert-base-uncased": ""
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
                                "albert-base-v2",
                                "bert-base-uncased",
                                "distilbert-base-uncased",
                                "roberta-base"
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
                        "example": {
                            "roberta-base": "",
                            "albert-base-v2": "",
                            "bert-base-uncased": "",
                            "distilbert-base-uncased": ""
                        },
                        "examples": {
                            "roberta-base": {},
                            "albert-base-v2": {},
                            "bert-base-uncased": {},
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
        "/text/text/programming-language-generation/": {
            "get": {
                "tags": [
                    "text.text.programming-language-generation"
                ],
                "summary": "Get list of models available for programming-language-generat",
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
                "summary": "Apply model for the programming-language-generat task for a given models",
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
                                    "prediction": "text"
                                }
                            }
                        },
                        "example": {
                            "sentdex-GPyT": ""
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
                "summary": "Get list of models available for punctuation-restorat",
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
                "summary": "Apply model for the punctuation-restorat task for a given models",
                "operationId": "apply_text_text_punctuation_restoration__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "oguhr-multilingualpunctuation"
                            ],
                            "type": "string",
                            "default": "oguhr-multilingualpunctuation"
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
                                    "prediction_raw": {},
                                    "prediction": "text"
                                }
                            }
                        },
                        "example": {
                            "oguhr-multilingualpunctuation": ""
                        },
                        "examples": {
                            "oguhr-multilingualpunctuation": {}
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
                                "deepset-roberta-base-squad2",
                                "deepset_bert-base-cased-squad2",
                                "deepset_roberta-large-squad2",
                                "distilbert-base-cased-distilled-squad",
                                "mfeb-albert-xxlarge-v2-squad2",
                                "mrm8488-bert-tiny-5-finetuned-squadv2"
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
                        "example": {
                            "deepset_bert-base-cased-squad2": "",
                            "distilbert-base-cased-distilled-squad": "",
                            "deepset-roberta-base-squad2": "",
                            "mrm8488-bert-tiny-5-finetuned-squadv2": "",
                            "mfeb-albert-xxlarge-v2-squad2": ""
                        },
                        "examples": {
                            "deepset_bert-base-cased-squad2": {},
                            "distilbert-base-cased-distilled-squad": {},
                            "deepset-roberta-base-squad2": {},
                            "mrm8488-bert-tiny-5-finetuned-squadv2": {},
                            "mfeb-albert-xxlarge-v2-squad2": {}
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
                "summary": "Get list of models available for sentence-paraphra",
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
                "summary": "Apply model for the sentence-paraphra task for a given models",
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
                                    "prediction": "text"
                                }
                            }
                        },
                        "example": {
                            "ramsrigouthamg-t5_sentence_paraphraser": "",
                            "ramsrigouthamg-t5-large-paraphraser-diverse-high-quality": ""
                        },
                        "examples": {
                            "ramsrigouthamg-t5_sentence_paraphraser": {},
                            "ramsrigouthamg-t5-large-paraphraser-diverse-high-quality": {}
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
                                "distilbert-base-uncased-finetuned-sst-2-english",
                                "distilbert-base-uncased",
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
                                    "prediction_raw": {},
                                    "prediction": "text"
                                }
                            }
                        },
                        "example": {
                            "zero-shot-classification-facebook-bart-large-mnli": "",
                            "distilbert-base-uncased-finetuned-sst-2-english": "",
                            "distilbert-base-uncased": ""
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
                                    "prediction": "text"
                                }
                            }
                        },
                        "example": {
                            "all-MiniLM-L6-v2": ""
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
                "summary": "Get list of models available for summarizat",
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
                "summary": "Apply model for the summarizat task for a given models",
                "operationId": "apply_text_text_summarization__post",
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
                                    "prediction": "text"
                                }
                            }
                        },
                        "example": {
                            "all-MiniLM-L6-v2": ""
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
                "summary": "Get list of models available for translat",
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
                "summary": "Apply model for the translat task for a given models",
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
                                    "prediction_raw": {},
                                    "prediction": "text"
                                }
                            }
                        },
                        "example": {
                            "facebook-nllb-200-distilled-600M": ""
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
                "summary": "Get list of models available for word-alignm",
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
                "summary": "Apply model for the word-alignm task for a given models",
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
                                    "prediction": "text"
                                }
                            }
                        },
                        "example": {
                            "bert-base-multilingual-cased": ""
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
        "/video/text/action-classifications/": {
            "get": {
                "tags": [
                    "video.text.action-classifications"
                ],
                "summary": "Get list of models available for action-classificati",
                "operationId": "get_versions_video_text_action_classifications__get",
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
                    "video.text.action-classifications"
                ],
                "summary": "Apply model for the action-classificati task for a given models",
                "operationId": "apply_video_text_action_classifications__post",
                "parameters": [
                    {
                        "required": false,
                        "schema": {
                            "title": "Model",
                            "enum": [
                                "kinetics--facebook/timesformer-base-finetuned-k400",
                                "kinetics--MCG-NJU/videomae-base-finetuned-kinetics"
                            ],
                            "type": "string",
                            "default": "kinetics--MCG-NJU/videomae-base-finetuned-kinetics"
                        },
                        "name": "model",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_apply_video_text_action_classifications__post"
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
                        "example": {
                            "kinetics--MCG-NJU/videomae-base-finetuned-kinetics": "",
                            "kinetics--facebook/timesformer-base-finetuned-k400": ""
                        },
                        "examples": {
                            "kinetics--MCG-NJU/videomae-base-finetuned-kinetics": {},
                            "kinetics--facebook/timesformer-base-finetuned-k400": {}
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
