import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage }  from 'gatsby-plugin-image'
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs'
import Layout from '../components/Layout'
import slugify from 'slugify'
import SEO from '../components/SEO'


const RecipeTemplate = ({data}) => {
  const {title, cookTime, prepTime, servings, content, description:{description}, image } = data.contentfulGatsbyRecipes
  const pathToImage = getImage(image)
  const {tags, instructions, ingredients, tools} = content
  return (
    <Layout>
      <SEO title={title} description={description} />
      <main className='page'>
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage image={pathToImage} alt={title} className='about-img' />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings} people</p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags: 
                {tags.map((tag, index) => {
                  const slug = slugify(tag, {lower: true})
                  return <Link key={index} to={`/tags/${slug}`}>{tag}</Link> 
                })}
              </p>
            </article>
          </section>
          {/* rest of the content */}
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div className="single-instruction" key={index}>
                    <header>
                      <p>step {index +1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => <p key={index} className='single-ingredient'>{item}</p>)}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((item, index) => <p key={index} className='single-tool'>{item}</p>)}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title:String) {
    contentfulGatsbyRecipes(title: {eq: $title}) {
      title
      cookTime
      prepTime
      servings
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`


export default RecipeTemplate
