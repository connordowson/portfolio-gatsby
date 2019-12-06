import React, { useState, useEffect } from "react"

import Loader from "./../assets/svg/loader.inline.svg"

import TopTracks from "./TopTracks"

import aboutStyles from "./../styles/about.module.css"

const About = () => {
  const [topTracks, setTopTracks] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://connordowson.com/spotify_data.php")
      res
        .json()
        .then(res => setTopTracks(res.items))
        .catch(error => console.log(error))
    }

    fetchData()
  }, [])

  return (
    <div className={aboutStyles.aboutWrapper}>
      {" "}
      <div className={aboutStyles.aboutText}>
        <p>
          Hi I'm Connor and I'm a front end web developer based in Bristol. When I'm not
          making websites I enjoy watching Liverpool and Exeter Chiefs, or
          listening to music. Check out what I've been listening to below!
        </p>
      </div>
      <div>
        {topTracks ? (
          <TopTracks topTracks={topTracks} />
        ) : (
          <div className={aboutStyles.aboutMusicLoadingWrapper}>
            {" "}
            <h2 className={aboutStyles.aboutMusicLoading}>
              {" "}
              Loading music...
            </h2>{" "}
            <Loader className={aboutStyles.aboutMusicLoadSpinner} />{" "}
          </div>
        )}
      </div>
    </div>
  )
}

export default About
