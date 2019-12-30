import React, { useState, useLayoutEffect } from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyles from "../styles/themes/global"
import lightTheme from "../styles/themes/lightTheme"
import darkTheme from "../styles/themes/darkTheme"

import ThemeContext from "./ThemeContext"

import PageWrapper from "./../components/PageWrapper"

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState()

  const [hasToggled, setHasToggled] = useState(false)

  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("isDark")

    if (lastTheme === "true") {
      setIsDark(true)
    } else if (!lastTheme || lastTheme === "false") {
      setIsDark(false)
    }
  }, [isDark])

  return (
    <>
      <ThemeContext.Provider
        value={{
          isDark,
          hasToggled,
          toggleTheme: () => {
            setHasToggled(true)
            setIsDark(!isDark)
            window.localStorage.setItem("isDark", !isDark)
          },
        }}
      >
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <PageWrapper>{children}</PageWrapper>
        </ThemeProvider>
      </ThemeContext.Provider>
      <GlobalStyles />
    </>
  )
}

export default Layout
