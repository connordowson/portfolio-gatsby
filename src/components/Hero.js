import React from "react"

import heroStyles from "./../styles/hero.module.css"

export default function Hero() {
  return (
    <div className={heroStyles.homeHeroWrapper}>
      <div className={heroStyles.homeHero}>
        <div className={heroStyles.homeHeroInfo}>
          <h1>
            {" "}
            Hi! My name is Connor Dowson and I'm a front end web developer based in
            Bristol. <br /> Why not have a look at some of my{" "}
            <a href="#projects" className={heroStyles.homeHeroInfoLink}>
              work
            </a>{" "}
            or send me a{" "}
            <a
              href="mailto:connormwdowson@gmail.com"
              className={heroStyles.homeHeroInfoLink}
            >
              message?
            </a>{" "}
          </h1>
        </div>

        <div className={heroStyles.homeHeroPhotoWrapper}>
          <div className={heroStyles.homeHeroPhoto}></div>
        </div>
      </div>
    </div>
  )
}
