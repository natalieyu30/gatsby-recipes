import React from 'react'
import TagsList from './TagsList'
import RecipiesList from './RecipesList'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    allContentfulGatsbyRecipes(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const {allContentfulGatsbyRecipes:{nodes:recipes}} = useStaticQuery(query);
  // const recipes = data.allContentfulGatsbyRecipes.nodes
  return (
    <section className='recipes-container'>
      <TagsList recipes={recipes} />
      <RecipiesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
