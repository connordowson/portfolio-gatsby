import React from "react"
import { Helmet } from "react-helmet"

import Hero from "./../components/Hero"
import Navbar from "./../components/Navbar"
import Project from "../components/Project"
import Section from "../components/Section"
import Heading from "../components/Heading"

import About from "../components/About"

import projectsData from "./../projectsData.js"

export default () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title> Connor Dowson </title>
        </Helmet>
        <Navbar />
        <Hero />
        <Section id="projects">
            <Heading heading="Projects" />
            {projectsData.map((project, index) => {
                return (
                    <Project key={index}
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

        <Section>
            <Heading heading="About Me" />
            <About />
        </Section>
    </div>
)
