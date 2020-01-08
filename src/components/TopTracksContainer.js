import React from "react"
import styled from "styled-components"

const TopTracksWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.responsive.large}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  ${props =>
    props.theme.mixins.widthMixin(props.theme.responsive.large, "50rem")}

  ${props =>
    props.theme.mixins.widthMixin(props.theme.responsive.medium, "100%")}

  ${props =>
    props.theme.mixins.widthMixin(props.theme.responsive.small, "100%")}
`

const TopTracksContainer = ({ children }) => (
  <TopTracksWrapper>{children}</TopTracksWrapper>
)

export default TopTracksContainer
