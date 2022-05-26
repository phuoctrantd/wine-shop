import React from 'react'
import '../assets/css/style.css'
import introbgleft from '../assets/images/intro-bg-left.jpg'
import toptitle from '../assets/images/underline-special.png'
import introbgright from '../assets/images/intro-bg-right.jpg'
import topproduct from '../assets/images/top-product.jpg'
import arrowunderline from '../assets/images/underline-arrow.png'
import underlinespecial from '../assets/images/underline-special.png'
import imgproduct from '../assets/images/Product/1.jpg'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'
import gallery5 from '../assets/images/gallery-5.jpg'
import gallery6 from '../assets/images/gallery-6.jpg'
import gallery7 from '../assets/images/gallery-7.jpg'
import gallery8 from '../assets/images/gallery-8.jpg'
import blog1 from '../assets/images/blog-1.jpg'
import quote from '../assets/images/quote.png'
import avt1 from '../assets/images/customer-avatar-1.jpg'
import avt2 from '../assets/images/customer-avatar-2.jpg'
import avt3 from '../assets/images/customer-avatar-3.jpg'


function Home() {
  return (
    <div>
        {/* <section className="header__carousel d-none d-sm-block">
            <div className="carousel slide" id="headerCarousel" data-bs-ride="carousel"> 
            <div className="carousel-indicators">
                <button className="active" type="button" data-bs-target="#headerCarousel" data-bs-slide-to={0} aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#headerCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#headerCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="header__carousel-container"><img className="header__carousel-img" src="./assets/images/slide-1.jpg" alt="Vang Đỏ" />
                    <div className="header__carousel-content">
                    <h2 className="header__carousel-title">Rượu<span className="header__carousel-year">Since 1980</span><span className="header__carousel-subtitle">Vang Đỏ</span></h2>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="header__carousel-container"><img className="header__carousel-img" src="./assets/images/slide-2.jpg" alt="Vang Trắng" />
                    <div className="header__carousel-content">
                    <h2 className="header__carousel-title">Rượu<span className="header__carousel-year">Since 1980</span><span className="header__carousel-subtitle">Vang Trắng</span></h2>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="header__carousel-container"><img className="header__carousel-img" src="./assets/images/slide-3.jpg" alt="Champagne" />
                    <div className="header__carousel-content">
                    <h2 className="header__carousel-title">Rượu<span className="header__carousel-year">Since 1980</span><span className="header__carousel-subtitle">Champagne</span></h2>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section> */}
        <section className="intro"><img className="intro__bg-left" src={introbgleft} /><img className="intro__bg-right" src={introbgright} />
          <div className="intro__content">
            <div className="container text-center">
              <div className="top-title top-title--special text-center">
                <h2 className="top-title__title">Giới thiệu</h2><img className="top-title__under" src={toptitle} alt="special title underline" />
              </div>
              <p className="intro__desc">Mriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui faciteorum claritatem Investigtiones demonstraverunt lectores legere me lius quod ii legunt saepius.Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putam</p><a className="button" href="/about.html">Xem thêm</a>
            </div>
          </div>
        </section>
        <section className="top-product">
          <div className="container">
            <div className="top-product__bg">
              <div className="top-product__block">
                <div className="row">
                  <div className="col-md-8">
                    <div className="product-img"><img src={topproduct} />
                      <div className="product-img__tag-sale" />
                      <div className="product-img__option">
                        <div className="row">
                          <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                          <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                          <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="top-product__content col-md-4">
                    <div className="top-title">
                      <h2 className="top-title__title">Rượu nho năm 1a987</h2><img className="top-title__under" src={arrowunderline} alt="arrow title underline" />
                    </div><span className="price price--large">330.000</span><br /><a className="button" href="#!">Add to cart</a>
                    <p className="top-product__desc">Một hợp chất có trong rượu vang gọi là Resveratro có khả năng làm tăng tối đa tuổi thọ. Resveratro confcos khả năng ngăn chặn mật độ oxy hóa của protein béo.</p>
                    <div className="countdown">
                      <div className="row g-0">
                        <div className="col-6">
                          <div className="countdown__item text-center"><span className="countdown__number">334</span><br /><span className="countdown__format">Ngày</span></div>
                        </div>
                        <div className="col-6">
                          <div className="countdown__item text-center"><span className="countdown__number">26</span><br /><span className="countdown__format">Giờ</span></div>
                        </div>
                        <div className="col-6">
                          <div className="countdown__item text-center"><span className="countdown__number">60</span><br /><span className="countdown__format">Phút</span></div>
                        </div>
                        <div className="col-6">
                          <div className="countdown__item text-center"><span className="countdown__number">15</span><br /><span className="countdown__format">Giây</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="new-product">
          <div className="container">
            <div className="top-title top-title--special text-center">
              <h2 className="top-title__title">Sản phẩm mới</h2><img className="top-title__under" src={underlinespecial} alt="special title underline" />
            </div>
            <div className="carousel slide" id="newProduct" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button className="active" type="button" data-bs-target="#newProduct" data-bs-slide-to={0} aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#newProduct" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#newProduct" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="product-carousel">
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src={imgproduct} alt="product 1" />
                            <div className="product-img__tag-sale" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src={imgproduct} alt="product 2" />
                            <div className="product-img__tag-new" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src={imgproduct} alt="product 3" />
                            <div className="product-img__tag-hot" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src={imgproduct} alt="product 4" />
                            <div className="product-img__tag-null" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
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
                          <div className="product-img"><img src={imgproduct} alt="product 1" />
                            <div className="product-img__tag-sale" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src={imgproduct} alt="product 2" />
                            <div className="product-img__tag-new" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src={imgproduct} alt="product 3" />
                            <div className="product-img__tag-hot" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src={imgproduct} alt="product 4" />
                            <div className="product-img__tag-null" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev carousel-btn position-absolute top-50 start-0 translate-middle-y" type="button" data-bs-target="#newProduct" data-bs-slide="prev"><span className="fas fa-arrow-left" aria-hidden="true" /><span className="visually-hidden">Previous</span></button>
              <button className="carousel-control-next carousel-btn position-absolute top-50 end-0 translate-middle-y" type="button" data-bs-target="#newProduct" data-bs-slide="next"><span className="fas fa-arrow-right" aria-hidden="true" /><span className="visually-hidden">Next</span></button>
            </div>
          </div>
        </section>

   {/* gallery */}
        <section className="gallery">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                <div className="gallery__img"  style={{background: `url(${gallery1}) center center / cover no-repeat`}}>
                  <div className="gallery__content text-center"><span>1987</span>
                    <h2>Rượu</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                <div className="gallery__img"  style={{background: `url(${gallery2}) center center / cover no-repeat`}} >
                  <div className="gallery__content text-center"><span>1969</span>
                    <h2>Rượu</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                <div className="gallery__img" style={{background: `url(${gallery3}) center center / cover no-repeat`}}>
                  <div className="gallery__content text-center"><span>1982</span>
                    <h2>Rượu</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                <div className="gallery__img" style={{background: `url(${gallery4}) center center / cover no-repeat`}}>
                  <div className="gallery__content text-center"><span>1973</span>
                    <h2>Rượu</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                <div className="gallery__img" style={{background: `url(${gallery5}) center center / cover no-repeat`}}>
                  <div className="gallery__content text-center"><span>1956</span>
                    <h2>Rượu</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                <div className="gallery__img" style={{background: `url(${gallery6}) center center / cover no-repeat`}}>
                  <div className="gallery__content text-center"><span>1999</span>
                    <h2>Rượu</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                <div className="gallery__img" style={{background: `url(${gallery7}) center center / cover no-repeat`}}>
                  <div className="gallery__content text-center"><span>1940</span>
                    <h2>Rượu</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                <div className="gallery__img" style={{background: `url(${gallery8}) center center / cover no-repeat`}}>
                  <div className="gallery__content text-center"><span>1952</span>
                    <h2>Rượu</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end gallery */}

        {/* product-hot */}
        {/* <section className="hot-product"> 
          <div className="container">
            <div className="top-title top-title--special text-center">
              <h2 className="top-title__title">Sản phẩm bán chạy</h2><img className="top-title__under" src="./assets/images/underline-special.png" alt="special title underline" />
            </div>
            <div className="carousel slide" id="hotProduct" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button className="active" type="button" data-bs-target="#hotProduct" data-bs-slide-to={0} aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#hotProduct" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#hotProduct" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="product-carousel">
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src="./assets/images/Product/14.jpg" alt="product 1" />
                            <div className="product-img__tag-sale" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src="./assets/images/Product/13.jpg" alt="product 2" />
                            <div className="product-img__tag-new" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src="./assets/images/Product/12.jpg" alt="product 3" />
                            <div className="product-img__tag-hot" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src="./assets/images/Product/11.jpg" alt="product 4" />
                            <div className="product-img__tag-null" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
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
                          <div className="product-img"><img src="./assets/images/Product/10.jpg" alt="product 1" />
                            <div className="product-img__tag-sale" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src="./assets/images/Product/9.jpg" alt="product 2" />
                            <div className="product-img__tag-new" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src="./assets/images/Product/8.jpg" alt="product 3" />
                            <div className="product-img__tag-hot" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src="./assets/images/Product/7.jpg" alt="product 4" />
                            <div className="product-img__tag-null" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
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
                          <div className="product-img"><img src="./assets/images/Product/6.jpg" alt="product 1" />
                            <div className="product-img__tag-sale" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src="./assets/images/Product/5.jpg" alt="product 2" />
                            <div className="product-img__tag-new" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src="./assets/images/Product/4.jpg" alt="product 3" />
                            <div className="product-img__tag-hot" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="product-block text-center">
                          <div className="product-img"><img src="./assets/images/Product/3.jpg" alt="product 4" />
                            <div className="product-img__tag-null" />
                            <div className="product-img__option">
                              <div className="row">
                                <p className="product-img__wishlist col-5 m-0"><a className="text-center" href="#"><em className="fas fa-heart me-2"> </em>Yêu thích</a></p>
                                <p className="product-img__compare col-5 m-0"><a className="text-center" href="#"><em className="fas fa-signal me-2" />So sánh</a></p>
                                <p className="product-img__zoom-in col-2 m-0"><a className="text-center" href="#"><em className="fas fa-expand-alt" /></a></p>
                              </div>
                            </div>
                          </div><a href="/product-detail.html">
                            <h4 className="product-block__name">rượu vang đà lạt</h4></a><span className="price product-block__price">370.000</span><span className="price product-block__original-price">450.000</span><br /><a className="button mt-4" href="#">Add to cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev carousel-btn position-absolute top-50 start-0 translate-middle-y" type="button" data-bs-target="#hotProduct" data-bs-slide="prev"><span className="fas fa-arrow-left" aria-hidden="true" /><span className="visually-hidden">Previous</span></button>
              <button className="carousel-control-next carousel-btn position-absolute top-50 end-0 translate-middle-y" type="button" data-bs-target="#hotProduct" data-bs-slide="next"><span className="fas fa-arrow-right" aria-hidden="true" /><span className="visually-hidden">Next</span></button>
            </div>
          </div>
        </section> */}
    {/* end-product-hot */}

    {/* blog */}
        <section className="blog-customer">
          <div className="container"> 
            <div className="row gx-0 gx-md-5">
              <div className="col-12 col-md-6 col-lg-8">
                <div className="blogCard-container"> 
                  <div className="top-title top-title--special text-center">
                    <h2 className="top-title__title">Tin tức &amp; Blog</h2><img className="top-title__under" src={underlinespecial} alt="special title underline" />
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-6 mt-3">
                      <article className="blogCard">
                        <div className="blogCard__img"><img src={blog1} alt="blog image 1" />
                          <div className="blogCard__overlay" />
                        </div>
                        <div className="blogCard__content">
                          <h2 className="blogCard__title">Vang Thăng Long classic</h2>
                          <p className="blogCard__info">Đăng bởi Giangle | 30/06/2015 | 60 bình luận</p>
                          <p className="blogCard__desc text-justify">Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích 750m ...</p><a href="/blog-detail.html">Read more</a>
                        </div>
                      </article>
                    </div>
                    <div className="col-lg-6 mt-3">
                      <article className="blogCard">
                        <div className="blogCard__img"><img src={blog1} alt="blog image 2" />
                          <div className="blogCard__overlay" />
                        </div>
                        <div className="blogCard__content">
                          <h2 className="blogCard__title">Vang Thăng Long classic</h2>
                          <p className="blogCard__info">Đăng bởi Giangle | 30/06/2015 | 60 bình luận</p>
                          <p className="blogCard__desc text-justify">Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long ...</p><a href="/blog-detail.html">Read more</a>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="customerReview-container"> 
                  <div className="top-title top-title--special text-center">
                    <h2 className="top-title__title">Khách hàng</h2><img className="top-title__under" src={underlinespecial} alt="special title underline" />
                  </div>
                  <div className="carousel slide" id="customerReview" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button className="active" type="button" data-bs-target="#customerReview" data-bs-slide-to={0} aria-current="true" aria-label="Slide 1" />
                      <button type="button" data-bs-target="#customerReview" data-bs-slide-to={1} aria-label="Slide 2" />
                      <button type="button" data-bs-target="#customerReview" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="review-carousel text-center mt-4"><img className="mt-3" src={quote} alt="quote" />
                          <p className="customerReview__desc text-center">Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên  từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn, Vang nổ đỏ Thăng Long...</p><a className="text-center d-block" href="#">Read more</a>
                          <div className="customerReview__avatar"><img src={avt1} alt="customer avatar 1" /></div>
                          <h4 className="customerReview__name mb-0">GIANG LT</h4><span className="customerReview__job">Graphic design</span>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="review-carousel text-center mt-4"><img className="mt-3" src={quote} alt="quote" />
                          <p className="customerReview__desc text-center">Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên  từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn, Vang nổ đỏ Thăng Long...</p><a className="text-center d-block" href="#">Read more</a>
                          <div className="customerReview__avatar"><img src={avt2} alt="customer avatar 2" /></div>
                          <h4 className="customerReview__name mb-0">GIANG LT</h4><span className="customerReview__job">Graphic design</span>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="review-carousel text-center mt-4"><img className="mt-3" src={quote} alt="quote" />
                          <p className="customerReview__desc text-center">Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên  từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn, Vang nổ đỏ Thăng Long...</p><a className="text-center d-block" href="#">Read more</a>
                          <div className="customerReview__avatar"><img src={avt3} alt="customer avatar 3" /></div>
                          <h4 className="customerReview__name mb-0">GIANG LT</h4><span className="customerReview__job">Graphic design</span>
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
    
  )
}

export default Home