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
        <h1
          style={{
            fontFamily: `Yeseva One`,
            paddingTop: `1rem`,
            letterSpacing: `1px`,
            fontSize: `3.4rem`,
            textAlign: `center`,
            marginTop: `4rem`,
            marginBottom: `18rem`,
          }}
        >
          Gallery
        </h1>
        <Wrapper className="grid">
          <div className="content">
            <h2
              style={{
                fontFamily: `Yeseva One`,
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
                  fontFamily: `Helvetica`,
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
