import { FinancialUnit } from "models/financialUnit.model";
import service from "./";

export const financialUnitAPI = service.injectEndpoints({
  endpoints: (builder) => ({
    getFinancialUnits: builder.query<FinancialUnit[], void>({
      query: () => ({ url: "/financial-unit", method: "Get" }),
    }),
  }),
});

export const { useGetFinancialUnitsQuery } = financialUnitAPI;
