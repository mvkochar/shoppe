import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Shop } from '../../pages'

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
    </Routes>
  )
}

export default Main