import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LinksWrapper = styled.div`
  border-block-start: 8px solid ${props => props.theme.colors.pink};
  overflow: hidden;
  padding: 2em;

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

  a {
    display: block;
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
  }

  /* Give each element a margin bottom, except for the last one */
  & > :not(:last-child) {
    margin-bottom: 3em;
  }
`

const BlogLinksContainer = ({ children }) => {
  // const { title, slug, publishDate, description } = post

  return (
    <LinksWrapper>
      {/* <Link to={`/blog/${slug}`}>{title}</Link>
      <p>{publishDate}</p>
      <p>{description.description}</p> */}
      {children}
    </LinksWrapper>
  )
}

export default BlogLinksContainer
