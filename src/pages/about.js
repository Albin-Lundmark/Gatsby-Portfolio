import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const AboutPage = ({ data }) => {
  const { heading, pageText, heroImage } = data.contentfulPortfolioPage
  const gatsbyImage = getImage(heroImage)

  return (
    <Layout>
      <h1 className='font-heading text-2xl text-center md:text-left md:text-4xl text-gray-800'>
        {heading}
      </h1>
      <div className='flex flex-col items-center justify-center md:items-start md:gap-8'>
        {gatsbyImage && (
          <GatsbyImage
            aria-label='Image of Albin Lundmark'
            className='rounded-full w-40 md:w-64 h-40 md:h-64 mb-5 md:mb-0 mx-auto'
            image={gatsbyImage}
            alt={heroImage.description || 'Image of Albin Lundmark'}
          />
        )}
        {pageText?.childrenMarkdownRemark[0]?.html && (
          <div
            className='prose my-3 font-body self-center max-w-none md:flex-1'
            dangerouslySetInnerHTML={{
              __html: pageText.childrenMarkdownRemark[0].html
            }}
          />
        )}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title='About'></Seo>

export const query = graphql`
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
`

export default AboutPage
