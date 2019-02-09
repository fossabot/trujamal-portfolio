import React from "react"
import { Link } from "gatsby"
import Card from '../components/Card';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from '../components/Section'
import Wave from '../components/wave'

const IndexPage = () => (
  <Layout>
    <SEO title="Trujamal" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Onboarding">
      <div className="OnboardingGroup">
        <h1>creative</h1>
        <h2>Shooting eye-catching<br />moments for fun</h2>
        <p>Every image is a story in frame. Discover my most popular images and uncover the stories behind them.</p>
        <Link to="/page-2/">Discover my work</Link>
        <Wave/>
      </div>
    </div>
    <div className="Cards">
      <h2>Selected Projects</h2>
      <p>Hover over the cards to learn more about projects</p>
      <div className="CardGroup">
        <Card title="Portraits"
              text="55 images"
              image={require('../images/Portraits.jpg')}
        />
        <Card title="Landscape"
              text="47 images"
              image={require('../images/Landscape01.jpg')}
        />
        <Card title="UI Design"
              text="32 images"
              image={require('../images/Landscape02.jpg')}
        />
        <Card title="UX Design"
              text="31 images"
              image={require('../images/Landscape03.jpg')}
        />
      </div>
    </div>
    <Section 
      image={require('../images/wallpaper01.jpg')}
      title="About"
      text="Jamal Rasool is a multidisciplinary designer and full stack developer, that’s currently working on
      crafting responsive web user interfaces, and mobile applications with proper user experience. I enjoy working with people of all different backgrounds, bringing to life other
      people’s ideas and visions with creative experience, then crafting a product they want and to see come alive in the digital space. As a critical thinker and a problem solver, I love any challenge
      that I’m presented with and will go above and beyond whenever the opportunity arises."
    />
  </Layout>
)

export default IndexPage