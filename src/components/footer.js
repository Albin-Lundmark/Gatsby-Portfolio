import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSocials {
        nodes {
          linkName
          link
        }
      }
    }
  `)

  const socials = data.allContentfulSocials.nodes

  const getSocialIcon = linkName => {
    switch (linkName.toLowerCase()) {
      case 'instagram':
        return (
          <BsInstagram className='p-[0.2rem] text-white rounded-lg bg-gradient-to-tl from-yellow-400 via-red-500 to-purple-600' />
        )
      case 'facebook':
        return <BsFacebook className='text-blue-600' />
      case 'linkedin':
        return <BsLinkedin className='text-blue-700' />
      case 'github':
        return <BsGithub className='text-black' />
      default:
        return null
    }
  }

  return (
    <div className='flex pt-10 pb-12 bg-emerald-100 justify-center items-center gap-4'>
      <h2 className='text-2xl font-heading text-gray-800'>Follow me on:</h2>
      {socials.map(
        social =>
          social.linkName !== 'GitHub ITHS' &&
          social.linkName !== 'Gmail' && (
            <a
              key={social.link}
              href={social.link}
              target='_blank'
              rel='noreferrer'
              className='relative group text-3xl drop-shadow-md md:text-4xl hover:scale-110 transition-transform'
              aria-label={`Follow me on: ${social.linkName}`}
            >
              {getSocialIcon(social.linkName)}
              <span className='absolute left-1/2 transform -translate-x-1/2 font-body text-xs text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                {social.linkName}
              </span>
            </a>
          )
      )}
    </div>
  )
}

export default Footer
