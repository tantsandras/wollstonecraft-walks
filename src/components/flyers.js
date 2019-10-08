import React from "react"
import styled, { keyframes, css } from "styled-components"
import FrontImage from "../images/flyer/frontPage.jpg"
import BackImage from "../images/flyer/backPage.jpg"

const GridContainer = styled.div`
width: 100%;
padding: 4rem 2rem;
display: grid;
align-items: center
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
gap: 3%;
margin-top: 4rem;
justify-content: center;
margin-bottom: 4rem;
`

const Card = styled.article`
  position: relative;
margin: 0 auto;
height: 100%;
  cursor: pointer;
  perspective: 1000px;
  transition: all 0.25s ease-in-out;

  &.flipped {
    & > div:first-of-type {
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type {
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`

const CardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.25s ease-in-out;
`

const CardFront = styled.div`
  ${CardSide};
`

const CardBack = styled.div`
  ${CardSide};
  transform: rotateY(-180deg);
`

class Flyers extends React.Component {
  flipCard = event => {
    event.currentTarget.classList.toggle("flipped")
  }

  render() {
    return (
      <>
        <GridContainer>
            <div style={{gridTemplateColumns: `repeat(2, 1fr)`,
  gridTemplateRows: `repeat(1, auto)`}}><h2
              style={{
                fontFamily: `Yeseva One`,
                fontSize: `1.2rem`,
                textAlign: `center`,
                letterSpacing: `1px`,
                lineHeight: `2`,
              }}
            >
              Flyer for Wollstonecraft Walks
              <br />
              <i
                style={{
                  fontFamily: `Yeseva One`,
                  fontSize: `1rem`,
                  textAlign: `center`,
                  letterSpacing: `1px`,
                  marginTop: `1rem`,
                }}
              >
                Click to see back
              </i>
            </h2>
            </div>
            <div style={{gridTemplateColumns: `repeat(2, 1fr)`,
  gridTemplateRows: `repeat(1, auto)`, minHeight: `800px`}}>
            <Card onClick={this.flipCard}>

              <CardFront style={{maxWidth: `800px`, maxHeight: `1000px`}}>
                <img
                  src={FrontImage}
                  alt="front of flyer for Wollstonecraft Walks"
                />
                </CardFront>
              <CardBack style={{maxWidth: `800px`, maxHeight: `1000px`}}>
                <img
                  src={BackImage}
                  alt="back of flyer for Wollstonecraft Walks"
                />
              </CardBack>
            </Card>
                </div>
        </GridContainer>
      </>
    )
  }
}

export default Flyers
