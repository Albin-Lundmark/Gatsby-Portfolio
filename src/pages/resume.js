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
        resume {
          file {
            url
          }
        }
      }
    }
  `)

  const { title, heading, pageText, resume } =
    resumeData.contentfulPortfolioPage

  return (
    <>
      <Seo title={title}></Seo>
      <Layout>
        <h1 className='font-heading text-2xl text-center md:text-left md:text-4xl text-gray-800'>
          {heading}
        </h1>
        <div
          className='prose font-body max-w-none'
          dangerouslySetInnerHTML={{
            __html: pageText.childrenMarkdownRemark[0].html
          }}
        ></div>
        <div className='mt-10'>
          <a
            aria-label='Link to resume'
            className='font-body text-lg text-emerald-600 hover:text-emerald-800'
            href={resume.file.url}
            target='_blank'
            rel='noreferrer'
          >
            Check out my resume &rarr;
          </a>
        </div>
      </Layout>
    </>
  )
}

export default ResumePage
