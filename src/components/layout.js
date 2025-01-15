import React from 'react'
import Menu from './menu'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <header className='mb-20'>
        <Menu />
      </header>
      <main className='max-w-full prose mx-3 md:mx-6 lg:mx-12'>{children}</main>
      <footer className='max-w-full'>
        <Footer />
      </footer>
    </html>
  )
}

export default Layout
