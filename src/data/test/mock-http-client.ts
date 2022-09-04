import { HttpResponse, HttpStatusCode, HttpPostClient, HttpPostParams } from '@data/protocols/http';

export class HttpPostClientStub<T, R> implements HttpPostClient<T, R> {
  public url?: string;

  public body?: T;

  public response: HttpResponse<R> = { statusCode: HttpStatusCode.ok };

  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}
