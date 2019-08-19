import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const box = {
  padding: `2rem`,
  background: `#FFFFFF`,
  border: `2px solid rgba(0, 0, 0, 0.1)`,
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  listStyle: `none`,
  minHeight: `120px`,
  position: `relative`,
}

const boxList = {
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fit, minmax(340px, 1fr))`,
  gridGap: `1rem`,
  columnGap: `4%`,
  margin: `0`,
}

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
  webkitTransform: `rotate(-45deg)`,
}

const numberColor = num => {
  return num === 1
    ? "#383790"
    : num === 2
    ? "#FF008A"
    : num === 3
    ? "#5D00FF"
    : num === 4 
    ? "#FF0000"
    : num === 5 
    ? "#0031AD"
    : "#FF0000"
}

const Numbers = styled.h3`
  font-family: "Bungee Shade";
  font-style: "normal";
  font-weight: "normal";
  font-size: "2rem";
  color: ${props => numberColor(props.num)};
`

const Steps = () => (
  <ul style={boxList}>
    <Link
      to="/intro"
      style={{
        color: `#4B4E53`,
        textDecoration: `none`,
      }}
    >
      <li style={box}>
        <h3 style={{ fontSize: `1rem` }}>
          <Numbers>Intro</Numbers> Who is Mary Wollstonecraft?
        </h3>
        <i style={arrow}></i>
      </li>
    </Link>
    <Link
      to="/mildmay-club"
      style={{
        color: `#4B4E53`,
        textDecoration: `none`,
      }}
    >
      <li style={box}>
        <h3 style={{ fontSize: `1rem` }}>
          <Numbers num={1}>1</Numbers>Mildmay Club
        </h3>
        <i style={arrow}></i>
      </li>
    </Link>

    <Link
      to="/lizzy's-cafe"
      style={{
        color: `#4B4E53`,
        textDecoration: `none`,
      }}
    >
      <li style={box}>
        <h3 style={{ fontSize: `1rem` }}>
          <Numbers num={2}>2</Numbers>Lizzy's Cafe
        </h3>
        <i style={arrow}></i>
      </li>
    </Link>

    <Link
      to="/mary-on-the-green-memorial-site"
      style={{
        color: `#4B4E53`,
        textDecoration: `none`,
      }}
    >
      <li style={box}>
        <h3 style={{ fontSize: `1rem` }}>
          <Numbers num={3}>3</Numbers>Mary on the Green Memorial site
        </h3>
        <i style={arrow}></i>
      </li>
    </Link>

    <Link
      to="/newington-green-primary-school"
      style={{
        color: `#4B4E53`,
        textDecoration: `none`,
      }}
    >
      <li style={box}>
        <h3 style={{ fontSize: `1rem` }}>
          <Numbers num={4}>4</Numbers>Newington Green Primary School
        </h3>
        <i style={arrow}></i>
      </li>
    </Link>

    <Link
      to="/the-lady-mildmay-inn"
      style={{
        color: `#4B4E53`,
        textDecoration: `none`,
      }}
    >
      <li style={box}>
        <h3 style={{ fontSize: `1rem` }}>
          <Numbers num={5}>5</Numbers>The Lady Mildmay Inn
        </h3>
        <i style={arrow}></i>
      </li>
    </Link>
  </ul>
)

export default Steps
