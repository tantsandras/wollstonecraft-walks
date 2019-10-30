import React from "react"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
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
  margin-bottom: 12rem;
  grid-auto-rows: 40px;
`
class GalleryPage extends React.Component {
  constructor() {
    super()
    this.state = {
      isActive: false,
      hover: false,
    }
  }

  resizeGridItem = item => {
    const grid = document.getElementsByClassName("grid")[0]
    let rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    )
    let rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    )
    let rowSpan = Math.ceil(
      (item.querySelector(".content").getBoundingClientRect().height + rowGap) /
        (rowHeight + rowGap)
    )
    item.style.gridRowEnd = "span " + rowSpan
  }

  resizeAllGridItems = () => {
    const allItems = document.getElementsByClassName("item")
    for (let x = 0; x < allItems.length; x++) {
      this.resizeGridItem(allItems[x])
    }
  }

  resizeInstance = instance => {
    let item = instance.elements[0]
    this.resizeGridItem(item)
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.resizeAllGridItems)
    this.resizeAllGridItems()
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", () => {})
  }

  componentDidUpdate = () => {
    this.resizeAllGridItems()
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <main style={{ fontFamily: `Helvetica, Roboto, 'Open Sans'` }}>
        <SEO title="Gallery" />
        <Menu />
        <Circles />
        <Gallery />
        <StaticQuery
          query={graphql`
            query {
              allFile(filter: { relativeDirectory: { eq: "galleryImages" } }) {
                edges {
                  node {
                    childMarkdownRemark {
                      frontmatter {
                        title
                        subheading
                        description
                        images {
                          image
                        }
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <>
              {data.allFile.edges.map((photo, key) => (
                <Wrapper className="grid" key={key}>
                  <div className="content">
                    <h2
                      style={{
                        fontFamily: `'Archivo Black', 'Impact'`,
                        paddingTop: `1rem`,
                        letterSpacing: `1px`,
                        fontSize: `1.4rem`,
                        textAlign: `left`,
                        marginTop: `4rem`,
                        paddingBottom: `8rem`,
                        marginBottom: `8rem`,
                        lineHeight: `1.5`,
                      }}
                    >
                      {photo.node.childMarkdownRemark.frontmatter.heading}
                      <br />
                      <i
                        style={{
                          letterSpacing: `2px`,
                          fontSize: `1rem`,
                          fontFamily: `Helvetica, Roboto, 'Open Sans'`,
                          fontWeight: `normal`,
                          marginTop: `2rem`,
                        }}
                      >
                        {photo.node.childMarkdownRemark.frontmatter.subheading}
                      </i>
                    </h2>
                  </div>
                  <div className="item">
                    <ImageWrapper className="content">
                      <img
                        src={photo.node.childMarkdownRemark.frontmatter.image}
                        alt={photo.node.childMarkdownRemark.frontmatter.description}
                      />
                    </ImageWrapper>
                  </div>     
                  {/* <div className="item">
                    <ImageWrapper className="content">
                      <img
                        src={photo.node.childMarkdownRemark.frontmatter.image2}
                        alt={photo.node.childMarkdownRemark.frontmatter.description}
                      />
                    </ImageWrapper>
                  </div>   
                  <div className="item">
                    <ImageWrapper className="content">
                      <img
                        src={photo.node.childMarkdownRemark.frontmatter.image3}
                        alt={photo.node.childMarkdownRemark.frontmatter.description}
                      />
                    </ImageWrapper>
                  </div>   */}
                  </Wrapper>
              ))}
            </>
          )}
        />
      </main>
    )
  }
}
export default GalleryPage
