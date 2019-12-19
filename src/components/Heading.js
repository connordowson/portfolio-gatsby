import React from "react"
import styled from "styled-components"

const HeadingWrapper = styled.div`
  max-width: 50em;
  @media (max-width: ${props => props.theme.responsive.large}) {
    width: 50em;
  }

  @media (max-width: ${props => props.theme.responsive.medium}) {
    width: 32em;
  }

  @media (max-width: ${props => props.theme.responsive.small}) {
    width: 100%;
  }
  margin: 0 auto;
  font-family: ${props => props.theme.typography.textFont};
  padding: ${props => (props.noPadding ? `2em 0` : `2em`)};

  * {
    font-weight: 800;
  }

  h1 {
    font-size: 2.2em;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 2em;
    letter-spacing: -0.02em;
  }

  h3 {
    font-size: 1.6em;
    letter-spacing: -0.02em;
  }

  h4 {
    font-size: 1.4em;
    letter-spacing: -0.01em;
  }

  h5 {
    font-size: 1.2em;
    letter-spacing: -0.01em;
  }

  h6 {
    font-size: 1em;
    letter-spacing: -0.01em;
  }
`

const Heading = ({ headingSize, children }) => (
  <HeadingWrapper>
    {headingSize === 1 && <h1>{children}</h1>}
    {headingSize === 2 && <h2>{children}</h2>}
    {headingSize === 3 && <h3>{children}</h3>}
    {headingSize === 4 && <h4>{children}</h4>}
    {headingSize === 5 && <h5>{children}</h5>}
    {headingSize === 6 && <h6>{children}</h6>}
  </HeadingWrapper>
)

export default Heading
