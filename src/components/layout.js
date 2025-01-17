import React from 'react'
import Menu from './menu'
import Footer from './footer'
import LoadingScreen from './loadingscreen'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='max-w-full'>
        <Menu />
      </header>
      <main className='max-w-full flex-grow prose py-12 md:py-16 mx-4 md:mx-12 lg:mx-24 xl:mx-32 2xl:mx-64'>
        {children}
      </main>
      <footer className='max-w-full'>
        <Footer />
      </footer>
      <LoadingScreen />
    </div>
  )
}

export default Layout
