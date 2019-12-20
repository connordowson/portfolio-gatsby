import React from "react"
import styled from "styled-components"

const AlbumWrapper = styled.div`
  background: ${props => props.theme.colors.white};
  display: block;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid #e2e8f0; */
  border-radius: 8px;
  padding: 0.5em 1em;
  margin: 2em 0;
  background: #edf2f7;
`
const AlbumInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    border-radius: 4px;
  }
  div {
    padding: 1em 0 1em 1em;
  }

  * {
    padding: 0.2em 0;
  }
`

const AlbumRating = styled.div`
  p {
    font-size: 4em;
    font-weight: bold;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }
`

export default props => (
  <AlbumWrapper>
    <AlbumInfo>
      <img height="100px" src={props.albumArt} />
      <div>
        <h2> {props.title} </h2>
        <h3> {props.artist} </h3>
      </div>
    </AlbumInfo>

    {props.rating && (
      <AlbumRating>
        <p> {props.rating} </p>
      </AlbumRating>
    )}
  </AlbumWrapper>
)
