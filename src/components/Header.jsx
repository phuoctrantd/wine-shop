import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "./Menu";
import {
  ShoppingCartOutlined
} from '@ant-design/icons';
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import useQuery from "../hook/useQuery";
import { path } from "../constants/path";
function Header() {
  const cart = useSelector((state) => state.cart);
  const [searchValue,setSearchValue] = useState("")
  const history = useHistory()
  const query = useQuery()

 

  useEffect(() => {
    const { name = "" } = query
    setSearchValue(name)
  }, [query])

  const onChangeSearch = event =>{
    setSearchValue(event.target.value)
  }
  
  const search = event => {
    event.preventDefault()
    history.push(path.product + `?name=${searchValue}`)
  }
  
  return (
    <>
      <header className="header">
        <div className="header__top d-flex align-items-center">
          <div className="container">
            <nav className="header__menu d-flex justify-content-between align-items-center">
              <ul className="header__top-list">
                <li className="header__top-item">
                  
                <Link className="header__top-link" to="/tracking">
                    Trạng thái đơn hàng
                  </Link>
                </li>
                
                <li className="header__top-item">
                  <a className="header__top-link" href="#!">
                    Danh sách ưa thích
                  </a>
                </li>
                <li className="header__top-item ">
                  <Link className="header__top-link" to={"/cart"}>
                  <ShoppingCartOutlined style={{ fontSize: "20px" }} /> Giỏ hàng ({cart.cartItem.length})
                  </Link>
                </li>
              </ul>
              <form className="d-flex" onSubmit={search}>
                <input
                  className="bg-transparent form-control me-2 py-0"
                  type="search"
                  placeholder="Tìm kiếm ở đây..."
                  aria-label="Search"
                  value={searchValue}
              onChange={onChangeSearch}
                />
                <button className="btn" type="submit">
                  <em className="fas fa-search" />
                </button>
              </form>
            </nav>
          </div>
        </div>

        <Menu></Menu>
      </header>
    </>
  );
}

export default Header;
