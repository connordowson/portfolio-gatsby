import React from "react"
import styled from "styled-components"

const PostWrapper = styled.article`
  border-block-start: 8px solid ${props => props.theme.colors.pink};
  overflow: hidden;
  background: ${props => props.theme.colors.bg100};
  color: ${props => props.theme.colors.textColor};
  margin: 8em auto 0 auto;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.large};

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
