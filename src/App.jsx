import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Navbar from './components/Navbar'
import AddToCartModal from './components/AddToCartModal'

const App = () => {
  return (
    <>
      <Navbar/>
      <AddToCartModal/>
    <Routes>
      <Route path='/' element={<Products/>}/>
    </Routes>
    </>
  )
}

export default App