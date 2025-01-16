import React from 'react'
import Menu from './menu'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <header className='mb-24'>
        <Menu />
      </header>
      <main className='max-w-full prose mx-3 md:mx-10 lg:mx-10'>{children}</main>
      <footer className='max-w-full'>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
