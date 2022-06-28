import React from "react";
import topproduct from "../assets/images/top-product.jpg";
import arrowunderline from "../assets/images/underline-arrow.png";
import { useEffect, useState } from "react";
import { getProducts } from "../app/productitem.slice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { cartActions } from "../app/cart.slice";
function TopProduct() {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCart = (items) => {
    const body = {
      product_id: 1,
      buy_count: 1,
      title: "Rượu vang nổ đà lạt",
      price: 3700000,
      images: "https://i.ibb.co/Wz8RpmR/1.jpg",
    };

    dispatch(cartActions.addToCart(body));
  };

  useEffect(() => {
    dispatch(getProducts())
      .then(unwrapResult)
      .then((res) => {
        setItems(res.data);
      });
  }, [dispatch]);
  return (
    <section className="top-product">
      <div className="container">
        <div className="top-product__bg">
          <div className="top-product__block">
            <div className="row">
              <div className="col-md-8">
                <div className="product-img">
                <Link to="/product/ruou-vang-no-da-lat-i.1">
                  <img src={topproduct} alt="topproduct"  />
                </Link>
                  <div className="product-img__tag-sale" />
                </div>
              </div>
              <div className="top-product__content col-md-4">
                <div className="top-title">
                  <Link to="/product/ruou-vang-no-da-lat-i.1">
                    {items.map((items) => (
                      <h2 className="top-title__title" key={items.id}>
                        {items.id === 1 && items.name}
                      </h2>
                    ))}
                  </Link>
                  <img
                    className="top-title__under"
                    src={arrowunderline}
                    alt="arrow title underline"
                  />
                </div>
                <span className="price price--large">
                  {items.map((items) => (
                    <span key={items.id}>
                      {items.id === 1 && items.price.toLocaleString("vi-VN")}
                    </span>
                  ))}
                </span>
                <br />
                <button
                  className="button mt-4"
                  onClick={() => handleAddToCart(items)}
                >
                  Add to cart
                </button>
                <p className="top-product__desc">
                  Một hợp chất có trong rượu vang gọi là Resveratro có khả năng
                  làm tăng tối đa tuổi thọ. Resveratro confcos khả năng ngăn
                  chặn mật độ oxy hóa của protein béo.
                </p>
                <div className="countdown">
                  <div className="row g-0">
                    <div className="col-6">
                      <div className="countdown__item text-center">
                        <span className="countdown__number">334</span>
                        <br />
                        <span className="countdown__format">Ngày</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="countdown__item text-center">
                        <span className="countdown__number">26</span>
                        <br />
                        <span className="countdown__format">Giờ</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="countdown__item text-center">
                        <span className="countdown__number">60</span>
                        <br />
                        <span className="countdown__format">Phút</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="countdown__item text-center">
                        <span className="countdown__number">15</span>
                        <br />
                        <span className="countdown__format">Giây</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopProduct;
