import React from "react"
import styled from "styled-components"

const HeadingWrapper = styled.div`
  width: 800px;
  margin: 0 auto;

  h1 {
    font-weight: 800;
    font-size: 2.2em;
    letter-spacing: -0.02em;
  }
`

const BlogPostTitle = ({ title }) => (
  <HeadingWrapper>
    <h1>{title}</h1>
  </HeadingWrapper>
)

export default BlogPostTitle
