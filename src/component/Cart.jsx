import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { Link } from 'react-router-dom';

function Cart({ cart, setCart }) {
    






    const handleDelete = (id) => {
        setCart(prev => prev.filter(p => p.id !== id));
    };


    const increment = (id) => {

        setCart(prev => prev.map(item => item.id === id ?
            { ...item, qty: item.qty + 1, price: item.baseprice * (item.qty+1) }
            : item))


    }

  const decrement =(id)=>{
    setCart(prev=>prev.map(item=>item.id===id?{
        ...item, qty:item.qty>=1?item.qty -1:1,price: item.price-item.price/item.qty
    }:item))

  }







    return (
        <>
        <Header/>
           <div className="w-full p-5">
  <h1 className="text-center text-3xl pt-5 font-light">Your shopping cart</h1>

  
  <div className="hidden md:block mt-10">
    <table className="w-full border border-gray-400">
      <thead className="bg-gray-400">
        <tr>
          <th className="p-3 border">Product</th>
          <th className="p-3 border">Category</th>
          <th className="p-3 border">Price</th>
          <th className="p-3 border">Quantity</th>
          <th className="p-3 border">Action</th>
        </tr>
      </thead>

      <tbody className="bg-amber-100">
        {cart.map(item => (
          <tr key={item.id}>
            <td className="border">
              <div className="flex justify-center items-center">
                <img src={item.image} className="w-32 h-32 p-3" />
              </div>
            </td>
            <td className="border">{item.category}</td>
            <td className="border">${item.price}</td>

            <td className="border">
              <div className="flex gap-3 items-center justify-center">
                <button onClick={() => increment(item.id)} className="bg-white px-3 py-2 shadow">
                  +
                </button>

                <h1 className="text-xl">{item.qty}</h1>

                <button onClick={() => decrement(item.id)} className="bg-white px-3 py-2 shadow">
                  -
                </button>
              </div>
            </td>

            <td className="border">
              <div className="flex gap-3 justify-center p-2">
                 <button  onClick={()=>handleDelete(item.id)} class="click-btn btn-style704" data-hover="click">Remove</button>
               <Link to={'/payment'}>
                  <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Buy now
                  </button>
               </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

 
  <div className="md:hidden mt-10 space-y-6">
    {cart.map(item => (
      <div
        key={item.id}
        className="bg-amber-100 shadow-xl rounded-xl p-4 border border-gray-300"
      >
        <div className="flex justify-center">
          <img src={item.image} className="w-32 h-32" />
        </div>

        <h2 className="text-center text-lg font-medium mt-3">{item.category}</h2>

        <p className="text-center text-gray-700 font-semibold">${item.price}</p>

        <div className="flex justify-center gap-4 mt-3">
          <button onClick={() => increment(item.id)} className="bg-white px-3 py-1 rounded shadow">
            +
          </button>

          <h1 className="text-xl">{item.qty}</h1>

          <button onClick={() => decrement(item.id)} className="bg-white px-3 py-1 rounded shadow">
            -
          </button>
        </div>

        
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => handleDelete(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>

         <Link to={'/payment'}>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Buy now
            </button>
         </Link>
        </div>
      </div>
    ))}
  </div>
</div>

         





<Footer/>

        </>
    )
}

export default Cart