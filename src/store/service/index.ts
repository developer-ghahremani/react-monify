import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { UserModel } from "models/user.model";
import axiosBaseQuery from "./AxiosBaseQuery";
import { financialUnitAPI } from "./financialUnits";
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
} = service;
export default service;
