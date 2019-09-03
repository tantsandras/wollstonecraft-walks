import React from "react"

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

const sizeArray = ["4rem", "12.5rem", "8.2rem", "14rem"]

const topArray = ["48vh", "100vh", "74vh", "28vh", "55vh", "32vh", "93vh", "820px", "490px", "1000px", "67vh", "1200px", "36vh", "8vh"]

const leftArray = ["3vw", "18vw", "8vw", "10vw", "14vw", "22vw", "1vw", "26vw"]

const Circles = () => (
  <div style={{ position: `absolute`, zIndex: `-1`, top: `0`}}>
    {Array.from({ length: 6 }).map((circle, key) => {
        let size = sizeArray[Math.floor(Math.random() * sizeArray.length)]
      return <div key={key}
        style={{
          position: `absolute`,
          height: `${size}`,
          width: `${size}`,
          top: `${topArray[Math.floor(Math.random() * topArray.length)]}`,
          left: `${leftArray[Math.floor(Math.random() * leftArray.length)]}`,
          borderRadius: `50%`,
          background: `${
            colorArray[Math.floor(Math.random() * colorArray.length)]
          }`,
          zIndex: `-1`,
        }}
      ></div>
    })}
  </div>
)

export default Circles
