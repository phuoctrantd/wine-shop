import React from "react";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import gallery6 from "../assets/images/gallery-6.jpg";
import gallery7 from "../assets/images/gallery-7.jpg";
import gallery8 from "../assets/images/gallery-8.jpg";

function Gallery() {
  return (
    <div>
      <section className="gallery">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
              <div
                className="gallery__img"
                style={{
                  background: `url(${gallery1}) center center / cover no-repeat`,
                }}
              >
                <div className="gallery__content text-center">
                  <span>1987</span>
                  <h2>Rượu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
              <div
                className="gallery__img"
                style={{
                  background: `url(${gallery2}) center center / cover no-repeat`,
                }}
              >
                <div className="gallery__content text-center">
                  <span>1969</span>
                  <h2>Rượu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
              <div
                className="gallery__img"
                style={{
                  background: `url(${gallery3}) center center / cover no-repeat`,
                }}
              >
                <div className="gallery__content text-center">
                  <span>1982</span>
                  <h2>Rượu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
              <div
                className="gallery__img"
                style={{
                  background: `url(${gallery4}) center center / cover no-repeat`,
                }}
              >
                <div className="gallery__content text-center">
                  <span>1973</span>
                  <h2>Rượu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
              <div
                className="gallery__img"
                style={{
                  background: `url(${gallery5}) center center / cover no-repeat`,
                }}
              >
                <div className="gallery__content text-center">
                  <span>1956</span>
                  <h2>Rượu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
              <div
                className="gallery__img"
                style={{
                  background: `url(${gallery6}) center center / cover no-repeat`,
                }}
              >
                <div className="gallery__content text-center">
                  <span>1999</span>
                  <h2>Rượu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
              <div
                className="gallery__img"
                style={{
                  background: `url(${gallery7}) center center / cover no-repeat`,
                }}
              >
                <div className="gallery__content text-center">
                  <span>1940</span>
                  <h2>Rượu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
              <div
                className="gallery__img"
                style={{
                  background: `url(${gallery8}) center center / cover no-repeat`,
                }}
              >
                <div className="gallery__content text-center">
                  <span>1952</span>
                  <h2>Rượu</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
