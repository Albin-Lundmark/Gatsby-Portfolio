import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <div className='text-center'>
        <h1 className='font-heading'>Hoppsan, nu hamnade du utanför mina sidor</h1>
        <Link className='font-body' to='/'>Klicka här för att komma tillbaka till hemsidan</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Hoppsan</title>
