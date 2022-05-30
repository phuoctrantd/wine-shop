import {  createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import {payLoadCreater} from '../utils/helper'
import productdetailtApi from '../api/productdetail.api'



export const getProductDetail = createAsyncThunk(
  'productDetail/getProductDetail',
  payLoadCreater(productdetailtApi.getProductDetail)
)








