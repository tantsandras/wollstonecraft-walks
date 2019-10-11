import React from "react"
import styled, { keyframes } from "styled-components"
import Photos from "../components/photoAlbum"

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
const PageCircle = styled.div`
  position: relative;
  border-radius: 50%;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  line-height: 200px;
  background: rgba(93, 0, 255, 0.3);
  mix-blend-mode: multiply;
  text-align: center;
  vertical-align: middle;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  margin-top: 4rem;
`
const PageHeading = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border-left: 6px double #5d00ff;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  position: relative;
  clip-path: circle(50%);
  -webkit-clip-path: circle(50%);
  -webkit-shape-outside: circle(20em);
  shape-outside: circle(20em);
`
class Gallery extends React.Component {
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
      <>
        <PageCircle>
          <PageHeading>

        </PageHeading>
          </PageCircle>
          <h1
          style={{
            fontFamily: `'Archivo Black', Impact`,
            letterSpacing: `1px`,
            textAlign: `center`,
            fontSize: `2.2rem`,
            marginTop: `-5.6rem`,
            paddingLeft: `6.4rem`,
            marginBottom: `14rem`
          }}
        >
          Gallery.
        </h1>
        <Wrapper className="grid">
          <div className="content">
            <h2
              style={{
                fontFamily: `'Archivo Black', Impact`,
                paddingTop: `1rem`,
                letterSpacing: `1px`,
                fontSize: `2rem`,
                textAlign: `left`,
                marginTop: `4rem`,
                paddingBottom: `8rem`,
                marginBottom: `8rem`,
                lineHeight: `1.5`,
              }}
            >
              Wollstonecraft Walks
              <br />
              <i
                style={{
                  letterSpacing: `2px`,
                  fontSize: `1.6rem`,
                  fontFamily: `Open Sans`,
                  fontWeight: `lighter`,
                  marginTop: `4rem`,
                }}
              >
                9th of June 2019
              </i>
            </h2>

          </div>
                                
          <Photos />
        </Wrapper>
      </>
    )
  }
}

export default Gallery
