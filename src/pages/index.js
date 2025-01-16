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
      <h1 className='text-center md:text-left font-heading text-gray-800 text-2xl md:text-4xl mb-8'>
        {heading}
      </h1>
      <div className='flex flex-col md:flex-row items-center justify-center md:items-start md:gap-8'>
        {profileImage && (
          <GatsbyImage
            className='rounded-full w-40 md:w-52 h-40 md:h-52 mb-5 md:mb-0'
            image={profileImage}
            alt={heroImage.description || 'Profile image'}
          />
        )}
        {pageText && (
          <div
            className='prose my-3 font-body self-center max-w-none md:flex-1'
            dangerouslySetInnerHTML={{
              __html: pageText.childrenMarkdownRemark[0].html
            }}
          />
        )}
      </div>
      <div className='my-8'>
        <Link
          className='font-body text-lg text-emerald-600 hover:text-emerald-800'
          to='/portfolio'
        >
          Take a look at what I've been working with! &rarr;
        </Link>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title='Home'></Seo>

export default IndexPage
