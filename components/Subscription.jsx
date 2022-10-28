import React, { useRef } from 'react'

const Subscription = () => {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">
        nhận thông báo bài viết mới
      </h3>
      <div className="flex flex-wrap">
        <form className="relative" onSubmit={subscribeUser}>
          <input
            aria-label="Email for newsletter"
            placeholder="Enter your email address"
            type="email"
            autoComplete="email"
            ref={inputRef}
            required
            className="py-3 px-0 text-md bg-transparent w-10/12 text-gray-900 border-b-2 border-gray-400 dark:border-gray-400 dark:text-white focus:border-brand focus-visible:outline-none"
          />
          <button
            className="transition duration-500 mt-5 transform hover:-translate-y-1 inline-block bg-pink-500 text-md font-medium rounded-full text-white px-4 py-3 cursor-pointer"
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