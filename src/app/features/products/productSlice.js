import { createSlice } from "@reduxjs/toolkit";
import { fetchProductList, fetchProductListDetails } from "./thunk";

//-----------------------------------------------------------------------

const initialState = {
  loading: false,
  error: null,
  list: {},
  details:{}
};

//-----------------------------------------------------------------------

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    error: (state, action) => {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchProductListDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductListDetails.fulfilled, (state, action) => {
        state.details = action.payload;
      })
      .addCase(fetchProductListDetails.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { startLoading, error } = productSlice.actions;

export default productSlice.reducer;
