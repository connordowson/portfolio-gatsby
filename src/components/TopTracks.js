import React from "react"

import SpotifyTrack from "./SpotifyTrack"
import aboutStyles from "./../styles/about.module.css"
import Heading from "../components/Heading"


export default function TopTracks(props) {
  return (

    <div>
      <Heading heading={"What I've been listening to!"} />
      <div className={aboutStyles.aboutMusicGrid}>

        {
          Array.from(props.topTracks).map((track, index) => {

            return (
              <SpotifyTrack
                key={index}
                title={track.name}
                artist={track.artists[0].name}
                imageURL={track.album.images[1].url}
                audioURL={track.preview_url}
                listenURL={track.external_urls.spotify}
              />)
          })
        }

      </div>

    </div>

  )

}
