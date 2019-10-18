import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

const Back = styled(Link)`
  padding: 0.6rem 1rem 0.6rem 1rem;
  font-size: 22px;
  background: #1451ad;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.25);
  font-family: Roboto, 'Open Sans';
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffd0d0;
  text-transform: uppercase;
  text-decoration: none;
  min-width: 240px;
  overflow: hidden;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  transition: background-color 0.4s ease;
  -webkit-transition: background-color 0.4s ease-out;
  -moz-transition: background-color 0.4s ease-out;
  -o-transition: background-color 0.4s ease-out;

  &:hover {
    background-color: #ff0000;
    box-shadow: 0 0 0 2px rgb(255, 0, 0, 0.6);
    border: 2px solid white;
  }
`

class Circle {
  constructor(x, y, radius, color, speed, text) {
    this.speed = speed
    this.x = x
    this.radius = radius
    this.color = color
    this.y = y
    this.text = text
    const lines = this.text.split("\n")
    const lineHeight = 22

    this.draw = ctx => {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false)
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.font = "normal 1rem Roboto, 'Open Sans'"
      ctx.textAlign = "center"
      ctx.fillStyle = "#333333"
      lines.map((v, i) => {
        ctx.fillText(
          lines[i],
          this.x,
          this.y + i * lineHeight,
          this.radius + 70
        )
      })
    }
  }
}

const colorArray = [
  "rgba(236, 119, 119, 0.25)",
  "rgba(101, 89, 237, 0.22)",
  "rgba(0, 71, 255, 0.34)",
  "rgba(241, 48, 48, 0.24)",
  "rgba(88, 69, 163, 0.31)",
  "rgba(234, 58, 58, 0.39)",
]

const quoteArray = [
  `The only lasting truth is Change.
  -Octavia E. Butler`,
  `I'm about being in control
  of your narrative 
  and your body.
  -Janelle Monae`,
  `I am not free 
  while any woman is unfree 
  -Audre Lorde`,
  `One child, one teacher, one book, 
  one pen can change the world. 
  -Malala Yousafzai`,
  `Art is my life and my life is art.
  -Yoko Ono`,
]

class CanvasQuotes extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      circleArray: [],
      width: undefined,
      height: undefined,
    }
  }

  componentDidMount() {
    this.setState({
      circleArray: Array.from({ length: 5 }).reduce((acc, v, i) => {
        let x
        let y
        let radius
        const minRadius = 100

        let isColliding = true
        while (isColliding) {
          x = Math.random() * (window.innerWidth - 10 * 2) + 10
          y = Math.random() * window.innerHeight + 10
          radius = Math.random() * 100 + 1
          if (radius < minRadius) {
            radius = radius + 90
          }
          isColliding = false
          acc.forEach(circle => {
            if (
              Math.abs(x - circle.x) < circle.radius * 1.8 &&
              Math.abs(y - circle.y) < circle.radius * 1.8
            ) {
              isColliding = true
            }
          })
        }

        acc.push(
          new Circle(
            x,
            y,
            radius,
            colorArray[i],
            Math.floor(Math.random() * 0.4) + 0.4,
            quoteArray[i]
          )
        )

        return acc
      }, []),
      width: window.innerWidth,
      height: window.innerHeight,
    })

    this.updateCanvas()
  }

  componentDidUpdate() {
    this.updateCanvas()
  }

  componentWillUnmount() {
    this.animate = () => {}
  }

  updateCanvas() {
    this.animate = () => {
      const ctx = this.refs.canvas.getContext("2d")
      requestAnimationFrame(() => this.animate())
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      this.state.circleArray.forEach(element => {
        element.y -= element.speed
        if (element.y < -140) element.y = 1200
        element.draw(ctx)
      })
    }

    this.animate()

    window.addEventListener("resize", () => {
      const ctx = this.refs.canvas.getContext("2d")
      this.refs.canvas.width = window.innerWidth
      this.refs.canvas.height = window.innerHeight

      this.state.circleArray.forEach(element => {
        element.y -= element.speed
        if (element.y < -140) element.y = 1200
        element.draw(ctx)
      })
    })
  }

  render() {
    return (
      <>
        <div style={{ display: `grid`, justifyContent: `center` }}>

        <Back style={{margin: `0 auto`, transform: `translateY(300px)`,}} to={"/"}>Back to Home</Back>
          <canvas
            width={this.state.width}
            height={this.state.height}
            ref="canvas"
          />
        </div>
      </>
    )
  }
}

export default CanvasQuotes
