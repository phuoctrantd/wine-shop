import React from "react";
import { useEffect, useState } from "react";
import { getProducts } from "../app/productitem.slice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import to_slug from '../utils/helper';
import { Link } from 'react-router-dom';


function ProductItem() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
      .then(unwrapResult)
      .then((res) => {
        setItems(res.data);
        setTotal(res.data.length);
      });
  }, [dispatch]);
  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = items.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <>
      {/* panigation */}
      <div className="product__header">
        <div className="product__view">
          <label htmlFor="grid-view">
            <em className="fas fa-th" />
          </label>
          <label htmlFor="list-view">
            <em className="fas fa-list" />
          </label>
        </div>
        <div className="product__pagination">
          <nav aria-label="Product pagination">
            <Pagination
              size="small"
              onChange={(value) => setPage(value)}
              pageSize={postPerPage}
              total={total}
              current={page}
            />
            
          </nav>
        </div>
      </div>
      {/* endpanigation */}
      {/* product  */}
      <div className="product__grid">
        <div className="row">
          {currentPosts.map((item) => (
            <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
              <div className="product-block text-center">
                <div className="product-img">
                <Link to={"/product/"+ to_slug(item.name)+"-" + "i."+ item.id }>
                <img src={item.images} alt={`product ${item.id} `} />
                </Link>
                  
                  <div className="product-img__tag-null" />
                  <div className="product-img__option">
                    <div className="row">
                      <p className="product-img__wishlist col-5 m-0">
                        <a className="text-center" href="#">
                          <em className="fas fa-heart me-2"> </em>Yêu thích
                        </a>
                      </p>
                      <p className="product-img__compare col-5 m-0">
                        <a className="text-center" href="#">
                          <em className="fas fa-signal me-2" />
                          So sánh
                        </a>
                      </p>
                      <p className="product-img__zoom-in col-2 m-0">
                        <a className="text-center" href="#">
                          <em className="fas fa-expand-alt" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <Link to={"/product/"+ to_slug(item.name)+"-" + "i."+ item.id }>
                  <h4 className="product-block__name">{item.name}</h4>
                </Link>
                <span className="price product-block__price">
                  {item.price.toLocaleString("vi-VN")}
                </span>
                <span className="price product-block__original-price">
                  {item.price_before_discount.toLocaleString("vi-VN")}
                </span>
                <br />
                <a className="button mt-4" href="#">
                  Add to cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="product__list">
        <div className="row">
          {currentPosts.map((item) => (
            <div className="col-12" key={item.id}>
              <div className="product-block product-block--list">
                <div className="row">
                  <div className="col-12 col-sm-4">
                    <div className="product-img">
                      <img src={item.images} alt={`product ${item.id} `} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-8 col-xl-6">
                    <a href="/product-detail.html">
                      <h4 className="product-block__name">{item.name}</h4>
                    </a>
                    <span className="price product-block__price">
                      {item.price.toLocaleString("vi-VN")}
                    </span>
                    <p className="desc mt-4">{item.description}</p>
                    <div className="row mt-5 px-2">
                      <a className="col-4 button" href="#">
                        Add to cart
                      </a>
                      <p className="col-4 product-img__wishlist m-0 text-center my-auto">
                        <a href="#">
                          <em className="fas fa-heart me-2" />
                          Yêu thích
                        </a>
                      </p>
                      <p className="col-4 product-img__compare m-0 text-center my-auto">
                        <a href="#">
                          <em className="fas fa-signal me-2" />
                          So sánh
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* end-product */}
    </>
  );
}

export default ProductItem;
