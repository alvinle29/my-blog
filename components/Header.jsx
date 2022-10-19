import React, { useContext, useState, useEffect, Fragment } from 'react'
import Link from "next/link"
import { Menu, Transition } from '@headlessui/react'

import { getCategories } from '../services'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left md:contents block">
          <Link href="/" key="home">
            <span className="cursor-pointer text-3xl text-white">
              chú bé ngu ngục
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <Link href="/aboutme" key="aboutme" >
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">About Me</span>
          </Link>
          <Menu as='div' className='relative md:float-right'>
            <Menu.Button key="blogs" className="mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
              My Blogs
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:float-right mt-1 align-middle ml-1 h-4 w-4">
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
              </svg>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items key="list" className='origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 divide-y divide-gray-100 focus:outline-none'>
                {categories.map((category) => (
                  <div className='py-1' key={category.name}>
                    <Menu.Item >
                      {({ active }) => (
                        <a
                          href={`/category/${category.slug}`}
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm sticky'
                          )}
                        >
                          {category.name}
                        </a>
                      )}
                    </Menu.Item>
                    {/*<Menu.Item
                      as="a"
                      key={category.slug}
                      href={`/category/${category.slug}`}
                      className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
                    >
                      {category.name}
                    </Menu.Item>*/}
                  </div>

                ))}
              </Menu.Items>
            </Transition>
          </Menu>

          {/*categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))*/}
        </div>
      </div>
    </div>
  )
}

export default Header