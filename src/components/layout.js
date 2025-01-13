import React from 'react'
import Menu from './menu'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main className='prose mx-3 md:mx-6 lg:mx-10'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
