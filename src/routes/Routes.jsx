import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import { path } from "../constants/path";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import HeaderHome from "../components/HeaderHome";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Checkout from "../pages/Checkout";
import Tracking from "../pages/Tracking";
import TrackingDetail from "../pages/TrackingDetail";

function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <HeaderHome></HeaderHome>
        <Home></Home>
        <Footer></Footer>
      </Route>
      <Route path={path.product} exact>
        <Header></Header>
        <Product></Product>
        <Footer></Footer>
      </Route>
      <Route path={path.productdetail} exact>
        <Header></Header>
        <ProductDetail></ProductDetail>
        <Footer></Footer>
      </Route>
      <Route path={path.cart} exact>
        <Header></Header>
        <Cart></Cart>
        <Footer></Footer>
      </Route>
      <Route path={path.checkout} exact>
        <Header></Header>
        <Checkout></Checkout>
        <Footer></Footer>
      </Route>
      <Route path={path.about} exact>
        <Header></Header>
        <About></About>
        <Footer></Footer>
      </Route>
      <Route path={path.blog} exact>
        <Header></Header>
        <Blog></Blog>
        <Footer></Footer>
      </Route>
      <Route path={path.blogDetail} exact>
        <Header></Header>
        <BlogDetail></BlogDetail>
        <Footer></Footer>
      </Route>
      <Route path={path.contact} exact>
        <Header></Header>
        <Contact></Contact>
        <Footer></Footer>
      </Route>
      <Route path={path.tracking} exact>
        <Header></Header>
        <Tracking></Tracking>
        <Footer></Footer>
      </Route>
      <Route path={path.trackingdetail} exact>
        <Header></Header>
        <TrackingDetail></TrackingDetail>
        <Footer></Footer>
      </Route>
      <Route path={path.notFound} exact>
        <Header></Header>
        <NotFound></NotFound>
        <Footer></Footer>
      </Route>
      

    </Switch>
  );
}

export default Routes;
