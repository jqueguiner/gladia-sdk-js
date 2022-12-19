/* Generated file with "scripts/generate-sdk.ts" */

import {
  VideoTextActionClassificationsInputs,
} from './input-models';
import {
  VideoTextActionClassificationsOutputs,
} from './output-models';
import {
  VIDEO_TEXT_ACTION_CLASSIFICATIONS_CONTENT_TYPE,
} from '../models';
import { getHttpClient, HttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
import { GladiaClientParams } from './gladia-client-params';

export class FromVideoToText {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  actionClassifications(args: VideoTextActionClassificationsInputs): Promise<VideoTextActionClassificationsOutputs> {
    const formData = new FormData();
    if (isDefined(args.video)) {
      formData.append('video', args.video);
    }
    if (isDefined(args.video_url)) {
      formData.append('video_url', args.video_url);
    }
    return this.httpClient.post({
      url: '/video/text/action-classifications/',
      headers: {
        'Content-Type': this.params.useFetch ? VIDEO_TEXT_ACTION_CLASSIFICATIONS_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData,
    });
  }

}
