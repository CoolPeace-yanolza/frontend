import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export type ResponseData<T> = {
  code: T;
  message: T;
};

export type ResponseError<T> = AxiosResponse<T> & {
  data: ResponseData<T>;
};

export type AxiosResponseError<T> = {
  config: InternalAxiosRequestConfig;
  response: ResponseError<T>;
};
