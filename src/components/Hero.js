import React from "react"

import heroStyles from "./../styles/hero.module.css"
import HomeIllustration from "./HomeIllustration"

export default function Hero() {
  return (
    <div className={heroStyles.homeHeroWrapper}>
      <div className={heroStyles.homeHero}>
        <div className={heroStyles.homeHeroInfo}>
          <h1>
            {" "}
            Hi! My name is Connor Dowson and I am a web developer based in
            Cheltenham. <br /> Why not have a look at some of my{" "}
            <a className={heroStyles.homeHeroInfoLink}>work</a> or send me a{" "}
            <a className={heroStyles.homeHeroInfoLink}>message?</a>{" "}
          </h1>
        </div>

        <div className={heroStyles.homeHeroPhotoWrapper}>
          <HomeIllustration />
          <div className={heroStyles.homeHeroPhoto}></div>
        </div>
      </div>
    </div>
  )
}
