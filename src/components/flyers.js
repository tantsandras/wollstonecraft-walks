import React from "react"
import styled, { keyframes, css } from "styled-components"
import FrontImage from "../images/flyer/frontPage.jpg"
import BackImage from "../images/flyer/backPage.jpg"

const Card = styled.article`
  position: relative;
  margin: 0 auto;
  height: 100%;
  width: 100%;
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
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
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
        <section
          style={{ float: `right`, color: `#241E20`, marginBottom: `10rem` }}
        >
          <h2
            style={{
              fontFamily: `'Archivo Black', Impact`,
              fontSize: `1.2rem`,
              textAlign: `center`,
              letterSpacing: `1px`,
              lineHeight: `2`,
            }}
          >
            <i
              style={{
                fontFamily: `Open Sans`,
                fontSize: `1rem`,
                textAlign: `center`,
                letterSpacing: `1px`,
                marginTop: `1rem`,
              }}
            >
              Flyer for
            </i>{" "}
            <br />
            Wollstonecraft Walks
            <br />
            <i
              style={{
                fontFamily: `Open Sans`,
                fontSize: `1rem`,
                textAlign: `center`,
                letterSpacing: `1px`,
                marginTop: `1rem`,
              }}
            >
              Click to see back
            </i>
          </h2>

          <Card onClick={this.flipCard}>
            <CardFront style={{ maxWidth: `640px` }}>
              <img
                src={FrontImage}
                alt="front of flyer for Wollstonecraft Walks"
              />
            </CardFront>
            <CardBack style={{ maxWidth: `640px` }}>
              <img
                src={BackImage}
                alt="back of flyer for Wollstonecraft Walks"
              />
            </CardBack>
          </Card>
        </section>
      </>
    )
  }
}

export default Flyers
