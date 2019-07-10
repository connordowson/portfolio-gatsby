import React from "react"
import Algorhythm from "./../assets/algorhythm-illustration.svg"
import Calcio from "./../assets/calcio-illustration-01.svg"

export default function ProjectIllustration(props) {
  if (props.project === "algorhythm") {
    return <Algorhythm />
  }

  if (props.project === "calcio") {
    return <Calcio />
  }
}
