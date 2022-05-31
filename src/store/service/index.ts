import axiosBaseQuery from "./AxiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

const service = createApi({
  baseQuery: axiosBaseQuery(),
  // baseQuery: fetchBaseQuery({ baseUrl: constant.baseUrl }),
  reducerPath: "service",
  tagTypes: ["wallet", "source", "category", "transaction"],
  endpoints: () => ({}),
});

export default service;
