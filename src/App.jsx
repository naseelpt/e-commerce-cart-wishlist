
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './component/Cart'
import { useState } from 'react'
import Wishlist from './component/Wishlist'
import Login from './component/Login'
import Shop from './component/Shop'
import Home from './component/Home'
import Contact from './component/Contact'
import Signup from './component/Signup'
import Payment from './component/Payment'

function App() {
  const [cart, setCart] = useState([]);
  const [wish,setWish] = useState([])


  return (
    <>
     
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop cart={cart} setCart={setCart} wish={wish} setWish={setWish}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/wishlist' element={<Wishlist wish={wish} setWish={setWish} />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>



      </Routes>
      



    </>
  )
}

export default App
