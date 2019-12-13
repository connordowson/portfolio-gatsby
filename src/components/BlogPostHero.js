import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const HeroImage = styled.div`
  /* width: 100%;
  height: 24em;
  overflow: hidden;
  display: flex; */
`

const BlogPostHero = ({ heroImage }) => (
  <HeroImage>
    <Img
      fluid={heroImage}
      objectFit="cover"
      objectPosition="center"
      style={{
        height: "24em",
      }}
      alt=""
    />
  </HeroImage>
)

export default BlogPostHero
