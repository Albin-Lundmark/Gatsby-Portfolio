import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectTemplate = ({ data }) => {
  const { title, projectImage, description, stack, preview, repo } =
    data.contentfulPortfolioProjects

  const desktopImage = projectImage[0]
    ? getImage(projectImage[0].gatsbyImageData)
    : null
  const mobileImage = projectImage[1]
    ? getImage(projectImage[1].gatsbyImageData)
    : null

  return (
    <>
      <Seo title={title}></Seo>
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
          <div className='flex flex-col md:flex-row md:items-start md:gap-5'>
            <div className='md:w-1/2 gap-2 flex flex-col items-center'>
              {mobileImage && (
                <div className='w-full flex justify-center'>
                  <div className='relative border-4 border-gray-800 bg-gray-800 rounded-[1rem] h-[300px] w-[148px]'>
                    <div className='absolute top-1 left-1 right-1 bottom-1 rounded-[0.8rem] overflow-hidden bg-white'>
                      <GatsbyImage
                        image={mobileImage}
                        alt={projectImage[1].description}
                        className='object-cover w-full h-auto'
                      />
                    </div>
                  </div>
                </div>
              )}
              {desktopImage && (
                <div className='w-full flex justify-center'>
                <div>
                  <div className='relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-lg h-[180px] w-[340px] md:h-[225px] md:w-[480px]'>
                    <div className='rounded-lg overflow-hidden h-full w-full bg-white'>
                      <GatsbyImage
                        image={desktopImage}
                        alt={projectImage[0].description}
                        className='object-cover h-auto w-full'
                      />
                    </div>
                  </div>
                  <div className='relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] w-[320px] md:h-[21px] md:w-[480px]'>
                    <div className='absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800'></div>
                  </div>
                </div>
              </div>
              )}
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
    </>
  )
}

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
