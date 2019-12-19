import React from "react"
import headingStyles from "./../styles/heading.module.css"

export default function Heading(props) {
  return (
    <div className={headingStyles.headingWrapper}>
      <h1 className={headingStyles.heading}> {props.heading} </h1>
    </div>
  )
}
