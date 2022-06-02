import React from "react";
import arrowunderline from "../assets/images/underline-arrow.png";
import logoyellow from "../assets/images/logo-yellow.png";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet"
function Contact() {
  return (
    <div>
      <Helmet>
        <title>Liên hệ </title>
      </Helmet>
      <section className="breadcrumb">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Liên hệ
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <div className="top-title">
            <h2 className="top-title__title">Liên hệ</h2>
            <img
              className="top-title__under"
              src={arrowunderline}
              alt="arrow title underline"
            />
          </div>
          <div className="row mt-5 gx-5">
            <div className="col-12 col-lg-8 order-2 order-lg-1 mt-5 mt-lg-0">
              <iframe
                className="w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.87351267102!2d105.80821461540238!3d21.0377464928463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab146438e693%3A0xcb7701dcb90d3314!2sT%C3%B2a%20Nh%C3%A0%20Vp%20Hanoi%20Group!5e0!3m2!1svi!2s!4v1628484681823!5m2!1svi!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
              <form className="contact__form">
                <div className="mt-5">
                  <div className="form-input form-group">
                    <div className="row">
                      <div className="col-sm-2">
                        <label
                          className="form-input__label col-form-label"
                          htmlFor="name"
                        >
                          Your Name
                        </label>
                      </div>
                      <div className="col-sm-10">
                        <input
                          className="form-input__input form-control"
                          id="name"
                          name="name"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="form-input form-group">
                    <div className="row">
                      <div className="col-sm-2">
                        <label
                          className="form-input__label col-form-label"
                          htmlFor="email"
                        >
                          Your Email
                        </label>
                      </div>
                      <div className="col-sm-10">
                        <input
                          className="form-input__input form-control"
                          id="email"
                          name="email"
                          type="email"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="form-input form-group">
                    <div className="row">
                      <div className="col-sm-2">
                        <label
                          className="form-input__label col-form-label"
                          htmlFor="suvject"
                        >
                          Subject
                        </label>
                      </div>
                      <div className="col-sm-10">
                        <input
                          className="form-input__input form-control"
                          id="suvject"
                          name="suvject"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-2">
                    <label
                      className="form-input__label col-form-label"
                      htmlFor="message"
                    >
                      Your Message
                    </label>
                  </div>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      id="message"
                      rows={10}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-10 offset-sm-2">
                    <button className="button button--lg" type="submit">
                      Gửi
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-lg-4 order-1 order-lg-2 pe-lg-5">
              <div className="contact__logo">
                <img src={logoyellow} alt="Logo image" />
              </div>
              <div className="contact__info">
                <em className="fas fa-map-marker-alt" />
                <div className="ps-5">
                  <p>
                    Tầng 4, tòa nhà Hanoi Group, số 442 Đội Cẩn, P.Cống Vị, Q.Ba
                    Đình, Hà Nội
                  </p>
                </div>
              </div>
              <div className="contact__info">
                <em className="fas fa-phone-alt" />
                <div className="ps-5">
                  <p>(04) 6674 2332</p>
                </div>
              </div>
              <div className="contact__info">
                <em className="fas fa-envelope" />
                <div className="ps-5">
                  <p>support@milano.com</p>
                </div>
              </div>
              <div className="contact__social">
                <h3>FOLLOW US:</h3>
                <nav>
                  <ul>
                    <li>
                      
                      <Link to="#">
                        <em className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      
                      <Link to="#">
                        <em className="fab fa-google-plus-g" />
                      </Link>
                    </li>
                    <li>
                      
                      <Link to="#">
                        <em className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                     
                      <Link to="#">
                        <em className="fab fa-youtube" />
                      </Link>
                    </li>
                    <li>
                      
                      <Link to="#">
                        <em className="fab fa-pinterest" />
                      </Link>
                    </li>
                    <li>
                     
                      <Link to="/">
                        <em className="fab fa-vk" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
