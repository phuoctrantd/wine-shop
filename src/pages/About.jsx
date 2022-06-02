import React from 'react'
import { Link } from 'react-router-dom'
import arrowunderline from "../assets/images/underline-arrow.png";
import {Helmet} from "react-helmet"
function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
  <section className="breadcrumb">
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
          <li className="breadcrumb-item">About</li>
        </ol>
      </nav>
    </div>
  </section>
  <section className="about">
    <div className="container"> 
      <div className="top-title">
        <h2 className="top-title__title">Giới thiệu</h2><img className="top-title__under" src={arrowunderline} alt="arrow title underline" />
      </div>
      <div className="about__inner mt-5">
        <div className="row gx-0 gx-lg-5">
          <div className="col-12 col-lg-5">
            <div className="about__img"> </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="about__content" />
            <h1 className="about__title">Chào mừng đến với wine hourse</h1>
            <p className="desc">Vang nổ Thăng long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang thăng long tạo cảm giác hưng phấn, êm dịu, vui tươi, sản phẩm được đóng bởi chai có dung tích là 750ml. Vang nổ Thăng long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang thăng long tạo cảm giác hưng phấn, êm dịu, vui tươi</p>
            <p className="desc">Vang nổ Thăng long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang thăng long tạo cảm giác hưng phấn, êm dịu, vui tươi, sản phẩm được đóng bởi chai có dung tích là 750ml.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default About