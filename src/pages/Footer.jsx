import React from 'react'
import { BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'

function Footer() {
    return (
        <>

            <div className='w-full '>

            <div className='grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 md:px-24 sm:px-16 px-5 py-10 gap-5 text-white bg-[#ff7c08]  '>

                    <div>
                        <h1 className='font-bold'>Cansmart</h1>

                        <p className='pt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores suscipit</p>

                        <div className='flex pt-3 gap-3'>

                            <BsInstagram size={15} />

                            <BsTwitter size={15} />

                            <BsWhatsapp size={15} />

                        </div>

                    </div>

                    <div>

                        <h1 className='font-bold'>Quick links</h1>

                        <h1>Home</h1>
                        <h1>Shop</h1>
                        <h1>New Arrival</h1>
                        <h1>Best sellers</h1>
                        <h1>Git Sets</h1>


                    </div>

                    <div>

                        <h1 className='font-bold'>Custom Services</h1>

                        <h1>Contact Us</h1>
                        <h1>FAQs</h1>
                        <h1>Shipping Policu</h1>
                        <h1>Relative and Exicutive</h1>
                        <h1>Privacy Policy</h1>


                    </div>

                    <div>

                        <h1 className='font-bold'>Newsletter</h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero, odio .</p>

                        <div className='pt-2'>
                            <input type="text" placeholder='Your Email Address' className='border border-gray-300 py-2' />
                            <button className='bg-pink-700 p-2 font-medium'>Subscribe</button>
                        </div>




                    </div>

                </div>
                <div className=' text-gray-500 px-10 text-sm '>
                    <h1> © 2025 Scent Haven. All rights reserved.</h1>
                </div>



            </div>










        </>
    )
}

export default Footer