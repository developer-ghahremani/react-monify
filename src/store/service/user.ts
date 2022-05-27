import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { UserModel } from "models/user.model";

export const userAPI = (
  builder: EndpointBuilder<
    BaseQueryFn<
      { url: string; method: string | undefined; data?: any; params?: any },
      unknown,
      unknown,
      {},
      {}
    >,
    "wallet",
    "service"
  >
) => ({
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
});
