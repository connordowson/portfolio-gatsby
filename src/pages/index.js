import React from "react"
import { Helmet } from "react-helmet"

import Hero from "./../components/Hero"
import Navbar from "./../components/Navbar"
import Project from "../components/Project"
import Section from "../components/Section"

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title> Connor Dowson </title>
    </Helmet>
    <Navbar />
    <Hero />
    <Section>
      <Project />
    </Section>
  </div>
)
