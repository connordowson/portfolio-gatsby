import React from "react"
import AlbumRating from "./../AlbumRating"

const RenderEmbeddedContent = ({ fields, sys }) => {
  const type = sys.contentType.sys.id

  if (type === "album") {
    return (
      <AlbumRating
        title={fields.title["en-GB"]}
        artist={fields.artist["en-GB"]}
        rating={fields.rating["en-GB"]}
        albumArt={fields.albumArt["en-GB"].fields.file["en-GB"].url}
      />
    )
  }

  return null
}

export default RenderEmbeddedContent
