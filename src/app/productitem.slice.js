import {createAsyncThunk} from '@reduxjs/toolkit'
import productApi from '../api/product.api'
import {payLoadCreater} from '../utils/helper'

export const getProducts = createAsyncThunk(
    'productItem/getProducts',
    payLoadCreater(productApi.getProducts)
)
