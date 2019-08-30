import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"

import Hero from "./../components/Hero"
import Navbar from "./../components/Navbar"
import Project from "../components/Project"
import Section from "../components/Section"
import Heading from "../components/Heading"
import About from "../components/About"
import Footer from "../components/Footer"

export default ({ data }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title> Connor Dowson </title>
    </Helmet>
    <Navbar />
    <Hero />
    <Section idName="projects">
      <Heading heading="Projects" />

      {data.allProjectsYaml.edges.map(({ node }, index) => {
        return (
          <Project key={index}
            project={node}
          />
        )

      })}

    </Section>

    <Section idName="aboutme">
      <Heading heading="About Me" />
      <About />
    </Section>
    <Footer>
    </Footer>
  </div>
)

export const query = graphql`

  query FirstQuery {
    allProjectsYaml {
      edges {
        node {
          index
          title
          project
          info
          technologies
          demoLink
          githubLink
        }
      }
    }
  }

`