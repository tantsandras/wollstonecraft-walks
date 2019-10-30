import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"

const Image = styled.div`
  position: relative;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.4);
    z-index: 2;
    box-shadow: 10px 10px 100px 50px rgba(0, 0, 0, 0.4);
    border: 0.6px solid grey;
  }
`

class Photos extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            images: allFile(
              filter: { relativeDirectory: { eq: "assembly" } }
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
            {data.images.edges.map(photo => (
              <div className="item">
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
