import React from "react";
import { Link } from "react-router-dom";
import arrowunderline from "../assets/images/underline-arrow.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getTracking } from "../app/tracking.slice";
import { useParams } from "react-router-dom";
import { getIdTracking } from "../utils/helper";
import { Helmet } from "react-helmet";
function TrackingDetail() {
  const dispatch = useDispatch();
  const [tracking, setTracking] = useState([]);
  const { idTracking } = useParams();
  const realIdTracking = getIdTracking(idTracking);

  useEffect(() => {
    dispatch(getTracking(realIdTracking))
      .then(unwrapResult)
      .then((res) => {
        setTracking(res.data);
      });
  }, [dispatch]);

  

  return (
    <div>
      <Helmet>
        <title>Tra cứu vận đơn</title>
      </Helmet>
      <section className="breadcrumb">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Danh sách đơn hàng
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {realIdTracking != tracking.id && (
        <div>
          <h1 className="errortracking">SAI MÃ VẬN ĐƠN</h1>
          <div className="cart__group-button">
            <Link className="buttontracking" to="/tracking">
              Quay lại
            </Link>
          </div>
        </div>
      )}
      {realIdTracking == tracking.id && (
        <section className="order">
          <div className="container">
            <div className="top-title">
              <h2 className="top-title__title">Đơn hàng</h2>
              <img
                className="top-title__under"
                src={arrowunderline}
                alt="arrow title underline"
              />
            </div>
            <div className="row">
              <div className="col-lg-9">
                <div className="order__table">
                  <table>
                    <thead>
                      <tr>
                        <th>STT </th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền </th>
                        <th>Tình Trạng</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tracking.cartItem.map((tracking) => (
                        <tr>
                          <td />

                          <td className="text-start">
                            <p className="m-0">{tracking.title}</p>
                          </td>
                          <td  className="price">{tracking.price.toLocaleString("vi-VN")}</td>
                          <td>{tracking.buy_count}</td>
                          <td className="price">
                            {(
                              tracking.price * tracking.buy_count
                            ).toLocaleString("vi-VN")}{" "}
                          </td>
                          <td>Chưa thanh toán</td>
                          <td>Đã tiếp nhận</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="toltaltracking">
                    <h2 className="price">TỔNG THANH TOÁN : {tracking.toltal.toLocaleString("vi-VN")}</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="user-info mt-3">
                  <h3>Thông tin khách hàng</h3>
                  <div className="user-info__content">
                    <div className="user-info__item">
                      <em className="fas fa-user" />
                      <div className="ps-5">
                        <p>{tracking.info.name}</p>
                        <p>{tracking.info.email}</p>
                      </div>
                    </div>
                    <div className="user-info__item">
                      <em className="fas fa-map-marker-alt" />
                      <div className="ps-5">
                        <p>{tracking.info.address}</p>
                        
                      </div>
                    </div>
                    <div className="user-info__item">
                      <em className="fas fa-phone-alt" />
                      <div className="ps-5">
                        <p>{tracking.info.phone}</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default TrackingDetail;
