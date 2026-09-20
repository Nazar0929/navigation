import { useState } from 'react'
import Profile from './pages/Profile'
import Products from './pages/Products'
import Login from './pages/Login'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='products/:productid' element={<ProductDetails/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='profile' element={<Profile/>}/>
     </Routes>
    </>
  )
}

export default App
