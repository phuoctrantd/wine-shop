import React from "react";
import { Link } from "react-router-dom";
import arrowunderline from "../assets/images/underline-arrow.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getBlog } from "../app/blog.slice";
import to_slug from "../utils/helper";
import { Helmet } from "react-helmet";
function Blog() {
  const [blogItems, setBlogItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlog())
      .then(unwrapResult)
      .then((res) => {
        setBlogItems(res.data);
      });
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <section className="breadcrumb">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="blog">
        <div className="container">
          <div className="top-title">
            <h2 className="top-title__title">Blog</h2>
            <img
              className="top-title__under"
              src={arrowunderline}
              alt="arrow title underline"
            />
          </div>
          <div className="row mt-5">
            {blogItems.map((blogItems) => (
              <div
                className="col-12 col-sm-6 col-lg-4 mb-3 mb-md-5"
                key={blogItems.id}
              >
                <article className="blogCard">
                  <div className="blogCard__img">
                    <img src={blogItems.images} alt={blogItems.title} />

                    <div className="blogCard__overlay" />
                  </div>
                  <div className="blogCard__content">
                    <Link
                      to={
                        "/blog/" +
                        to_slug(blogItems.title) +
                        "-" +
                        "i." +
                        blogItems.id
                      }
                    >
                      <h2 className="blogCard__title">{blogItems.title}</h2>
                    </Link>
                    <p className="blogCard__info">
                      Đăng bởi Admin | {blogItems.createdAt}
                    </p>
                    <p className="blogCard__desc text-justify">
                      {blogItems.content.slice(0, 197)}
                    </p>
                    <Link
                      to={
                        "/blog/" +
                        to_slug(blogItems.title) +
                        "-" +
                        "i." +
                        blogItems.id
                      }
                    >
                      Read more
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
