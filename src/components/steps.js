
import React from "react"

import StepBox from "../components/stepBox"

const boxList = {
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fit, minmax(340px, 1fr))`,
  gridGap: `1rem`,
  columnGap: `4%`,
  margin: `0`,
  paddingBottom: `10em`
}


const Steps = () => (
  <ul style={boxList}>

        <StepBox />

  </ul>
)

export default Steps
