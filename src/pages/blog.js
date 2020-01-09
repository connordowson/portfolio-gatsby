import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { useTrail, animated } from "react-spring"

import Layout from "../components/Layout"
import Container from "../components/Container"

import Navbar from "../components/Navbar"
import BlogLinksContainer from "../components/BlogLinksContainer"
import BlogLink from "../components/BlogLink"

const blogPost = ({ data }) => {
  const allPosts = data.allContentfulBlogPost.edges
  const profilePicture = data.contentfulPerson.image.fixed
  const AnimatedBlogLink = animated(BlogLink)

  const trail = useTrail(allPosts.length, {
    opacity: 1,
    from: { opacity: 0 },
    config: { mass: 5, tension: 2000, friction: 200 },
  })

  return (
    <Layout>
      <Helmet>
        <title>Blog | Connor Dowson</title>
        <meta charSet="utf-8" />
      </Helmet>

      <Navbar pageType="blog" />
      <Container>
        <BlogLinksContainer profilePicture={profilePicture}>
          {trail.map((animation, index) => (
            <>
              <animated.div style={animation}>
                <AnimatedBlogLink
                  style={animation}
                  post={allPosts[index].node}
                  key={index}
                />
              </animated.div>
            </>
          ))}
        </BlogLinksContainer>
      </Container>
    </Layout>
  )
}

export default blogPost

export const query = graphql`
  query allBlogPosts {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "dddd DD MMMM YYYY")
          description {
            description
          }
        }
      }
    }
    contentfulPerson(name: { eq: "Connor Dowson" }) {
      image {
        fixed(height: 80, width: 80, quality: 85) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
