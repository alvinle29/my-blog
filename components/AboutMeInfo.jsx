import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const AboutMeInfo = () => {
  return (
    <div className="bg-white shadow=lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-center">
        About Me
      </h3>
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src=""
          alt=""
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <p className="mb-8">Nonsense</p>
    </div >
  )
}

export default AboutMeInfo