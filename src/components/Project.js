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
  flex-direction: column;
  box-shadow: ${props => props.theme.shadows.large};
  border-block-start: 8px solid ${props => props.theme.colors.pink};
  border-radius: 8px;
  overflow: hidden;
`

const ProjectImage = styled(Image)`
  height: 16rem;
  width: 100%;
`

const ProjectInfo = styled.div`
  background: ${props => props.theme.colors.bg100};
  display: flex;
  flex-direction: column;
  flex: 1;
  /* justify-content: space-between; */

  & > div,
  & > h3 {
    padding: 2rem;
  }

  & > :nth-child(odd) {
    background: ${props => props.theme.colors.bg200};
  }
`

const TechnologiesWrapper = styled.div`
  div {
    display: inline-flex;
    align-items: center;
    margin-right: 1.6em;
    margin-top: 2rem;

    svg {
      height: 22px;
      fill: ${props => props.theme.colors.pink};
      margin-right: 0.8em;
    }
  }
`

const ProjectLink = styled.a`
  display: inline-flex;
  justify-content: center;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  background: ${props => props.theme.colors.fg};
  color: ${props => props.theme.colors.bg};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  width: calc(50% - 1rem);

  &:hover {
    color: ${props => props.theme.colors.pink};
  }
`

const LinksWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
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
      <ProjectImage
        fluid={image.fluid}
        imgStyle={{
          objectFit: "cover",
          objectPosition: "center top",
          height: "100%",
        }}
      />
      <ProjectInfo>
        <Heading headingSize={3}>{title}</Heading>
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
        <LinksWrapper>
          {demoLink && <ProjectLink href={demoLink}>View Demo</ProjectLink>}
          {gitHubLink && <ProjectLink href={gitHubLink}>View Code</ProjectLink>}
        </LinksWrapper>
      </ProjectInfo>
    </ProjectWrapper>
  )
}

export default Project
