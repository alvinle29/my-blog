import React from 'react'
import moment from 'moment'
import Link from "next/link"

const PostCard = ({ post }) => {

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-center absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-700 text-center md:mb-8 mb-6 cursor-pointer hover:text-pink-600 md:text-2xl text-xl font-semibold ml-4 mr-4">
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className="bloc lg:flex text-center items-center justify-center md:mb-8 mb-6 w-full">
        <div className="flex items-center justify-center md:mb-4 mb-6 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-gray-700 ml-2 md:text-lg text-base">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className="text-center md:text-lg text-gray-700 font-normal px-4 lg:px-20 md:mb-8 mb-6 md:text-base text-base">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <p className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-500 md:text-lg text-base font-medium rounded-full text-white md:mb-3 mb-6 px-8 py-3 cursor-pointer">
            Continue Reading
          </p>
        </Link>
      </div>
    </div>
  )
}

export default PostCard