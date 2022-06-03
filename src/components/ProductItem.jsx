import React from "react";
import { useEffect, useState } from "react";
import { getProducts } from "../app/productitem.slice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Pagination } from "antd";
import "../assets/css/antd.css";
import to_slug from "../utils/helper";
import { Link } from "react-router-dom";
import { cartActions } from "../app/cart.slice";

function ProductItem({ items, page, postPerPage, total, setPage }) {
  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = items.slice(indexOfFirstPage, indexOfLastPage);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    const body = {
      product_id: item.id,
      buy_count: 1,
      title: item.name,
      price: item.price,
      images: item.images[0],
    };

    dispatch(cartActions.addToCart(body));
  };

  return (
    <>
      {/* panigation */}
      <div className="product__header">
        <div className="product__view">
          <label htmlFor="grid-view">
            <em className="fas fa-th" />
          </label>
          <label htmlFor="list-view">
            <em className="fas fa-list" />
          </label>
        </div>
        <div className="product__pagination">
          <nav aria-label="Product pagination">
            <Pagination
              size="small"
              onChange={(value) => setPage(value)}
              pageSize={postPerPage}
              total={total}
              current={page}
            />
          </nav>
        </div>
      </div>
      {/* end panigation */}
      {/* product  */}
      <div className="product__grid">
        <div className="row">
          {currentPosts.map((item) => (
            <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
              <div className="product-block text-center">
                <div className="product-img">
                  <Link
                    to={"/product/" + to_slug(item.name) + "-" + "i." + item.id}
                  >
                    <img src={item.images} alt={`product ${item.id} `} />
                  </Link>
                </div>
                <Link
                  to={"/product/" + to_slug(item.name) + "-" + "i." + item.id}
                >
                  <h4 className="product-block__name">{item.name}</h4>
                </Link>
                <span className="price product-block__price">
                  {item.price.toLocaleString("vi-VN")}
                </span>
                <span className="price product-block__original-price">
                  {item.price_before_discount.toLocaleString("vi-VN")}
                </span>
                <br />
                <button
                  className="button mt-4"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="product__list">
        <div className="row">
          {currentPosts.map((item) => (
            <div className="col-12" key={item.id}>
              <div className="product-block product-block--list">
                <div className="row">
                  <div className="col-12 col-sm-4">
                    <div className="product-img">
                      <img src={item.images} alt={`product ${item.id} `} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-8 col-xl-6">
                    <Link
                      to={
                        "/product/" + to_slug(item.name) + "-" + "i." + item.id
                      }
                    >
                      <h4 className="product-block__name">{item.name}</h4>
                    </Link>
                    <span className="price product-block__price">
                      {item.price.toLocaleString("vi-VN")}
                    </span>
                    <p className="desc mt-4">{item.description}</p>
                    <div className="row mt-5 px-2">
                      
                      <button
                        className="col-4 button"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to cart
                      </button>
                      <p className="col-4 product-img__wishlist m-0 text-center my-auto">
                        <Link to="/">
                          <em className="fas fa-heart me-2" />
                          Yêu thích
                        </Link>
                      </p>
                      <p className="col-4 product-img__compare m-0 text-center my-auto">
                        <Link to="/">
                          <em className="fas fa-signal me-2" />
                          So sánh
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* end-product */}
    </>
  );
}

export default ProductItem;
