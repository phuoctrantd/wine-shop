import {  createAsyncThunk } from '@reduxjs/toolkit'
import {payLoadCreater} from '../utils/helper'
import checkoutApi from '../api/checkout.api'



export const getTracking = createAsyncThunk(
  'checkout/getTracking',
  payLoadCreater(checkoutApi.getTracking)
)








