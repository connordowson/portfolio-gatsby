import React, { useContext } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import ThemeContext from "./ThemeContext"

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
  position: relative;
  height: 34px;
  width: 64px;
  background: ${props => props.theme.colors.bg300};
  border: 1px solid ${props => props.theme.colors.pink};
  border-radius: 16px;
  margin-left: 2em;
`

const ToggleButton = styled(animated.div)`
  position: absolute;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  top: 0px;
  background: ${props => props.theme.colors.pink};
  z-index: 5;
  cursor: pointer;
  transition: none;
`

const ThemeToggle = () => {
  const { isDark, toggleTheme, hasToggled } = useContext(ThemeContext)
  const animation = useSpring({
    right: isDark ? 32 : -1,
  })

  // Style to position the toggle button on page load depending on which theme has been previously selected
  const hasntToggledStyles = {
    right: `${isDark ? "32px" : "-1px"}`,
  }

  return (
    <>
      <ToggleWrapper>
        <span role="img">☀️</span>
        <span role="img">🌙</span>
        <ToggleButton
          onClick={toggleTheme}
          style={hasToggled ? animation : hasntToggledStyles}
        />
      </ToggleWrapper>
    </>
  )
}

export default ThemeToggle
