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
        <ul>
          <a href="#projects" className={navbarStyles.navbarLinks}>
            {" "}
            Projects{" "}
          </a>
          <a className={navbarStyles.navbarLinks}> About </a>
          <a className={navbarStyles.navbarLinks}> Contact </a>
        </ul>
      </div>
    </nav>
  )
}
