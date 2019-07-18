import React, { useState, useEffect } from "react"

import SpotifyTrack from './SpotifyTrack'

import aboutStyles from "./../styles/about.module.css"

const About = () => {

    const [topTracks, setTopTracks] = useState({})

    useEffect(() => {

        async function fetchData() {

            const res = await fetch("http://localhost/portfolio/spotify_top_tracks.php");
            res
                .json()
                .then(res => setTopTracks(res.items))
                .catch(error => console.log(error))
        }

        fetchData()


    })


    return (
        <div className={aboutStyles.aboutWrapper}>
            {" "}
            <div className={aboutStyles.aboutText}>
                <p>
                    Hi I'm Connor and I'm a graduate web developer looking for work in the
                    Cheltenham area. I'm interested in front-end development. When I'm not
                    making websites i enjoy watching Liverpool and Exeter Chiefs, or
            listening to music. Check out what I've been listening to below!
            </p>

            </div>

            <div className={aboutStyles.aboutMusicGrid}>

                {topTracks ?
                    Array.from(topTracks).map((track, index) => {

                        return (
                            <SpotifyTrack key={index} title={track.name} artist={track.artists[0].name} imageURL={track.album.images[1].url} />
                        )
                    })
                    : 'loading'}
            </div>

        </div>
    )
}

export default About