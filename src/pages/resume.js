import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

const ResumePage = ({ data }) => {
  const pages = data.allContentfulPage.nodes[0]

  return (
    <Layout>
      <h1 className='text-gray-800'>Min CV-sida!</h1>
      <h2 className='text-gray-800'>{pages && pages.resume.title}</h2>
    </Layout>
  )
}

export const Head = () => <Seo title='Portfolio'></Seo>

export const query = graphql`
  query {
    allContentfulPage {
      nodes {
        resume {
          title
          file {
            fileName
            url
          }
        }
      }
    }
  }
`

export default ResumePage
