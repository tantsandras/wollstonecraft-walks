import React from "react"
import styled, { keyframes } from "styled-components"

const Container = styled.div`
    overflow: hidden;
`

class ArtBook extends React.Component {
    constructor() {
      super()
      this.state = {
        isActive: false,
        hover: false,
      }
    }
  
    handleClick = () => {
      this.setState({ isActive: !this.state.isActive })
    }
  
    render() {
      return (
        <Container>
  <div class="book-wrapper">
  </div>
  </Container>
       )
      }
    }

export default ArtBook