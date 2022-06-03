import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getCategory } from "../app/category.slice";
import { path } from "../constants/path";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import qs from "query-string";
function Category({ category, filters }) {
  return (
    <div>
      <nav>
        <h4>Rượu ngoại</h4>
        <ul className="product__category-list" key={category.id}>
          {category.map((category) => (
            <li className="product__category-item">
              <Link to={path.product + `?category_id=${category.id}`}>
                {category.sub === 0 && category.name}
              </Link>
            </li>
          ))}
        </ul>
        <h4>Rượu Việt</h4>
        <ul className="product__category-list">
          {category.map((category) => (
            <li className="product__category-item" key={category.id}>
              <Link to={path.product + `?category_id=${category.id}`}>
                {category.sub === 1 && category.name}
              </Link>
            </li>
          ))}
        </ul>
        <h4>Rượu khác</h4>
        <ul className="product__category-list">
          {category.map((category) => (
            <li className="product__category-item" key={category.id}>
              <Link to={path.product + `?category_id=${category.id}`}>
                {category.sub === 2 && category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Category;
