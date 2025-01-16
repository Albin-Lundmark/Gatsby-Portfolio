import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  const aboutData = useStaticQuery(graphql`
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
          description
        }
      }
    }
  `)
  const { heading, pageText, heroImage } = aboutData.contentfulPortfolioPage
  const gatsbyImage = getImage(heroImage)

  return (
    <Layout>
      <h1 className='font-heading text-gray-800'>{heading}</h1>
      {gatsbyImage && (
        <GatsbyImage
          className='flex flex-grow rounded-full w-40 md:w-52 h-40 md:h-52 mx-auto mb-5'
          image={gatsbyImage}
          alt={heroImage.description || 'Image of Albin Lundmark'}
        />
      )}
      {pageText?.childrenMarkdownRemark[0]?.html && (
        <div
          dangerouslySetInnerHTML={{
            __html: pageText.childrenMarkdownRemark[0].html
          }}
        ></div>
      )}
    </Layout>
  )
}

export const Head = () => <Seo title='About'></Seo>

export default AboutPage
