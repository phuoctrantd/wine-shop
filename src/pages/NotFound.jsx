import React from 'react'
import { Link } from 'react-router-dom'
import notfound from "../assets/images/logo-black.png"
import {Helmet} from "react-helmet"
function NotFound() {
  return (
    
    <div>
      <Helmet>
        <title>404</title>
      </Helmet>
      <section className="error">
    <div className="container-fluid p-0">
      <div className="error__top" />
      <div className="error__bottom">
        <nav className="error__nav"><a className="error__nav-logo" href="/"><img src={notfound} alt="Brand logo" /></a>
          <ul className="error__nav-list">
            <li className="error__nav-item"><Link className="error__nav-link" to="/">Trang chủ</Link></li>
            <li className="error__nav-item"><Link className="error__nav-link" to="/contact">Liên hệ</Link></li>
          </ul>
          
        </nav>
      </div>
    </div>
  </section>
  </div>

  )
}

export default NotFound