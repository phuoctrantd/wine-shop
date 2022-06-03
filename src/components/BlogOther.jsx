import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getBlog } from "../app/blog.slice";
import to_slug from "../utils/helper";
function BlogOther() {
  const [blogItems, setBlogItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlog())
      .then(unwrapResult)
      .then((res) => {
        setBlogItems(res.data.slice(0, 3));
      });
  }, [dispatch]);
  return (
    <>
      {blogItems.map((blogItems) => (
        <div className="new-post">
          <div className="row">
            <>
              <div className="col-4">
                <img src={blogItems.images} alt={blogItems.title} />
              </div>
              <div className="col-8">
                <Link
                  to={
                    "/blog/" +
                    to_slug(blogItems.title) +
                    "-" +
                    "i." +
                    blogItems.id
                  }
                >
                  <h5 className="new-post__title">{blogItems.title}</h5>
                </Link>
                <p className="new-post__date">
                  <em className="me-2 far fa-calendar" />
                  <span>{blogItems.createdAt}</span>
                </p>
              </div>
            </>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogOther;
