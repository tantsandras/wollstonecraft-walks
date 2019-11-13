import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Image = styled.div`
  position: relative;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.4);
    z-index: 2;
  }
`

class Photos extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            images: allFile(
              filter: { relativeDirectory: { eq: "wollstonecraft" } }
            ) {
              edges {
                node {
                  childImageSharp {
                    id
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <div className="content" aria-label="Photos of people and activities on the Wollstonecraft Walk, including Mary Wollstonecraft art work and historic landmarks in Newington Green">
              <h3
                style={{
                  letterSpacing: `2px`,
                  fontSize: `1rem`,
                  fontFamily: `Helvetica, Roboto, 'Open Sans'`,
                  fontWeight: `normal`,
                  marginTop: `8rem`,
                  marginBottom: `10rem`,
                  lineHeight: `2`
                }}
              >
                <i style={{ textTransform: `uppercase` }}>Photos by</i>
                <br />
                Christine Bradshaw
              </h3>
            </div>
            {data.images.edges.map((photo, key) => (
              <div className="item" key={key} aria-hidden="true">
                <Image className="content">
                  <Img
                    key={photo.node.childImageSharp.fluid.id}
                    fluid={photo.node.childImageSharp.fluid}
                  />
                </Image>
              </div>
            ))}
          </>
        )}
      />
    )
  }
}

export default Photos
