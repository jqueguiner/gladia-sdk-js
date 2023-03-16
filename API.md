# API

Pay attention default model may be outdated.
The default model of this doc is designed on SDK generation time.
The runtime default model is defined on the GladIA server.

## AUDIO => TEXT

### `audio-transcription`

#### `models`

- **large-v2 (default)**
- medium

#### other params

- `audio`: audio
- `audio_url`: url
- `language_behaviour`: enum
  - *`manual`*
  - *`automatic single language`*
  - *`automatic multiple languages`*
- `language`: enum
  - *`afrikaans`*
  - *`albanian`*
  - *`amharic`*
  - *`arabic`*
  - *`armenian`*
  - *`assamese`*
  - *`azerbaijani`*
  - *`bashkir`*
  - *`basque`*
  - *`belarusian`*
  - *`bengali`*
  - *`bosnian`*
  - *`breton`*
  - *`bulgarian`*
  - *`catalan`*
  - *`chinese`*
  - *`croatian`*
  - *`czech`*
  - *`danish`*
  - *`dutch`*
  - *`english`*
  - *`estonian`*
  - *`faroese`*
  - *`finnish`*
  - *`french`*
  - *`galician`*
  - *`georgian`*
  - *`german`*
  - *`greek`*
  - *`gujarati`*
  - *`haitian creole`*
  - *`hausa`*
  - *`hawaiian`*
  - *`hebrew`*
  - *`hindi`*
  - *`hungarian`*
  - *`icelandic`*
  - *`indonesian`*
  - *`italian`*
  - *`japanese`*
  - *`javanese`*
  - *`kannada`*
  - *`kazakh`*
  - *`khmer`*
  - *`korean`*
  - *`lao`*
  - *`latin`*
  - *`latvian`*
  - *`lingala`*
  - *`lithuanian`*
  - *`luxembourgish`*
  - *`macedonian`*
  - *`malagasy`*
  - *`malay`*
  - *`malayalam`*
  - *`maltese`*
  - *`maori`*
  - *`marathi`*
  - *`mongolian`*
  - *`myanmar`*
  - *`nepali`*
  - *`norwegian`*
  - *`nynorsk`*
  - *`occitan`*
  - *`pashto`*
  - *`persian`*
  - *`polish`*
  - *`portuguese`*
  - *`punjabi`*
  - *`romanian`*
  - *`russian`*
  - *`sanskrit`*
  - *`serbian`*
  - *`shona`*
  - *`sindhi`*
  - *`sinhala`*
  - *`slovak`*
  - *`slovenian`*
  - *`somali`*
  - *`spanish`*
  - *`sundanese`*
  - *`swahili`*
  - *`swedish`*
  - *`tagalog`*
  - *`tajik`*
  - *`tamil`*
  - *`tatar`*
  - *`telugu`*
  - *`thai`*
  - *`tibetan`*
  - *`turkish`*
  - *`turkmen`*
  - *`ukrainian`*
  - *`urdu`*
  - *`uzbek`*
  - *`vietnamese`*
  - *`welsh`*
  - *`wolof`*
  - *`yiddish`*
  - *`yoruba`*
- `toggle_noise_reduction`: boolean
- `initial_prompt`: string
- `toggle_diarization`: boolean
- `toggle_text_emotion_recognition`: boolean
- `toggle_summarization`: boolean
- `output_format`: enum
  - *`json`*
  - *`srt`*
  - *`vtt`*
  - *`txt`*
  - *`plain`*

### `audio-translated-transcription`

#### `models`

- **large-v2 (default)**
- medium

#### other params

- `audio`: audio
- `audio_url`: url
- `language`: enum
  - *`afrikaans`*
  - *`albanian`*
  - *`amharic`*
  - *`arabic`*
  - *`armenian`*
  - *`assamese`*
  - *`azerbaijani`*
  - *`bashkir`*
  - *`basque`*
  - *`belarusian`*
  - *`bengali`*
  - *`bosnian`*
  - *`breton`*
  - *`bulgarian`*
  - *`catalan`*
  - *`chinese`*
  - *`croatian`*
  - *`czech`*
  - *`danish`*
  - *`dutch`*
  - *`english`*
  - *`estonian`*
  - *`faroese`*
  - *`finnish`*
  - *`french`*
  - *`galician`*
  - *`georgian`*
  - *`german`*
  - *`greek`*
  - *`gujarati`*
  - *`haitian creole`*
  - *`hausa`*
  - *`hawaiian`*
  - *`hebrew`*
  - *`hindi`*
  - *`hungarian`*
  - *`icelandic`*
  - *`indonesian`*
  - *`italian`*
  - *`japanese`*
  - *`javanese`*
  - *`kannada`*
  - *`kazakh`*
  - *`khmer`*
  - *`korean`*
  - *`lao`*
  - *`latin`*
  - *`latvian`*
  - *`lingala`*
  - *`lithuanian`*
  - *`luxembourgish`*
  - *`macedonian`*
  - *`malagasy`*
  - *`malay`*
  - *`malayalam`*
  - *`maltese`*
  - *`maori`*
  - *`marathi`*
  - *`mongolian`*
  - *`myanmar`*
  - *`nepali`*
  - *`norwegian`*
  - *`nynorsk`*
  - *`occitan`*
  - *`pashto`*
  - *`persian`*
  - *`polish`*
  - *`portuguese`*
  - *`punjabi`*
  - *`romanian`*
  - *`russian`*
  - *`sanskrit`*
  - *`serbian`*
  - *`shona`*
  - *`sindhi`*
  - *`sinhala`*
  - *`slovak`*
  - *`slovenian`*
  - *`somali`*
  - *`spanish`*
  - *`sundanese`*
  - *`swahili`*
  - *`swedish`*
  - *`tagalog`*
  - *`tajik`*
  - *`tamil`*
  - *`tatar`*
  - *`telugu`*
  - *`thai`*
  - *`tibetan`*
  - *`turkish`*
  - *`turkmen`*
  - *`ukrainian`*
  - *`urdu`*
  - *`uzbek`*
  - *`vietnamese`*
  - *`welsh`*
  - *`wolof`*
  - *`yiddish`*
  - *`yoruba`*
- `toggle_noise_reduction`: boolean
- `toggle_diarization`: boolean
- `toggle_text_emotion_recognition`: boolean
- `toggle_summarization`: boolean
- `output_format`: enum
  - *`json`*
  - *`srt`*
  - *`vtt`*
  - *`txt`*
  - *`plain`*

### `youtube-audio-transcription`

#### `models`

- **large-v2 (default)**
- medium

#### other params

- `audio`: audio
- `audio_url`: url
- `language_behaviour`: enum
  - *`manual`*
  - *`automatic single language`*
  - *`automatic multiple languages`*
- `language`: enum
  - *`afrikaans`*
  - *`albanian`*
  - *`amharic`*
  - *`arabic`*
  - *`armenian`*
  - *`assamese`*
  - *`azerbaijani`*
  - *`bashkir`*
  - *`basque`*
  - *`belarusian`*
  - *`bengali`*
  - *`bosnian`*
  - *`breton`*
  - *`bulgarian`*
  - *`catalan`*
  - *`chinese`*
  - *`croatian`*
  - *`czech`*
  - *`danish`*
  - *`dutch`*
  - *`english`*
  - *`estonian`*
  - *`faroese`*
  - *`finnish`*
  - *`french`*
  - *`galician`*
  - *`georgian`*
  - *`german`*
  - *`greek`*
  - *`gujarati`*
  - *`haitian creole`*
  - *`hausa`*
  - *`hawaiian`*
  - *`hebrew`*
  - *`hindi`*
  - *`hungarian`*
  - *`icelandic`*
  - *`indonesian`*
  - *`italian`*
  - *`japanese`*
  - *`javanese`*
  - *`kannada`*
  - *`kazakh`*
  - *`khmer`*
  - *`korean`*
  - *`lao`*
  - *`latin`*
  - *`latvian`*
  - *`lingala`*
  - *`lithuanian`*
  - *`luxembourgish`*
  - *`macedonian`*
  - *`malagasy`*
  - *`malay`*
  - *`malayalam`*
  - *`maltese`*
  - *`maori`*
  - *`marathi`*
  - *`mongolian`*
  - *`myanmar`*
  - *`nepali`*
  - *`norwegian`*
  - *`nynorsk`*
  - *`occitan`*
  - *`pashto`*
  - *`persian`*
  - *`polish`*
  - *`portuguese`*
  - *`punjabi`*
  - *`romanian`*
  - *`russian`*
  - *`sanskrit`*
  - *`serbian`*
  - *`shona`*
  - *`sindhi`*
  - *`sinhala`*
  - *`slovak`*
  - *`slovenian`*
  - *`somali`*
  - *`spanish`*
  - *`sundanese`*
  - *`swahili`*
  - *`swedish`*
  - *`tagalog`*
  - *`tajik`*
  - *`tamil`*
  - *`tatar`*
  - *`telugu`*
  - *`thai`*
  - *`tibetan`*
  - *`turkish`*
  - *`turkmen`*
  - *`ukrainian`*
  - *`urdu`*
  - *`uzbek`*
  - *`vietnamese`*
  - *`welsh`*
  - *`wolof`*
  - *`yiddish`*
  - *`yoruba`*
- `toggle_noise_reduction`: boolean
- `toggle_diarization`: boolean
- `toggle_text_emotion_recognition`: boolean
- `toggle_summarization`: boolean
- `output_format`: enum
  - *`json`*
  - *`srt`*
  - *`vtt`*
  - *`txt`*
  - *`plain`*

## TEXT => TEXT

### `age-from-name`

#### `models`

- **jpt (default)**

#### other params

- `name`: string *(required)*

### `bullet-point-generation`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*
- `bullets`: integer

### `command-generation`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `company-categorization`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `company-name-normalization`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `company-stock-code`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `country-from-name`

#### `models`

- **jpt (default)**

#### other params

- `name`: string *(required)*

### `gender-from-name`

#### `models`

- **jpt (default)**

#### other params

- `name`: string *(required)*

### `gpt3`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `guess-city`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `guess-country`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `guess-intent`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `hate-speech-detection`

#### `models`

- **distilbert-base-uncased-emotion (default)**

#### other params

- `text`: string

### `headline-generation`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `language-detection`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `product-ownership`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `product-sentiment`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `speaker-recognition`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `translation`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*
- `target`: string *(required)*

### `vat-country-guessing`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

### `website-classification`

#### `models`

- **jpt (default)**

#### other params

- `text`: string *(required)*

> Generated file with "scripts/generate-sdk.ts"
