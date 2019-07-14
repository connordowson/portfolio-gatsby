import React from "react"

import TechIcons from "./../components/TechIcons"
import ProjectIllustration from "./../components/ProjectIllustration"

import projectStyles from "./../styles/project.module.css"

export default function Project(props) {
  return (
    <div className={projectStyles.projectWrapper}>
      <div className={projectStyles.projectInfo}>
        <h2 className={projectStyles.projectInfoTitle}> {props.title} </h2>
        <p className={projectStyles.projectInfoText}> {props.info}</p>
        {/* create an element for each technology listed */}
        <div className={projectStyles.projectInfoTechnologiesWrapper}>
          {props.technologies.map((technology, index) => {
            return (
              <div
                className={projectStyles.projectInfoTechnologies}
                key={index}
              >
                {/* component which returns svg icon depending on props passed in */}
                <TechIcons technology={technology} />
                <a> {technology} </a>
              </div>
            )
          })}
        </div>
        <div className={projectStyles.projectLinksWrapper}>
          <a
            href={props.demoLink}
            target="_blink"
            className={projectStyles.projectLink}
          >
            {" "}
            View Demo{" "}
          </a>
          <a
            href={props.githubLink}
            target="_blink"
            className={projectStyles.projectLink}
          >
            {" "}
            View Code{" "}
          </a>
        </div>{" "}
      </div>
      <div className={projectStyles.projectIllustration}>
        {/* component which returns an svg illustration depending on the props passed in */}
        <ProjectIllustration project={props.name} />
      </div>
    </div>
  )
}
