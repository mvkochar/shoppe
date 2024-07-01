import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Shop } from '../../pages'
import Product from '../../pages/Product'

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
    </Routes>
  )
}

export default Main