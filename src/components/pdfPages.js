import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"

const pageGrid = {
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fit, minmax(240px, 2fr))`,
  padding: `4rem 2rem 4rem 2rem`,
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

class Pages extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            images: allFile(filter: { relativeDirectory: { eq: "pdf" } }) {
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
                  fontFamily: `'Archivo Black', Impact`,
                  fontSize: `1.2rem`,
                  textAlign: `center`,
                  letterSpacing: `1px`,
                  paddingTop: `150px`,
                  lineHeight: `2`,
                }}
              >
                The Wollstonecraft Live Experience!
                <br />
                <i
                  style={{
                    fontFamily: `Open Sans`,
                    fontSize: `1rem`,
                    textAlign: `center`,
                    letterSpacing: `1px`,
                    marginTop: `1rem`,
                  }}
                >
                  Limited edition art book PDF
                </i>
              </h2>

              <div style={pageGrid}>
                <Slide>
                  <Img key={image.src} fluid={image} />
                </Slide>
                <Slide>
                  <Img key={image2.src} fluid={image2} />
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
