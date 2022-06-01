import React from "react";
import underlinespecial from "../assets/images/underline-special.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getBlog } from "../app/blog.slice";
import to_slug from "../utils/helper";
import { Link } from "react-router-dom";
function BlogHome() {
  const [blogItems, setBlogItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlog())
      .then(unwrapResult)
      .then((res) => {
        setBlogItems(res.data.slice(0, 2));
      });
  }, [dispatch]);
  return (
    <div className="blogCard-container">
      <div className="top-title top-title--special text-center">
        <h2 className="top-title__title">Tin tức &amp; Blog</h2>
        <img
          className="top-title__under"
          src={underlinespecial}
          alt="special title underline"
        />
      </div>
      <div className="row mt-5">
        {blogItems.map((blogItems) => (
          <div className="col-lg-6 mt-3">
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
                  <h2 className="blogCard__title">{blogItems.title}c</h2>
                </Link>
                <p className="blogCard__info">
                  Đăng bởi Admin | {blogItems.createdAt} |
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
  );
}

export default BlogHome;
