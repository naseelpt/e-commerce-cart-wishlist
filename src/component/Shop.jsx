import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
import { SiGnome } from 'react-icons/si'

function Shop({ setCart, setWish }) {



    const [value, setValue] = useState([]);
 


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                setValue(response.data)


            } catch (error) {
                setValue(error)

            }
        }
        fetchData()

    }, [])







    const AddToCart = (product) => {
        const cartItem = {

            id: product.id,
            image: product.image,
            category: product.category,
            price: product.price,
            baseprice: product.price,
            rating: product.rating.rate,
            qty: 1
        };

        setCart(prev => [...prev, cartItem]);
        alert("Item added to cart");
    };


    const handleWishlist = (products) => {

        const newItem = {
            id: products.id,
            image: products.image,
            price: products.price,
            rating: products.rating.rate,
            category: products.category
        };

        setWish(prev => [...prev, newItem]);
        alert('item added wishlist')
    }



    return (
        <>
            <Header />

            <div className='w-full p-8'>


              








                <div className='p-5 shadow-2xs grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>

                    {value.map((item) => (

                        <div key={item.id} className='bg-gray-200 shadow-2xl rounded-2xl p-5'>

                            <figure className="relative  transition-all duration-300 cursor-pointer filter grayscale md:hover:grayscale-0 sm:hover:grayscale-0 hover:grayscale-0 md:hover:scale-105  sm:hover:scale-105">
                                <a href="#">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="rounded-lg w-[100] h-38 mx-auto"
                                    />
                                </a>

                            </figure>
                            
                            <div className='pt-3 flex-col '>
                                <h1 className='font-seri font-medium'>{item.category}</h1>

                                <h1 className='font-serif '>$ {item.price}</h1>

                                <h1 className='font-serif'>{item?.rating?.rate}</h1>
                            </div>

                            <div className='flex justify-between pt-3'>

                                <button className='text-white shadow-2xl rounded-xl px-3 py-1 bg-[#fa7603] ' onClick={() => AddToCart(item)}><AiOutlineShoppingCart size={'20px'} /></button>
                                <button className='text-white shadow-2xl rounded-xl px-3 py-1 bg-[#2f9140]' onClick={() => handleWishlist(item)}  > <AiOutlineHeart size={'20px'}  /></button>
                                 




                            </div>

                           

                            

                        </div>

                    ))}






                </div>



            </div>







            <Footer />


        </>
    )
}

export default Shop


