import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "./../components/Layout"
import Container from "./../components/Container"
import Navbar from "./../components/Navbar"
import Hero from "./../components/Hero"
import Section from "./../components/Section"
import Project from "./../components/Project"

const homePage = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Connor Dowson portfolio</title>
    </Helmet>

    <Navbar />
    <Hero heroImage={data.contentfulAsset.fluid} />
    <Container>
      <Section>
        {data.allContentfulProject.edges.map(project => (
          <Project project={project.node} />
        ))}
      </Section>
    </Container>
  </Layout>
)

export default homePage

export const query = graphql`
  query HomePageQuery {
    contentfulAsset(title: { eq: "Connor Dowson Hero Image" }) {
      id
      fluid(quality: 90, maxWidth: 800) {
        ...GatsbyContentfulFluid
      }
    }
    allContentfulProject(sort: { fields: updatedAt, order: ASC }) {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          image {
            fluid(quality: 90, maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
          technologies
          gitHubLink
          demoLink
        }
      }
    }
  }
`
