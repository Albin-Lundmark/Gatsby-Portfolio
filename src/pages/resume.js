import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

const ResumePage = () => {
  const resumeData = graphql`
    query {
      contentfulPortfolioPage(title: { eq: "Resume" }) {
        title
        heading
        slug
        pageText {
          childrenMarkdownRemark {
            html
          }
        }
      }
    }
  `

  const { heading, pageText } = resumeData.contentfulPortfolioPage

  return (
    <Layout>
      <h1 className='font-heading text-gray-800'>{heading}</h1>
      <p
        className='prose max-w-none'
        dangerouslySetInnerHTML={{
          __html: pageText.childrenMarkdownRemark.html
        }}
      ></p>
    </Layout>
  )
}

export const Head = () => <Seo title='Resume'></Seo>

export default ResumePage
