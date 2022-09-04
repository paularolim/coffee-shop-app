import { HttpPostClient, HttpPostParams } from '../protocols/http/http-post-client';

export class HttpPostClientStub implements HttpPostClient {
  public url?: string;

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url;
    return Promise.resolve();
  }
}
