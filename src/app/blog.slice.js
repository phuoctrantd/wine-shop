import {  createAsyncThunk } from '@reduxjs/toolkit'
import {payLoadCreater} from '../utils/helper'
import blogApi from '../api/blog.api'



export const getBlog = createAsyncThunk(
  'blog/getBlog',
  payLoadCreater(blogApi.getBlog)
)








