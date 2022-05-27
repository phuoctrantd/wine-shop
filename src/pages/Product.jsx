import React from "react";
import arrowunderline from "../assets/images/underline-arrow.png";
import productads from "../assets/images/product-ads.jpg";
import ProductItem from "../components/ProductItem";
import { Link } from "@mui/material";

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
                      <nav>
                        <h4>Rượu ngoại</h4>
                        <ul className="product__category-list">
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Chivas<span> (26)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Hàng độc - Rượu độc đáo<span> (36)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a className="active" href="#">
                              Johnnie Walker<span> (46)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Whisky<span> (24)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Remy Martin<span> (16)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Glenmorangie<span> (11)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Ballantine's<span> (7)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Cognac<span> (40)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Vodka<span> (93)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Chivas<span> (26)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Macallan<span> (19)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Brandy<span> (62)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Hennessy<span> (20)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Gin - Tequila - Liqueur - Rượu mùi
                              <span> (36)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Champagne<span> (12)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Single malt Scotch whisky<span> (47)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Spirits<span> (4)</span>
                            </a>
                          </li>
                        </ul>
                        <h4>Rượu vang</h4>
                        <ul className="product__category-list">
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Vang Pháp<span> (44)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Vang Úc<span> (34)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Vang Mỹ<span> (16)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Vang Chile<span> (48)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Vang Philip<span> (1)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Vang Nam Phi<span> (20)</span>
                            </a>
                          </li>
                          <li className="product__category-item">
                            <a href="#">
                              Rượu Vang Ý<span> (2)</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
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
