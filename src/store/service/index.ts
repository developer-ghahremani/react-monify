import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import axiosBaseQuery from "./AxiosBaseQuery";
import constant from "constant";

const service = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: constant.baseUrl }),
  reducerPath: "service",
  endpoints: (builder) => ({
    sendSMS: builder.mutation<any, { mobile: string }>({
      query: ({ mobile }) => ({
        url: "/auth/send-sms",
        method: "Post",
        data: { mobile },
      }),
    }),
  }),
});

export const { useSendSMSMutation } = service;
export default service;
