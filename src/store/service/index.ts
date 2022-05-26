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
    whoAmI: builder.mutation<UserModel, void>({
      query: () => ({ url: "/auth/who-am-i", method: "Get" }),
    }),
    editUser: builder.mutation<
      UserModel,
      { firstName?: string; lastName?: string }
    >({
      query: (data) => ({ url: "/auth", method: "Patch", data }),
    }),
  }),
});

export const {
  useSendSMSMutation,
  useLoginMutation,
  useWhoAmIMutation,
  useEditUserMutation,
} = service;
export default service;
