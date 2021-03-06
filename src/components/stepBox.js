import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Box = styled.li`
  display: flex;
  flex-direction: column;
  background: #fffeff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  list-style: none;
  min-height: 210px;
  position: relative;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 0 0 0 3px rgb(255, 0, 0, 0.6);
  }
`

const arrow = {
  border: `solid rgba(0,0,0,.5)`,
  borderWidth: `0px 1.4px 1.4px 0px`,
  display: `table-cell`,
  position: `absolute`,
  cursor: `pointer`,
  top: `43%`,
  right: `5%`,
  msTransform: `translateY(-50%)`,
  transform: `translateY(-50%)`,
  padding: `9px`,
  transform: `rotate(-45deg)`,
  WebkitTransform: `rotate(-45deg)`,
}

const numberColor = num => {
  return num === "1"
    ? "#383790"
    : num === "2"
    ? "#FF008A"
    : num === "3"
    ? "#5D00FF"
    : num === "4"
    ? "#FF0000"
    : num === "5"
    ? "#0031AD"
    : "#FF0000"
}

const Numbers = styled.h5`
  font-family: "Bungee Shade";
  font-display: block;
  padding-bottom: 2rem;
  font-size: 1.6rem;
  padding-top: 0rem;
  color: ${props => numberColor(props.num)};
`

const stepList = [
  { num: "Intro", title: "Who is Mary Wollstonecraft?" },
  { num: "1", title: "Mildmay Club" },
  { num: "2", title: "Lizzy's on the Green" },
  { num: "3", title: "Mary on the Green Memorial site" },
  { num: "4", title: "Newington Green Primary School" },
  { num: "5", title: "The Lady Mildmay Inn" },
]

class StepBox extends React.Component {
  render() {
    return (
      <>
        {stepList.map((item, key) => {
          return (
            <Box key={key}>
              <Link
                key={key}
                to={`/${item.num}`}
                style={{
                  color: `#28292b`,
                  textDecoration: `none`,
                  width: `100%`,
                  height: `auto`,
                  cursor: `pointer`,
                  flex: `1`,
                  padding: `1.4rem`,
                }}
              >
                <h4
                  style={{
                    fontSize: `1.2rem`,
                    fontFamily: `'Archivo Black', 'Impact'`,
                    fontDisplay: `block`,
                    letterSpacing: `1px`,
                    lineHeight: `1.5`,
                    textAlign: `center`,
                    paddingRight: `1.8rem`,
                    color: `#333333`,
                  }}
                >
                  <Numbers num={item.num}>{item.num}</Numbers>
                  {item.title}
                </h4>
                <i style={arrow}></i>
              </Link>
            </Box>
          )
        })}
      </>
    )
  }
}

export default StepBox
