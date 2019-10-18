import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Gallery from "../components/gallery"
import Circles from "../components/circles"
import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"

const Image = styled.div`
  position: relative;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;

  &:hover {
    transform: scale(2);
    z-index: 2;
    box-shadow: 10px 10px 100px 50px rgba(0, 0, 0, 0.4);
    border: 0.6px solid grey;
  }
`
const Wrapper = styled.div`
  margin-top: 4rem;
  background-size: cover;
  padding: 10% 5%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 6rem;
  grid-auto-rows: 40px;
`
const GalleryPage = (props) => {
  // const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <main style={{ fontFamily: `Open Sans` }}>
      <SEO title="Gallery" />
      <Menu />
      <Circles />
      <Gallery />
      {/* <Wrapper className="grid">
          <div className="content">
          <h2>{data.title}</h2></div>
      <div className="item">
                <Image className="content">
                  <Img
                    fluid={data.image}
                  />
                </Image>
              </div>
          </Wrapper> */}
    </main>
  )
}
export default GalleryPage

export const query = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "imgUploads" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
