import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "./../components/Layout"
import Container from "./../components/Container"

import Navbar from "./../components/Navbar"
import BlogPostContainer from "./../components/BlogPostContainer"
import Heading from "./../components/Heading"
import BlogPostHero from "../components/BlogPostHero"
import BlogPostDetails from "../components/BlogPostDetails"
import BlogPostContents from "./../components/BlogPostContents"
import BlogPostAuthor from "../components/BlogPostAuthor"

import options from "./../components/rich-text/render-node"

const blogPost = ({ data }) => {
  const {
    title,
    publishDate,
    author,
    tags,
    body,
    heroImage,
  } = data.contentfulBlogPost

  const document = body.json
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Navbar pageType="blog" />
      <Container>
        <BlogPostContainer>
          <Heading headingSize={1}>{title}</Heading>
          <BlogPostHero heroImage={heroImage.fluid} />
          <BlogPostDetails datePublished={publishDate} tags={tags} />
          <BlogPostContents>
            {documentToReactComponents(document, options)}
          </BlogPostContents>
          <BlogPostAuthor
            authorPicture={author.image.fixed}
            authorName={author.name}
            shortBio={author.shortBio.shortBio}
            github={author.github}
            email={author.email}
          />
        </BlogPostContainer>
      </Container>
    </Layout>
  )
}

export default blogPost

export const query = graphql`
  query blogPostQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      body {
        json
      }
      heroImage {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
      author {
        name
        title
        github
        email
        image {
          fixed(height: 80, width: 80, quality: 85) {
            ...GatsbyContentfulFixed
          }
        }
        shortBio {
          shortBio
        }
      }
      tags
      publishDate(formatString: "dddd DD MMMM YYYY")
    }
  }
`
