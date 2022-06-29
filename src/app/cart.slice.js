import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import checkoutApi from '../api/checkout.api';
import { payLoadCreater } from '../utils/helper'

export const checkout = createAsyncThunk(
  'cart/checkout',
  payLoadCreater(checkoutApi.checkout)
)

const initialState = {
  cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],

};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex((item) => item.product_id == action.payload.product_id);
      
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].buy_count += action.payload.buy_count;
        toast.info("thêm sp thành công", {
          position: "top-right"
        })


      }
      else {
        const tempProduct = { ...action.payload, buy_count: action.payload.buy_count }
        state.cartItem.push(tempProduct);
        toast.success(`thêm sản phẩm ${action.payload.title} thành công`, {
          position: "top-right",
          autoClose: 1000,
        })
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    increaseCart(state, action) {
      const itemIndex = state.cartItem.findIndex((cartItem) => cartItem.product_id === action.payload.product_id);
      if (state.cartItem[itemIndex].buy_count >= 1) {
        state.cartItem[itemIndex].buy_count += 1;

        toast.info("Thêm sản phẩm thành công", {
          position: "top-right",
          autoClose: 1000,
        });

      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItem.findIndex((cartItem) => cartItem.product_id === action.payload.product_id);
      if (state.cartItem[itemIndex].buy_count > 1) {
        state.cartItem[itemIndex].buy_count -= 1;
        toast.info("Xóa sản phẩm thành công", {
          position: "top-right",
          autoClose: 1000,
        });

      }
      else if (state.cartItem[itemIndex].buy_count === 1) {
        const nextCartItems = state.cartItem.filter(
          (cartItem) => cartItem.product_id !== action.payload.product_id
        );

        state.cartItem = nextCartItems;

        toast.error(`Xóa sản phẩm ${action.payload.title} khỏi giỏ hàng`, {
          position: "top-right",
          autoClose: 1000,
        });

      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    changeCarItemQuantity(state, action) {
      const itemIndex = state.cartItem.findIndex((cartItem) => cartItem.product_id === action.payload.product_id);
      
        state.cartItem[itemIndex].buy_count = action.payload.buy_count

        
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    removeFromCart(state, action) {
      state.cartItem.map((cartItem) => {
        if (cartItem.product_id === action.payload.product_id) {
          const nextCartItems = state.cartItem.filter(
            (cartItem) => cartItem.product_id !== action.payload.product_id
          );


          state.cartItem = nextCartItems;

          toast.error(`Xóa sản phẩm ${action.payload.title} khỏi giỏ hàng`, {
            position: "top-right",
            autoClose: 1000,
          });
        }
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
        return state;
      });
    },
    clearCart(state, action) {

      state.cartItem = []
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));


    }
  }
})
const cartReducer = cart.reducer
export const cartActions = cart.actions
export default cartReducer
