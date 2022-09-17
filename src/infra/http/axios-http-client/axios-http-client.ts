import axios from 'axios';

import { HttpPostParams, HttpPostClient, HttpResponse } from '@data/protocols/http';

export class AxiosHttpClient implements HttpPostClient<any, any> {
  url?: string;

  body?: Record<string, any>;

  response: HttpResponse<any>;

  async post({ url, body }: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const response = await axios.post(url, body);
    return { statusCode: response?.status, body: response?.data };
  }
}
