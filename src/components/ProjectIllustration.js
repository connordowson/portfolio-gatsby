import React from "react"
import Algorhythm from "./../assets/svg/algorhythm-illustration.inline.svg"
import Calcio from "./../assets/svg/calcio-illustration.inline.svg"

export default function ProjectIllustration(props) {
  if (props.project === "algorhythm") {
    return <Algorhythm />
  }

  if (props.project === "calcio") {
    return <Calcio />
  }
}
