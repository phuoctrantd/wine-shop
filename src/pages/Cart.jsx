import React from "react";
import arrowunderline from "../assets/images/underline-arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { cartActions, checkout } from "../app/cart.slice";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { unwrapResult } from "@reduxjs/toolkit";
import "reactjs-popup/dist/index.css";
import { useHistory } from "react-router-dom";
import { path } from "../constants/path";
import { useFormik } from "formik";
import * as Yup from "yup";
import { VN_PHONE_NUMBER_REGEX } from "../constants/regex";


function Cart() {
  const history = useHistory();
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

  const idTracking = () => parseInt(Date.now() * Math.random());
  const id = idTracking()
 
  
  
  
  
 
 


  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Tên là trường bắt buộc")
        .min(4, "Tên quá ngắn")

        .max(15, "Vui lòng nhập tối đa 15 kí tự trở xuống"),
      email: Yup.string()
        .required("Email là trường bắt buộc")
        .email("Email này không hợp lệ")
        .min(6, "Email có độ dài từ 6 - 160 kí tự")
        .max(160, "Email có độ dài từ 6 - 160 kí tự"),
      address: Yup.string()
        .required("Địa chỉ là trường bắt buộc")
        .min(20, "Địa chỉ có độ dài từ 20 đến 100 kí tự")
        .max(160, "Địa chỉ có độ dài từ 20 đến 100 kí tự"),
      phone: Yup.string()
        .required("Số điện thoại là trường bắt buộc")
        .min(10, "Số điện thoại phải bao gồm 10 số")
        .max(10, "Số điện thoại phải bao gồm 10 số")
        .matches(VN_PHONE_NUMBER_REGEX, "Số điện thoại không hợp lệ"),
    }),
    onSubmit: (info, cartItem) => {
      const body = {
        toltal,
        cartItem: cart.cartItem,
        info,
        id
        
      };
      dispatch(checkout(body))
        .then(unwrapResult)
        .then(() => {});
      dispatch(cartActions.clearCart(cartItem));
      localStorage.setItem("tracking", JSON.stringify(id));
      history.push(path.checkout);
    },
  });

  

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
          {cart.cartItem.length === 0 && (
            <p className="carterror">Chưa có sản phẩm trong giỏ</p>
          )}
          {/* cart          */}
          {cart.cartItem.length >= 1 && (
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
                        <img
                          src={cartItem.images.url || cartItem.images}
                          alt={cartItem.title}
                        />
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
          )}
          {/* end cart  */}
          {/* total   */}
          {cart.cartItem.length >= 1 && (
            <div className="row col-50 totalcart" >
            <h2 className="price ">TỔNG THANH TOÁN : {toltal.toLocaleString("vi-VN")}</h2>
          </div>
          )}
          {/* end total */}
                {/* form order */}
                {cart.cartItem.length >= 1 && (
          <div className="row-form">
            <div className="col-75">
              <div className="container-form">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                      <div className="col-50">
                        <h3>Thông tin nhận hàng</h3>
                        <label className="labelform" htmlFor="fname">
                          <i className="fa fa-user" /> Họ và tên
                        </label>
                        <input
                          className="inputform"
                          type="text"
                          placeholder="Trần Văn A"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                          name="name"
                        />
                        {formik.errors.name && (
                          <p className="errorMsg"> {formik.errors.name} </p>
                        )}
                        <label className="labelform" htmlFor="email">
                          <i className="fa fa-envelope" /> Email
                        </label>
                        <input
                          className="inputform"
                          type="text"
                          placeholder="john@example.com"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          name="email"
                        />
                        {formik.errors.email && (
                          <p className="errorMsg"> {formik.errors.email} </p>
                        )}
                        <label className="labelform" htmlFor="adr">
                          <i className="fa fa-address-card-o" /> Địa chỉ
                        </label>
                        <input
                          className="inputform"
                          type="text"
                          placeholder="54 Trường Chinh"
                          onChange={formik.handleChange}
                          value={formik.values.address}
                          name="address"
                        />
                        {formik.errors.address && (
                          <p className="errorMsg"> {formik.errors.address} </p>
                        )}
                        <label className="labelform" htmlFor="city">
                          <i className="fa fa-phone" /> Số điện thoại
                        </label>
                        <input
                          className="inputform"
                          type="phone"
                          placeholder="09123456789"
                          onChange={formik.handleChange}
                          value={formik.values.phone}
                          name="phone"
                        />
                        {formik.errors.phone && (
                          <p className="errorMsg"> {formik.errors.phone} </p>
                        )}
                      </div>
                    </div>
                    <div className="cart__group-button">
                      <Link className="me-sm-3 button" to="/product">
                        Tiếp tục mua hàng
                      </Link>

                      <button
                        disabled={cart.cartItem.length === 0}
                        className="flex-grow-1 flex-sm-grow-0 mt-3 mt-sm-0 button"
                        to="/"
                      >
                        Đặt hàng
                      </button>
                    </div>
                  </form>
                {/* end form order  */}
              </div>
            </div>
          </div>
                )}
        </div>
      </section>
    </div>
  );
}

export default Cart;
