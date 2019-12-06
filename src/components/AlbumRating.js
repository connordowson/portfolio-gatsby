import React from "react"
import styled from "styled-components"

const AlbumWrapper = styled.div`

    background: var(--white);
    display: block;
    width: 600px;
    border-radius: 8px;
    margin: 0 auto;
    padding: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, .25), 0 8px 16px -8px rgba(0, 0, 0, .3), 0 -6px 16px -6px rgba(0, 0, 0, .025);

`
const AlbumInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 1em 0; */
    div{
        padding: 1em 0 1em 1em;
    }

    *{
        padding: 0.2em 0;
    }
`

const AlbumRating = styled.div`

    p{
        font-size: 4em;
        font-weight: bold;
        text-align: center;
        font-variant-numeric: tabular-nums;
    }
`

export default ({albumInfo}) => (

    <AlbumWrapper>
        <AlbumInfo>
            <img height="120px" src={albumInfo.albumArt.file.url} />
            <div>
                <h2> {albumInfo.title} </h2>
                <h3> {albumInfo.artist} </h3>
                <a> ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ </a>
            </div>
        </AlbumInfo>

        <AlbumRating>
            <p> {albumInfo.rating} </p>
        </AlbumRating>
    </AlbumWrapper>
)