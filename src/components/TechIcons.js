import React from "react"

import DjangoIcon from "./../assets/svg/django-icon.inline.svg"
import PostgresIcon from "./../assets/svg/postgres-icon.inline.svg"
import SassIcon from "./../assets/svg/sass-icon.inline.svg"
import ReactIcon from "./../assets/svg/react-icon.inline.svg"
import GhostIcon from "./../assets/svg/ghost-icon.inline.svg"
import WebpackIcon from "./../assets/svg/webpack-icon.inline.svg"

export default function TechIcons(props) {
  if (props.technology === "Django") {
    return <DjangoIcon />
  }

  if (props.technology === "PostgreSQL") {
    return <PostgresIcon />
  }

  if (props.technology === "Sass") {
    return <SassIcon />
  }

  if (props.technology === "React") {
    return <ReactIcon />
  }

  if (props.technology === "Ghost") {
    return <GhostIcon />
  }

  if (props.technology === "Webpack") {
    return <WebpackIcon />
  }
}
