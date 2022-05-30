import React, { useState, useEffect } from "react";
import logoyellow from "../assets/images/logo-yellow.png";
import wineimg6 from "../assets/images/gallery-6.jpg";
import { unwrapResult } from "@reduxjs/toolkit";
import { getCategory } from "../app/category.slice";
import { path } from "../constants/path";
import { useDispatch } from "react-redux";
function Menu() {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory())
      .then(unwrapResult)
      .then((res) => {
        setCategory(res.data);
      });
  }, [dispatch]);

  return (
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
                <a className="header__nav-link" href="/product">
                  Rượu ngoại
                </a>
                <div className="mega-menu">
                  <div className="row">
                    <div className="col-12 col-xl-8">
                      <div className="row">
                        {category.map((category) => (
                          <div
                            className="mega-menu__item col-4"
                            key={category.id}
                          >
                            <ul className="mega-menu__list">
                              <li className="mega-menu__list-item">
                                <a
                                  className="mega-menu__link"
                                  href={
                                    path.product + `?category=${category.id}`
                                  }
                                >
                                  {category.sub === 0 && category.name}
                                </a>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-12 col-xl-4">
                      <img src={wineimg6} alt="Wine image" />
                    </div>
                  </div>
                </div>
              </li>

              <li className="header__nav-item">
                <a className="header__nav-link" href="/product">
                  Rượu Việt
                </a>
                <div className="mega-menu">
                  <div className="row">
                    <div className="col-12 col-xl-8">
                      <div className="row">
                        {category.map((category) => (
                          <div
                            className="mega-menu__item col-4"
                            key={category.id}
                          >
                            <ul className="mega-menu__list">
                              <li className="mega-menu__list-item">
                                <a
                                  className="mega-menu__link"
                                  href={
                                    path.product + `?category=${category.id}`
                                  }
                                >
                                  {category.sub === 1 && category.name}
                                </a>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-12 col-xl-4">
                      <img src={wineimg6} alt="Wine image" />
                    </div>
                  </div>
                </div>
              </li>

              <li className="header__nav-item">
                <a className="header__nav-link" href="/product">
                  Khác
                </a>
                <div className="mega-menu">
                  <div className="row">
                    <div className="col-12 col-xl-8">
                      <div className="row">
                        {category.map((category) => (
                          <div
                            className="mega-menu__item col-4"
                            key={category.id}
                          >
                            <ul className="mega-menu__list">
                              <li className="mega-menu__list-item">
                                <a
                                  className="mega-menu__link"
                                  href={
                                    path.product + `?category=${category.id}`
                                  }
                                >
                                  {category.sub === 2 && category.name}
                                </a>
                              </li>
                            </ul>
                          </div>
                        ))}
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
  );
}

export default Menu;
