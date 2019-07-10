import React from "react"
import { Helmet } from "react-helmet"

import Hero from "./../components/Hero"
import Navbar from "./../components/Navbar"
import Project from "../components/Project"
import Section from "../components/Section"

import projectsData from "./../projectsData.js"

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title> Connor Dowson </title>
    </Helmet>
    <Navbar />
    <Hero />
    <Section>
      {projectsData.map((project, index) => {
        console.log(project)
        return (
          <Project
            title={project.title}
            name={project.name}
            info={project.info}
            technologies={project.technologies}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        )
      })}
    </Section>
  </div>
)
