import React from "react"
import styled from "styled-components"
import CDLogo from "./CDLogo"
import { Link } from "gatsby"

import colors from "../styles/themes/colors"
import ThemeToggle from "./ThemeToggle"

const NavbarWrapper = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  font-family: ${props => props.theme.typography.textFont};
  padding: 2em 0;
  transition: all 0.3s ease-in-out;

  svg {
    height: 56px;
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
    display: inline;
  }

  div ul li a {
    margin-left: 2rem;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 0.8rem 1rem;
    background: ${props => props.theme.colors.pink};
    border-radius: 8px;
    color: ${colors.grey100};
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
