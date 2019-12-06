import React from "react"
import { graphql } from "gatsby";

import AlbumRating from "./../components/AlbumRating";

export default ({data}) => (

    <div>
        <h1> Title </h1>

        <AlbumRating albumInfo={data.contentfulAlbumBlogPost.album[0]} />
        <p>{data.contentfulAlbumBlogPost.publishDate} </p>
    </div>
)

export const query = graphql`
  query albumBlogPostQuery($id: String!) {
    contentfulAlbumBlogPost(id: { eq: $id }) {
      title
      album {
        title
        artist
        albumArt{
          file{
                url
            }
        }
        rating
        releaseDate(formatString: "dddd DD MMMM YYYY")
      }
      publishDate(formatString: "dddd DD MMMM YYYY")
    }
  }
`;