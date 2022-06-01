import React from 'react'
import arrowunderline from "../assets/images/underline-arrow.png";
import { useDispatch,useSelector } from 'react-redux';
import { cartActions } from '../app/cart.slice';
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector ((state) => state.cart)

  
  
  
  

  const handleDecreaseCart = (cartItem) => {
    dispatch(cartActions.decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(cartActions.increaseCart(cartItem))
  }
  const deleteCart = (cartItem) => {
    dispatch(cartActions.removeFromCart(cartItem))
  }
  return (
    <div>
  <section className="breadcrumb">
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
          <li className="breadcrumb-item"><a href="/product.html">Sản phẩm</a></li>
          <li className="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
        </ol>
      </nav>
    </div>
  </section>
  <section className="cart"> 
    <div className="container"> 
      <div className="top-title">
        <h2 className="top-title__title">Giỏ hàng</h2><img className="top-title__under" src={arrowunderline} alt="arrow title underline" />
      </div>
      <div className="cart__table">
        <table className="mt-5">
          <thead>
            <tr>
              <th>Ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng Số</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            

          {cart.cartItem.map(cartItem =>
            <tr> 
              <td> <img src={cartItem.images.url} alt={cartItem.title} /></td>
              <td>
                <div className="cart-item__name">
                  {cartItem.title}
                </div>
              </td>
              <td>
                <h4 className="price">{cartItem.price.toLocaleString("vi-VN")}</h4>
                
              </td>
              <td> <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                <input  value={cartItem.buy_count} />
                <button onClick={() => handleIncreaseCart(cartItem)} >+</button>
              </td>
              <td>
                <h4 className="price">{(cartItem.price * cartItem.buy_count).toLocaleString("vi-VN")}</h4>
              </td>
              <td><button onClick={() => deleteCart(cartItem)}><em className="cart__remove far fa-trash-alt" /></button></td>
            </tr>
           )}
          </tbody>
        </table>
      </div>
      <div className="cart__group-button"><Link className="me-sm-3 button" to="/product">Tiếp tục mua hàng </Link>
      <Link className="flex-grow-1 flex-sm-grow-0 me-3 mt-3 mt-sm-0 button " to='/cart' >Cập nhật</Link>
      <Link className="flex-grow-1 flex-sm-grow-0 mt-3 mt-sm-0 button" to="/">xoá</Link></div>
    </div>
  </section>
</div>

  )
}

export default Cart