import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import WalkGuide from "../pages/walkguide"
import StepBox from "../components/stepBox"

const boxList = {
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fit, minmax(340px, 1fr))`,
  gridGap: `1rem`,
  columnGap: `4%`,
  margin: `0`,
}


const Steps = props => (
  <ul style={boxList}>
    <Link
      to={`/walkguide/${props.num}`}
      component={props => <WalkGuide {...props} />}
      style={{
        color: `#4B4E53`,
        textDecoration: `none`,
      }}
    >
        <StepBox />
    </Link>
  </ul>
)

export default Steps
