import React from "react"
import styled from "styled-components"
import Heading from "./Heading"
import Img from "gatsby-image"

const LinksWrapper = styled.div`
  border-block-start: 8px solid ${props => props.theme.colors.pink};
  overflow: hidden;
  background: ${props => props.theme.colors.bg100};
  color: ${props => props.theme.colors.textColor};
  margin: 0 auto;
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

  a {
    display: block;
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
  }

  & > :first-child {
    background: ${props => props.theme.colors.bg200};
  }
`

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-top: 0.4em;
  }
`

const BlogLinksContainer = ({ children, data, profilePicture }) => {
  return (
    <LinksWrapper>
      <InfoWrapper>
        <Img
          fixed={profilePicture}
          alt="Connor Dowson"
          style={{
            borderRadius: "50%",
            marginRight: "2em",
            flexShrink: "0",
            flexGrow: "0",
          }}
        />
        <div>
          <Heading headingSize={1} noPadding={true}>
            Welcome to my blog
          </Heading>
          <p>
            Personal blog of Connor Dowson where I will probably write about
            music <span role="img">🎶</span>, code <span role="img">👨‍💻</span>,
            and other random stuff.
          </p>
        </div>
      </InfoWrapper>
      {children}
    </LinksWrapper>
  )
}

export default BlogLinksContainer
