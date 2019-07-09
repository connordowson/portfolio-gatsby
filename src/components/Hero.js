import React from "react"

import heroStyles from "./../styles/hero.module.css"

export default function Hero() {
  return (
    <div className={heroStyles.homeHeroWrapper}>
      <div className={heroStyles.homeHero}>
        <div className={heroStyles.homeHeroInfo}>
          <h1> Connor Dowson </h1>
          <h1> Web developer </h1>
          <h1> Cheltenham </h1>
        </div>

        <div className={heroStyles.homeHeroIllustration}>illustration</div>
      </div>
    </div>
  )
}
