import React from "react";
import "../assets/css/style.css";
import introbgleft from "../assets/images/intro-bg-left.jpg";
import toptitle from "../assets/images/underline-special.png";
import introbgright from "../assets/images/intro-bg-right.jpg";
import underlinespecial from "../assets/images/underline-special.png";
import blog1 from "../assets/images/blog-1.jpg";
import quote from "../assets/images/quote.png";
import avt1 from "../assets/images/customer-avatar-1.jpg";
import avt2 from "../assets/images/customer-avatar-2.jpg";
import avt3 from "../assets/images/customer-avatar-3.jpg";
import ProductOther from "../components/ProductOther";
import Gallery from "../components/Gallery";
import TopProduct from "../components/TopProduct";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="header__carousel d-none d-sm-block"></section>
      <section className="intro">
        <img className="intro__bg-left" src={introbgleft} />
        <img className="intro__bg-right" src={introbgright} />
        <div className="intro__content">
          <div className="container text-center">
            <div className="top-title top-title--special text-center">
              <h2 className="top-title__title">Giới thiệu</h2>
              <img
                className="top-title__under"
                src={toptitle}
                alt="special title underline"
              />
            </div>
            <p className="intro__desc">
            RƯỢU NHẬP KHẨU, trang website sản phẩm thuộc CÔNG TY TNHH HẦM RƯỢU VIỆT NAM, tự hào là doanh nghiệp nhập khẩu và phân phối rượu vang hàng đầu Việt Nam, với hơn 1000 sản phẩm rượu vang, bia, ly pha lê cao cấp Riedel và phụ kiện rượu vang nhập khẩu chính hãng. Chúng tôi không ngừng mở rộng quan hệ hợp tác với các nhà sản xuất uy tín trên thế giới để cung cấp những sản phẩm đa dạng, chất lượng cao, ở mọi mức giá đáp ứng nhu cầu tiêu dùng của khách hàng trên toàn quốc.
            </p>
            <Link className="button" to="/about">
              Xem thêm
            </Link>
          </div>
        </div>
      </section>
     <TopProduct></TopProduct>
      {/* productnew */}
      <section className="new-product">
        <div className="container">
          <div className="top-title top-title--special text-center">
            <h2 className="top-title__title">Sản phẩm mới</h2>
            <img
              className="top-title__under"
              src={underlinespecial}
              alt="special title underline"
            />
          </div>
          <ProductOther></ProductOther>
        </div>
      </section>
      {/* endproduct-new  */}

      {/* gallery */}
      <Gallery></Gallery>

      {/* end gallery */}

      {/* blog */}
      <section className="blog-customer">
        <div className="container">
          <div className="row gx-0 gx-md-5">
            <div className="col-12 col-md-6 col-lg-8">
              <div className="blogCard-container">
                <div className="top-title top-title--special text-center">
                  <h2 className="top-title__title">Tin tức &amp; Blog</h2>
                  <img
                    className="top-title__under"
                    src={underlinespecial}
                    alt="special title underline"
                  />
                </div>
                <div className="row mt-5">
                  <div className="col-lg-6 mt-3">
                    <article className="blogCard">
                      <div className="blogCard__img">
                        <img src={blog1} alt="blog image 1" />
                        <div className="blogCard__overlay" />
                      </div>
                      <div className="blogCard__content">
                        <h2 className="blogCard__title">
                          Vang Thăng Long classic
                        </h2>
                        <p className="blogCard__info">
                          Đăng bởi Giangle | 30/06/2015 | 60 bình luận
                        </p>
                        <p className="blogCard__desc text-justify">
                          Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm
                          lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga
                          đầy trắng mịn. Vang Nổ thăng long tạo cảm giác hương
                          phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung
                          tích 750m ...
                        </p>
                        <a href="/blog-detail.html">Read more</a>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-6 mt-3">
                    <article className="blogCard">
                      <div className="blogCard__img">
                        <img src={blog1} alt="blog image 2" />
                        <div className="blogCard__overlay" />
                      </div>
                      <div className="blogCard__content">
                        <h2 className="blogCard__title">
                          Vang Thăng Long classic
                        </h2>
                        <p className="blogCard__info">
                          Đăng bởi Giangle | 30/06/2015 | 60 bình luận
                        </p>
                        <p className="blogCard__desc text-justify">
                          Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm
                          lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga
                          đầy trắng mịn. Vang Nổ thăng long ...
                        </p>
                        <a href="/blog-detail.html">Read more</a>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="customerReview-container">
                <div className="top-title top-title--special text-center">
                  <h2 className="top-title__title">Khách hàng</h2>
                  <img
                    className="top-title__under"
                    src={underlinespecial}
                    alt="special title underline"
                  />
                </div>
                <div
                  className="carousel slide"
                  id="customerReview"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      className="active"
                      type="button"
                      data-bs-target="#customerReview"
                      data-bs-slide-to={0}
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#customerReview"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                    <button
                      type="button"
                      data-bs-target="#customerReview"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="review-carousel text-center mt-4">
                        <img className="mt-3" src={quote} alt="quote" />
                        <p className="customerReview__desc text-center">
                          Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm
                          lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga
                          đầy trắng mịn, Vang nổ đỏ Thăng Long...
                        </p>
                        <a className="text-center d-block" href="#">
                          Read more
                        </a>
                        <div className="customerReview__avatar">
                          <img src={avt1} alt="customer avatar 1" />
                        </div>
                        <h4 className="customerReview__name mb-0">GIANG LT</h4>
                        <span className="customerReview__job">
                          Graphic design
                        </span>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="review-carousel text-center mt-4">
                        <img className="mt-3" src={quote} alt="quote" />
                        <p className="customerReview__desc text-center">
                          Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm
                          lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga
                          đầy trắng mịn, Vang nổ đỏ Thăng Long...
                        </p>
                        <a className="text-center d-block" href="#">
                          Read more
                        </a>
                        <div className="customerReview__avatar">
                          <img src={avt2} alt="customer avatar 2" />
                        </div>
                        <h4 className="customerReview__name mb-0">GIANG LT</h4>
                        <span className="customerReview__job">
                          Graphic design
                        </span>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="review-carousel text-center mt-4">
                        <img className="mt-3" src={quote} alt="quote" />
                        <p className="customerReview__desc text-center">
                          Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm
                          lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga
                          đầy trắng mịn, Vang nổ đỏ Thăng Long...
                        </p>
                        <a className="text-center d-block" href="#">
                          Read more
                        </a>
                        <div className="customerReview__avatar">
                          <img src={avt3} alt="customer avatar 3" />
                        </div>
                        <h4 className="customerReview__name mb-0">GIANG LT</h4>
                        <span className="customerReview__job">
                          Graphic design
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //   end-blog */}
      {/* popup */}
      {/* <section className="popup"> 
          <input className="popup__close" id="popupClose" type="checkbox" />
          <div className="popup__container">
            <div className="popup__block">
              <label className="close-icon" htmlFor="popupClose" />
              <div className="row">
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="popup__img"><img src="./assets/images/pop-up-wine.png" alt="pop up image" /></div>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="popup__content">
                    <h2>Gửi email </h2>
                    <p>Đăng ký Email ngay hôm nay để được thông tin về các sự kiện, các chương trình giảm giá của chúng tôi sớm nhất!</p>
                    <form className="flex-row w-100">
                      <div className="input-group mt-4">
                        <input className="form-control px-5 flex-fill fs-4" type="email" placeholder="Email của bạn" />
                        <button className="btn button p-3">Gửi email</button>
                      </div>
                      <div className="form-check mt-4">
                        <input className="form-check-input" id="popupCheck" type="checkbox" />
                        <label className="form-check-label ms-2" htmlFor="popupCheck">Không hiển thị lại thông báo này</label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      {/* end-popup */}
    </div>
  );
}

export default Home;
