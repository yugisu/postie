import axios, { AxiosRequestConfig } from 'axios';

const API_URL = 'http://bloggy-api.herokuapp.com';

const composeUrl = (endpoint: string) => `${API_URL}${endpoint}`;

const get = async (endpoint: string, settings?: AxiosRequestConfig) => {
  const response = await axios.get(composeUrl(endpoint), settings);

  return response.data;
};

const post = async (endpoint: string, data: any, settings?: AxiosRequestConfig) => {
  const response = await axios.post(composeUrl(endpoint), data, settings);

  return response.data;
};

const put = async (endpoint: string, data: any, settings?: AxiosRequestConfig) => {
  const response = await axios.put(composeUrl(endpoint), data, settings);

  return response.data;
};

const deleteReq = async (endpoint: string, settings?: AxiosRequestConfig) => {
  const response = await axios.delete(composeUrl(endpoint), settings);

  return response.data;
};

const api = {
  get,
  post,
  put,
  delete: deleteReq,
};

export default api;
