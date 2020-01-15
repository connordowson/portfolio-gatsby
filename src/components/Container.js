import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 4em 4em 2em;

  &:last-of-type {
    padding: 4em 4em 8em;
  }

  @media (max-width: ${props => props.theme.responsive.small}) {
    padding: 1em 1em 0.5em;

    &:last-of-type {
      padding: 1em 1em 2em;
    }
  }
`

const Container = ({ children }) => <Wrapper>{children}</Wrapper>

export default Container
