import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
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
      <h1 className='font-heading text-gray-800'>{heading}</h1>
      {pageText && (
        <div
          className='prose max-w-none'
          dangerouslySetInnerHTML={{
            __html: pageText.childrenMarkdownRemark.html
          }}
        />
      )}
      <Link to='/portfolio'>Besök mina projekt!</Link>
    </Layout>
  )
}
export const Head = () => <Seo title='Hem'></Seo>

export default IndexPage
