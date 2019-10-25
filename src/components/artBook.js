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
  boxShadow: `0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)`
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
  boxShadow: `0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)`
}

const RightArrow = styled.div`
  transform: translateY(44rem);
`

const SliderWrapper = styled.div`
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
      <article style={{ backgroundColor: `#FFFEFF`, color: `#333333`}}>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `repeat(auto-fit, minmax(240px, 4fr))`,
          gridGap: `1rem`,
          padding: `0rem 2rem 2rem 2rem`,
          columnGap: `0%`,
          margin: `0 auto`,
          gridTemplateRows: `repeat(1, auto)`,
        }}
      >
        <SliderWrapper>
          <LeftArrow onClick={this.goToPrevSlide}>
            <i style={leftArrow} aria-hidden="true"></i>
          </LeftArrow>
          <RightArrow onClick={this.goToNextSlide}>
            <i style={arrow} aria-hidden="true"></i>
          </RightArrow>

          <Pages currentPage={this.state.currentIndex} />
        </SliderWrapper>
      </div>
      </article>
    )
  }
}

export default ArtBook
