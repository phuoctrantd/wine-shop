import React from "react";
import { useEffect, useState,useMemo } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getIdFromUrl } from "../utils/helper";
import { getProductDetail } from "../app/productDetail.slice";
import { unwrapResult } from "@reduxjs/toolkit";
import arrowunderline from "../assets/images/underline-arrow.png";
import { Link } from "react-router-dom";
import { Rate } from 'antd';


function ProductDetail() {
  const [productDetail, setProductDetail] = useState();
  const dispatch = useDispatch();
  const { idProduct } = useParams();
  const realId = getIdFromUrl(idProduct);
  const [quantity,setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState({})
  const [currentIndexImages,setCurrentIndexImages] = useState([0,5])
  
  const currentImages = useMemo(() => {
    if(productDetail){
      return productDetail.images.slice(...currentIndexImages)
    }
    return []
  },[productDetail, currentIndexImages])
  useEffect(() => {
    dispatch(getProductDetail(realId))
      .then(unwrapResult)
      .then((res) => {
        res.data.images = res.data.images.map((images, index)=>{
          return{
            url: images,
            id: index
          }
        })
        setCurrentImage(res.data.images[0])
        setProductDetail(res.data);
        
        
      });
  }, [idProduct, dispatch]);
  const chooseCurrent = image => setCurrentImage(image)
  

  

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
                            <em className="fas fa-arrow-up"  />
                          </div>
                          
                          <div className="thumbnail-carousel__img">
                            {currentImages.map((image) => (
                                <img key={image.id}
                                onMouseEnter={() => chooseCurrent(image)}
                                src={image.url}
                                alt=""
                              />
                              ))}
                          </div>
                          
                          <div className="thumbnail-carousel__control-next pt-5">
                            <em className="fas fa-arrow-down"   />
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
                        <span className="ms-3">1 Review(S) | </span>
                        <a href="#">Add Your Review</a>
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
                            <input type="number" defaultValue={quantity} max={productDetail.quantity} min={1} />
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
                      <p className="desc">
                       {productDetail.description}
                      </p>
                    </div>
                    <div className="product-detail__share mt-5 d-flex align-items-center">
                      <div
                        className="fb-share-button"
                        data-href="https://developers.facebook.com/docs/plugins/"
                        data-layout="button_count"
                        data-size="small"
                      >
                        <a
                          className="fb-xfbml-parse-ignore"
                          target="_blank"
                          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&src=sdkpreparse"
                        >
                          Chia sẻ
                        </a>
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
            <section className="product-tab">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-8 pe-lg-5">
                    <div className="navTab">
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-1-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-1"
                            type="button"
                            role="tab"
                            aria-controls="pills-1"
                            aria-selected="true"
                          >
                            Đặc điểm nổi bật
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-2-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-2"
                            type="button"
                            role="tab"
                            aria-controls="pills-2"
                            aria-selected="false"
                          >
                            Thông tin sản phẩm
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-3-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-3"
                            type="button"
                            role="tab"
                            aria-controls="pills-3"
                            aria-selected="false"
                          >
                            Đánh giá
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-1"
                          role="tabpanel"
                          aria-labelledby="pills-1-tab"
                        >
                          <p className="desc">
                            {productDetail.content}
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-2"
                          role="tabpanel"
                          aria-labelledby="pills-2-tab"
                        >
                          <p className="desc">
                            Đừng nghĩ rằng chỉ vì đôi chân to mà bạn không thể
                            mặc được món đồ nào khác ngoài quần dài. Sau đây là
                            những item vừa trendy lại vừa có tác dụng rất hiệu
                            quả trong việc điều chỉnh đôi chân to của bạn.Mùa hè
                            là mùa của những bộ cánh thoải mái, thoáng mát và
                            hẳn cô gái nào cũng muốn khoe chân tối đa. Tuy
                            nhiên, điều này lại không hề dễ dàng đối với những
                            cô nàng sở hữu đôi chân to.Đừng nghĩ rằng chỉ vì đôi
                            chân to mà bạn không thể mặc được món đồ nào khác
                            ngoài quần dài. Sau đây là những item vừa trendy lại
                            vừa có tác dụng rất hiệu quả trong việc điều chỉnh
                            đôi chân to của bạn. Mùa hè là mùa của những bộ cánh
                            thoải mái, thoáng mát và hẳn cô gái nào cũng muốn
                            khoe chân tối đa. Tuy nhiên, điều này lại không hề
                            dễ dàng đối với những cô nàng sở hữu đôi chân to.
                            Vậy diện đồ thế nào để vừa tạo cảm giác nhẹ nhàng
                            nhưng lại khéo léo giấu được nhược điểm ấy? Sau đây,
                            chúng tôi xin đưa ra gợi ý về loạt item mà các cô
                            nàng chân to nên gắn bó trong mùa hè này.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-3"
                          role="tabpanel"
                          aria-labelledby="pills-3-tab"
                        >
                          <p className="desc">
                            Đừng nghĩ rằng chỉ vì đôi chân to mà bạn không thể
                            mặc được món đồ nào khác ngoài quần dài. Sau đây là
                            những item vừa trendy lại vừa có tác dụng rất hiệu
                            quả trong việc điều chỉnh đôi chân to của bạn.Mùa hè
                            là mùa của những bộ cánh thoải mái, thoáng mát và
                            hẳn cô gái nào cũng muốn khoe chân tối đa. Tuy
                            nhiên, điều này lại không hề dễ dàng đối với những
                            cô nàng sở hữu đôi chân to.Đừng nghĩ rằng chỉ vì đôi
                            chân to mà bạn không thể mặc được món đồ nào khác
                            ngoài quần dài. Sau đây là những item vừa trendy lại
                            vừa có tác dụng rất hiệu quả trong việc điều chỉnh
                            đôi chân to của bạn. Mùa hè là mùa của những bộ cánh
                            thoải mái, thoáng mát và hẳn cô gái nào cũng muốn
                            khoe chân tối đa. Tuy nhiên, điều này lại không hề
                            dễ dàng đối với những cô nàng sở hữu đôi chân to.
                            Vậy diện đồ thế nào để vừa tạo cảm giác nhẹ nhàng
                            nhưng lại khéo léo giấu được nhược điểm ấy? Sau đây,
                            chúng tôi xin đưa ra gợi ý về loạt item mà các cô
                            nàng chân to nên gắn bó trong mùa hè này.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-lg-4 product-tab__img"
                    style={{
                      background:
                        "url(./assets/images/gallery-6.jpg) center center / cover no-repeat",
                    }}
                  >
                    <h2 className="product-tab__content text-center">
                      Rượu nho
                    </h2>
                  </div>
                </div>
              </div>
            </section>
            <section className="relevant-product">
              <div className="container">
                <div className="top-title top-title--special text-center">
                  <h2 className="top-title__title">Sản phẩm liên quan</h2>
                  <img
                    className="top-title__under"
                    src="./assets/images/underline-special.png"
                    alt="special title underline"
                  />
                </div>
                <div
                  className="carousel slide"
                  id="relevantProduct"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      className="active"
                      type="button"
                      data-bs-target="#relevantProduct"
                      data-bs-slide-to={0}
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#relevantProduct"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                    <button
                      type="button"
                      data-bs-target="#relevantProduct"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="product-carousel">
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-3">
                            <div className="product-block text-center">
                              <div className="product-img">
                                <img
                                  src="./assets/images/Product/1.jpg"
                                  alt="product 1"
                                />
                                <div className="product-img__tag-null" />
                                <div className="product-img__option">
                                  <div className="row">
                                    <p className="product-img__wishlist col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-heart me-2"> </em>
                                        Yêu thích
                                      </a>
                                    </p>
                                    <p className="product-img__compare col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-signal me-2" />
                                        So sánh
                                      </a>
                                    </p>
                                    <p className="product-img__zoom-in col-2 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-expand-alt" />
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <a href="/product-detail.html">
                                <h4 className="product-block__name">
                                  rượu vang đà lạt
                                </h4>
                              </a>
                              <span className="price product-block__price">
                                370.000
                              </span>
                              <span className="price product-block__original-price">
                                450.000
                              </span>
                              <br />
                              <a className="button mt-4" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-3">
                            <div className="product-block text-center">
                              <div className="product-img">
                                <img
                                  src="./assets/images/Product/2.jpg"
                                  alt="product 2"
                                />
                                <div className="product-img__tag-null" />
                                <div className="product-img__option">
                                  <div className="row">
                                    <p className="product-img__wishlist col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-heart me-2"> </em>
                                        Yêu thích
                                      </a>
                                    </p>
                                    <p className="product-img__compare col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-signal me-2" />
                                        So sánh
                                      </a>
                                    </p>
                                    <p className="product-img__zoom-in col-2 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-expand-alt" />
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <a href="/product-detail.html">
                                <h4 className="product-block__name">
                                  rượu vang đà lạt
                                </h4>
                              </a>
                              <span className="price product-block__price">
                                370.000
                              </span>
                              <span className="price product-block__original-price">
                                450.000
                              </span>
                              <br />
                              <a className="button mt-4" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-3">
                            <div className="product-block text-center">
                              <div className="product-img">
                                <img
                                  src="./assets/images/Product/3.jpg"
                                  alt="product 3"
                                />
                                <div className="product-img__tag-null" />
                                <div className="product-img__option">
                                  <div className="row">
                                    <p className="product-img__wishlist col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-heart me-2"> </em>
                                        Yêu thích
                                      </a>
                                    </p>
                                    <p className="product-img__compare col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-signal me-2" />
                                        So sánh
                                      </a>
                                    </p>
                                    <p className="product-img__zoom-in col-2 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-expand-alt" />
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <a href="/product-detail.html">
                                <h4 className="product-block__name">
                                  rượu vang đà lạt
                                </h4>
                              </a>
                              <span className="price product-block__price">
                                370.000
                              </span>
                              <span className="price product-block__original-price">
                                450.000
                              </span>
                              <br />
                              <a className="button mt-4" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-3">
                            <div className="product-block text-center">
                              <div className="product-img">
                                <img
                                  src="./assets/images/Product/4.jpg"
                                  alt="product 4"
                                />
                                <div className="product-img__tag-null" />
                                <div className="product-img__option">
                                  <div className="row">
                                    <p className="product-img__wishlist col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-heart me-2"> </em>
                                        Yêu thích
                                      </a>
                                    </p>
                                    <p className="product-img__compare col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-signal me-2" />
                                        So sánh
                                      </a>
                                    </p>
                                    <p className="product-img__zoom-in col-2 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-expand-alt" />
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <a href="/product-detail.html">
                                <h4 className="product-block__name">
                                  rượu vang đà lạt
                                </h4>
                              </a>
                              <span className="price product-block__price">
                                370.000
                              </span>
                              <span className="price product-block__original-price">
                                450.000
                              </span>
                              <br />
                              <a className="button mt-4" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="product-carousel">
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-3">
                            <div className="product-block text-center">
                              <div className="product-img">
                                <img
                                  src="./assets/images/Product/5.jpg"
                                  alt="product 1"
                                />
                                <div className="product-img__tag-null" />
                                <div className="product-img__option">
                                  <div className="row">
                                    <p className="product-img__wishlist col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-heart me-2"> </em>
                                        Yêu thích
                                      </a>
                                    </p>
                                    <p className="product-img__compare col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-signal me-2" />
                                        So sánh
                                      </a>
                                    </p>
                                    <p className="product-img__zoom-in col-2 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-expand-alt" />
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <a href="/product-detail.html">
                                <h4 className="product-block__name">
                                  rượu vang đà lạt
                                </h4>
                              </a>
                              <span className="price product-block__price">
                                370.000
                              </span>
                              <span className="price product-block__original-price">
                                450.000
                              </span>
                              <br />
                              <a className="button mt-4" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-3">
                            <div className="product-block text-center">
                              <div className="product-img">
                                <img
                                  src="./assets/images/Product/6.jpg"
                                  alt="product 2"
                                />
                                <div className="product-img__tag-null" />
                                <div className="product-img__option">
                                  <div className="row">
                                    <p className="product-img__wishlist col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-heart me-2"> </em>
                                        Yêu thích
                                      </a>
                                    </p>
                                    <p className="product-img__compare col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-signal me-2" />
                                        So sánh
                                      </a>
                                    </p>
                                    <p className="product-img__zoom-in col-2 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-expand-alt" />
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <a href="/product-detail.html">
                                <h4 className="product-block__name">
                                  rượu vang đà lạt
                                </h4>
                              </a>
                              <span className="price product-block__price">
                                370.000
                              </span>
                              <span className="price product-block__original-price">
                                450.000
                              </span>
                              <br />
                              <a className="button mt-4" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-3">
                            <div className="product-block text-center">
                              <div className="product-img">
                                <img
                                  src="./assets/images/Product/7.jpg"
                                  alt="product 3"
                                />
                                <div className="product-img__tag-null" />
                                <div className="product-img__option">
                                  <div className="row">
                                    <p className="product-img__wishlist col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-heart me-2"> </em>
                                        Yêu thích
                                      </a>
                                    </p>
                                    <p className="product-img__compare col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-signal me-2" />
                                        So sánh
                                      </a>
                                    </p>
                                    <p className="product-img__zoom-in col-2 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-expand-alt" />
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <a href="/product-detail.html">
                                <h4 className="product-block__name">
                                  rượu vang đà lạt
                                </h4>
                              </a>
                              <span className="price product-block__price">
                                370.000
                              </span>
                              <span className="price product-block__original-price">
                                450.000
                              </span>
                              <br />
                              <a className="button mt-4" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-3">
                            <div className="product-block text-center">
                              <div className="product-img">
                                <img
                                  src="./assets/images/Product/8.jpg"
                                  alt="product 4"
                                />
                                <div className="product-img__tag-null" />
                                <div className="product-img__option">
                                  <div className="row">
                                    <p className="product-img__wishlist col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-heart me-2"> </em>
                                        Yêu thích
                                      </a>
                                    </p>
                                    <p className="product-img__compare col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-signal me-2" />
                                        So sánh
                                      </a>
                                    </p>
                                    <p className="product-img__zoom-in col-2 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-expand-alt" />
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <a href="/product-detail.html">
                                <h4 className="product-block__name">
                                  rượu vang đà lạt
                                </h4>
                              </a>
                              <span className="price product-block__price">
                                370.000
                              </span>
                              <span className="price product-block__original-price">
                                450.000
                              </span>
                              <br />
                              <a className="button mt-4" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="product-carousel">
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-3">
                            <div className="product-block text-center">
                              <div className="product-img">
                                <img
                                  src="./assets/images/Product/9.jpg"
                                  alt="product 1"
                                />
                                <div className="product-img__tag-null" />
                                <div className="product-img__option">
                                  <div className="row">
                                    <p className="product-img__wishlist col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-heart me-2"> </em>
                                        Yêu thích
                                      </a>
                                    </p>
                                    <p className="product-img__compare col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-signal me-2" />
                                        So sánh
                                      </a>
                                    </p>
                                    <p className="product-img__zoom-in col-2 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-expand-alt" />
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <a href="/product-detail.html">
                                <h4 className="product-block__name">
                                  rượu vang đà lạt
                                </h4>
                              </a>
                              <span className="price product-block__price">
                                370.000
                              </span>
                              <span className="price product-block__original-price">
                                450.000
                              </span>
                              <br />
                              <a className="button mt-4" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-3">
                            <div className="product-block text-center">
                              <div className="product-img">
                                <img
                                  src="./assets/images/Product/10.jpg"
                                  alt="product 2"
                                />
                                <div className="product-img__tag-null" />
                                <div className="product-img__option">
                                  <div className="row">
                                    <p className="product-img__wishlist col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-heart me-2"> </em>
                                        Yêu thích
                                      </a>
                                    </p>
                                    <p className="product-img__compare col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-signal me-2" />
                                        So sánh
                                      </a>
                                    </p>
                                    <p className="product-img__zoom-in col-2 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-expand-alt" />
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <a href="/product-detail.html">
                                <h4 className="product-block__name">
                                  rượu vang đà lạt
                                </h4>
                              </a>
                              <span className="price product-block__price">
                                370.000
                              </span>
                              <span className="price product-block__original-price">
                                450.000
                              </span>
                              <br />
                              <a className="button mt-4" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-3">
                            <div className="product-block text-center">
                              <div className="product-img">
                                <img
                                  src="./assets/images/Product/11.jpg"
                                  alt="product 3"
                                />
                                <div className="product-img__tag-null" />
                                <div className="product-img__option">
                                  <div className="row">
                                    <p className="product-img__wishlist col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-heart me-2"> </em>
                                        Yêu thích
                                      </a>
                                    </p>
                                    <p className="product-img__compare col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-signal me-2" />
                                        So sánh
                                      </a>
                                    </p>
                                    <p className="product-img__zoom-in col-2 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-expand-alt" />
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <a href="/product-detail.html">
                                <h4 className="product-block__name">
                                  rượu vang đà lạt
                                </h4>
                              </a>
                              <span className="price product-block__price">
                                370.000
                              </span>
                              <span className="price product-block__original-price">
                                450.000
                              </span>
                              <br />
                              <a className="button mt-4" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-3">
                            <div className="product-block text-center">
                              <div className="product-img">
                                <img
                                  src="./assets/images/Product/12.jpg"
                                  alt="product 4"
                                />
                                <div className="product-img__tag-null" />
                                <div className="product-img__option">
                                  <div className="row">
                                    <p className="product-img__wishlist col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-heart me-2"> </em>
                                        Yêu thích
                                      </a>
                                    </p>
                                    <p className="product-img__compare col-5 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-signal me-2" />
                                        So sánh
                                      </a>
                                    </p>
                                    <p className="product-img__zoom-in col-2 m-0">
                                      <a className="text-center" href="#">
                                        <em className="fas fa-expand-alt" />
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <a href="/product-detail.html">
                                <h4 className="product-block__name">
                                  rượu vang đà lạt
                                </h4>
                              </a>
                              <span className="price product-block__price">
                                370.000
                              </span>
                              <span className="price product-block__original-price">
                                450.000
                              </span>
                              <br />
                              <a className="button mt-4" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev carousel-btn position-absolute top-50 start-0 translate-middle-y"
                    type="button"
                    data-bs-target="#relevantProduct"
                    data-bs-slide="prev"
                  >
                    <span className="fas fa-arrow-left" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next carousel-btn position-absolute top-50 end-0 translate-middle-y"
                    type="button"
                    data-bs-target="#relevantProduct"
                    data-bs-slide="next"
                  >
                    <span className="fas fa-arrow-right" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
