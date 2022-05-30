import React from "react";
import { useEffect, useState } from "react";
import { getProducts } from "../app/productitem.slice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import Slider from "react-slick";
import to_slug from "../utils/helper";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
        
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
function ProductOther() {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow
         />,
      prevArrow: <SamplePrevArrow
     />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
      .then(unwrapResult)
      .then((res) => {
        setItems(res.data);
      });
  }, [dispatch]);
  return (
    
    <div>
        
        <Slider {...settings}>
        
        {items.map((item) => (
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="product-block text-center">
                      <div className="product-img" key={item.id}>
                      <div className="product-img__tag-new" />
                        <a href={"/product/" + to_slug(item.name)+"-" + "i."+ item.id}>
                        <img  src={item.images} alt={item.name} />

                        </a>
                        <div className="product-img__tag-null" />
                        
                      </div>
                      <a href={"/product/" + to_slug(item.name)+"-" + "i."+ item.id}>
                        <h4 className="product-block__name">
                        {item.name}
                        </h4>
                      </a>
                      <span className="price product-block__price">
                        {item.price.toLocaleString("vi-VN")}
                      </span>
                      <span className="price product-block__original-price">
                      {item.price_before_discount.toLocaleString("vi-VN")}
                      </span>
                      <br />
                      <a className="button mt-4" href={"/"}>
                        Add to cart
                      </a>
                    </div>
                  </div>
                ))}
        </Slider>
      </div>
  );
}

export default ProductOther;
