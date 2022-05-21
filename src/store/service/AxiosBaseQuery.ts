import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { showMessage } from "utils/message";

axios.interceptors.request.use((cnf) => {
  return cnf;
});

axios.interceptors.response.use(undefined, (error) => {
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.message
  ) {
    if (typeof error.response.data.message === "string")
      showMessage(error.response.data.message, { type: "error" });

    if (Array.isArray(error.response.data.message))
      error.response.data.message.forEach((message: string) => {
        showMessage(message, { type: "error" });
      });
  }
  return Promise.reject(error);
});

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;

      return {
        status: err.response?.status,
        data: err.response?.data || err.message,
        ...err,
      };
    }
  };
export default axiosBaseQuery;
