import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { UserModel } from "models/user.model";
import axiosBaseQuery from "./AxiosBaseQuery";
import { financialUnitAPI } from "./financialUnits";
import { sourceAPI } from "./source";
import { userAPI } from "./user";
import { walletAPI } from "./wallet";

const service = createApi({
  baseQuery: axiosBaseQuery(),
  // baseQuery: fetchBaseQuery({ baseUrl: constant.baseUrl }),
  reducerPath: "service",
  tagTypes: ["wallet"],
  endpoints: (builder) => ({
    ...userAPI(builder),
    ...walletAPI(builder),
    ...financialUnitAPI(builder),
    ...sourceAPI(builder),
  }),
});

export const {
  useSendSMSMutation,
  useLoginMutation,
  useWhoAmIMutation,
  useEditUserMutation,
  useGetWalletsQuery,
  useGetFinancialUnitsQuery,
  usePostWalletMutation,
  useGetSourcesQuery,
  usePostSourceMutation,
} = service;
export default service;
