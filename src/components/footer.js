import React from "react"


const element = {
    gridTemplateColumns: `repeat(4, 1fr)`,
    gridTemplateRows: `repeat(2, 300px)`,
    fontFamily: `Helvetica`,
  }

const hero = {
    backgroundSize: `cover`,
    padding: `4rem 2rem`,
    display: `grid`,
    alignItems: `center`,
    gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
}

const Footer = () => (
<footer style={hero}>


</footer>
)

export default Footer