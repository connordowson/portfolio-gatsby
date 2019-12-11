import React from "react"
import styled from "styled-components"

const PostWrapper = styled.div`
  width: 800px;
  background: ${props => props.theme.colors.white};
  padding: 2em;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.large};

  /* Give each element a margin bottom, except for the last one */
  & > :not(:last-child) {
    margin-bottom: 2rem;
  }
`

const BlogPostContainer = ({ children }) => (
  <PostWrapper>{children}</PostWrapper>
)

export default BlogPostContainer
