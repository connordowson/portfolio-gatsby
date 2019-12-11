import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "./../components/Layout"
import Container from "./../components/Container"

import Navbar from "./../components/Navbar"
import BlogPostContainer from "./../components/BlogPostContainer"
import BlogPostContents from "./../components/BlogPostContents"
import BlogPostTitle from "../components/BlogPostTitle"
import BlogPostDetails from "../components/BlogPostDetails"
import AlbumRating from "./../components/AlbumRating"

const albumBlogPost = ({ data }) => {
  const {
    title,
    publishDate,
    author,
    body,
    album,
  } = data.contentfulAlbumBlogPost

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Navbar pageType="blog" />
      <Container>
        <BlogPostContainer>
          {/* <AlbumRating albumInfo={album[0]} /> */}
          <BlogPostTitle title={title} />
          <BlogPostDetails datePublished={publishDate} author={author.name} />
          <BlogPostContents postBody={body.childMarkdownRemark.html} />
        </BlogPostContainer>
      </Container>
    </Layout>
  )
}

export default albumBlogPost

export const query = graphql`
  query albumBlogPostQuery($id: String!) {
    contentfulAlbumBlogPost(id: { eq: $id }) {
      title
      author {
        name
      }
      album {
        title
        artist
        albumArt {
          file {
            url
          }
        }
        rating
        releaseDate(formatString: "dddd DD MMMM YYYY")
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      publishDate(formatString: "dddd DD MMMM YYYY")
    }
  }
`
