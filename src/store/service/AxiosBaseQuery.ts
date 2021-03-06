import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import constant from "constant";
import { showMessage } from "utils/message";
import store from "store";

const api = axios.create({ baseURL: constant.baseUrl });

api.interceptors.request.use((cnf) => {
  const headers: any = cnf.headers || {};
  const p: any = {};
  for (const key in cnf.data) {
    if (typeof cnf.data[key] === "string" && !cnf.data[key]) continue;
    p[key] = cnf.data[key];
  }

  cnf.data = p;

  if (store.getState().user.token)
    headers.Authorization = store.getState().user.token;
  return cnf;
});

api.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 201) showMessage("created", { type: "success" });
    return Promise.resolve(res);
  },
  (error) => {
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
  }
);

const axiosBaseQuery = (): BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
  },
  unknown,
  unknown
> => {
  // return axios({ url: baseUrl + url, method, data, params });
  // return ({ url, method, data, params, ...rest }) =>
  //   new Promise(async (resolve, reject) => {
  //     try {
  //       const result = await api({
  //         url,
  //         method,
  //         data,
  //         params,
  //       });
  //       resolve(result);
  //     } catch (axiosError) {
  //       console.log(axiosError, "AXXX ERROR");
  //       let err = axiosError as AxiosError;
  //       reject({ error: err, ...err, data: "REZA", status: 256 });
  //       // reject({
  //       //   status: err.response?.status,
  //       //   data: err.response?.data || err.message,
  //       //   name: "REZA",
  //       // });
  //     }
  //   });

  return async ({ url, method, data, params }) => {
    try {
      const result = await api({ url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
          ...err,
        },
      };
    }
  };
};
export default axiosBaseQuery;
