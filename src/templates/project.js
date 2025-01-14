import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectTemplate = ({ data }) => {
  const { title, projectImage } = data.contentfulPortfolioProjects
  const gatsbyImage = projectImage.map(image => getImage(image))
  return (
    <Layout>
      <h1>{title}</h1>
      {gatsbyImage &&
        gatsbyImage.map((image, index) => (
          <GatsbyImage
            key={index}
            image={image}
            alt={projectImage[index].description}
          />
        ))}
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolioProjects(slug: { eq: $slug }) {
      title
      projectImage {
        description
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 800)
      }
    }
  }
`
