import React from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
import mmm from '../assets/m3.png'
import mm from '../assets/m1.png'
import m from '../assets/m2.png'
import mmmm from '../assets/m4.png'

import { BsArrowRight, BsClock } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Home() {

    return (
        <>

            <Header />


            <div className='w-full'>

                <div className='grid md:grid-cols-2 grid-cols-1 sm:grid-cols-1  '>


                    <div className='md:py-52 sm:py-36 py-10 md:px-20 sm:px-10 px-8'>

                        <h1 className='md:text-8xl sm:text-7xl text-6xl font-bold text-[#2f9140]'>Cansmart</h1>
                        <p className='md:text-5xl sm:text-4xl text-3xl font-bold pt-5'>E-commerce</p>
                        <p className='md:text-5xl sm:text-4xl text-3xl font-bold pt-3'>Online shoping</p>
                        <p className='md:text-xl sm:text-xs text-sm text-gray-700 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam vel</p>

                        <div className='py-6 md:gap-5 sm:gap-4 gap-3 md:flex hidden'>
                           <Link to={'/shop'}>
                                <button
                                    className="click-btn btn-style702 flex items-center gap-2 "
                                    data-hover="Click" >  Shop Now <BsArrowRight className="stroke-1" />
                                </button>
                           </Link>
                            <Link to={'/contact'}>
                                <button
                                    className="click-btn btn-style703 flex items-center gap-2 "
                                    data-hover="Click" >  Contact US  <BsArrowRight className="stroke-1" />
                                </button>
                            </Link>
                        </div>

                        <div className='py-6 md:gap-5 sm:gap-4 gap-3 flex md:hidden '>
                            <Link to='/shop'><button className="flex items-center gap-2 text-white rounded-sm py-3 bg-orange-500 px-5" > Shop Now <BsArrowRight className="stroke-1" /></button></Link>
                             <Link to={'/contact'}><button className="flex items-center gap-2 text-white rounded-sm py-3 bg-orange-500 px-5" > Contact Us <BsArrowRight className="stroke-1" /> </button></Link> </div>




                    </div>

                    <div className="relative w-full max-w-[600px] h-[400px] sm:h-[350px] md:h-[450px] lg:h-[600px] md:py-16 sm:py-12 py-8  ">

                        <img
                            src={mm}
                            className="absolute w-full h-full object-cover opacity-0 animate-[fadeSlide_8s_infinite]"
                        />

                        <img
                            src={m}
                            className="absolute w-full h-full object-cover opacity-0 animate-[fadeSlide_8s_infinite_2s]"
                        />

                        <img
                            src={mmm}
                            className="absolute w-full h-full object-cover opacity-0 animate-[fadeSlide_8s_infinite_4s]"
                        />

                        <img
                            src={mmmm}
                            className="absolute w-full h-full object-cover opacity-0 animate-[fadeSlide_8s_infinite_6s]"
                        />

                    </div>

                </div>


                <div className='md:p-10 '>
    
              <h1 className='text-center md:text-4xl text-xl sm-text-3xl font-bold'>Special Offers</h1>
    
              <p className='md:text-xl text-sm pt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    
              <div className='w-full'>
    
                <div className='grid md:grid-cols-3 gap-5 sm-grid-cols-2 grid-cols-1 p-8 w-full'>
    
                  <div className='bg-amber-300 transition-transform hover:scale-105 w-full p-5 rounded-2xl '>
    
                    <div className='flex justify-between'>
                      <h1 className='text-amber-700 font-bold'>Hot Summer Sale</h1>
                      <div className='bg-white w-8 h-8 rounded-full flex justify-center items-center text-amber-800 '>%</div>
                    </div>
    
                    <p className='py-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit discount.</p>
    
                    <div className='text-gray-600 flex gap-3 items-center text-sm'><BsClock /> Ends on 2026-10-31</div>
    
                    <div className='pt-4'>
                      <div className='bg-white shadow-2xl w-full rounded-2xl p-4'>
                        <h1 className='text-gray-400 text-sm'>Use Code</h1>
                        <h1 className='font-bold'>FREEPERFUMR</h1>
                      </div>
                    </div>
    
                    <div className='pt-4 '>
    
                      <button className='text-center w-full p-2 hover:bg-white rounded-2xl border border-amber-800 '>claim offer</button>
    
                    </div>
    
    
    
    
    
    
    
    
                  </div>
    
                  <div className='bg-violet-300 transition-transform hover:scale-105 w-full p-5 rounded-2xl '>
    
                    <div className='flex justify-between'>
                      <h1 className='text-violet-700 font-bold'>Hot Summer Sale</h1>
                      <div className='bg-white w-8 h-8 rounded-full flex justify-center items-center text-violet-700 '>%</div>
                    </div>
    
                    <p className='py-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit discount.</p>
    
                    <div className='text-gray-600 flex gap-3 items-center text-sm'><BsClock /> Ends on 2026-10-31</div>
    
                    <div className='pt-4'>
                      <div className='bg-white shadow-2xl w-full rounded-2xl p-4'>
                        <h1 className='text-gray-400 text-sm'>Use Code</h1>
                        <h1 className='font-bold'>SUMMER</h1>
                      </div>
                    </div>
    
                    <div className='pt-4 '>
    
                      <button className='text-center hover:bg-white w-full p-2 rounded-2xl border border-violet-700 '>claim offer</button>
    
                    </div>
    
    
    
    
    
    
    
    
                  </div>
    
                  <div className='bg-pink-300 transition-transform hover:scale-105 w-full p-5 rounded-2xl '>
    
                    <div className='flex justify-between'>
                      <h1 className='text-pink-700 font-bold'>Hot Summer Sale</h1>
                      <div className='bg-white w-8 h-8 rounded-full flex justify-center items-center text-pink-700 '>%</div>
                    </div>
    
                    <p className='py-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit discount.</p>
    
                    <div className='text-gray-600 flex gap-3 items-center text-sm'><BsClock /> Ends on 2026-10-31</div>
    
                    <div className='pt-4'>
                      <div className='bg-white shadow-2xl w-full rounded-2xl p-4'>
                        <h1 className='text-gray-400 text-sm'>Use Code</h1>
                        <h1 className='font-bold'>NEW20</h1>
                      </div>
                    </div>
    
                    <div className='pt-4 '>
    
                      <button className='text-center hover:bg-white w-full p-2 rounded-2xl border border-pink-700 '>claim offer</button>
    
                    </div>
    
    
    
    
                  </div>
    
    
                </div>
              </div>
    
            </div>



            </div>




















            <Footer />
        </>
    )
}

export default Home