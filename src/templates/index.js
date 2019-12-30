import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "./../components/Layout"
import Container from "./../components/Container"
import Navbar from "./../components/Navbar"
import Hero from "./../components/Hero"
import Heading from "./../components/Heading"

const homePage = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Connor Dowson portfolio</title>
    </Helmet>

    <Navbar />
    <Container>
      <Hero heroImage={data.contentfulAsset.fluid} />
    </Container>
  </Layout>
)

export default homePage

export const query = graphql`
  query ProjectsQuery {
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
    contentfulAsset(title: { eq: "Connor Dowson Hero Image" }) {
      id
      fluid(quality: 90, maxWidth: 800) {
        ...GatsbyContentfulFluid
      }
    }
  }
`
