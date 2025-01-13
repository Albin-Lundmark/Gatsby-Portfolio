import React from 'react'
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const ProjectCard = ({ project }) => {
  const image = getImage(project.projectImage[1])

  return (
    <li className='mt-3 mb-7'>
      <div className='flex flex-col text-nowrap'>
          <GatsbyImage
            image={image}
            alt={project.title}
            className='h-full w-full object-cover rounded-lg'
          />
            <Link to={`/projects/${project.slug}`}>{project.title}</Link>
            <Link to={project.repo}>{`${project.title} Repo`}</Link>
            <Link to={project.preview}>{`Live preview`}</Link>
      </div>
    </li>
  )
}

export default ProjectCard
