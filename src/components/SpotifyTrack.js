import React from "react"

import aboutStyles from "./../styles/about.module.css"

export default function SpotifyTrack(props) {
  return (
    <div className={aboutStyles.aboutMusicTrack}>
      <a className={aboutStyles.aboutMusicTrackTitle}>{props.title}</a>

      <a className={aboutStyles.aboutMusicTrackArtist}>{props.artist} </a>
      <img
        className={aboutStyles.aboutMusicTrackArtwork}
        src={props.imageURL}
      />
    </div>
  )
}
