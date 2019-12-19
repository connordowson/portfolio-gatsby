import React from "react"
import styled from "styled-components"
import { FaRegCalendarAlt, FaTags } from "react-icons/fa"

const DetailsWrapper = styled.div`
  width: 100%;
  padding: 2em;
  background: #edf2f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PostDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: 300;
  font-size: 1.2em;
  align-items: center;

  svg {
    margin-right: 0.4em;
    color: ${props =>
      (props.pinkIcon ? props.theme.colors.pink : props.theme.colors.black)};
  }
`

const PostTag = styled.p`
  padding: 0.2em 0.4em;
  background: ${props => props.theme.colors.pink};
  color: ${props => props.theme.colors.white};
  background: #fed7e2;
  color: ${props => props.theme.colors.pink};
  border-radius: 4px;
  font-style: initial;
  font-size: 1em;

  &:not(:last-of-type) {
    margin-right: 0.4em;
  }
`

const BlogPostTitle = ({ datePublished, tags }) => (
  <DetailsWrapper>
    <PostDetailsContainer>
      <FaRegCalendarAlt />
      <p>{datePublished}</p>
    </PostDetailsContainer>

    {tags && tags.length > 0 && (
      <PostDetailsContainer pinkIcon>
        <FaTags />
        {tags.map((tag, index) => (
          <PostTag key={index}> {tag} </PostTag>
        ))}
      </PostDetailsContainer>
    )}
  </DetailsWrapper>
)

export default BlogPostTitle
