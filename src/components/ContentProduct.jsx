import React from "react";

import gallery6 from "../assets/images/gallery-6.jpg";
function ContentProduct(props) {
  return (
    <section className="product-tab">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 pe-lg-5">
            <div className="navTab">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-1"
                    aria-selected="true"
                  >
                    Đặc điểm nổi bật
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-2"
                    type="button"
                    role="tab"
                    aria-controls="pills-2"
                    aria-selected="false"
                  >
                    Thông tin sản phẩm
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-1"
                  role="tabpanel"
                  aria-labelledby="pills-1-tab"
                >
                  <p className="desc">{props.productDetail.content}</p>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-2"
                  role="tabpanel"
                  aria-labelledby="pills-2-tab"
                >
                  <p className="desc">{props.productDetail.content}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-4 product-tab__img"
            style={{
              background: `url(${gallery6}) center center / cover no-repeat`,
            }}
          >
            <h2 className="product-tab__content text-center">Rượu nho</h2>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default ContentProduct;
