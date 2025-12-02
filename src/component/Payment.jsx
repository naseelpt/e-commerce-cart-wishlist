import React from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'

function Payment() {
  return (
    <>
    <Header/>


    <div className="md:p-10 sm:p-8 p-6">
  <div className="max-w-xl mx-auto bg-white">
    <div className="rounded-xl shadow-sm border border-gray-200 overflow-hidden">

      <div class="bg-gradient-to-r from-purple-500 to-indigo-500 p-6">
 

        <h2 className="text-xl font-semibold text-white">Complete Your Payment</h2>
        <p className="text-sm text-slate-100 mt-2">Fast, secure payment processing</p>
      </div>

      <div className="p-6">

        <div className="flex mb-6 border border-gray-300 rounded-md overflow-hidden">
          <button className="cursor-pointer flex-1 py-3 px-1 text-sm text-center bg-indigo-50 text-indigo-600 font-medium">
            Credit Card
          </button>
          <button className="cursor-pointer flex-1 py-3 px-1 text-sm text-center text-slate-500 hover:bg-gray-50 font-medium">
            PayPal
          </button>
          <button className="cursor-pointer flex-1 py-3 px-1 text-sm text-center text-slate-500 hover:bg-gray-50 font-medium">
            Bank Transfer
          </button>
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-slate-900 text-sm font-medium mb-2" htmlFor="cardName">
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardName"
              className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-indigo-600"
              placeholder="John Smith"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-900 text-sm font-medium mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-indigo-600"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-slate-900 text-sm font-medium mb-2" htmlFor="expDate">
                Expiry Date
              </label>
              <input
                type="text"
                id="expDate"
                className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-indigo-600"
                placeholder="MM/YY"
                required
              />
            </div>

            <div>
              <label className="block text-slate-900 text-sm font-medium mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-indigo-600"
                placeholder="123"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="saveCard" className="ml-2 block text-sm text-slate-900 font-medium">
                I agree to the{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="cursor-pointer w-full py-2.5 px-4 rounded-md flex items-center justify-center bg-purple-500 hover:bg-indigo-700 text-sm text-white font-medium transition-colors"
            >
              Pay $49.99
            </button>

            <div className="flex items-center justify-center text-slate-500 text-sm">
              <span>Secure payment powered by Stripe</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

 
</div>

    
    
    
    
    
    
    
    <Footer/>
    
    </>
  )
}

export default Payment