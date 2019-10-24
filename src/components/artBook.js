import React from "react"
import styled, { keyframes } from "styled-components"
import Pages from "../components/pdfPages"

const leftArrow = {
  border: `solid #241E20`,
  borderWidth: `0px 1.6px 1.6px 0px`,
  display: `table-cell`,
  float: `left`,
  msTransform: `translateY(-50%)`,
  transform: `translateY(-50%)`,
  padding: `7.5px`,
  transform: `rotate(135deg)`,
  WebkitTransform: `rotate(135deg)`,
}

const LeftArrow = styled.div`
  transform: translateY(44rem);
`

const arrow = {
  border: `solid #241E20`,
  borderWidth: `0px 1.6px 1.6px 0px`,
  display: `table-cell`,
  float: `right`,
  msTransform: `translateY(-50%)`,
  transform: `translateY(-50%)`,
  padding: `8px`,
  transform: `rotate(-45deg)`,
  WebkitTransform: `rotate(-45deg)`,
}

const RightArrow = styled.div`
  transform: translateY(44rem);
`

class ArtBook extends React.Component {
  constructor() {
    super()
    this.state = {
      isActive: false,
      hover: false,
      currentIndex: 0,
    }
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    }))
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === 96 - 1) {
      return this.setState({
        currentIndex: 0,
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }))
  }

  render() {
    return (
      <article style={{ backgroundColor: `#FFFEFF`, color: `#333333`, paddingBottom: `350px`}}>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `repeat(auto-fit, minmax(240px, 4fr))`,
          gridGap: `1rem`,
          padding: `0rem 2rem 4rem 2rem`,
          columnGap: `0%`,
          margin: `0 auto`,
          gridTemplateRows: `repeat(1, auto)`,
        }}
      >
        <div
          className="slider-wrapper"
          style={{
            transition: "transform ease-out 0.45s",
          }}
        >
          <LeftArrow onClick={this.goToPrevSlide}>
            <i style={leftArrow} aria-hidden="true"></i>
          </LeftArrow>
          <RightArrow onClick={this.goToNextSlide}>
            <i style={arrow} aria-hidden="true"></i>
          </RightArrow>

          <Pages currentPage={this.state.currentIndex} />
        </div>
      </div>
      </article>
    )
  }
}

export default ArtBook
