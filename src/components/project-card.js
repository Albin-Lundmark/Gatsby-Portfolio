import React from 'react'
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const ProjectCard = ({ project }) => {
  const image = getImage(project.projectImage[1])

  return (
    <li className='mt-3 mb-7'>
      <div className=''>
          <GatsbyImage
            image={image}
            alt={project.title}
            className='h-full w-full object-cover rounded'
          />
            <Link to={`/projects/${project.slug}`}>{project.title}</Link>
            <Link to={project.repo}>{`Code ${project.title}`}</Link>
            <Link to={project.preview}>{`Live preview`}</Link>
      </div>
    </li>
  )
}

export default ProjectCard
