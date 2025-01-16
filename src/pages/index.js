import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import LoadingScreen from '../components/loadingscreen'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {
  const pageData = useStaticQuery(graphql`
    query {
      contentfulPortfolioPage(title: { eq: "Home" }) {
        heading
        slug
        pageText {
          childrenMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  const { heading, pageText } = pageData.contentfulPortfolioPage
  return (
    <Layout>
      <LoadingScreen />
      <h1 className='font-heading text-gray-800'>{heading}</h1>
      {pageText && (
        <div
          className='prose max-w-none'
          dangerouslySetInnerHTML={{
            __html: pageText.childrenMarkdownRemark[0].html
          }}
        />
      )}
      <Link className='font-body' to='/portfolio'>Besök mina projekt!</Link>
    </Layout>
  )
}
export const Head = () => <Seo title='Home'></Seo>

export default IndexPage
