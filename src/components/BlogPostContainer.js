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
  background: ${props => props.theme.colors.bg100};
  color: ${props => props.theme.colors.textColor};
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.large};
  transition: all 0.3s ease-in-out;

  & > div {
    padding: 2em;
  }

  & > :nth-child(odd) {
    background: ${props => props.theme.colors.bg200};
  }
`

const BlogPostContainer = ({ children }) => {
  return <PostWrapper>{children}</PostWrapper>
}

export default BlogPostContainer
