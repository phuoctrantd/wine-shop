import React from 'react'
import '../assets/css/style.css'
import logoyellow from '../assets/images/logo-yellow.png'
import wineimg6 from '../assets/images/gallery-6.jpg'
function Header() {
    
  return (
      <>
    
    <header className="header">
        
        <div className="header__top d-flex align-items-center">
          <div className="container">
            <nav className="header__menu d-flex justify-content-between align-items-center">
              <ul className="header__top-list">
                <li className="header__top-item"><a className="header__top-link" href="#!">Tài khoản của tôi</a></li>
                <li className="header__top-item"><a className="header__top-link" href="/order-list.html">Trạng thái đơn hàng</a></li>
                <li className="header__top-item"><a className="header__top-link" href="#!">Danh sách ưu thích</a></li>
                <li className="header__top-item"><a className="header__top-link" href="/cart.html">Giỏ hàng</a></li>
                <li className="header__top-item"><a className="header__top-link active" href="/login.html">Đăng nhập</a></li>
                <li className="header__top-item"><a className="header__top-link" href="/register.html">Đăng ký</a></li>
              </ul>
              <form className="d-flex">
                <input className="bg-transparent form-control me-2 py-0" type="search" placeholder="Tìm kiếm ở đây..." aria-label="Search" />
                <button className="btn" type="submit"><em className="fas fa-search" /></button>
              </form>
            </nav>
          </div>
        </div>
        <div className="header__nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark"><a className="header__nav-logo" href="/"><img src={logoyellow} alt="Brand logo" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="header__nav-list w-100 d-lg-flex justify-content-between">
                  <li className="header__nav-item"><a className="header__nav-link" href="/">Trang chủ</a>
                  </li>
                  <li className="header__nav-item"><a className="header__nav-link" href="/product.html">Rượu vang đỏ</a>
                    <div className="mega-menu">
                      <div className="row">
                        <div className="col-12 col-xl-8"> 
                          <div className="row"> 
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Ngoại</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Chivas</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Hàng độc - Rượu độc đáo</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Johnnie Walker</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Whisky</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Remy Martin</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Glenmorangie</a></li>
                              </ul>
                            </div>
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Vang</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Chivas</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Hàng độc - Rượu độc đáo</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Johnnie Walker</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Whisky</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Remy Martin</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Glenmorangie</a></li>
                              </ul>
                            </div>
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Ngoại</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Chivas</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Hàng độc - Rượu độc đáo</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Johnnie Walker</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Whisky</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Remy Martin</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Glenmorangie</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-4"><img src={wineimg6} alt="Wine image" /></div>
                      </div>
                    </div>
                  </li>
                  <li className="header__nav-item"><a className="header__nav-link" href="#">Rượu trắng</a>
                    <div className="mega-menu">
                      <div className="row">
                        <div className="col-12 col-xl-8"> 
                          <div className="row"> 
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Ngoại</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Chivas</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Hàng độc - Rượu độc đáo</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Johnnie Walker</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Whisky</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Remy Martin</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Glenmorangie</a></li>
                              </ul>
                            </div>
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Vang</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Chivas</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Hàng độc - Rượu độc đáo</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Johnnie Walker</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Whisky</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Remy Martin</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Glenmorangie</a></li>
                              </ul>
                            </div>
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Ngoại</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Chivas</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Hàng độc - Rượu độc đáo</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Johnnie Walker</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Whisky</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Remy Martin</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Glenmorangie</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-4"><img src={wineimg6} alt="Wine image" /></div>
                      </div>
                    </div>
                  </li>
                  <li className="header__nav-item"><a className="header__nav-link" href="#">Champagne</a>
                    <div className="mega-menu">
                      <div className="row">
                        <div className="col-12 col-xl-8"> 
                          <div className="row"> 
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Ngoại</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Chivas</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Hàng độc - Rượu độc đáo</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Johnnie Walker</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Whisky</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Remy Martin</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Glenmorangie</a></li>
                              </ul>
                            </div>
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Vang</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Chivas</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Hàng độc - Rượu độc đáo</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Johnnie Walker</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Whisky</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Remy Martin</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Glenmorangie</a></li>
                              </ul>
                            </div>
                            <div className="mega-menu__item col-4">
                              <h3>Rượu Ngoại</h3>
                              <ul className="mega-menu__list">
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Chivas</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Hàng độc - Rượu độc đáo</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Johnnie Walker</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Whisky</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Remy Martin</a></li>
                                <li className="mega-menu__list-item"><a className="mega-menu__link" href="#">Rượu Glenmorangie</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-4"><img src={wineimg6} alt="Wine image" /></div>
                      </div>
                    </div>
                  </li>
                  <li className="header__nav-item"><a className="header__nav-link" href="/about.html">Thông tin</a>
                  </li>
                  <li className="header__nav-item"><a className="header__nav-link" href="/blog.html">Blog</a>
                  </li>
                  <li className="header__nav-item"><a className="header__nav-link" href="/contact.html">Liên hệ</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      </>
  )
}

export default Header