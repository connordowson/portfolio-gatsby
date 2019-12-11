import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../styles/theme"
import GlobalStyles from "../styles/global"

const Layout = ({ children }) => (
  <div>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    <GlobalStyles />
  </div>
)

export default Layout
