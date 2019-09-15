import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"

const StepCircle = styled.div`
  z-index: -1;
  position: relative;
  border-radius: 50%;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  line-height: 200px;
  background: rgba(93, 0, 255, 0.3);
  mix-blend-mode: multiply;
  text-align: center;
  vertical-align: middle;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
`

const StepNum = styled.p`
  font-family: Bungee Shade;
  z-index: 2;
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  color: #5d00ff;
  text-align: center;
`
const Direction = styled.li`
  position: relative;
  padding-left: 2.4rem;
  padding-bottom: 1.4rem;
`
const Arrow = styled.i`
  border-style: solid;
  border-color: ${props => props.color};
  border-width: 0px 2px 2px 0px;
  display: table-cell;
  position: absolute;
  top: 0rem;
  left: 0%;
  ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 0.6rem;
  transform: rotate(-45deg);
  webkit-transform: rotate(-45deg);
`

class Step3 extends React.Component {
  render() {
    return (
      <main>
        <StepCircle style={{ marginTop: `-2rem` }}>
          <StepNum>3</StepNum>
        </StepCircle>
        <h3
          style={{
            fontFamily: `Yeseva One`,
            fontSize: `1.6rem`,
            textAlign: `center`,
            marginTop: `-2.8rem`,
            letterSpacing: `1px`,
            marginBottom: `4rem`
          }}
        >
          Mary on the Green memorial site
        </h3>
        <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Helvetica` }}>
          <ul style={{ listStyle: `none` }}>
            <Direction>
              <Arrow color={"#FF0000"}></Arrow>
              With Lizzy&#39;s at your back, head straight forward across the
              Green and stop on the patch of grass on the other side of the
              path.
              <br /> This will be the site for the Mary Wollstonecraft memorial
              by contemporary artist Maggi Hambling.
            </Direction>{" "}
          </ul>
          <h4 style={{ fontFamily: `Yeseva One` }}>Did you know?</h4>
          <p>
            You are now walking through the site of{" "}
            <b style={{ letterSpacing: `2px`, lineHeight: `2` }}>
              Wollstonecraft Live!
            </b>{" "}
            by Kaethe Fine, conceived by Anna Birch and Kaethe Fine, and
            directed by Anna Birch performances in September 2005. These unique
            multimedia performances began in Unitarian Meeting House and
            continued on the Green and were reprised as some of the last
            performances in the Unitarian Meeting House in 2018 before it closed
            for renovation.
          </p>
          <p>
            In the late summer of 2007 Fragments &amp; Monuments hosted a picnic
            and outdoor screening where you are walking of the{" "}
            <b style={{ letterSpacing: `2px`, lineHeight: `2` }}>
              The Wollstonecraft Live Experience!
            </b>{" "}
            films on the Green with live music performed by the famous Deidre
            Cartwright Trio.
          </p>
          <p>
            In 2019 local company Scary Little Girls joined forces with
            Fragments &amp; Monuments to celebrate Mary and the Living
            Literature Walks were held here funded, by the Heritage Lottery and
            supported by Stoke Newington Literary Festival. At this point in the
            walk the audience listened to Wollstonecraft’s words as interpreted
            by playwright by Kaethe Fine in the specially composed soundscape by
            composer Alastair Gavin (you can find this special recording under{" "}
            <Link to={"/media"}>Media</Link> on this app) and were given
            postcards encouraging them to give generously to the Mary On the
            Green memorial fund.
          </p>
        </article>
      </main>
    )
  }
}

export default Step3
