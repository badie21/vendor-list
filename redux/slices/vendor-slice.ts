import { createSlice } from '@reduxjs/toolkit';

export const vendorsSlice = createSlice({
  name: 'vendors',
  initialState: {
    currentPage: 1,
    isLoading: false,
  },
  reducers: {
    incrementPage: (state) => {
      state.currentPage += 1;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { incrementPage, setLoading } = vendorsSlice.actions;
export default vendorsSlice.reducer;
