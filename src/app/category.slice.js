import {  createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import {payLoadCreater} from '../utils/helper'
import categoryApi from '../api/category.api'



export const getCategory = createAsyncThunk(
  'category/getCategory',
  payLoadCreater(categoryApi.getCategory)
)

const category = createSlice({
  name: 'category',
  initialState: {
    category: {},
    loading: false,
    error: ''
  },
  extraReducers: {
    [getCategory.pending]: (state, action) => {
      state.loading = true
    },
    [getCategory.fulfilled]: (state, action) => {
      state.loading = false
      state.error = ''
      state.category = action.payload.data
    },
    [getCategory.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})
const categoryReducer = category.reducer
export default categoryReducer




