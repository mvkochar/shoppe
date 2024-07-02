import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contact, Home, Product, Shop } from '../../pages'

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
    </Routes>
  )
}

export default Main