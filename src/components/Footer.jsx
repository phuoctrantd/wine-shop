import React from "react";

import imgbrand1 from "../assets/images/brand-1.jpg";
import imgbrand2 from "../assets/images/brand-1.jpg";
import imgbrand3 from "../assets/images/brand-1.jpg";
import imgpayment from "../assets/images/payment.jpg";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brand">
          <div className="row">
            <div className="footer__brand-img col-md-4">
              {" "}
              <img src={imgbrand1} alt="Authentic brand" />
            </div>
            <div className="footer__brand-img col-md-4">
              {" "}
              <img src={imgbrand2} alt="Retrobrand" />
            </div>
            <div className="footer__brand-img col-md-4">
              {" "}
              <img src={imgbrand3} alt="Bearbrand" />
            </div>
          </div>
        </div>
        <div className="footer__menu">
          <div className="row">
            <div className="col-6 col-lg-2">
              <div className="footer__menu-inner">
                <h3 className="footer__menu-title">Thông tin</h3>
                <nav className="footer__menu-content">
                  <ul className="footer__menu-list">
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        Về chúng tôi
                      </a>
                    </li>
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        Giao hàng
                      </a>
                    </li>
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        Cảm nghĩ
                      </a>
                    </li>
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        Lưu trữ
                      </a>
                    </li>
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        Chính sách riêng tư
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="footer__menu-inner">
                <h3 className="footer__menu-title">Mua hàng</h3>
                <nav className="footer__menu-content">
                  <ul className="footer__menu-list">
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        Vận chuyển và trả hàng
                      </a>
                    </li>
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        Mua hàng an toàn
                      </a>
                    </li>
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        Vận chuyển quốc tế
                      </a>
                    </li>
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        Liên kết
                      </a>
                    </li>
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        Dịch vụ giảm giá
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="footer__menu-inner">
                <h3 className="footer__menu-title">Gửi email</h3>
                <div className="footer__menu-content">
                  <p>Gửi email cho chúng tôi</p>
                  <form className="input-group">
                    <input
                      className="footer__menu-input form-control"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <button className="btn button button--arrow">Gửi</button>
                  </form>
                  <div className="footer__menu-social">
                    <a href="https://twitter.com/">
                      <em className="fab fa-twitter" />
                    </a>
                    <a href="https://www.google.com/">
                      <em className="fab fa-google" />
                    </a>
                    <a href="https://dribbble.com/">
                      <em className="fab fa-dribbble" />
                    </a>
                    <a href="https://www.linkedin.com/">
                      <em className="fab fa-linkedin-in" />
                    </a>
                    <a href="https://www.instagram.com/">
                      <em className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="footer__menu-inner">
                <h3 className="footer__menu-title">Liên hệ</h3>
                <div className="footer__menu-content">
                  <p className="footer__menu-address">
                    <em className="fas fa-map-marker-alt" />
                    <span className="ms-2">
                      Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn, P. Cống Vị, Q.
                      Ba Đình, Hà Nội
                    </span>
                  </p>
                  <div className="row">
                    <div className="col-6 mb-3">
                      <span className="footer__menu-advise">
                        <em className="fas fa-phone-alt" />
                        <span className="ms-2">(04) 6674 2332</span>
                      </span>
                    </div>
                    <div className="col-6 mb-3">
                      <span className="footer__menu-advise">
                        <em className="fas fa-phone-alt" />
                        <span className="ms-2">(04) 3786 8904</span>
                      </span>
                    </div>
                    <div className="col-6 mb-3">
                      <span className="footer__menu-advise">
                        <em className="fas fa-phone-alt" />
                        <span className="ms-2">(08) 6680 9686</span>
                      </span>
                    </div>
                    <div className="col-6 mb-3">
                      <span className="footer__menu-advise">
                        <em className="fas fa-envelope" />
                        <span className="ms-2 fst-italic text-warning">
                          Support@bizweb.vn
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="footer__bottom">
          <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
            <span>© Copyright 2008-2014 DKT Technology JSC</span>
            <img
              className="px-5 py-3"
              src={imgpayment}
              alt="payment method image"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
