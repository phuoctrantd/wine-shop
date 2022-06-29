import {  createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import {payLoadCreater} from '../utils/helper'
import productdetailtApi from '../api/productdetail.api'



export const getProductDetail = createAsyncThunk(
  'productDetail/getProductDetail',
  payLoadCreater(productdetailtApi.getProductDetail)
)

const productDetail = createSlice({
  name: 'productDetail',
  initialState: {
    productDetail: {},
    loading: false,
    error: ''
  },
  extraReducers: {
    [getProductDetail.pending]: (state, action) => {
      state.loading = true
    },
    [getProductDetail.fulfilled]: (state, action) => {
      state.loading = false
      state.error = ''
      state.productDetail = action.payload.data
    },
    [getProductDetail.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})
const productDetailReducer = productDetail.reducer
export default productDetailReducer







