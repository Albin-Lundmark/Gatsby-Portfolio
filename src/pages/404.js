import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <div className='text-center'>
        <h1 className='font-heading text-2xl md:text-4xl text-gray-800'>
          Oops, this page doesn't seem to exist yet
        </h1>
        <Link className='font-body text-emerald-600 hover:text-emerald-800' to='/'>
          Click here to return to my homepage
        </Link>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title='Page not found'></Seo>

export default NotFoundPage
