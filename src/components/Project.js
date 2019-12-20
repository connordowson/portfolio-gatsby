import React from "react"

import TechIcons from "./../components/TechIcons"
import ProjectImage from "./../components/ProjectImage"

import projectStyles from "./../styles/project.module.css"

export default function Project({ project }) {
  return (
    <div className={projectStyles.projectWrapper}>
      <div className={projectStyles.projectInfo}>
        <h2 className={projectStyles.projectInfoTitle}> {project.title} </h2>
        <p className={projectStyles.projectInfoText}> {project.info}</p>
        {/* create an element for each technology listed */}
        <div className={projectStyles.projectInfoTechnologiesWrapper}>
          {project.technologies.map((technology, index) => {
            return (
              <div
                className={projectStyles.projectInfoTechnologies}
                key={index}
              >
                {/* component which returns svg icon depending on project passed in */}
                <TechIcons technology={technology} />
                <a> {technology} </a>
              </div>
            )
          })}
        </div>
        <div className={projectStyles.projectLinksWrapper}>
          <a
            href={project.demoLink}
            target="_blank"
            className={projectStyles.projectLink}
          >
            View Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className={projectStyles.projectLink}
          >
            View Code
          </a>
        </div>
      </div>
      <div className={projectStyles.projectImageWrapper}>
        {/* component which returns an svg illustration depending on the project passed in */}
        <ProjectImage
          className={projectStyles.projectImage}
          project={project.project}
          link={project.demoLink}
        />
      </div>
    </div>
  )
}
