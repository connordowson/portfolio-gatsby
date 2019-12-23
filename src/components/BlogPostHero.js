import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const BlogPostHero = ({ heroImage }) => (
  <Img
    fluid={heroImage}
    objectFit="cover"
    objectPosition="center"
    style={{
      height: "24em",
    }}
    alt=""
  />
)

export default BlogPostHero
