import React from "react"

import Hero from "./../components/Hero"
import Navbar from "./../components/Navbar"
import Project from "../components/Project"
import Section from "../components/Section"

export default () => (
  <div>
    <Navbar />
    <Hero />
    <Section>
      <Project />
    </Section>
  </div>
)
