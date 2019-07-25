import React from "react"

import footerStyles from "./../styles/footer.module.css"

import Section from "../components/Section"
import Heading from "../components/Heading"

export default function Footer({ children }) {
  return (
    <footer className={footerStyles.footer}>
      <Section>
        {" "}
        <Heading heading="Contact Me" />
        <a href="mailto:connormwdowson@gmail.com"> connormwdowson@gmail.com </a>
      </Section>{" "}
    </footer>
  )
}
