import { combineReducers } from '@reduxjs/toolkit';
import { vendorApi } from '../services/vendors/vendorsApi';
import vendorSlice from './vendor-slice';

export const reducers = combineReducers({
  vendorList: vendorSlice,
  [vendorApi.reducerPath]: vendorApi.reducer,
});
