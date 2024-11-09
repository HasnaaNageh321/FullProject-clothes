import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
  reducerPath: "ProductApi",
  // @ts-ignore
  baseQuery: fetchBaseQuery({
    // @ts-ignore
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/`,
  }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetProductByNameQuery } = ProductApi;
