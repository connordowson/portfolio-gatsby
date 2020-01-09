import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "./../components/Layout"
import Container from "./../components/Container"
import Navbar from "./../components/Navbar"
import Heading from "./../components/Heading"
import Hero from "./../components/Hero"
import ProjectsContainer from "./../components/ProjectsContainer"
import Project from "./../components/Project"
import TopTracksContainer from "./../components/TopTracksContainer"

const homePage = ({ data }) => {
  const [topTracks, setTopTracks] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://connordowson.com/spotify_data.php")
      res
        .json()
        .then(res => setTopTracks(res.items))
        .catch(error => console.log(error))
    }

    fetchData()
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | Connor Dowson</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Helmet>

      <Navbar />
      <Hero heroImage={data.contentfulAsset.fluid} />
      <Container>
        <Heading headingSize={2} sectionHeading>
          Projects
        </Heading>
        <ProjectsContainer>
          {data.allContentfulProject.edges.map(project => (
            <Project project={project.node} />
          ))}
        </ProjectsContainer>
      </Container>
      <Container>
        <Heading headingSize={2} sectionHeading>
          What I've been listening to!
        </Heading>
        <TopTracksContainer topTracks={topTracks ? topTracks : null} />
      </Container>
    </Layout>
  )
}

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
