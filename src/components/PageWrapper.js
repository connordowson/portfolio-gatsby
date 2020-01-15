import React, { useContext, useEffect } from "react"
import styled, { css } from "styled-components"
import ThemeContext from "./ThemeContext"

const Wrapper = styled.main`
  background-image: ${props => props.theme.patternBg};
  background-attachment: fixed;
  background-color: ${props => props.theme.colors.bg300};
  min-height: 100vh;
`

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default PageWrapper
