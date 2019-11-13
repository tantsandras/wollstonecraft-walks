import React from "react"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Menu from "../components/menu"
import Gallery from "../components/gallery"
import Circles from "../components/circles"
import styled from "styled-components"
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
  }
`
const Wrapper = styled.div`
  background-size: cover;
  padding: 6% 5%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 4rem;
  grid-auto-rows: 40px;
`
const Normal = styled.p`
  line-height: 1.8;
  font-size: 0.9rem;
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
                          alt
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
                <>
                  <div
                    style={{
                      maxWidth: `1400px`,
                      padding: `10% 5% 6% 5%`,
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: `'Archivo Black', 'Impact'`,
                        letterSpacing: `1px`,
                        fontSize: `1.2rem`,
                        textAlign: `left`,
                        lineHeight: `1.5`,
                        verticalAlign: `top`,
                      }}
                    >
                      {photo.node.childMarkdownRemark.frontmatter.title}
                    </h2>
                    <h3
                      style={{
                        letterSpacing: `2px`,
                        fontSize: `0.8rem`,
                        fontFamily: `Helvetica, Roboto, 'Open Sans'`,
                        fontWeight: `normal`,
                        marginBottom: `2rem`,
                        lineHeight: `1.5`,
                      }}
                    >
                      {photo.node.childMarkdownRemark.frontmatter.subheading}
                    </h3>
                    <Normal>
                          {
                            photo.node.childMarkdownRemark.frontmatter
                              .description
                          }
                        </Normal>
                  </div>
                  <Wrapper className="grid" key={key}>
                    {photo.node.childMarkdownRemark.frontmatter.images.map(
                      img => (
                        <div className="item">
                          <ImageWrapper className="content">
                            <img src={img.image} alt={img.alt} />
                          </ImageWrapper>
                        </div>
                      )
                    )}
                  </Wrapper>
                </>
              ))}
            </>
          )}
        />
      </main>
    )
  }
}
export default GalleryPage
