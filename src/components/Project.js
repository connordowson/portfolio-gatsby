import React from "react"
import TechIcons from "./../components/TechIcons"
import colors from "./../styles/themes/colors"

import styled from "styled-components"
import Image from "gatsby-image"

import Heading from "./Heading"

const ProjectWrapper = styled.div`
  color: ${props => props.theme.colors.textColor};
  margin: 0 auto;
  max-width: 70em;
  display: flex;
  box-shadow: ${props => props.theme.shadows.large};
  border-block-start: 8px solid ${props => props.theme.colors.pink};
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: ${props => props.theme.responsive.large}) {
    width: 70em;
  }

  @media (max-width: ${props => props.theme.responsive.medium}) {
    width: 40em;
  }

  @media (max-width: ${props => props.theme.responsive.small}) {
    width: 100%;
  }

  &:not(:last-of-type) {
    margin-bottom: 2em;
  }
`

const ProjectInfo = styled.div`
  background: ${props => props.theme.colors.bg100};
  /* border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.large};
  overflow: hidden; */
  flex: 3;
  & > div,
  & > h2 {
    padding: 2rem;
  }

  & > :nth-child(odd) {
    background: ${props => props.theme.colors.bg200};
  }
`

const ProjectImage = styled(Image)`
  /* flex: 0 1; */
  /* object-position: top center;
  object-fit: cover;
  height: max-content; */
  flex: 1;
  overflow: hidden;
  > picture img {
    height: auto !important;
  }
  > img {
    height: auto !important;
  }
  > * {
    padding-bottom: 0 !important;
  }
`

const Test = styled.div`
  background: red;
  /* height: 100%; */
  overflow: hidden;
`

const TechnologiesWrapper = styled.div`
  margin-top: 1em;
  div {
    display: inline-flex;
    align-items: center;
    margin-right: 1.6em;

    svg {
      height: 22px;
      fill: ${props => props.theme.colors.pink};
      margin-right: 0.8em;
    }
  }
`

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.8em;
  border-radius: 4px;
  text-decoration: none;
  background: ${props => props.theme.colors.fg};
  color: ${props => props.theme.colors.bg};
  margin-right: 1em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const Project = ({ project }) => {
  const {
    title,
    description,
    image,
    technologies,
    gitHubLink,
    demoLink,
  } = project

  return (
    <ProjectWrapper>
      <ProjectInfo>
        <Heading headingSize={2}>{title}</Heading>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html,
            }}
          />
          <TechnologiesWrapper>
            {technologies.map(technology => (
              <div>
                <TechIcons technology={technology} />
                <p>{technology}</p>
              </div>
            ))}
          </TechnologiesWrapper>
        </div>
        <div>
          {demoLink && <ProjectLink href={demoLink}>View Demo</ProjectLink>}

          {gitHubLink && <ProjectLink href={gitHubLink}>View Code</ProjectLink>}
        </div>
      </ProjectInfo>
      <ProjectImage
        fluid={image.fluid}
        imgStyle={{
          objectFit: "cover",
          objectPosition: "center top",
          height: "100%",
        }}
      />
    </ProjectWrapper>
  )
}

export default Project
