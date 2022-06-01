import React from "react";
import "../assets/css/style.css";
import introbgleft from "../assets/images/intro-bg-left.jpg";
import toptitle from "../assets/images/underline-special.png";
import introbgright from "../assets/images/intro-bg-right.jpg";
import underlinespecial from "../assets/images/underline-special.png";
import ProductOther from "../components/ProductOther";
import Gallery from "../components/Gallery";
import TopProduct from "../components/TopProduct";
import { Link } from "react-router-dom";
import CustomerReview from "../components/CustomerReview";
import BlogHome from "../components/BlogHome";

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
              RƯỢU NHẬP KHẨU, trang website sản phẩm thuộc CÔNG TY TNHH HẦM RƯỢU
              VIỆT NAM, tự hào là doanh nghiệp nhập khẩu và phân phối rượu vang
              hàng đầu Việt Nam, với hơn 1000 sản phẩm rượu vang, bia, ly pha lê
              cao cấp Riedel và phụ kiện rượu vang nhập khẩu chính hãng. Chúng
              tôi không ngừng mở rộng quan hệ hợp tác với các nhà sản xuất uy
              tín trên thế giới để cung cấp những sản phẩm đa dạng, chất lượng
              cao, ở mọi mức giá đáp ứng nhu cầu tiêu dùng của khách hàng trên
              toàn quốc.
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
              <BlogHome></BlogHome>
            </div>

            <CustomerReview></CustomerReview>
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
