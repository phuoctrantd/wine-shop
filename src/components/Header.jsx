import React from "react";
import logoyellow from "../assets/images/logo-yellow.png";
import wineimg6 from "../assets/images/gallery-6.jpg";
import slideimg from "../assets/images/slide-1.jpg";
function Header() {
  return (
    <>
      <header className="header">
        <div className="header__top d-flex align-items-center">
          <div className="container">
            <nav className="header__menu d-flex justify-content-between align-items-center">
              <ul className="header__top-list">
                <li className="header__top-item">
                  <a className="header__top-link" href="#!">
                    Tài khoản của tôi
                  </a>
                </li>
                <li className="header__top-item">
                  <a className="header__top-link" href="/order-list.html">
                    Trạng thái đơn hàng
                  </a>
                </li>
                <li className="header__top-item">
                  <a className="header__top-link" href="#!">
                    Danh sách ưu thích
                  </a>
                </li>
                <li className="header__top-item">
                  <a className="header__top-link" href="/cart.html">
                    Giỏ hàng
                  </a>
                </li>
                <li className="header__top-item">
                  <a className="header__top-link active" href="/login.html">
                    Đăng nhập
                  </a>
                </li>
                <li className="header__top-item">
                  <a className="header__top-link" href="/register.html">
                    Đăng ký
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="bg-transparent form-control me-2 py-0"
                  type="search"
                  placeholder="Tìm kiếm ở đây..."
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <em className="fas fa-search" />
                </button>
              </form>
            </nav>
          </div>
        </div>
        {/* slide */}
        
        <section className="header__carousel d-none d-sm-block">
          <div
            className="carousel slide"
            id="headerCarousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                className="active"
                type="button"
                data-bs-target="#headerCarousel"
                data-bs-slide-to={0}
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#headerCarousel"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#headerCarousel"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="header__carousel-container">
                  <img
                    className="header__carousel-img"
                    src={slideimg}
                    alt="Vang Đỏ"
                  />
                  <div className="header__carousel-content">
                    <h2 className="header__carousel-title">
                      Rượu
                      <span className="header__carousel-year">Since 1980</span>
                      <span className="header__carousel-subtitle">Vang Đỏ</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="header__carousel-container">
                  <img
                    className="header__carousel-img"
                    src={slideimg}
                    alt="Vang Trắng"
                  />
                  <div className="header__carousel-content">
                    <h2 className="header__carousel-title">
                      Rượu
                      <span className="header__carousel-year">Since 1980</span>
                      <span className="header__carousel-subtitle">
                        Vang Trắng
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="header__carousel-container">
                  <img
                    className="header__carousel-img"
                    src={slideimg}
                    alt="Champagne"
                  />
                  <div className="header__carousel-content">
                    <h2 className="header__carousel-title">
                      Rượu
                      <span className="header__carousel-year">Since 1980</span>
                      <span className="header__carousel-subtitle">
                        Champagne
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* end-slide */}

        <div className="header__nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="header__nav-logo" href="/">
                <img src={logoyellow} alt="Brand logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="header__nav-list w-100 d-lg-flex justify-content-between">
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="/">
                      Trang chủ
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="/product.html">
                      Rượu vang đỏ
                    </a>
                    <div className="mega-menu">
                      <div className="row">
                        <div className="col-12 col-xl-8">
                          <div className="row">
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Ngoại</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Chivas
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Hàng độc - Rượu độc đáo
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Johnnie Walker
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Whisky
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Remy Martin
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Glenmorangie
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Vang</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Chivas
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Hàng độc - Rượu độc đáo
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Johnnie Walker
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Whisky
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Remy Martin
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Glenmorangie
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Ngoại</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Chivas
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Hàng độc - Rượu độc đáo
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Johnnie Walker
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Whisky
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Remy Martin
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Glenmorangie
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-4">
                          <img src={wineimg6} alt="Wine image" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      Rượu trắng
                    </a>
                    <div className="mega-menu">
                      <div className="row">
                        <div className="col-12 col-xl-8">
                          <div className="row">
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Ngoại</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Chivas
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Hàng độc - Rượu độc đáo
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Johnnie Walker
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Whisky
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Remy Martin
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Glenmorangie
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Vang</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Chivas
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Hàng độc - Rượu độc đáo
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Johnnie Walker
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Whisky
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Remy Martin
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Glenmorangie
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Ngoại</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Chivas
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Hàng độc - Rượu độc đáo
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Johnnie Walker
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Whisky
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Remy Martin
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Glenmorangie
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-4">
                          <img src={wineimg6} alt="Wine image" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      Champagne
                    </a>
                    <div className="mega-menu">
                      <div className="row">
                        <div className="col-12 col-xl-8">
                          <div className="row">
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Ngoại</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Chivas
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Hàng độc - Rượu độc đáo
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Johnnie Walker
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Whisky
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Remy Martin
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Glenmorangie
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Vang</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Chivas
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Hàng độc - Rượu độc đáo
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Johnnie Walker
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Whisky
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Remy Martin
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Glenmorangie
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Ngoại</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Chivas
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Hàng độc - Rượu độc đáo
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Johnnie Walker
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Whisky
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Remy Martin
                                  </a>
                                </li>
                                <li className="mega-menu__list-item">
                                  <a className="mega-menu__link" href="#">
                                    Rượu Glenmorangie
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-4">
                          <img src={wineimg6} alt="Wine image" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="/about.html">
                      Thông tin
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="/blog.html">
                      Blog
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="/contact.html">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
