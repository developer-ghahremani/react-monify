import { CategoryInrterface } from "models/category.model";
import service from "./";

export const categoryAPI = service.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryInrterface[], { walletId: string }>({
      query: ({ walletId }) => ({
        url: `/category/${walletId}`,
        method: "Get",
      }),
      providesTags: ["category"],
    }),
    postCategory: builder.mutation<
      CategoryInrterface,
      {
        walletId: string;
        name: string;
        type: 1 | -1;
        colors?: string;
        icon?: string;
        order: number;
        parentId?: string;
      }
    >({
      query: (data) => ({ method: "Post", url: "/category", data }),
      invalidatesTags: ["category"],
    }),
    patchCategory: builder.mutation<
      CategoryInrterface,
      {
        name?: string;
        categoryId: string;
        order?: number;
        color?: string;
        icon?: string;
      }
    >({
      query: ({ categoryId, ...data }) => ({
        url: `/category/${categoryId}`,
        method: "Patch",
        data,
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  usePostCategoryMutation,
  usePatchCategoryMutation,
} = categoryAPI;
