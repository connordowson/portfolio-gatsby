import React from "react"

import PortfolioImage from "./../assets/images/portfolio.png"
import AlgorhythmImage from "./../assets/images/algorhythm.png"
import CalcioImage from "./../assets/images/calcio.png"
import BarBilliardsImage from "./../assets/images/barbilliards.png"

import ExternalLinkIcon from "./../assets/svg/external-link.inline.svg"

import projectStyles from "./../styles/project.module.css"

export default function ProjectImage(props) {
  if (props.project === "portfolio") {
    return (
      <div>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyles.projectImage}
          style={{
            backgroundImage: "url(" + PortfolioImage + ")",
          }}
        >
          {" "}
        </a>
        <ExternalLinkIcon className={projectStyles.projectImageExternalLink} />
      </div>
    )
  }
  if (props.project === "algorhythm") {
    return (
      <div>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyles.projectImage}
          style={{ backgroundImage: "url(" + AlgorhythmImage + ")" }}
        >
          {" "}
        </a>
        <ExternalLinkIcon className={projectStyles.projectImageExternalLink} />
      </div>
    )
  }

  if (props.project === "calcio") {
    return (
      <div>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyles.projectImage}
          style={{ backgroundImage: "url(" + CalcioImage + ")" }}
        >
          {" "}
        </a>
        <ExternalLinkIcon className={projectStyles.projectImageExternalLink} />
      </div>
    )
  }

  if (props.project === "barbilliards") {
    return (
      <div>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyles.projectImage}
          style={{ backgroundImage: "url(" + BarBilliardsImage + ")" }}
        >
          {" "}
        </a>
        <ExternalLinkIcon className={projectStyles.projectImageExternalLink} />
      </div>
    )
  }
}
