import React from "react"

import DjangoIcon from "./../assets/svg/django-icon.inline.svg"
import PostgresIcon from "./../assets/svg/postgres-icon.inline.svg"
import SassIcon from "./../assets/svg/sass-icon.inline.svg"
import ReactIcon from "./../assets/svg/react-icon.inline.svg"
import GhostIcon from "./../assets/svg/ghost-icon.inline.svg"
import WebpackIcon from "./../assets/svg/webpack-icon.inline.svg"
import GatsbyIcon from "./../assets/svg/gatsby-icon.inline.svg"

export default function TechIcons({ technology }) {
  if (technology === "Django") {
    return <DjangoIcon />
  } else if (technology === "PostgreSQL") {
    return <PostgresIcon />
  } else if (technology === "Sass") {
    return <SassIcon />
  } else if (technology === "React") {
    return <ReactIcon />
  } else if (technology === "Ghost") {
    return <GhostIcon />
  } else if (technology === "Webpack") {
    return <WebpackIcon />
  } else if (technology === "Gatsby") {
    return <GatsbyIcon />
  } else return null
}
