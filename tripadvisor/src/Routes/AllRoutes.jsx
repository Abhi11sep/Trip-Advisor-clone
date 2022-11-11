import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Cart'
import Home from '../Components/Home'
import Hotel from '../Components/Hotel'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/hotel' element={<Hotel/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes