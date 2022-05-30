import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getCategory } from "../app/category.slice";
import { path } from "../constants/path";

function Category() {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory())
      .then(unwrapResult)
      .then((res) => {
        setCategory(res.data);
      });
  }, [dispatch]);

  return (
    <div>
      <nav>
        <h4>Rượu ngoại</h4>
        <ul className="product__category-list" key={category.id}>
          {category.map((category) => (
            <li className="product__category-item">
              <a href={path.product + `?category=${category.id}`}>
                {category.sub === 0 && category.name}
              </a>
            </li>
          ))}
        </ul>
        <h4>Rượu Việt</h4>
        <ul className="product__category-list">
          {category.map((category) => (
            <li className="product__category-item" key={category.id}>
              <a href={path.product + `?category=${category.id}`}>
                {category.sub === 1 && category.name}
              </a>
            </li>
          ))}
        </ul>
        <h4>Rượu khác</h4>
        <ul className="product__category-list">
          {category.map((category) => (
            <li className="product__category-item" key={category.id}>
              <a href={path.product + `?category=${category.id}`}>
                {category.sub === 2 && category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Category;
