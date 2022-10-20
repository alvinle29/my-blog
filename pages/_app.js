import React, { useEffect, useState } from 'react'
import { Breakpoint, BreakpointProvider } from 'react-socks';
import { Layout } from '../components'

import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <BreakpointProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BreakpointProvider>
  )
}

export default MyApp
