import { HttpResponse } from './http-response';

export type HttpPostParams = {
  url: string;
  body?: Record<string, any>;
};

export interface HttpPostClient {
  url?: string;
  body?: Record<string, any>;
  response: HttpResponse;
  post(params: HttpPostParams): Promise<HttpResponse>;
}
