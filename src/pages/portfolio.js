import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import Seo from '../components/seo'
import ProjectCard from '../components/project-card'

const PortfolioPage = () => {
  const projectData = useStaticQuery(graphql`
    query {
      contentfulPortfolioPage(title: { eq: "Portfolio" }) {
        title
        heading
        slug
        pageText {
          childrenMarkdownRemark {
            html
          }
        }
      }
      allContentfulPortfolioProjects {
        nodes {
          createdAt
          title
          slug
          id
          preview
          repo
          projectImage {
            description
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              width: 800
            )
          }
        }
      }
    }
  `)

  const { heading } = projectData.contentfulPortfolioPage

  const projects = projectData.allContentfulPortfolioProjects.nodes.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  )
  
  return (
    <Layout>
      <h1 className='font-heading text-gray-800'>{heading}</h1>
      <ul className='grid grid-cols-1 mt-0 mx-auto pl-0 md:grid-cols-2 lg:grid-cols-3 md:gap-5'>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title='Portfolio'></Seo>

export default PortfolioPage
