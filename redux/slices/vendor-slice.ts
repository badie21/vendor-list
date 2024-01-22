import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TVendorItem } from '../services/vendors/interface';

export const vendorsSlice = createSlice({
  name: 'vendors',
  initialState: {
    currentPage: 0,
    isLoading: false,
    list: [] as TVendorItem[],
    hasNextPage: false,
  },
  reducers: {
    incrementPage: (state) => {
      state.currentPage += 1;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setHasNextPage: (state, action: PayloadAction<boolean>) => {
      state.hasNextPage = action.payload;
    },
    addListItems: (state, action: PayloadAction<TVendorItem[]>) => {
      state.list = [...state.list, ...action.payload];
    },
  },
});

export const { incrementPage, setLoading, addListItems, setHasNextPage } =
  vendorsSlice.actions;
export default vendorsSlice.reducer;
