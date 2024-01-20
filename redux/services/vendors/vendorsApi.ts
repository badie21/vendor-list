import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TGetVendorsListQueryParam } from './interface';
// import { CardItem } from './yourDataTypes'; // Import or define your data types

export const vendorApi = createApi({
  reducerPath: 'vendorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://snappfood.ir/mobile/v3/restaurant',
  }),
  endpoints: (builder) => ({
    getVendors: builder.query<unknown, TGetVendorsListQueryParam>({
      query: (params) => ({
        url: '/vendors-list',
        params,
      }),
    }),
  }),
});

export const { useGetVendorsQuery } = vendorApi;
