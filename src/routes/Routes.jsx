import React from 'react'
import { Route, Switch,BrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import {path} from '../constants/path'
import Product from '../pages/Product'
import ProductDetail from '../pages/ProductDetail'

function Routes() {
  return (
    <BrowserRouter>
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
        
        </Switch>
    </BrowserRouter>
  )
}

export default Routes