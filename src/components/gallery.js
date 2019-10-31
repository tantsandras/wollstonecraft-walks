import React from "react"
import styled, { keyframes } from "styled-components"
import Photos from "../components/photoAlbum"

const fadeInRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(-15px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
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
  animation: ${fadeInRight} ease 1s forwards;
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
  animation: ${fadeInRight} ease 1s forwards;
`

const MainHeading = styled.h1`
  font-family: "Archivo Black", "Impact";
  letter-spacing: 1px;
  text-align: center;
  font-size: 2.2rem;
  margin-top: -5.6rem;
  padding-left: 6.4rem;
  margin-bottom: 14rem;
  color: #333333;
  animation: ${fadeInRight} ease 1.6s forwards;
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
          <PageHeading></PageHeading>
        </PageCircle>
        <MainHeading>Gallery</MainHeading>
        <Wrapper className="grid">
          <div className="content">
            <h2
              style={{
                fontFamily: `'Archivo Black', 'Impact'`,
                paddingTop: `1rem`,
                letterSpacing: `1px`,
                fontSize: `1.8rem`,
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
                  fontSize: `1.4rem`,
                  fontFamily: `Helvetica, Roboto, 'Open Sans'`,
                  marginTop: `4rem`,
                  fontWeight: `normal`,
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
