import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { UserModel } from "models/user.model";
import axiosBaseQuery from "./AxiosBaseQuery";

const service = createApi({
  baseQuery: axiosBaseQuery(),
  // baseQuery: fetchBaseQuery({ baseUrl: constant.baseUrl }),

  reducerPath: "service",
  endpoints: (builder) => ({
    sendSMS: builder.mutation<any, { mobile: string }>({
      query: ({ mobile }) => ({
        url: "/auth/send-sms",
        method: "Post",
        data: { mobile },
      }),
    }),
    login: builder.mutation<UserModel, { password: string; mobile: string }>({
      query: (data) => ({
        url: "/auth/login",
        method: "Post",
        data,
      }),
    }),
  }),
});

export const { useSendSMSMutation, useLoginMutation } = service;
export default service;
