import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import ProjectCard from '../components/project-card'

const PortfolioPage = ({ data }) => {
  const projects = data.allContentfulPortfolioProjects.nodes

  return (
    <Layout>
      <h1 className='font-mono text-gray-800'>Min projektsida!</h1>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-self-center md:gap-5 md:space-x-10'>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title='Portfolio'></Seo>

export const query = graphql`
  query {
    allContentfulPortfolioProjects {
      nodes {
        title
        slug
        id
        projectImage {
          description
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, width: 800)
        }
      }
    }
  }
`

export default PortfolioPage
