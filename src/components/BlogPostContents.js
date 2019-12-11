import React from "react"
import styled from "styled-components"

const PostWrapper = styled.div`
  font-family: ${props => props.theme.typography.textFont};
  line-height: 1.6;

  /* Give each element a margin bottom, except for the last one */
  & > :not(:last-child) {
    margin-bottom: 1rem;
  }

  h1,
  h2,
  h3 {
    font-weight: bold;
  }

  ul li {
    list-style-position: inside;
  }

  blockquote {
    padding: 1em 2em;
    border-left: 4px solid ${props => props.theme.colors.pink};
    font-style: italic;
    margin: 1em 0;
  }
`

const BlogPostContents = ({ postBody }) => (
  <PostWrapper
    dangerouslySetInnerHTML={{
      __html: postBody,
    }}
  />
)

export default BlogPostContents
