import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../pages/Footer';
import Header from '../pages/Header';

function Wishlist({wish,setWish}) {
 


    const handledelete = (id)=>{
        setWish(prev=>prev.filter(item=>item.id!==id))

    }
   

     

    
  return (
    <>

    <Header/>


           <div className='w-full p-10'>
          
                  <div className='bg-red-200 p-5 shadow-2xs grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
          

                        {wish.map((item)=>(

                             <div className='bg-gray-200 shadow-2xl rounded-2xl p-5'>

                            <div className='flex justify-center'>

                          <img src={item.image} alt="" className='w-[100] h-38  ' /></div>
          
                        <div className='pt-3 flex-col '>
                          <h1 className='font-seri font-medium'>{item.category}</h1>
          
                          <h1 className='font-serif '>$ {item.price} </h1>
          
                          <h1 className='font-serif'>{item.rating.rate}</h1>
                        </div>
          
                        <div className='flex justify-between pt-3'>
          
                          
                       <button  onClick={()=>handledelete(item.id)} class="click-btn btn-style704" data-hover="click">Remove</button>
          
                        </div>
                        </div>

                        ))}
          
                  </div>
          
                </div>
    
    <Footer/>
    
    
    </>
  )
}

export default Wishlist