import React from "react"
import styled, { keyframes } from "styled-components"
import Pages from "../components/pdfPages"



const leftArrow = {
  border: `solid black`,
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

`


const arrow = {
  border: `solid black`,
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
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }))
  }

  goToNextSlide = () => {
    if(this.state.currentIndex === 97 - 1) {
      return this.setState({
        currentIndex: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  render() {
    return (
      <div>
      <div className="slider-wrapper"
      style={{
        transform: `translateX(${this.state.translateValue}px)`,
        transition: 'transform ease-out 0.45s'
      }}>
      <Pages currentPage={this.state.currentIndex} />
          
    </div>

    <LeftArrow
     onClick={this.goToPrevSlide}
    ><i style={leftArrow} aria-hidden="true"></i></LeftArrow>

    <RightArrow
     onClick={this.goToNextSlide}
    ><i style={arrow} aria-hidden="true"></i></RightArrow>
  </div>
    )
  }
}

export default ArtBook
