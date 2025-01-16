import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          siteUrl
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={data.site.siteMetadata.description} />
      <meta name='author' content={data.site.siteMetadata.author} />
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
    </>
  )
}

export default Seo
