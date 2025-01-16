import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectTemplate = ({ data }) => {
  const { title, projectImage, description, stack, preview, repo } =
    data.contentfulPortfolioProjects

  const desktopImage = getImage(projectImage[0].gatsbyImageData)
  const mobileImage = getImage(projectImage[1].gatsbyImageData)
  return (
    <Layout>
      <Link
        to='/portfolio'
        className='font-body text-sm'
        aria-label='Back to projects'
      >
        {' '}
        &larr; Back to projects
      </Link>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row md:items-start md:gap-1'>
          <div className='md:w-1/2 gap-2 flex flex-row'>
            <div className='aspect-w-16 aspect-h-9'>
              <GatsbyImage
                image={mobileImage}
                alt={projectImage[1].description}
                className='w-full md:w-1/3 h-auto object-cover rounded-lg'
              />
            </div>
            <div className='aspect-w-16 aspect-h-9'>
              <GatsbyImage
                image={desktopImage}
                alt={projectImage[0].description}
                className='w-full md:w-1/2 h-1/2 md:h-auto object-cover rounded-lg'
              />
            </div>
          </div>
          <div className='mt-4 md:mt-0 md:w-1/2'>
            <h1 className='font-heading text-3xl font-semibold mb-4'>
              {title}
            </h1>
            <div
              className='font-body mb-4'
              dangerouslySetInnerHTML={{
                __html: description.childrenMarkdownRemark[0].html
              }}
            />
            <div className='flex flex-col md:flex-row gap-2'>
              {repo && (
                <a
                  className='font-body text-center px-4 py-2 bg-emerald-100 hover:bg-emerald-200 hover:text-gray-800 rounded-lg'
                  href={repo}
                  rel='noreferrer'
                  target='_blank'
                >
                  Github repo
                </a>
              )}
              {preview && (
                <a
                  className='font-body text-center px-4 py-2 bg-gray-100 hover:bg-gray-200 hover:text-gray-800 rounded-lg'
                  href={preview}
                  rel='noreferrer'
                  target='_blank'
                >
                  Live preview
                </a>
              )}
            </div>
          </div>
        </div>
        <div className='mt-2 md:mt-8'>
          <h2 className='font-heading mb-4'>Skills:</h2>
          <div className='flex flex-wrap gap-2'>
            {stack &&
              stack.map(skill => (
                <span
                  key={skill}
                  className='font-body font-normal text-base px-4 py-2 mx-1 bg-gray-100 border-2 rounded-full'
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title='Project'></Seo>

export default ProjectTemplate

export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolioProjects(slug: { eq: $slug }) {
      stack
      title
      repo
      preview
      projectImage {
        description
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 800)
      }
      description {
        childrenMarkdownRemark {
          html
        }
      }
    }
  }
`
