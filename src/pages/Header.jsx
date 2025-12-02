import React, { useState } from 'react'
import { BiLogIn, BiSearch } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { LuUser } from 'react-icons/lu'

function Header() {
    const [open, setOpen] = useState(false);

    return (

        <>


            <div className='w-full  '>

                <div >

                    <div className=' flex items-center text-white justify-between md:px-28 sm:px-20  gap-4 py-4 bg-[#2f9140]'>




                        <div>
                            <h1 className='text-center md:text-3xl sm:text-3xl text-2xl font-medium font-serif'>
                                can<span style={{ color: '#B6DDDB' }}>s</span>mart
                            </h1>
                        </div>
                        <div className='flex'>

                            <div className='relative  '>
                                <input type="text" placeholder='Search' className='shadow-xl text-xs p-2 border bg-white border-gray-500 md:w-[300px] sm:w[300px] w-[150px] focus:outline-none rounded-lg  px-6 text-black' />
                                <BiSearch size={15} color='black' className='absolute top-2.5 left-2 ' />
                            </div>
                        </div>

                        <div className='flex gap-2'>

                            <div className="relative inline-block">


                                <button onClick={() => setOpen(!open)} >
                                    <LuUser size={22} />
                                </button>


                                {open && (
                                    <div
                                        className="absolute left-1/2 -translate-x-1/2 mt-2 
             bg-gray-100 text-black text-sm 
             py-2 rounded-md shadow-lg z-20"
                                    >
                                        <Link to="/login">
                                            <div className="flex items-center gap-2 px-4 py-2 cursor-pointe">
                                                <BiLogIn size={18} />
                                                <span className="whitespace-nowrap">Sign In</span>
                                            </div>
                                        </Link>

                                        <Link to="/signup">
                                            <div className="flex items-center gap-2 px-4 py-2 cursor-pointer ">
                                                <BiLogIn size={18} />
                                                <span className="whitespace-nowrap">Sign Up</span>
                                            </div>
                                        </Link>
                                    </div>


                                )}
                            </div>

                            <Link to={'/cart'}> <button> <AiOutlineShoppingCart size={'20px'} /></button></Link>
                            <Link to={'/wishlist'}><button><AiOutlineHeart size={'20px'} /></button></Link>



                        </div>
                    </div>

                    <hr />

                    <div className='flex items-center justify-center px-5 md:gap-5 gap-7 font-medium pt-3 bg-[#2f9140] text-white'>
                        <Link to={'/'}> <h1>Home</h1></Link>
                        <Link to={'/shop'}><h1>Shop</h1></Link>
                        <h1>About</h1>
                        <h1>Blog</h1>
                        <Link to={'/contact'}> <h1>Contact</h1></Link>
                    </div>


                </div>


            </div>












        </>


    )
}

export default Header