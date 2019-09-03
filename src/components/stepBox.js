
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const box = {
    padding: `1.4rem`,
    background: `#FFFFFF`,
    border: `2px solid rgba(0, 0, 0, 0.1)`,
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    listStyle: `none`,
    minHeight: `120px`,
    position: `relative`,
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
  
  const Numbers = styled.h3`
    font-family: "Bungee Shade";
    padding-bottom: 1rem;
    font-size: 1.8rem;
    padding-top: 0rem;
    color: ${props => numberColor(props.num)};
  `

const stepList = [
    { num: "Intro", title: "Who is Mary Wollstonecraft?" },
    { num: "1",  title: "Mildmay Club" },
    { num: "2", title: "Lizzy's on the Green" },
    { num: "3", title: "Mary on the Green Memorial site"},
    { num: "4", title: "Newington Green Primary School" },
    { num: "5", title: "The Lady Mildmay Inn"}
]

class StepBox extends React.Component {


    render() {
        return (

            <>
    {stepList.map((item, key) => {
        return (
            <Link
            to={`/walkguide/${item.num}`}
            style={{
              color: `#4B4E53`,
              textDecoration: `none`,
            }}
          >

        <li key={key} style={box}>
            <h3 style={{ 
            fontSize: `1.2rem`, 
            fontFamily: `Yeseva One`,
             fontWeight: `bold`}}>
            <Numbers num={item.num}>{item.num}</Numbers>{item.title}
            </h3>
            <i style={arrow}></i>
        </li>
        </Link>
        )
    })}
    </>
 )}
}

export default StepBox;
