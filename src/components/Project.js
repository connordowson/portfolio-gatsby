import React from "react"

import TechIcons from "./../components/TechIcons"
import ProjectIllustration from "./../components/ProjectIllustration"

import projectStyles from "./../styles/project.module.css"

export default function Project() {
  return (
    <div className={projectStyles.projectWrapper}>
      <div className={projectStyles.projectInfo}>
        <h2 className={projectStyles.projectInfoTitle}>
          {" "}
          algorhythm - dissertation{" "}
        </h2>
        <p className={projectStyles.projectInfoText}>
          {" "}
          For my dissertation I created a site using Django which recommended
          new music to users based on their current listening habits. The
          Spotify API was used to discover which songs users had listened to
          most over 3 different time ranges.
        </p>
        <div className={projectStyles.projectInfoTechnologies}>
          <a>
            {" "}
            <TechIcons technology={"django"} />
            Django
          </a>
          <a>
            {" "}
            <TechIcons technology={"sass"} />
            Sass{" "}
          </a>
          <a>
            {" "}
            <TechIcons technology={"postgres"} />
            PostgreSQL{" "}
          </a>
        </div>
        <div className={projectStyles.projectLinksWrapper}>
          <a className={projectStyles.projectLink}> View Demo </a>
          <a className={projectStyles.projectLink}> View Code </a>
        </div>{" "}
      </div>
      <div className={projectStyles.projectIllustration}>
        <ProjectIllustration project={"algorhythm"} />
      </div>
    </div>
  )
}
