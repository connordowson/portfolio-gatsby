import React, { useContext, useEffect } from "react"
import styled, { css } from "styled-components"
import ThemeContext from "./ThemeContext"

const noTransitions = css`
  & * {
    transition: none;
  }
  transition: none;
`
const transitions = css`
  & * {
    transition: all 0.3s ease-in-out;
  }
  transition: all 0.3s ease-in-out;
`

const Wrapper = styled.main`
  background-image: ${props => props.theme.patternBg};
  background-attachment: fixed;
  background-color: ${props => props.theme.colors.bg300};
  min-height: 100vh;

  ${props => (props.hasToggled ? transitions : noTransitions)};
`

const PageWrapper = ({ children }) => {
  const { hasToggled } = useContext(ThemeContext)

  return <Wrapper hasToggled={hasToggled}>{children}</Wrapper>
}

export default PageWrapper
