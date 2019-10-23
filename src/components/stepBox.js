import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Box = styled.li`
  padding: 1.4rem;
  background: #fffeff;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
  list-style: none;
  min-height: 210px;
  position: relative;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  -o-transition: all 0.4s ease-out;
  &:hover {
    box-shadow: 0 0 0 3px rgb(255, 0, 0, 0.6);
  }
`

const arrow = {
  border: `solid #403C3C`,
  borderWidth: `0px 2px 2px 0px`,
  display: `table-cell`,
  position: `absolute`,
  top: `40%`,
  right: `4%`,
  msTransform: `translateY(-50%)`,
  transform: `translateY(-50%)`,
  padding: `10px`,
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

const Numbers = styled.h4`
  font-family: "Bungee Shade";
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
              }}
            >
                <h3
                  style={{
                    fontSize: `1.2rem`,
                    fontFamily: `'Archivo Black', Impact`,
                    letterSpacing: `1px`,
                    lineHeight: `1.5`,
                    textAlign: `center`,
                    paddingRight: `1.8rem`,
                    color: `#333333`,
                  }}
                >
                  <Numbers num={item.num}>{item.num}</Numbers>
                  {item.title}
                </h3>
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
