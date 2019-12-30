import React from "react"
import styled from "styled-components"

const Wrapper = styled.main`
  background-image: ${props => props.theme.patternBg};
  background-attachment: fixed;
  background-color: ${props => props.theme.colors.bg300};
  min-height: 100vh;
`
const transitions = styled.css`
  & * {
    transition: all 0.3s ease-in-out;
  }
  transition: all 0.3s ease-in-out;
`

const PageWrapper = ({ children }) => <Wrapper>{children}</Wrapper>

export default PageWrapper
