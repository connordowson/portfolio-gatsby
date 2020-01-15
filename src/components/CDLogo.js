import React from "react"
import styled from "styled-components"

const SVGPrimary = styled.path`
  fill: ${props => props.theme.colors.textColor};
`

const SVGSecondary = styled.path`
  fill: ${props => props.theme.colors.textColor};
  opacity: 0.5;
`

const CDLogo = () => (
  <svg version="1.1" x="0px" y="0px" viewBox="-353.7 171.2 204 228.7">
    <SVGSecondary
      id="D"
      className="st0"
      d="M-187.2,262.3c11.8,6.1,21,14.8,27.6,25.9c6.6,11.1,9.9,23.9,9.9,38.2c0,14.4-3.3,27.2-10,38.3
	c-6.6,11.2-16,19.8-28.1,26c-12.1,6.2-26,9.2-41.6,9.2h-61.9V253.1h63.3C-212.6,253.1-199,256.1-187.2,262.3z M-207.2,363.7
	c5.7-3.5,10.2-8.5,13.4-14.9c3.2-6.4,4.8-13.8,4.8-22c0-8.4-1.7-15.8-5.1-22.2c-3.4-6.4-8.1-11.4-14.1-15s-12.9-5.3-20.5-5.3h-24.1
	V369h26C-219.5,368.9-212.9,367.2-207.2,363.7L-207.2,363.7z"
    />
    <g id="C">
      <SVGPrimary
        className="st1"
        d="M-291.3,285.1c-1.2-0.6-2.3-1.2-3.5-1.9c-6.1-3.7-10.9-8.8-14.4-15.3c-3.4-6.5-5.1-13.7-5.1-21.7
		s1.7-15.2,5.2-21.7s8.3-11.6,14.4-15.3s12.8-5.6,20.2-5.6c6.4,0,12.9,1.8,19.5,5.3c6.6,3.6,12.2,8.3,17,14.4l22.2-26.8
		c-7.4-7.8-16.4-14-27-18.5c-10.7-4.5-21.4-6.8-32.3-6.8c-14.8,0-28.2,3.3-40.1,9.8c-11.9,6.6-21.3,15.6-28.2,27
		c-6.8,11.5-10.3,24.3-10.3,38.6c0,14.4,3.4,27.4,10.1,39c6.6,11.6,15.9,20.8,27.6,27.5c7.7,4.4,15.9,7.3,24.7,8.8
		C-291.3,321.9-291.3,285.1-291.3,285.1z"
      />
      <SVGPrimary
        className="st1"
        d="M-237.4,268c-4.7,4.8-10.1,8.8-15.4,12v39.1c2.2-1.1,5.8-2.2,8.9-3.7c11.8-5.3,21.5-12.5,30.1-21.5L-237.4,268
		z"
      />
    </g>
  </svg>
)

export default CDLogo