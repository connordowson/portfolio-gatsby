import React from "react"
import styled from "styled-components"

const DetailsWrapper = styled.div`
  width: 800px;
  margin: 1em auto;

  p {
    font-weight: 300;
    font-size: 1.2em;
    display: inline;
    /* letter-spacing: -0.02em; */
  }
`

const BlogPostTitle = ({ datePublished, author }) => (
  <DetailsWrapper>
    <p>{datePublished}</p>
    <p> - </p>
    <p>{author}</p>
  </DetailsWrapper>
)

export default BlogPostTitle
