import React from "react"
import styled, { keyframes, css } from "styled-components"

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
        <div
          style={{
            float: `right`,
            color: `#241E20`,
            marginBottom: `12rem`,
          }}
        >
          <h2
            style={{
              fontFamily: `'Archivo Black', 'Impact'`,
              fontSize: `1.2rem`,
              textAlign: `center`,
              letterSpacing: `1px`,
              lineHeight: `2`,
              color: `#333333`,
              zIndex: `2`
            }}
          >
            <i
              style={{
                fontFamily: `Helvetica, Roboto, 'Open Sans'`,
                fontSize: `1rem`,
                textAlign: `center`,
                letterSpacing: `1px`,
                marginTop: `1rem`,
                fontWeight: `normal`,
              }}
            >
              Flyer for
            </i>{" "}
            <br />
            Wollstonecraft Walks
            <br />
            <i
              style={{
                fontFamily: `Helvetica, Roboto, 'Open Sans'`,
                fontSize: `1rem`,
                fontWeight: `normal`,
                textAlign: `center`,
                letterSpacing: `1px`,
                marginTop: `1rem`,
                color: `#333333`,
              }}
            >
              Click flyer to see back
            </i>
          </h2>

          <Card onClick={this.flipCard}>
            <CardFront style={{ maxWidth: `640px` }}>
              <iframe
                src="https://drive.google.com/file/d/12kmTYcHpoR4O3k9WgzTpvnjgiDFS-9fw/preview"
                width="640"
                height="480"
              />
            </CardFront>
            <CardBack style={{ maxWidth: `640px` }}>
              <iframe
                src="https://drive.google.com/file/d/1PqeTfCrcP--0F73gPkOeEt2wah6x8y3f/preview"
                width="640"
                height="480"
              />
            </CardBack>
          </Card>
        </div>
      </>
    )
  }
}

export default Flyers
