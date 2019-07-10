import React from "react"
import Algorhythm from "./../assets/algorhythm-illustration.svg"

export default function ProjectIllustration(props) {
  if (props.project === "algorhythm") {
    return <Algorhythm />
  }
}
