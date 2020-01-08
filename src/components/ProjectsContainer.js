import React from "react"
import styled from "styled-components"

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media(max-width: 70em){
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows:repeat(3, minmax(0, 1fr));
    width: 50em;
  }

  grid-auto-rows: 1fr;
  grid-gap: 2rem;
  max-width: 90rem;
  margin: 0 auto;
  ${props =>
    props.theme.mixins.widthMixin(props.theme.responsive.large, "50rem")}

  ${props =>
    props.theme.mixins.widthMixin(props.theme.responsive.medium, "100%")}

  ${props =>
    props.theme.mixins.widthMixin(props.theme.responsive.small, "100%")}
`

const ProjectsContainer = ({ children }) => {
  return <ProjectsWrapper>{children}</ProjectsWrapper>
}

export default ProjectsContainer
