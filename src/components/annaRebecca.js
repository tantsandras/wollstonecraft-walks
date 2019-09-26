import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image-es5'
import styled, { keyframes } from "styled-components"
import Contact from "../components/infoContact"

const Title = styled.div`
  background-color: rgba(255,255,255, 0.8);
  color: black;
  font-size: 11vw;
  font-family: Helvetica;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0 auto;
  padding: 0rem;
  width: 56%;
  text-align: center;
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translate(-50%, 50%);
  mix-blend-mode: screen;
  text-transform: uppercase;
  line-height: 1;
`
const contactList = {
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fit, minmax(300px, 2fr))`,
  gridGap: `1rem`,
  padding: `4rem 2rem 1rem 2rem`,
  columnGap: `4%`,
  margin: `0 auto`,
  gridTemplateRows: `repeat(1, 600px)`,
}

const BackgroundSection = ({ className }) => (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "a&r.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <>
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
          >
            <Title>Contact</Title>

          </BackgroundImage>
                      <ul style={contactList}>
                      <Contact />
                      </ul>
                      </>
        )
      }}
    />
  )
  
  const StyledBackgroundSection = styled(BackgroundSection)`
    width: 100%;
    background-size: cover;
    position: relative;
    height: 60vw;
  `
  
  export default StyledBackgroundSection
