import React from 'react'
import Menu from './menu'
import Footer from './footer'
import LoadingScreen from './loadingscreen'

const Layout = ({ children }) => {
  return (
    <>
      <header className='mb-10'>
        <Menu />
      </header>
      <main className='max-w-full prose mx-4 md:mx-12 lg:mx-24 xl:mx-32 2xl:mx-64'>
        {children}
      </main>
      <footer className='max-w-full'>
        <Footer />
      </footer>
      <LoadingScreen />
    </>
  )
}

export default Layout
