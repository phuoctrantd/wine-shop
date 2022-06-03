import React from "react";
import quote from "../assets/images/quote.png";
import avt1 from "../assets/images/customer-avatar-1.jpg";
import avt2 from "../assets/images/customer-avatar-2.jpg";
import avt3 from "../assets/images/customer-avatar-3.jpg";
import underlinespecial from "../assets/images/underline-special.png";
function CustomerReview() {
  return (
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
                  Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men
                  tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn,
                  Vang nổ đỏ Thăng Long...
                </p>

                <div className="customerReview__avatar">
                  <img src={avt1} alt="customer avatar 1" />
                </div>
                <h4 className="customerReview__name mb-0">GIANG LT</h4>
                <span className="customerReview__job">Graphic design</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="review-carousel text-center mt-4">
                <img className="mt-3" src={quote} alt="quote" />
                <p className="customerReview__desc text-center">
                  Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men
                  tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn,
                  Vang nổ đỏ Thăng Long...
                </p>

                <div className="customerReview__avatar">
                  <img src={avt2} alt="customer avatar 2" />
                </div>
                <h4 className="customerReview__name mb-0">GIANG LT</h4>
                <span className="customerReview__job">Graphic design</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="review-carousel text-center mt-4">
                <img className="mt-3" src={quote} alt="quote" />
                <p className="customerReview__desc text-center">
                  Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men
                  tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn,
                  Vang nổ đỏ Thăng Long...
                </p>

                <div className="customerReview__avatar">
                  <img src={avt3} alt="customer avatar 3" />
                </div>
                <h4 className="customerReview__name mb-0">GIANG LT</h4>
                <span className="customerReview__job">Graphic design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
