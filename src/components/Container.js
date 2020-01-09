import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 4em 4em 2em;

  &:last-of-type {
    padding: 4em 4em 8em;
  }
`

const Container = ({ children }) => <Wrapper>{children}</Wrapper>

export default Container
