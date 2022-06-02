import React from "react";
import { Link } from "react-router-dom";
import slideimg from "../assets/images/slide-1.jpg";
import slideimg1 from "../assets/images/slide-2.jpg";
import slideimg2 from "../assets/images/slide-3.jpg";
import Menu from "./Menu";

function HeaderHome() {
  return (
    <>
      <header className="header">
        <div className="header__top d-flex align-items-center">
          <div className="container">
            <nav className="header__menu d-flex justify-content-between align-items-center">
              <ul className="header__top-list">
                
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
                  <Link className="header__top-link" to={"/cart"}>
                    Giỏ hàng
                  </Link>
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
                    src={slideimg1}
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
                    src={slideimg2}
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

        <Menu></Menu>
      </header>
    </>
  );
}

export default HeaderHome;
