import React from "react";
import { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getIdFromUrl } from "../utils/helper";
import { getProductDetail } from "../app/productDetail.slice";
import { unwrapResult } from "@reduxjs/toolkit";
import arrowunderline from "../assets/images/underline-arrow.png";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import ProductOther from "../components/ProductOther";
import ContentProduct from "../components/ContentProduct";

function ProductDetail() {
  const [productDetail, setProductDetail] = useState();
  const dispatch = useDispatch();
  const { idProduct } = useParams();
  const realId = getIdFromUrl(idProduct);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState({});
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5]);

  const currentImages = useMemo(() => {
    if (productDetail) {
      return productDetail.images.slice(...currentIndexImages);
    }
    return [];
  }, [productDetail, currentIndexImages]);
  useEffect(() => {
    dispatch(getProductDetail(realId))
      .then(unwrapResult)
      .then((res) => {
        res.data.images = res.data.images.map((images, index) => {
          return {
            url: images,
            id: index,
          };
        });
        setCurrentImage(res.data.images[0]);
        setProductDetail(res.data);
      });
  }, [idProduct, dispatch]);
  const chooseCurrent = (image) => setCurrentImage(image);

  return (
    <div>
      {productDetail && (
        <>
          <div>
            <section className="breadcrumb">
              <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Trang Chủ</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/product">Sản phẩm</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {productDetail.name}
                    </li>
                  </ol>
                </nav>
              </div>
            </section>
            <section className="product-detail">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-7">
                    <div className="row">
                      <div className="col-3 col-lg-2 d-flex align-items-center">
                        <div className="thumbnail-carousel">
                          <div className="thumbnail-carousel__control-prev pb-5">
                            <em className="fas fa-arrow-up" />
                          </div>

                          <div className="thumbnail-carousel__img">
                            {currentImages.map((image) => (
                              <img
                                key={image.id}
                                onMouseEnter={() => chooseCurrent(image)}
                                src={image.url}
                                alt=""
                              />
                            ))}
                          </div>

                          <div className="thumbnail-carousel__control-next pt-5">
                            <em className="fas fa-arrow-down" />
                          </div>
                        </div>
                      </div>
                      <div className="col-9 col-lg-10 d-flex align-items-center">
                        <div className="product-detail__img">
                          <img
                            src={currentImage.url}
                            alt="Main product images"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-5">
                    <form className="product-detail__form">
                      <div className="top-title">
                        <h2 className="top-title__title">
                          {productDetail.name}
                        </h2>
                        <img
                          className="top-title__under"
                          src={arrowunderline}
                          alt="arrow title underline"
                        />
                      </div>
                      <div className="product-detail__price price">
                        {productDetail.price.toLocaleString("vi-VN")}
                      </div>
                      <div className="product-detail__review">
                        <Rate allowHalf defaultValue={productDetail.rating} />
                        <span className="ms-3">1 Review(S) </span>
                      </div>

                      <div className="size-option">
                        <h3 className="part-title">Kích cỡ</h3>
                        <select name="wine size">
                          <option value="big">Loại to</option>
                          <option value="small">Loại nhỏ</option>
                        </select>
                      </div>
                      <div className="qty-option">
                        <h3 className="part-title">Số lượng</h3>
                        <div className="d-flex">
                          <div className="qty-option__input-group me-4">
                            <button className="qty-option__decrease">-</button>
                            <input
                              type="number"
                              defaultValue={quantity}
                              max={productDetail.quantity}
                              min={1}
                            />
                            <button className="qty-option__increase">+</button>
                          </div>
                          <button className="button" type="submit">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="product-detail__action mt-5">
                      <span className="me-5">
                        <a href="#">
                          <em className="fas fa-heart me-2" />
                          Yêu thích
                        </a>
                      </span>
                      <span className="me-5">
                        <a href="#">
                          <em className="fas fa-signal me-2" />
                          So sánh
                        </a>
                      </span>
                      <span className="me-5">
                        <a href="#">
                          <em className="fas fa-envelope me-2" />
                          Email
                        </a>
                      </span>
                    </div>
                    <div className="product-detail__desc">
                      <h3 className="part-title">Mô tả</h3>
                      <p className="desc">{productDetail.description}</p>
                    </div>
                    <div className="product-detail__share mt-5 d-flex align-items-center">
                      <div
                        className="fb-share-button"
                        data-href="https://developers.facebook.com/docs/plugins/"
                        data-layout="button_count"
                        data-size="small"
                      >
                        <div
                          className="fb-share-button"
                          data-href="http://localhost:3001/"
                          data-layout="button"
                          data-size="small"
                        >
                          <a
                            target="_blank"
                            href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3001%2F&amp;src=sdkpreparse"
                            className="fb-xfbml-parse-ignore"
                          >
                            Chia sẻ
                          </a>
                        </div>
                      </div>
                      <span className="me-4" />
                      <a
                        className="twitter-share-button"
                        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                        data-show-count="false"
                      >
                        Tweet
                      </a>
                      <span className="me-4" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <ContentProduct productDetail={productDetail} />

            <section className="relevant-product">
              <div className="container">
                <div className="top-title top-title--special text-center">
                  <h2 className="top-title__title">Sản phẩm liên quan</h2>
                  <img
                    className="top-title__under"
                    src={arrowunderline}
                    alt="special title underline"
                  />
                </div>
                <ProductOther />
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
