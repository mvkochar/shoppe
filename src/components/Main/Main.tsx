import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Blog, Contact, Home, MyAccount, Product, ResetPassword, Shop } from '../../pages'

const Main = () => {
  return (
    <Routes>
        <Route
            path='/'
            element={<Home/>}
        />
        <Route
          path='shop'
          element={<Shop/>}
        />
        <Route
          path='product/:id'
          element={<Product/>}
        />
        <Route
          path='contact'
          element={<Contact/>}
        />
        <Route
          path='account'
          element={<MyAccount/>}
        />
        <Route
          path='reset-password'
          element={<ResetPassword/>}
        />
        <Route
          path='blog'
          element={<Blog/>}
        />
    </Routes>
  )
}

export default Main