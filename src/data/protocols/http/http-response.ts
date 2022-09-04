// eslint-disable-next-line no-shadow
export enum HttpStatusCode {
  ok = 200,
  unauthorized = 401,
}

export type HttpResponse = {
  statusCode: HttpStatusCode;
  body?: Record<string, any>;
};
