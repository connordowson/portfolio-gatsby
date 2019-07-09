import React from "react"

import projectStyles from "./../styles/project.module.css"

export default function Project() {
  return (
    <div className={projectStyles.projectWrapper}>
      <div className={projectStyles.projectImage}></div>

      <div className={projectStyles.projectInfo}>
        <h2> algorhythm - dissertation </h2>

        <p className={projectStyles.projectInfoText}>
          {" "}
          For my dissertation I created a site using Django which recommended
          new music to users based on their current listening habits. The
          Spotify API was used to discover which songs users had listened to
          most over 3 different time ranges.
        </p>

        <ul className={projectStyles.projectInfoTechnologies}>
          <a> Django </a>
          <a> Sass </a>
          <a> PostgreSQL </a>
        </ul>

        <div className={projectStyles.projectLinksWrapper}>
          <a className={projectStyles.projectLink}> View Demo </a>
          <a className={projectStyles.projectLink}> GitHub </a>
        </div>
      </div>
    </div>
  )
}
