import React, { useState } from "react";
import arrowunderline from "../assets/images/underline-arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { cartActions, checkout } from "../app/cart.slice";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { unwrapResult } from "@reduxjs/toolkit";
import "reactjs-popup/dist/index.css";
import { useHistory } from "react-router-dom";
import { path } from "../constants/path";

function Cart() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const history = useHistory();

  const handleNameOrder = (event) => {
    setName(event.target.value);
  };
  const handleEmailOrder = (event) => {
    setEmail(event.target.value);
  };
  const handleAddOrder = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneOrder = (event) => {
    setPhone(event.target.value);
  };

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleDecreaseCart = (cartItem) => {
    dispatch(cartActions.decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(cartActions.increaseCart(cartItem));
  };
  const deleteCart = (cartItem) => {
    dispatch(cartActions.removeFromCart(cartItem));
  };

  const SubTotal = () => {
    let toltal = 0;
    cart.cartItem.map(
      (cartItem) => (toltal += cartItem.price * cartItem.buy_count)
    );
    return toltal;
  };
  const toltal = SubTotal();

  const handleCheckOut = () => {
    const body = {
      
    };

    dispatch(checkout(body))
      .then(unwrapResult)
      .then(() => {
        
      });
  };

  return (
    <div>
      <Helmet>
        <title>Giỏ hàng</title>
      </Helmet>
      <section className="breadcrumb">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/product">Sản phẩm</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Giỏ hàng
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="cart">
        <div className="container">
          <div className="top-title">
            <h2 className="top-title__title">Giỏ hàng</h2>
            <img
              className="top-title__under"
              src={arrowunderline}
              alt="arrow title underline"
            />
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
                {cart.cartItem.map((cartItem) => (
                  <tr key={cartItem.product_id}>
                    <td>
                      <img src={cartItem.images.url} alt={cartItem.title} />
                    </td>
                    <td>
                      <div className="cart-item__name">{cartItem.title}</div>
                    </td>
                    <td>
                      <h4 className="price">
                        {cartItem.price.toLocaleString("vi-VN")}
                      </h4>
                    </td>
                    <td>
                      <button
                        className="quantitycart"
                        onClick={() => handleDecreaseCart(cartItem)}
                      >
                        -
                      </button>
                      <input
                        className="inputquantitycart"
                        value={cartItem.buy_count}
                      />
                      <button
                        className="quantitycart"
                        onClick={() => handleIncreaseCart(cartItem)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <h4 className="price">
                        {(cartItem.price * cartItem.buy_count).toLocaleString(
                          "vi-VN"
                        )}
                      </h4>
                    </td>
                    <td>
                      <button
                        className="cartremove"
                        onClick={() => deleteCart(cartItem)}
                      >
                        <em className="cart__remove far fa-trash-alt" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <table className="table table-borderless bg-white mt20 cart-total">
            <tbody>
              <tr>
                <td className="w-20px padt24" />
                <td className="image padt24" />
                <td className="text-right pt-3 pb-1 vertical-align-middle">
                  <div className="d-flex justify-content-end align-items-center">
                    <div className="w-120px text-align-left d-flex">
                      <span className="fz-14 color-grey-900">Tổng tiền</span>
                    </div>
                    <div className="w-180px fz-20">
                      <span className="txt-oldTotal-val price">
                        {toltal.toLocaleString("vi-VN")}
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="w-20px padt24" />
                <td className="image padt24" />
                <td className="text-right pt-1 pb-1 vertical-align-middle"></td>
              </tr>
              <tr className="border-bottom">
                <td className="w-20px padt24" />
                <td className="image padt24" />
                <td className="text-right pt-1 pb-3">
                  <div className="d-flex justify-content-end align-items-center total">
                    <div className="w-120px text-align-left d-flex">
                      <span className="fz-14 color-grey-900">
                        Tổng thanh toán
                      </span>
                    </div>
                    <div className="w-180px fz-24 lh32 color-error-500 font-bold txt-total-val price">
                      {toltal.toLocaleString("vi-VN")}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="w-20px padt24" />
                <td className="image padt24" />
                <td className="text-right pt-3 pb-3"></td>
              </tr>
            </tbody>
          </table>
          {/* form order */}
          <div className="row-form">
            <div className="col-75">
              <div className="container-form">
                <form autocomplete="on">
                  <div className="row">
                    <div className="col-50">
                      <h3>Địa chỉ nhận hàng</h3>
                      <label className="labelform" htmlFor="fname">
                        <i className="fa fa-user" /> Họ và tên
                      </label>
                      <input
                        required
                        className="inputform"
                        type="text"
                        placeholder="Trần Văn A"
                        value={name}
                        onChange={(event) => handleNameOrder(event)}
                      />
                      <label className="labelform" htmlFor="email">
                        <i className="fa fa-envelope" /> Email
                      </label>
                      <input
                        required
                        className="inputform"
                        type="text"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(event) => handleEmailOrder(event)}
                      />
                      <label className="labelform" htmlFor="adr">
                        <i className="fa fa-address-card-o" /> Địa chỉ
                      </label>
                      <input
                        required
                        className="inputform"
                        type="text"
                        placeholder="542 W. 15th Street"
                        value={address}
                        onChange={(event) => handleAddOrder(event)}
                      />
                      <label className="labelform" htmlFor="city">
                        <i className="fa fa-phone" /> Số điện thoại
                      </label>
                      <input
                        required
                        className="inputform"
                        type="phone"
                        placeholder="09123456789"
                        value={phone}
                        onChange={(event) => handlePhoneOrder(event)}
                      />
                    </div>
                  </div>
                  {/* end form order  */}
                  <div className="cart__group-button">
                    <Link className="me-sm-3 button" to="/product">
                      Tiếp tục mua hàng
                    </Link>

                    <button
                      onClick={handleCheckOut}
                      className="flex-grow-1 flex-sm-grow-0 mt-3 mt-sm-0 button"
                      to="/"
                    >
                      Đặt hàng
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
