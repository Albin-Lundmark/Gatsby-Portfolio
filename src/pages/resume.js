import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import Seo from '../components/seo'

const ResumePage = () => {
  const resumeData = useStaticQuery(graphql`
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
  `)

  const { heading, pageText } = resumeData.contentfulPortfolioPage
  console.log(heading)

  return (
    <Layout>
      <h1 className='font-heading text-2xl md:text-4xl text-gray-800'>
        {heading}
      </h1>
      <p
        className='prose max-w-none'
        dangerouslySetInnerHTML={{
          __html: pageText.childrenMarkdownRemark[0].html
        }}
      ></p>
    </Layout>
  )
}

export const Head = () => <Seo title='Resume'></Seo>

export default ResumePage
