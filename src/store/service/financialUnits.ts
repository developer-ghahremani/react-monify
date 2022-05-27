import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { FinancialUnit } from "models/financialUnit.model";

export const financialUnitAPI = (
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
  getFinancialUnits: builder.query<FinancialUnit[], void>({
    query: () => ({ url: "/financial-unit", method: "Get" }),
  }),
});
