import React from "react";
import arrowunderline from "../assets/images/underline-arrow.png";
import productads from "../assets/images/product-ads.jpg";
import ProductItem from "../components/ProductItem";
import Category from "../components/Category";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <section className="breadcrumb">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Sản phẩm
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="product-banner">
        <div className="container">
          <div className="product-banner__img" />
        </div>
      </section>
      <section className="product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <aside className="product__sidebar">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-12">
                    <div className="product__category">
                      <div className="top-title">
                        <h2 className="top-title__title">Danh mục sản phẩm</h2>
                        <img
                          className="top-title__under"
                          src={arrowunderline}
                          alt="arrow title underline"
                        />
                      </div>

                      <Category></Category>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-12">
                    <div className="product__compare pt-sm-0 pt-md-5">
                      <div className="top-title">
                        <h2 className="top-title__title">So sánh sản phẩm</h2>
                        <img
                          className="top-title__under"
                          src={arrowunderline}
                          alt="arrow title underline"
                        />
                      </div>
                      <p className="desc">
                        Bạn chưa có sản phẩm nào để so sánh
                      </p>
                    </div>

                    <div className="product__ads">
                      <img src={productads} alt="product advertisment" />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-12 col-md-9">
              <div className="product__main">
                <input
                  id="grid-view"
                  type="radio"
                  name="productView"
                  defaultChecked
                />
                <input id="list-view" type="radio" name="productView" />

                <ProductItem></ProductItem>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
