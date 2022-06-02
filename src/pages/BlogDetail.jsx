import React from 'react'
import { Link } from 'react-router-dom';
import arrowunderline from "../assets/images/underline-arrow.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getIdFromUrl } from "../utils/helper";
import { getBlogDetail } from '../app/blogDetail.slice';
import { unwrapResult } from "@reduxjs/toolkit";
import BlogOther from '../components/BlogOther';
import {Helmet} from "react-helmet"


function BlogDetail() {
  const [blogDetail, setBlogDetail] = useState();
  const dispatch = useDispatch();
  const { idBlog } = useParams();
  const realId = getIdFromUrl(idBlog);
 console.log(realId)

  useEffect(() => {
    dispatch(getBlogDetail(realId))
      .then(unwrapResult)
      .then((res) => {
        setBlogDetail(res.data);
        console(res.data)
      });
  }, [dispatch]);

  return (
    <div>
      {blogDetail && (
<>
<Helmet>
        <title>{blogDetail.title}</title>
      </Helmet>
  <section className="breadcrumb">
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Blog</li>
        </ol>
      </nav>
    </div>
  </section>
  <section className="blog-detail"> 
    <div className="container">
      <div className="top-title">
        <h2 className="top-title__title">Blog</h2><img className="top-title__under" src={arrowunderline} alt="arrow title underline" />
      </div>
      <div className="row mt-5 gx-0 gx-md-4 gx-lg-5">
        <div className="col-12 col-md-3">
          <aside className="blog-detail__sidebar">
            <div className="blog-detail__new-post">
              <h2 className="blog-detail__title">Bài viết mới nhất</h2>
              <BlogOther/>
              
            </div>
            
            <div className="blog-detail__video">
              <h2 className="blog-detail__title">Latest video</h2>
              <div className="video"> <a className="video__play-btn" href="https://www.youtube.com/watch?v=p37_Ux1G_BI"><span><em className="fas fa-play-circle" /></span><span className="border-animation border-animation--border-inner" /><span className="border-animation border-animation--border-outter" /></a></div>
            </div>
          </aside>
        </div>
        <div className="col-12 col-md-9">
          <div className="blog-detail__content mt-5 mt-md-0">
            <article className="blogCard">
              <div className="blogCard__img"><img src={blogDetail.images} alt={blogDetail.title} />
                <div className="blogCard__overlay" />
              </div>
              <div className="blogCard__content">
                <h2 className="blogCard__title">{blogDetail.title}</h2>
                <p className="blogCard__info">Đăng bởi Admin | {blogDetail.createdAt} </p>
                <p className="blogCard__desc text-justify">{blogDetail.content}</p>
              </div>
            </article>
           </div>
        </div>
      </div>
    </div>
  </section>
  </>
      )}
</div>

  )
}

export default BlogDetail