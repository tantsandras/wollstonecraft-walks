import React from "react"
import styled, { keyframes } from "styled-components"
import Photos2 from "../components/assembly"

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

class Gallery2 extends React.Component {
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
        <Wrapper className="grid">
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
              Wollstonecraft Walks <br />School
assembly
              <br />
              <i
                style={{
                  letterSpacing: `2px`,
                  fontSize: `1rem`,
                  fontFamily: `Helvetica, Roboto, 'Open Sans'`,
                  marginTop: `4rem`,
                  fontWeight: `normal`
                }}
              >
                  at Newington Green Primary School, October 2019
              </i>
            </h2>
          </div>

          <Photos2 />
        </Wrapper>
      </>
    )
  }
}

export default Gallery2
