import React from "react"
import navbarStyles from "./../styles/navbar.module.css"
import CDLogo from "./../assets/svg/cd-logo.inline.svg"

export default function Navbar() {
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.navbarWrapper}>
        <a className={navbarStyles.navbarName}>
          {" "}
          <CDLogo />{" "}
        </a>
        <ul className={navbarStyles.navbarLinks}>
          <li>
            {" "}
            <a href="#projects"> Projects </a>
          </li>
          <li>
            {" "}
            <a> About </a>
          </li>
          <li>
            {" "}
            <a> Contact </a>
          </li>
          {/* <li>
            {" "}
            <a> GitHub </a>
          </li>
          <li>
            {" "}
            <a> dribbble </a>
          </li>
          <li>
            {" "}
            <a> LinkedIn </a>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}
