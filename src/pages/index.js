import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  const pageData = useStaticQuery(graphql`
    query {
      contentfulPortfolioPage(title: { eq: "Home" }) {
        heading
        slug
        heroImage {
          gatsbyImageData(placeholder: BLURRED, width: 800, layout: CONSTRAINED)
          description
        }
        pageText {
          childrenMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  const { heading, pageText, heroImage } = pageData.contentfulPortfolioPage
  const profileImage = getImage(heroImage.gatsbyImageData)

  return (
    <Layout>
      <h1 className='font-heading text-gray-800'>{heading}</h1>
      <div className='flex flex-col md:flex-row mx-auto px-4'>
        {profileImage && (
          <GatsbyImage
            className='flex rounded-full w-40 md:w-52 h-40 md:h-52 mb-5'
            image={profileImage}
            alt={heroImage.description || 'Profile image'}
          />
        )}
        {pageText && (
          <div
            className='prose max-w-none'
            dangerouslySetInnerHTML={{
              __html: pageText.childrenMarkdownRemark[0].html
            }}
          />
        )}
      </div>
      <Link className='font-body' to='/portfolio'>
        Take a look at what I've been working with! &rarr;
      </Link>
    </Layout>
  )
}
export const Head = () => <Seo title='Home'></Seo>

export default IndexPage
