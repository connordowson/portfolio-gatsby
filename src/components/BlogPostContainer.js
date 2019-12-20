import React from "react"
import styled from "styled-components"

const PostWrapper = styled.article`
  border-block-start: 8px solid ${props => props.theme.colors.pink};
  overflow: hidden;

  max-width: 50em;
  @media (max-width: ${props => props.theme.responsive.large}) {
    width: 50em;
  }

  @media (max-width: ${props => props.theme.responsive.medium}) {
    width: 32em;
  }

  @media (max-width: ${props => props.theme.responsive.small}) {
    width: 100%;
  }
  background: ${props => props.theme.colors.white};
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.large};
  transition: all 0.3s ease-in;

  & > div {
    padding: 2em;
  }

  & > :nth-child(odd) {
    background: #edf2f7;
  }

  /* Give each element a margin bottom, except for the last one */
  /* & > :not(:last-child) {
    margin-bottom: 2rem;
  } */
`

const BlogPostContainer = ({ children }) => (
  <PostWrapper>{children}</PostWrapper>
)

export default BlogPostContainer
