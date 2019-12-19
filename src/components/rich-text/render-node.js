import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"

import RenderEmbeddedContent from "./render-entries"

const options = {
  renderMark: {},
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,

    [BLOCKS.EMBEDDED_ASSET]: node => {
      console.log(node)
      // if (!node) return null
      let file = node.data.target.fields.file
      return <img src={file["en-GB"].url} alt="" />
    },

    [INLINES.EMBEDDED_ENTRY]: node => {
      console.log(node)
      let { fields, sys } = node.data.target
      return <RenderEmbeddedContent fields={fields} sys={sys} />
      // return <h1>{node.data.target.sys.contentType.sys.id}</h1>
    },
  },
}

export default options
