import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Gallery from "../components/gallery"
import Circles from "../components/circles"
import styled, { keyframes } from "styled-components"
import "typeface-archivo-black"

const ImageWrapper = styled.div`
  position: relative;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  height: auto;
  width: 300px;
  &:hover {
    transform: scale(1.4);
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
const GalleryPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  console.log(data.image)
  return (
    <main style={{ fontFamily: `Helvetica, Roboto, 'Open Sans'` }}>
      <SEO title="Gallery" />
      <Menu />
      <Circles />
      <Gallery />
      <Wrapper className="grid">
        <div className="content">
          <h2
            style={{
              fontFamily: `'Archivo Black', 'Impact'`,
              paddingTop: `1rem`,
              letterSpacing: `1px`,
              fontSize: `1.4rem`,
              textAlign: `left`,
              marginTop: `8rem`,
              paddingBottom: `8rem`,
              marginBottom: `12rem`,
              lineHeight: `1.5`,
            }}
          >
            {data.heading}
            <br />
              <i
                style={{
                  letterSpacing: `2px`,
                  fontSize: `1rem`,
                  fontFamily: `Helvetica, Roboto, 'Open Sans'`,
                  fontWeight: `normal`,
                  marginTop: `4rem`,
                }}
              >
                {data.subheading}
              </i>
          </h2>

        </div>
        <div className="item">
          <ImageWrapper className="content">
            <img src={data.image} alt={data.description} style={{width: `100%`, height: `auto`}} />
          </ImageWrapper>
        </div>
      </Wrapper>
    </main>
  )
}
export default GalleryPage

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "gallery" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              heading
              subheading
              description
              image
            }
          }
        }
      }
    }
  }
`
