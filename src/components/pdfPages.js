import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"

const fadeInLeft= keyframes`
    from {
      opacity: 0;
      transform: translateX(45px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `

const pageGrid = {
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fit, minmax(240px, 2fr))`,
  padding: `4rem 2rem 2rem 2rem`,
  columnGap: `0%`,
  margin: `0 auto`,
  gridTemplateRows: `repeat(1, auto)`,
}

const Slide = styled.div`
margin: 0 auto,
maxWidth: 400px;
padding: 2rem;
background:rgba(255,255,255, 0.98);
border: 2px solid rgba(0, 0, 0, 0.1);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
list-style: none;
position: relative;
`

const PdfLink = styled.a`
  color: #333333;
  font-family: Helvetica, Roboto, "Open Sans";
  text-decoration: none;
  font-size: 1rem;
  font-weight: normal;
  &:hover {
    text-decoration: none;
    color: MediumBlue;
    cursor: pointer;
  }
`

const Credits = styled.h5`
  font-family: Helvetica, Roboto, "Open Sans";
  letter-spacing: 2px;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 1.8;
  text-align: center;
`
const Pdf = styled(Img)`
animation: ${fadeInLeft} 0.4s backwards;
`

class Pages extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            images: allFile(
              filter: { relativeDirectory: { eq: "pdf" } }
              sort: { fields: name }
            ) {
              edges {
                node {
                  name
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const image =
            data.images.edges[this.props.currentPage].node.childImageSharp.fluid
          const image2 =
            data.images.edges[this.props.currentPage + 1].node.childImageSharp
              .fluid
          return (
            <>
              <h2
                style={{
                  fontFamily: `'Archivo Black', 'Impact'`,
                  fontSize: `1.2rem`,
                  textAlign: `center`,
                  letterSpacing: `1px`,
                  lineHeight: `1.3`,
                    marginBottom: `4rem`,
                }}
              >
                The Wollstonecraft Live Experience!
                </h2>
                <Credits>
                  Limited edition art book PDF<br />
                <PdfLink
                  href="https://drive.google.com/uc?export=download&id=191dUfzDGadedUpdtvG3od2gGUwrRv0x7"
                  download
                >
                  Click here to download
                </PdfLink>
</Credits>
              <div style={pageGrid}>
                <Slide>
                  <Pdf key={image.src} fluid={image} />
                </Slide>
                <Slide>
                  <Pdf key={image2.src} fluid={image2} />
                </Slide>
              </div>
            </>
          )
        }}
      />
    )
  }
}

export default Pages
