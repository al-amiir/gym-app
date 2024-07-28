import { createAsyncThunk } from '@reduxjs/toolkit';
import serverLinks from '../../../router/serverLinks';

//-----------------------------------------------------------------------

export const fetchProductList = createAsyncThunk('product/fetchProductList', async (getData) => {
  try {
    const response = await fetch(serverLinks.product.list(getData));
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const fetchProductListDetails = createAsyncThunk('product/fetchProductListDetails', async (getData) => {
    try {
      const response = await fetch(serverLinks.product.details(getData));
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  });