import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "./../components/Layout"
import Container from "./../components/Container"

import Navbar from "./../components/Navbar"
import Heading from "./../components/Heading"
import BlogLinksContainer from "./../components/BlogLinksContainer"
import BlogLink from "./../components/BlogLink"

const blogPost = ({ data }) => {
  const allPosts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Helmet>
        <title>Blog - Connor Dowson</title>
      </Helmet>

      <Navbar pageType="blog" />
      <Container>
        <BlogLinksContainer>
          <Heading headingSize={1} noPadding={true}>
            Welcome to my blog
          </Heading>
          {allPosts.map(({ node: post }) => (
            <BlogLink post={post} />
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
  }
`
