const path = require('path')
const slugify = require('slugify')

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const result = await graphql(`
    query GetRecipes {
      allContentfulGatsbyRecipes {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulGatsbyRecipes.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const tagSlug = slugify(tag, {lower: true})
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-templates.js`), 
        context: {
          tag: tag,
        }
      })
    })
  })
}