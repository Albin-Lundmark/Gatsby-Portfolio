import React from 'react'
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { useWindowSize } from '../hooks/useWindowSize'

const ProjectCard = ({ project }) => {
  const desktopImage = getImage(project.projectImage[0])
  const mobileImage = getImage(project.projectImage[1])
  const isMobile = useWindowSize()

  return (
    <li className='mx-auto mt-3 mb-7 pl-0'>
      <div className='flex flex-col min-h-fit md:h-auto shadow border-2 border-gray-200 rounded-lg p-3'>
        <Link
          className='text-center font-body font-semibold mb-2'
          to={`/projects/${project.slug}`}
        >
          <p className='font-body'>{project.title}</p>
          {isMobile ? (
            <GatsbyImage
              image={mobileImage}
              alt={project.title}
              className='h-full w-full object-cover rounded-lg'
            />
          ) : (
            <GatsbyImage
              image={desktopImage ? desktopImage : mobileImage}
              alt={project.title}
              className='h-full w-full object-cover rounded-lg'
            />
          )}
        </Link>
        <div className='flex flex-col text-center gap-2'>
          {project.repo && (
            <a
              className='font-body px-4 py-2 bg-emerald-100 hover:bg-emerald-200 hover:text-gray-800 rounded-lg'
              href={project.repo}
              rel='noreferrer'
              target='_blank'
            >{`Github repo`}</a>
          )}
          {project.preview && (
            <a
              className='font-body px-4 py-2 bg-gray-100 hover:bg-gray-200 hover:text-gray-800 rounded-lg'
              href={project.preview}
              rel='noreferrer'
              target='_blank'
            >{`Live preview`}</a>
          )}
        </div>
      </div>
    </li>
  )
}

export default ProjectCard
