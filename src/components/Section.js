import React from "react"

import sectionStyles from "./../styles/section.module.css"

export default function Section({ children, idName }) {
  return (
    <section className={sectionStyles.section} id={idName}>
      {children}
    </section>
  )
}
