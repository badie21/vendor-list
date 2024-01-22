import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  TGetVendorListQueryParam,
  TResponseVendorsListQuery,
} from './interface';

export const vendorApi = createApi({
  reducerPath: 'vendorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://snappfood.ir/mobile/v3/restaurant',
  }),
  endpoints: (builder) => ({
    getVendors: builder.query<
      TResponseVendorsListQuery,
      TGetVendorListQueryParam
    >({
      query: (params) => ({
        url: '/vendors-list',
        params,
      }),
    }),
  }),
});

export const { useLazyGetVendorsQuery } = vendorApi;
