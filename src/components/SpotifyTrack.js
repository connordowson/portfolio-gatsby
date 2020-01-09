import React from "react"
import styled from "styled-components"
import SpotifyIcon from "./../assets/svg/spotify-icon.inline.svg"
import Img from "gatsby-image"

const TrackWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.bg100};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

  img {
    position: absolute;
    right: 0;
    height: 100%;
    border-radius: 0 8px 8px 0;
  }
`

const TrackInfo = styled.div`
  padding: 1em;
  max-width: 80%;
`

const TrackTitle = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`

const TrackArtist = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`

const AlbumArtwork = styled(Img)``

const SpotifyTrack = props => {
  return (
    <TrackWrapper>
      <TrackInfo>
        <TrackTitle>{props.title}</TrackTitle>
        <TrackArtist>{props.artist} </TrackArtist>
      </TrackInfo>
      <img src={props.imageURL} />

      {/* <a href={props.listenURL} target="_blank" rel="noopener noreferrer">
        <AlbumArtwork src={props.imageURL} />
        <img src={props.imageURL} />
        <SpotifyIcon />
      </a> */}
    </TrackWrapper>
  )
}

export default SpotifyTrack
