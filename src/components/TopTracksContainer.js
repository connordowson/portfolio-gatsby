import React from "react"
import styled from "styled-components"
import SpotifyTrack from "./SpotifyTrack"
import Heading from "./Heading"

const TopTracksWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  max-width: 90rem;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.responsive.large}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (max-width: ${props => props.theme.responsive.small}) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  ${props =>
    props.theme.mixins.widthMixin(props.theme.responsive.large, "50rem")}

  ${props =>
    props.theme.mixins.widthMixin(props.theme.responsive.medium, "100%")}

  ${props =>
    props.theme.mixins.widthMixin(props.theme.responsive.small, "100%")}
`

const Loading = styled.div`
  grid-column: 2;
  padding: 2em;
  text-align: center;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.bg100};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`

const TopTracksContainer = ({ children, topTracks }) => (
  <TopTracksWrapper>
    {topTracks ? (
      Array.from(topTracks).map((track, index) => {
        return (
          <SpotifyTrack
            key={index}
            title={track.name}
            artist={track.artists[0].name}
            imageURL={track.album.images[1].url}
            audioURL={track.preview_url}
            listenURL={track.external_urls.spotify}
          />
        )
      })
    ) : (
      <Loading>
        <h3>Loading music...</h3>
      </Loading>
    )}
  </TopTracksWrapper>
)

export default TopTracksContainer
