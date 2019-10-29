import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"
import MemorialImg from "../images/chapter3.jpg"

const fadeInRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(-15px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `

const StepCircle = styled.div`
  z-index: 1;
  position: relative;
  border-radius: 50%;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  line-height: 200px;
  background: rgb( 178, 125, 178, 0.5);
  mix-blend-mode: multiply;
  text-align: center;
  vertical-align: middle;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  animation: ${fadeInRight} ease 1s forwards;
`

const StepNum = styled.p`
  font-family: Bungee Shade;
  z-index: 2;
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  color: #3e3247;
  text-align: center;
  animation: ${fadeInRight} ease 1.6s forwards;
`
const Direction = styled.li`
line-height: 1.8;
  position: relative;
  padding-left: 2rem;
  padding-bottom: 1.4rem;
`
const Arrow = styled.i`
  border-style: solid;
  border-color: ${props => props.color};
  border-width: 0px 2px 2px 0px;
  display: table-cell;
  position: absolute;
  top: 0.55rem;
  left: 0%;
  ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 0.25rem;
  transform: rotate(-45deg);
  webkit-transform: rotate(-45deg);
`

const StepHeading = styled.h1`
font-family: 'Archivo Black', 'Impact';
font-size: 1.8rem;
font-weight: bolder;
text-align: center;
margin-top: -2.8rem;
letter-spacing: 1px;
margin-bottom: 4rem
line-height: 1.3;
padding-left: 2rem;
animation: ${fadeInRight} ease 1s forwards;
`

const ImgageWrap = styled.div`
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  overflow: hidden;
  animation: ${fadeInRight} ease 1.2s forwards;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
`


const SubHeading = styled.h4`
font-family: 'Archivo Black', 'Impact';
letter-spacing: 1px;
line-height: 1.5; 
color: #333333;
font-size: 1.2rem;
margin-top: 2rem;
`

const Normal = styled.p`
line-height: 1.8;
`
const Credits = styled.h5`
font-family: Helvetica, Roboto, 'Open Sans';
letter-spacing: 2px;
font-weight: normal;
font-size: 1rem;
line-height: 1.8;
`


class Step3 extends React.Component {
  render() {
    return (
      <main>
                <ImgageWrap style={{            
            width: `250px`,
            height: `250px`,
            margin: `0 auto`,
            zIndex: `-2`,
            marginTop: `-4.8rem`}}>
          <img src={`${MemorialImg}`} alt="Image of Mary Wollstonecraft" />
        </ImgageWrap>
        <StepCircle style={{ marginTop: `-70px` }}>
          <StepNum>3</StepNum>
        </StepCircle>
        <StepHeading>
          Mary on the Green memorial site
        </StepHeading>
        <article style={{ padding: `5% 8% 3% 8%`, fontFamily: `Helvetica, Roboto, 'Open Sans'` }}>
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
          <SubHeading>Did you know?</SubHeading>
          <Normal>
            You are now walking through the site of{" "}
            <i
              style={{
                letterSpacing: `2px`,
                fontSize: `1.1rem`,
              }}
            >
              Wollstonecraft Live!
            </i>{" "}
            by Kaethe Fine, conceived by Anna Birch and Kaethe Fine, and
            directed by Anna Birch performances in September 2005. These unique
            multimedia performances began in Unitarian Meeting House and
            continued on the Green and were reprised as some of the last
            performances in the Unitarian Meeting House in 2018 before it closed
            for renovation.
          </Normal>
          <Normal>
            In the late summer of 2007 Fragments &amp; Monuments hosted a picnic
            and outdoor screening where you are walking of the{" "}
            <i
              style={{
                letterSpacing: `2px`,
                fontSize: `1.1rem`,
              }}
            >
              The Wollstonecraft Live Experience!
            </i>{" "}
            films on the Green with live music performed by the famous Deidre
            Cartwright Trio.
          </Normal>
          <Normal>
            In 2019 local company Scary Little Girls joined forces with
            Fragments &amp; Monuments to celebrate Mary and the Living
            Literature Walks were held here funded, by the Heritage Lottery and
            supported by Stoke Newington Literary Festival. At this point in the
            walk the audience listened to Wollstonecraft’s words as interpreted
            by playwright by Kaethe Fine in the specially composed soundscape by
            composer Alastair Gavin and were given postcards encouraging them to
            give generously to the Mary On the Green memorial fund.
          </Normal>
          </article>
          <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Helvetica, Roboto, 'Open Sans'`}}>
          <SubHeading style={{ marginTop: `2rem`}}>
            Listen - a walking memorial
          </SubHeading>

          <Credits style={{marginBottom: `4rem`,}}>
            (excerpted from
            <i>
              {" "}
              Wollstonecraft Live!{" "}
            </i>
            by Kaethe Fine)
            <br />
            Music by Alastair Gavin{" "}
          </Credits>

          <Normal>
            Wollstonecraft
            <i style={{ letterSpacing: `2px` }}>
              {" "}
              Live live live
            </i><br />
          
          <b style={{ letterSpacing: `2px` }}>(Music)</b>
          </Normal>
          <Normal>
            ...why should not one woman acknowledge that she can take more
            exercise than another ? or in other words that she has a sound
            constitution? And why, to damp innocent vivacity, is she darkly to
            be told that men will draw conclusions which she thinks little of?
          </Normal>

          <Normal>
            Let the Libertine draw what inference he pleases but I hope
            <i style={{ letterSpacing: `2px` }}>
              {" "}
              (whispers) Wollstonecraft Live...
            </i>{" "}
            that no sensible mother with restrain the natural frankness of youth
            by instilling such indecent cautions.
          </Normal>
          <Normal>
            ...Women ought to endeavor to purify their heart, but can they do so
            when their uncultivated understandings make them entirely dependent
            on their senses for employment and amusement? When no noble pursuits
            set them above the petty vanities of the day, or enables them to
            curb the wild emotions that agitate a reed over which ever passing
            breeze has power.
          </Normal>

          <Normal>
            To gain affections of a virtuous man is affectation necessary?{" "}
            <b style={{ letterSpacing: `2px` }}>(rewind)</b>{" "}
            ...To gain affections of a virtuous man...
            <b style={{ letterSpacing: `2px` }}>(rewind)</b> affection of
            a virtuous man...
            <b style={{ letterSpacing: `2px` }}>
              (rewind)
            </b>{" "}
            of a virtuous man{" "}
            <b style={{ letterSpacing: `2px` }}>
              (rewind. cut)
            </b>
          </Normal>
          <Normal>
            To gain affections is affectation necessary?{" "}
            <i style={{ letterSpacing: `2px` }}>
              (whispers) Wollstonecraft Live...{" "}
            </i>
          </Normal>

          <Normal>
            Weakness may excite tenderness and gratify the arrogant pride of man{" "}
            <b style={{ letterSpacing: `2px` }}>(rewind)</b>{" "}
            arrogant pride of man{" "}
            <b style={{ letterSpacing: `2px` }}>(rewind)</b> of
            man. <b style={{ letterSpacing: `2px` }}>(cut)</b><br />
            Weakness may excite tenderness and gratify arrogant pride but the
            lordly caresses of a protector will not gratify a noble mind that
            pants for and deserves to be respected.{" "}
          </Normal>

          <Normal>
            Fondness is a poor substitute for friendship!{" "}
            <b style={{ letterSpacing: `2px` }}>(rewind)</b>{" "}
          </Normal>

          <Normal>
            A noble mind that pants for and deserves to be respected. Fondness
            is.
            <b style={{ letterSpacing: `2px`}}>
              {" "}
              (Static. Rewind)
            </b>
            <br />
            But the lordly caresses of a. <br />
            Of a protector will not gratify a noble mind.
          <br />...that pants for a deserves to respected.<br />
          Fondness is a poor substitute for friendship.</Normal>

          <Normal>Hear! Hear!</Normal>
          <Normal>
            It appears to me impossible that I should cease to exist or that
            this active, restless spirit, equally alive to joy and sorrow should
            be only organized dust, ready to fly abroad the moment the spring
            snaps or spark goes out.
            <i style={{ letterSpacing: `2px` }}>
              {" "}
              (whispers) Wollstonecraft Live...
            </i> Surely something resides in this heart that is not perishable.
          <br /> And life is more than a dream...</Normal>
        </article>
      </main>
    )
  }
}

export default Step3
