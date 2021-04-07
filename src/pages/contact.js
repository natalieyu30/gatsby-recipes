import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

const Contact = ({data}) => {
  const recipes = data.allContentfulGatsbyRecipes.nodes
  console.log(data)
  return (
    <Layout>
      <SEO title='Contact' />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get In Touch?</h3>
            <p>Sriracha cornhole bushwick viral authentic, before they sold out deep v hella semiotics salvia you probably haven't heard of them pickled heirloom enamel pin. </p>
            <p>Selfies fashion axe enamel pin ethical coloring book truffaut godard DIY kinfolk bushwick waistcoat photo booth. </p>
            <p>Meditation offal seitan art party salvia enamel pin selfies butcher.</p>
          </article>
          <article>
            <form  
              action="https://formspree.io/f/mayaydqa"
              method="POST" 
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name='name' id='name'/>
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="email" name='email' id='email'/>
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name='message' id='message'></textarea>
              </div>
              <button type="submit" className='btn block'>submit</button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesource!</h5>
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

export default Contact