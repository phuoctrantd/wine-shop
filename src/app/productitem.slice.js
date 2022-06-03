import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productApi from '../api/product.api'
import { payLoadCreater } from '../utils/helper'

export const getProducts = createAsyncThunk(
  'productItem/getProducts',
  payLoadCreater(productApi.getProducts)
)
const productItem = createSlice({
  name: 'productItem',
  initialState: {
    productItem: {},
    loading: false,
    error: ''
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false
      state.error = ''
      state.productItem = action.payload.data
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})
const productItemReducer = productItem.reducer
export default productItemReducer





