import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { FaGithub, FaEnvelope } from "react-icons/fa"

const AuthorWrapper = styled.div`
  width: 100%;
  padding: 2em;
  background: #edf2f7;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.2em;
    display: inline;
    letter-spacing: 0.02em;
    display: block;
  }
`

const AuthorBioWrapper = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    padding: 0 4em 0 1em;
  }
`

const AuthorName = styled.p`
  font-weight: bold;
`

const AuthorLinks = styled.ul`
  li {
    list-style-type: none;
    text-align: right;
    padding: 0.2em 0;

    a {
      font-size: 1.4em;
      transition: all 0.2s ease-in-out;
      &:hover {
        color: ${props => props.theme.colors.pink};
      }
    }
  }
`

const BlogPostAuthor = ({
  authorPicture,
  authorName,
  shortBio,
  github,
  email,
}) => (
  <AuthorWrapper>
    <AuthorBioWrapper>
      <Img
        fixed={authorPicture}
        alt={`${authorName} profile picture`}
        style={{
          borderRadius: "50%",
          flexShrink: "0",
          flexGrow: "0",
        }}
      />
      <div>
        <AuthorName>{authorName}</AuthorName>
        <p>{shortBio}</p>
      </div>
    </AuthorBioWrapper>
    <AuthorLinks>
      <li>
        <a href={`https://${github}`}>
          <FaGithub />
        </a>
      </li>
      <li>
        <a href={`mailto:${email}`}>
          <FaEnvelope />{" "}
        </a>
      </li>
    </AuthorLinks>
  </AuthorWrapper>
)

export default BlogPostAuthor
