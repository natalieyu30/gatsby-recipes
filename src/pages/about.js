import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

const About = ({data: {allContentfulGatsbyRecipes:{nodes:recipes}}}) => {
  return (
    <Layout>
      <SEO title='About' />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Eating well, Eating healthy</h2>
            <p>These simple ingredient swaps will help boost the nutrition of your lunch without sacrificing the flavors you and your family love.</p>
            <p>You don't have to overhaul your whole diet to eat healthier. Sometimes all it takes are a few simple tweaks, some basic nutrition know-how and a willingness to change. These five easy tips (recipes included!) are a great place to start.</p>
            <Link to='/contact' className='btn'>contact</Link>
          </article>
          <StaticImage src='../assets/images/about.jpeg' alt='pouring salt in bowl' placeholder='blurred' className='about-img' />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  )
}


export const query = graphql`
  {
    allContentfulGatsbyRecipes(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
