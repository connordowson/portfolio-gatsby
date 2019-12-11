import React from "react"
import styled from "styled-components"
import CDLogo from "./../assets/svg/cd-logo.inline.svg"

const NavbarWrapper = styled.nav`
  position: sticky;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  font-family: ${props => props.theme.typography.textFont};
  padding: 2em 0;

  svg {
    height: 54px;
  }
`

const NavbarContents = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul li {
    margin-left: 2em;
    display: inline;
    font-size: 1.2em;
    text-decoration: none;
    padding: 12px 16px;
    background: ${props => props.theme.colors.pink};
    border-radius: 4px;
  }

  ul li a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    transition: all 100ms ease-in-out;
  }
`

export default function Navbar({ pageType }) {
  return (
    <NavbarWrapper>
      <NavbarContents>
        <a>
          <CDLogo />
        </a>
        <ul>
          {pageType === "blog" ? (
            <>
              <li>
                <a href="/"> Portfolio </a>
              </li>

              <li>
                <a href="/blog"> Blog </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="#projects"> Projects </a>
              </li>
              <li>
                <a href="#aboutme"> About </a>
              </li>
              <li>
                <a href="mailto:connormwdowson@gmail.com"> Contact </a>
              </li>
              <li>
                <a href="/blog"> Blog </a>
              </li>
            </>
          )}
        </ul>
      </NavbarContents>
    </NavbarWrapper>
  )
}
