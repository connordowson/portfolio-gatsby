import React from "react"
import styled from "styled-components"

const SectionWrapper = styled.section`
  margin: 0 auto;

  h2 {
    color: ${props => props.theme.colors.pink};
    margin: 0 auto;
    padding: 1em;
  }
`

export default function Section({ children }) {
  return <SectionWrapper>{children}</SectionWrapper>
}
