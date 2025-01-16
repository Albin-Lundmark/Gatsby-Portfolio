import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <div className='text-center'>
        <h1 className='font-heading'>
          Oops, this page doesn't seem to exist yet
        </h1>
        <Link className='font-body' to='/'>
          Click here to return to my homepage
        </Link>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title='Page not found'></Seo>

export default NotFoundPage
