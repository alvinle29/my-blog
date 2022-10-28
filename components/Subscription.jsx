import React, { useState, useEffect } from 'react'

const Subscription = () => {

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">
        nhận thông báo bài viết mới
      </h3>

      <div className="flex flex-wrap">
      <form className="relative">
        <input
          aria-label="Email for newsletter"
          placeholder="Enter your email address"
          type="email"
          autoComplete="email"
          required
          className="py-4 px-0 text-md bg-transparent w-9/12 text-gray-900 border-b-2 border-gray-600 dark:border-gray-400 dark:text-white focus:border-brand focus-visible:outline-none"
        />
        <button
          className="transition duration-500 mt-4 transform hover:-translate-y-1 inline-block bg-pink-500 text-md font-medium rounded-full text-white px-5 py-3 cursor-pointer"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      </div>
    </div >
  )
}

export default Subscription