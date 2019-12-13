import React from "react"
import styled from "styled-components"

const DetailsWrapper = styled.div`
  width: 100%;
  padding: 2em;
  background: #edf2f7;
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 300;
    font-size: 1.2em;
    display: inline;
    letter-spacing: 0.02em;
    font-style: italic;
  }
`

const BlogPostTitle = ({ datePublished }) => (
  <DetailsWrapper>
    <p>{datePublished}</p>
  </DetailsWrapper>
)

export default BlogPostTitle
