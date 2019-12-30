import React from "react"
import styled, { css } from "styled-components"

const baseHeadings = css`
  font-weight: 700;
  font-family: ${props => props.theme.typography.textFont};
`

const Heading1 = styled.h1`
  ${baseHeadings}
  font-size: 2.2em;
  letter-spacing: -0.02em;
`
const Heading2 = styled.h2`
  ${baseHeadings}
  font-size: 2em;
  letter-spacing: -0.02em;
`

const Heading3 = styled.h3`
  ${baseHeadings}
  font-size: 1.6em;
  letter-spacing: -0.02em;
`

const Heading4 = styled.h4`
  ${baseHeadings}
  font-size: 1.4em;
  letter-spacing: -0.01em;
`
const Heading5 = styled.h5`
  ${baseHeadings}
  font-size: 1.2em;
  letter-spacing: -0.01em;
`
const Heading6 = styled.h6`
  ${baseHeadings}
  font-size: 1em;
  letter-spacing: -0.01em;
`

const Heading = ({ headingSize, children }) => (
  <>
    {headingSize === 1 && <Heading1>{children}</Heading1>}
    {headingSize === 2 && <Heading2>{children}</Heading2>}
    {headingSize === 3 && <Heading3>{children}</Heading3>}
    {headingSize === 4 && <Heading4>{children}</Heading4>}
    {headingSize === 5 && <Heading5>{children}</Heading5>}
    {headingSize === 6 && <Heading6>{children}</Heading6>}
  </>
)

export default Heading
