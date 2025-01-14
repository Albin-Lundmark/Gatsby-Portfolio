import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  const aboutData = graphql`
    query {
      contentfulPortfolioPage(title: { eq: "About me" }) {
        title
        heading
        slug
        pageText {
          childrenMarkdownRemark {
            html
          }
        }
        heroImage {
          gatsbyImageData(placeholder: BLURRED, width: 800, layout: CONSTRAINED)
        }
      }
    }
  `
  const { heading, pageText } = aboutData.contentfulPortfolioPage
  const gatsbyImage = getImage(aboutData.heroImage)

  return (
    <Layout>
      <h1 className='font-heading text-gray-800'>{heading}</h1>
      <div className='about-content'>
        {pageText?.html && (
          <div
            dangerouslySetInnerHTML={{
              __html: aboutData.pageText.childrenMarkdownRemark.html
            }}
          />
        )}
      </div>
      {aboutData?.heroImage?.gatsbyImageData && (
        <GatsbyImage
          className='rounded-full w-48 h-48 mx-auto'
          image={gatsbyImage}
          alt={aboutData?.heroImage?.description || 'About me'}
        />
      )}
    </Layout>
  )
}

export const Head = () => <Seo title='About'></Seo>

export default AboutPage
