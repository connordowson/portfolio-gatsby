import React from "react"
import styled, { css } from "styled-components"

const baseHeadings = css`
  font-weight: 700;
  font-family: ${props => props.theme.typography.textFont};
`
const SectionHeadingWrapper = styled.div`
  color: ${props => props.theme.colors.pink};
  padding: 2rem;
  width: 100%;
  /* font-size: 1.2rem; */
  text-align: center;
  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    margin: 0 auto;
  }
`

const Heading1 = styled.h1`
  ${baseHeadings}
  font-size: 2.2rem;
  letter-spacing: -0.02rem;
`
const Heading2 = styled.h2`
  ${baseHeadings}
  font-size: 2rem;
  letter-spacing: -0.02rem;
`

const Heading3 = styled.h3`
  ${baseHeadings}
  font-size: 1.6rem;
  letter-spacing: -0.02rem;
`

const Heading4 = styled.h4`
  ${baseHeadings}
  font-size: 1.4rem;
  letter-spacing: -0.01rem;
`
const Heading5 = styled.h5`
  ${baseHeadings}
  font-size: 1.2rem;
  letter-spacing: -0.01rem;
`
const Heading6 = styled.h6`
  ${baseHeadings}
  font-size: 1rem;
  letter-spacing: -0.01rem;
`

const Heading = ({ headingSize, sectionHeading, children }) => (
  <>
    {sectionHeading ? (
      <SectionHeadingWrapper>
        {headingSize === 1 && <Heading1>{children}</Heading1>}
        {headingSize === 2 && <Heading2>{children}</Heading2>}
        {headingSize === 3 && <Heading3>{children}</Heading3>}
        {headingSize === 4 && <Heading4>{children}</Heading4>}
        {headingSize === 5 && <Heading5>{children}</Heading5>}
        {headingSize === 6 && <Heading6>{children}</Heading6>}
      </SectionHeadingWrapper>
    ) : (
      <>
        {headingSize === 1 && <Heading1>{children}</Heading1>}
        {headingSize === 2 && <Heading2>{children}</Heading2>}
        {headingSize === 3 && <Heading3>{children}</Heading3>}
        {headingSize === 4 && <Heading4>{children}</Heading4>}
        {headingSize === 5 && <Heading5>{children}</Heading5>}
        {headingSize === 6 && <Heading6>{children}</Heading6>}
      </>
    )}
  </>
)

export default Heading
