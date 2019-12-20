import React from "react"
import styled from "styled-components"
import Heading from "./Heading"

const LinksWrapper = styled.div`
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

  & > div {
    padding: 2em;
  }

  background: ${props => props.theme.colors.white};
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.large};
  transition: all 0.3s ease-in;

  a {
    display: block;
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
  }

  & > :first-child {
    background: #edf2f7;
  }

  /* Give each element a margin bottom, except for the last one */
  & > :not(:last-child) {
  }
`

const BlogLinksContainer = ({ children }) => {
  return (
    <LinksWrapper>
      <Heading headingSize={1} noPadding={true}>
        Welcome to my blog
      </Heading>
      {children}
    </LinksWrapper>
  )
}

export default BlogLinksContainer
