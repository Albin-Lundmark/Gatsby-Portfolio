exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulPortfolioProjects {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error('Failed to fetch data from Contentful', result.errors)
  }

  const projectTemplate = require.resolve('./src/templates/project.js')

  result.data.allContentfulPortfolioProjects.nodes.forEach(node => {
    createPage({
      path: `/portfolio/project/${node.slug}`,
      component: projectTemplate,
      context: {
        slug: node.slug
      }
    })
  })
}
