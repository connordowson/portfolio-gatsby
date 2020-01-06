import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaRegCalendarAlt } from "react-icons/fa"
import { animated } from "react-spring"

const LinkWrapper = styled(animated.div)`
  a {
    display: inline-block;
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    color: ${props => props.theme.colors.textColor};

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
