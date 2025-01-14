import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <h1 className='font-heading'>Min första gatsby sida!</h1>
    <Link to='/portfolio'>Besök mina projekt!</Link>
  </Layout>
)

export const Head = () => <Seo title='Hem'></Seo>

export default IndexPage
