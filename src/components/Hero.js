import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import GatsbyImage from "gatsby-image"

const HeroWrapper = styled.div`
  height: 100vh;
  background: ${props => props.theme.colors.bg300};
  color: ${props => props.theme.colors.textColor};
`
const HeroContent = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-center;
  align-items: center;

  svg {
    position: absolute;
    bottom: -60px;
    right: -60px;
    fill: ${props => props.theme.colors.pink};
    z-index: 1;
    width: 300px;
    height: 300px;
  }
`

const HeroText = styled.div`
  font-size: 2.2em;
  margin: 2em;
  max-width: 50%;

  a {
    color: ${props => props.theme.colors.pink};
    font-weight: 700;
    text-decoration: none;
    transition: all 0.15s ease-in-out;

    &:hover {
      text-shadow: 3px 3px ${props => props.theme.colors.textColor};
      cursor: pointer;
    }
  }
`

const HeroImage = styled(GatsbyImage)`
  width: 400px;
  height: 500px;
  position: relative;
  z-index: 2;

  /* margin: 2em; */
`

const Hero = ({ heroImage }) => (
  <HeroWrapper>
    <HeroContent>
      <HeroText>
        <p>
          Hi! My name is Connor Dowson and I'm a front end web developer based
          in Bristol. <br /> Why not have a look at some of my{" "}
          <a href="#projects">work</a> or send me a{" "}
          <a href="mailto:connormwdowson@gmail.com">message?</a>
        </p>
      </HeroText>
      <div style={{ position: "relative" }}>
        <HeroImage
          objectFit="cover"
          objectPosition="center"
          fluid={heroImage}
          alt=""
        />
        <svg viewBox="0 0 100 100">
          <defs>
            <pattern
              height="100"
              id="a"
              patternContentUnits="userSpaceOnUse"
              patternUnits="userSpaceOnUse"
              width="100"
            >
              <g stroke-width="0">
                <circle cx="5" cy="5" r="1.5" />
                <circle cx="15" cy="5" r="1.5" />
                <circle cx="25" cy="5" r="1.5" />
                <circle cx="35" cy="5" r="1.5" />
                <circle cx="45" cy="5" r="1.5" />
                <circle cx="55" cy="5" r="1.5" />
                <circle cx="65" cy="5" r="1.5" />
                <circle cx="75" cy="5" r="1.5" />
                <circle cx="85" cy="5" r="1.5" />
                <circle cx="95" cy="5" r="1.5" />
              </g>
              <g stroke-width="0">
                <circle cx="5" cy="15" r="1.5" />
                <circle cx="15" cy="15" r="1.5" />
                <circle cx="25" cy="15" r="1.5" />
                <circle cx="35" cy="15" r="1.5" />
                <circle cx="45" cy="15" r="1.5" />
                <circle cx="55" cy="15" r="1.5" />
                <circle cx="65" cy="15" r="1.5" />
                <circle cx="75" cy="15" r="1.5" />
                <circle cx="85" cy="15" r="1.5" />
                <circle cx="95" cy="15" r="1.5" />
              </g>
              <g stroke-width="0">
                <circle cx="5" cy="25" r="1.5" />
                <circle cx="15" cy="25" r="1.5" />
                <circle cx="25" cy="25" r="1.5" />
                <circle cx="35" cy="25" r="1.5" />
                <circle cx="45" cy="25" r="1.5" />
                <circle cx="55" cy="25" r="1.5" />
                <circle cx="65" cy="25" r="1.5" />
                <circle cx="75" cy="25" r="1.5" />
                <circle cx="85" cy="25" r="1.5" />
                <circle cx="95" cy="25" r="1.5" />
              </g>
              <g stroke-width="0">
                <circle cx="5" cy="35" r="1.5" />
                <circle cx="15" cy="35" r="1.5" />
                <circle cx="25" cy="35" r="1.5" />
                <circle cx="35" cy="35" r="1.5" />
                <circle cx="45" cy="35" r="1.5" />
                <circle cx="55" cy="35" r="1.5" />
                <circle cx="65" cy="35" r="1.5" />
                <circle cx="75" cy="35" r="1.5" />
                <circle cx="85" cy="35" r="1.5" />
                <circle cx="95" cy="35" r="1.5" />
              </g>
              <g stroke-width="0">
                <circle cx="5" cy="45" r="1.5" />
                <circle cx="15" cy="45" r="1.5" />
                <circle cx="25" cy="45" r="1.5" />
                <circle cx="35" cy="45" r="1.5" />
                <circle cx="45" cy="45" r="1.5" />
                <circle cx="55" cy="45" r="1.5" />
                <circle cx="65" cy="45" r="1.5" />
                <circle cx="75" cy="45" r="1.5" />
                <circle cx="85" cy="45" r="1.5" />
                <circle cx="95" cy="45" r="1.5" />
              </g>
              <g stroke-width="0">
                <circle cx="5" cy="55" r="1.5" />
                <circle cx="15" cy="55" r="1.5" />
                <circle cx="25" cy="55" r="1.5" />
                <circle cx="35" cy="55" r="1.5" />
                <circle cx="45" cy="55" r="1.5" />
                <circle cx="55" cy="55" r="1.5" />
                <circle cx="65" cy="55" r="1.5" />
                <circle cx="75" cy="55" r="1.5" />
                <circle cx="85" cy="55" r="1.5" />
                <circle cx="95" cy="55" r="1.5" />
              </g>
              <g stroke-width="0">
                <circle cx="5" cy="65" r="1.5" />
                <circle cx="15" cy="65" r="1.5" />
                <circle cx="25" cy="65" r="1.5" />
                <circle cx="35" cy="65" r="1.5" />
                <circle cx="45" cy="65" r="1.5" />
                <circle cx="55" cy="65" r="1.5" />
                <circle cx="65" cy="65" r="1.5" />
                <circle cx="75" cy="65" r="1.5" />
                <circle cx="85" cy="65" r="1.5" />
                <circle cx="95" cy="65" r="1.5" />
              </g>
              <g stroke-width="0">
                <circle cx="5" cy="75" r="1.5" />
                <circle cx="15" cy="75" r="1.5" />
                <circle cx="25" cy="75" r="1.5" />
                <circle cx="35" cy="75" r="1.5" />
                <circle cx="45" cy="75" r="1.5" />
                <circle cx="55" cy="75" r="1.5" />
                <circle cx="65" cy="75" r="1.5" />
                <circle cx="75" cy="75" r="1.5" />
                <circle cx="85" cy="75" r="1.5" />
                <circle cx="95" cy="75" r="1.5" />
              </g>
              <g stroke-width="0">
                <circle cx="5" cy="85" r="1.5" />
                <circle cx="15" cy="85" r="1.5" />
                <circle cx="25" cy="85" r="1.5" />
                <circle cx="35" cy="85" r="1.5" />
                <circle cx="45" cy="85" r="1.5" />
                <circle cx="55" cy="85" r="1.5" />
                <circle cx="65" cy="85" r="1.5" />
                <circle cx="75" cy="85" r="1.5" />
                <circle cx="85" cy="85" r="1.5" />
                <circle cx="95" cy="85" r="1.5" />
              </g>
              <g stroke-width="0">
                <circle cx="5" cy="95" r="1.5" />
                <circle cx="15" cy="95" r="1.5" />
                <circle cx="25" cy="95" r="1.5" />
                <circle cx="35" cy="95" r="1.5" />
                <circle cx="45" cy="95" r="1.5" />
                <circle cx="55" cy="95" r="1.5" />
                <circle cx="65" cy="95" r="1.5" />
                <circle cx="75" cy="95" r="1.5" />
                <circle cx="85" cy="95" r="1.5" />
                <circle cx="95" cy="95" r="1.5" />
              </g>
            </pattern>
          </defs>
          <path fill="url(#a)" d="M0 0h100v100H0z" />
        </svg>
      </div>
    </HeroContent>
  </HeroWrapper>
)

export default Hero
