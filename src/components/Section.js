import React from "react"
import styled from "styled-components"

const SectionWrapper = styled.section`
  margin: 0 auto;
`

export default function Section({ children }) {
  return <SectionWrapper>{children}</SectionWrapper>
}
