import React from "react"
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import AllRecipes from '../components/AllRecipes'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <Layout>
      <SEO title='Home' description='description'/>
      <main className="page">
        <header className="hero">
          <StaticImage src='../assets/images/main.jpeg' alt='flour and eggs' className='hero-img' placeholder='tracedSVG' layout='fullWidth'></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>NatDev Recipes</h1>
              <h4>Eating well, Eating healthy</h4>
            </div>
          </div>
        </header>
      <AllRecipes />
      </main>
    </Layout>
  )
}
