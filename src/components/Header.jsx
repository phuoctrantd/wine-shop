import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "./Menu";
function Header() {
  const cart = useSelector((state) => state.cart);
  
  return (
    <>
      <header className="header">
        <div className="header__top d-flex align-items-center">
          <div className="container">
            <nav className="header__menu d-flex justify-content-between align-items-center">
              <ul className="header__top-list">
                <li className="header__top-item">
                  
                  <a className="header__top-link " href="/order-list.html">
                    Trạng thái đơn hàng
                  </a>
                </li>
                
                <li className="header__top-item">
                  <a className="header__top-link" href="#!">
                    Danh sách ưa thích
                  </a>
                </li>
                <li className="header__top-item ">
                  <Link className="header__top-link" to={"/cart"}>
                    Giỏ hàng ({cart.cartItem.length})
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="bg-transparent form-control me-2 py-0"
                  type="search"
                  placeholder="Tìm kiếm ở đây..."
                  aria-label="Search"
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
