import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  Blog, Checkout, Contact, Home, MyAccount, OrderConfirmation, OurStory, Privacy,
  Product, ResetPassword, Shop, ShoppingCart, SingleBlog, ViewOrder
} from '../../pages'

const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='shop'
        element={<Shop />}
      />
      <Route
        path='product/:id'
        element={<Product />}
      />
      <Route
        path='contact'
        element={<Contact />}
      />
      <Route
        path='account'
        element={<MyAccount />}
      />
      <Route
        path='reset-password'
        element={<ResetPassword />}
      />
      <Route
        path='blog'
        element={<Blog />}
      />
      <Route
        path='single-blog/:id'
        element={<SingleBlog />}
      />
      <Route
        path='our-story'
        element={<OurStory />}
      />
      <Route
        path='privacy'
        element={<Privacy />}
      />
      <Route
        path='order'
        element={<ViewOrder />}
      />
      <Route
        path='shopping-cart'
        element={<ShoppingCart />}
      />
      <Route
        path='checkout'
        element={<Checkout />}
      />
      <Route
        path='order-confirm'
        element={<OrderConfirmation/>}
      />
    </Routes>
  )
}

export default Main