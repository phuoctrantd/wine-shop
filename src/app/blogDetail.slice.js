import {  createAsyncThunk } from '@reduxjs/toolkit'
import {payLoadCreater} from '../utils/helper'
import blogdetailtApi from '../api/blogdetail.api'



export const getBlogDetail = createAsyncThunk(
  'blogDetail/getBlogDetail',
  payLoadCreater(blogdetailtApi.getBlogDetail)
)








