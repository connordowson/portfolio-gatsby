import React from "react"
import styled from "styled-components"
import CDLogo from "./CDLogo"
import { Link } from "gatsby"

import colors from "../styles/themes/colors"
import ThemeToggle from "./ThemeToggle"

const NavbarWrapper = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  font-family: ${props => props.theme.typography.textFont};
  padding: 2em 0;
  transition: all 0.3s ease-in-out;

  svg {
    height: 54px;
  }
`

const NavbarContents = styled.nav`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
  }

  div ul li {
    margin-left: 2em;
    display: inline;
    font-size: 1.2em;
    text-decoration: none;
    padding: 0.8em 1em;
    background: ${props => props.theme.colors.pink};
    border-radius: 8px;
  }

  div ul li a {
    color: ${colors.grey100};
    text-decoration: none;
  }
`

export default function Navbar({ pageType }) {
  return (
    <NavbarWrapper>
      <NavbarContents>
        <Link to="/">
          <CDLogo />
          {/* <p>Connor Dowson</p> */}
        </Link>
        <div>
          <ul>
            {pageType === "blog" ? (
              <>
                <li>
                  <Link to="/"> Portfolio </Link>
                </li>

                <li>
                  <Link to="/blog"> Blog </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="#projects"> Projects </Link>
                </li>
                <li>
                  <Link to="#aboutme"> About </Link>
                </li>
                <li>
                  <Link to="mailto:connormwdowson@gmail.com"> Contact </Link>
                </li>
                <li>
                  <Link to="/blog"> Blog </Link>
                </li>
              </>
            )}
          </ul>
          <ThemeToggle />
        </div>
      </NavbarContents>
    </NavbarWrapper>
  )
}
