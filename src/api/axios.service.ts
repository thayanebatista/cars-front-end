import axios, { AxiosError } from 'axios';

const baseConfig = {
  baseURL: 'https://wswork.com.br/',
  timeout: 60 * 1000,
};

const axiosInstance = axios.create(baseConfig);

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const status = error.response?.status;
    switch (status) {
      case 401:
        throw new Error('Unauthorized');
        break;
      case 404:
        throw new Error('Not Found');
        break;
      case 422:
        throw new Error('Unprocessable Entity');
        break;
      default:
        throw new Error(error.message);
    }
  },
);

export const apiService = {
  get: async <ResponseType, ParamsType>(path: string, params?: ParamsType) => {
    const { data } = await axiosInstance.get<ResponseType>(path, { params });
    return data;
  },
};
