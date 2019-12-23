import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaRegCalendarAlt } from "react-icons/fa"

const LinkWrapper = styled.div`
  a {
    display: block;
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${props => props.theme.colors.pink};
    }
  }

  /* Give each element a margin bottom, except for the last one */
  & > :not(:last-child) {
    margin-bottom: 0.8em;
  }
`

const PostDate = styled.div`
  display: flex;
  align-items: baseline;
  svg {
    margin-right: 0.2em;
  }
`

const BlogLink = ({ post }) => {
  const { title, slug, publishDate, description } = post

  return (
    <LinkWrapper>
      <Link to={`/blog/${slug}`}>{title}</Link>
      <PostDate>
        <FaRegCalendarAlt />
        <p>{publishDate}</p>
      </PostDate>
      <p>{description.description}</p>
    </LinkWrapper>
  )
}

export default BlogLink