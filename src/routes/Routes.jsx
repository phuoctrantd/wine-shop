import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import {path} from '../constants/path'
import Product from '../pages/Product'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import About from '../pages/About'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'

function Routes() {
  return (
    
    
        <Switch>
        <Route path={path.home} exact>
            <Home></Home>
        </Route>
        <Route path={path.product} exact>
            <Product></Product>
        </Route>
        <Route path={path.productdetail} exact>
            <ProductDetail></ProductDetail>
        </Route>
        <Route path={path.cart} exact>
            <Cart></Cart>
        </Route>
        <Route path={path.about} exact>
            <About></About>
        </Route>
        <Route path={path.blog} exact>
            <Blog></Blog>
        </Route>
        <Route path={path.blogDetail} exact>
            <BlogDetail></BlogDetail>
        </Route>
        
        </Switch>
    
    
  )
}

export default Routes