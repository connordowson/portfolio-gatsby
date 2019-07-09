import React from "react"
import navbarStyles from "./../styles/navbar.module.css"

export default function Navbar() {
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.navbarWrapper}>
        <a className={navbarStyles.navbarName}> CD </a>
        <ul>
          <a className={navbarStyles.navbarLinks}> Projects </a>
          <a className={navbarStyles.navbarLinks}> About </a>
          <a className={navbarStyles.navbarLinks}> GitHub </a>
        </ul>
      </div>
    </nav>
  )
}
