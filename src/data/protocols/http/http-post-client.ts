export type HttpPostParams = {
  url: string;
  body?: Record<string, any>;
};

export interface HttpPostClient {
  url?: string;
  body?: Record<string, any>;
  post(params: HttpPostParams): Promise<void>;
}
