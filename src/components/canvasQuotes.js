import React from "react"
import { StepNum, StepCircle } from "../components/stepFive"

class DrawHeader {
  constructor(ctx, Image) {
    ctx.drawImage(Image)
    }}

class Circle {
  constructor(x, y, radius, color, speed) {

    this.speed = speed;
    this.x = x;
    this.radius = radius;
    this.color = color;
    this.y = y;

    this.draw = ctx => {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false)
      ctx.fillStyle = this.color
      ctx.fill()
    }
  }
}

const colorArray = [
  "rgba(236, 119, 119, 0.25)",
  "rgba(101, 89, 237, 0.22)",
  "#FFD0D0",
  "rgba(0, 71, 255, 0.58)",
  "rgba(241, 48, 48, 0.64)",
  "#E2E2E2",
  "rgba(88, 69, 163, 0.71)",
  "#EB5E5E",
  "#F9DCDC",
  "rgba(234, 58, 58, 0.79)",
    "#F7AFAF",
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
      circleArray: Array.from({ length: 6 }).map(
        () =>
          new Circle(
            Math.random() * (window.innerWidth - 10 * 2) + 10,
            Math.random() * (window.innerHeight) + 10,
            50,
            colorArray[Math.floor(Math.random() * colorArray.length)],
            Math.floor(Math.random() * (0.01) + 1),
          )
      ),
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

      ctx.font = "10vw Arial"
      ctx.strokeStyle = "#000d1a"
      ctx.textAlign = "center"
      ctx.strokeText(
        "SPACE EXPLORER",
        this.refs.canvas.width / 2,
        this.refs.canvas.height / 2
      )

      this.state.circleArray.forEach(element => {
        element.y -= element.speed
        element.draw(ctx)
      })

    const Image = document.getElementById("source")
    new DrawHeader(ctx, Image)
    }

    this.animate()
  }

  render() {
    return (
      <div>
        <canvas
          width={this.state.width}
          height={this.state.height}
          ref="canvas"
        />
      </div>
    )
  }
}

export default CanvasQuotes