import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Den här sidan kunde inte hittas</h1>
      <Link to='/'>Klicka här för att komma tillbaka till hemsidan</Link>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Hoppsan</title>
