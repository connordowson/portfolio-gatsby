import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 2em 2em 4em;
`

const Container = ({ children }) => <Wrapper>{children}</Wrapper>

export default Container
