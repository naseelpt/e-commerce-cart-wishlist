import React from 'react'
import Header from '../pages/Header';
import Footer from '../pages/Footer';

function Contact() {
  return (
    <>
    <Header/>
     <div className="bg-white px-6 py-20 lg:px-8">
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
      Contact Sales
    </h2>
    <p className="mt-2 text-lg text-gray-600">
      We’d love to hear from you. Let’s grow your business together.
    </p>
  </div>

  <form className="mx-auto mt-16 max-w-xl">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

     
      <div>
        <label className="block text-sm font-medium text-gray-700">First name</label>
        <input
          type="text"
          className="mt-2 block w-full rounded-md border shadow-2xl border-gray-300 px-3 py-2 
          focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Last name</label>
        <input
          type="text"
          className="mt-2 block w-full rounded-md border shadow-2xl border-gray-300 px-3 py-2 
          focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

    
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          className="mt-2 block w-full shadow-2xl rounded-md border border-gray-300 px-3 py-2 
          focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

     
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-2 block w-full shadow-2xl rounded-md border border-gray-300 px-3 py-2 
          focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

  
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          rows="4"
          className="mt-2 block w-full shadow-2xl rounded-md border border-gray-300 px-3 py-2 
          focus:border-indigo-500 focus:ring-indigo-500"
        ></textarea>
      </div>
    </div>

    <button
      className="mt-8 w-full rounded-md shadow-2xl bg-indigo-600 text-white py-3 font-medium 
      hover:bg-indigo-500 transition"
    >
      Let's Talk
    </button>
  </form>
 
</div>

<Footer/>
    </>
  );
}

export default Contact;
// .payment-option:has(input:checked) {
//   background-color: #eef2ff; /* indigo-50 */
//   color: #312e81; /* indigo-900 */
//   border-color: #6366f1; /* indigo-500 */
// } 