import React from "react"
import AlbumInline from "../AlbumInline"

const RenderEmbeddedContent = ({ fields, sys }) => {
  const type = sys.contentType.sys.id

  if (type === "album") {
    return (
      <AlbumInline
        title={fields.title["en-GB"]}
        artist={fields.artist["en-GB"]}
        rating={fields.rating ? fields.rating["en-GB"] : false}
        albumArt={fields.albumArt["en-GB"].fields.file["en-GB"].url}
      />
    )
  }

  return null
}

export default RenderEmbeddedContent
