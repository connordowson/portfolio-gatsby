import React from "react"
import { graphql } from "gatsby"

import Navbar from "./../components/Navbar"

export default ({ data }) => (
  <div>
    <Navbar />
    <h1> {data.contentfulBlogPost.title} </h1>
    <p>{data.contentfulBlogPost.publishDate} </p>
  </div>
)

export const query = graphql`
  query postQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      publishDate(formatString: "dddd DD MMMM YYYY")
    }
  }
`
