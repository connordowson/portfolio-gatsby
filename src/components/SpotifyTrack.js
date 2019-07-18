import React from "react"
import SpotifyIcon from "./../assets/svg/spotify-icon.inline.svg"

import aboutStyles from "./../styles/about.module.css"

export default function SpotifyTrack(props) {
  return (
    <div className={aboutStyles.aboutMusicTrack}>
      <a className={aboutStyles.aboutMusicTrackTitle}>{props.title}</a>

      <a className={aboutStyles.aboutMusicTrackArtist}>{props.artist} </a>
      <a href={props.listenURL} target="_blank">
        {" "}
        <img
          className={aboutStyles.aboutMusicTrackArtwork}
          src={props.imageURL}
        />
        <SpotifyIcon className={aboutStyles.aboutMusicSpotifyIcon} />
      </a>
    </div>
  )
}
