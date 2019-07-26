import React from "react"

import footerStyles from "./../styles/footer.module.css"

import Section from "../components/Section"
import Heading from "../components/Heading"

import EmailIcon from "./../assets/svg/email-icon.inline.svg"
import GitHubIcon from "./../assets/svg/github-icon.inline.svg"
import DribbleIcon from "./../assets/svg/dribble-icon.inline.svg"
import LinkedInIcon from "./../assets/svg/linkedin-icon.inline.svg"

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <Section>
        {" "}
        <Heading heading="Contact Me" />
        <div className={footerStyles.footerLinksWrapper}>
          {" "}
          <ul className={footerStyles.footerLinks}>
            {" "}
            <li>
              <a
                href="mailto:connormwdowson@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <EmailIcon /> Email{" "}
              </a>{" "}
            </li>
            <li>
              <a
                href="https://github.com/connordowson"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <GitHubIcon /> GitHub
              </a>{" "}
            </li>
            <li>
              <a
                href="https://dribbble.com/connordowson"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <DribbleIcon /> dribbble
              </a>{" "}
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/connor-dowson"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <LinkedInIcon /> LinkedIn{" "}
              </a>{" "}
            </li>
          </ul>{" "}
        </div>
      </Section>{" "}
    </footer>
  )
}
