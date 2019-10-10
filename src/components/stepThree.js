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
  padding-left: 2rem;
  padding-bottom: 1.4rem;
`
const Arrow = styled.i`
  border-style: solid;
  border-color: ${props => props.color};
  border-width: 0px 2px 2px 0px;
  display: table-cell;
  position: absolute;
  top: 0.32rem;
  left: 0%;
  ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 0.25rem;
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
            fontFamily: `Archivo Black`,
            fontSize: `1.6rem`,
            textAlign: `center`,
            marginTop: `-2.8rem`,
            letterSpacing: `1px`,
            marginBottom: `4rem`,
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
          <h4 style={{ fontFamily: `Archivo Black` }}>Did you know?</h4>
          <p>
            You are now walking through the site of{" "}
            <b
              style={{
                letterSpacing: `2px`,
                lineHeight: `2`,
                fontFamily: `Helvetica`,
              }}
            >
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
            <b
              style={{
                letterSpacing: `2px`,
                lineHeight: `2`,
                fontFamily: `Helvetica`,
              }}
            >
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
            composer Alastair Gavin and were given postcards encouraging them to
            give generously to the Mary On the Green memorial fund.
          </p>
          </article>
          <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Helvetica`, lineHeight: `1.5`, }}>
          <h2 style={{ fontFamily: `Archivo Black`, marginTop: `4rem` }}>
            Listen - a walking memorial <br />{" "}
          </h2>

          <h3
            style={{
              fontFamily: `Archivo Black`,
              letterSpacing: `2px`,
              lineHeight: `2`,
              fontWeight: `lighter`,
              fontSize: `1rem`,
              marginBottom: `4rem`,
            }}
          >
            (excerpted from
            <b
              style={{
                fontFamily: `Archivo Black`,
                lineHeight: `1.5`,
                fontSize: `1.2rem`,
              }}
            >
              {" "}
              Wollstonecraft Live!{" "}
            </b>
            by Kaethe Fine)
            <br />
            Music by Alastair Gavin{" "}
          </h3>

          <p>
            Wollstonecraft
            <i style={{ letterSpacing: `2px` }}>
              {" "}
              Live live live
            </i><br />
          
          <b style={{ letterSpacing: `2px` }}>(Music)</b>
          </p>
          <p>
            ...why should not one woman acknowledge that she can take more
            exercise than another ? or in other words that she has a sound
            constitution? And why, to damp innanent vivacity, is she darkly to
            be told that men will draw conclusions which she thinks little of?
          </p>

          <p>
            Let the Libertine draw what inference he pleases but I hope
            <i style={{ letterSpacing: `2px` }}>
              {" "}
              (whispers) Wollstonecraft Live...
            </i>{" "}
            that no sensible mother with restrain the natural frankness of youth
            by instilling such indanent cautions.
          </p>
          <p>
            ...Women ought to endeavor to purify their heart, but can they do so
            when their uncultivated understandings make them entirely dependent
            on their senses for employment and amusement? When no noble pursuits
            set them above the petty vanities of the day, or enables them to
            curb the wild emotions that agitate a reed over which ever passing
            breeze has power.
          </p>

          <p>
            To gain affections of a virtuous man is affectation necessary?{" "}
            <b style={{ letterSpacing: `2px` }}>(rewind)</b>{" "}
            ...To gain affections of a virtuous man...
            <b style={{ letterSpacing: `2px` }}>(rewind)</b> of
            a virtuous man...
            <b style={{ letterSpacing: `2px` }}>
              (rewind)
            </b>{" "}
            affections of a virtuous man{" "}
            <b style={{ letterSpacing: `2px` }}>
              (rewind. cut)
            </b>
          </p>
          <p>
            To gain affections is affectation necessary?{" "}
            <i style={{ letterSpacing: `2px` }}>
              (whispers) Wollstonecraft Live...{" "}
            </i>
          </p>

          <p>
            Weakness may excite tenderness and gratify the arrogant pride of man{" "}
            <b style={{ letterSpacing: `2px` }}>(rewind)</b>{" "}
            arrogant pride of man{" "}
            <b style={{ letterSpacing: `2px` }}>(rewind)</b> of
            man. <b style={{ letterSpacing: `2px` }}>(cut)</b><br />
            Weakness may excite tenderness and gratify arrogant pride but the
            lordly caresses of a protector will not gratify a noble mind that
            pants for and deserves to be respected.{" "}
          </p>

          <p>
            Fondness is a poor substitute for friendship!{" "}
            <b style={{ letterSpacing: `2px` }}>(rewind)</b>{" "}
          </p>

          <p>
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
          Fondness is a poor substitute for friendship.</p>

          <p>Hear! Hear!</p>
          <p>
            It appears to me impossible that I should cease to exist or that
            this active, restless spirit, equally alive to joy and sorrow should
            be only organized dust, ready to fly abroad the moment the spring
            snaps or spark goes out.
            <i style={{ letterSpacing: `2px` }}>
              {" "}
              (whispers) Wollstonecraft Live...
            </i> Surely something resides in this heart that is not perishable.
          <br /> And life is more than a dream...</p>
        </article>
      </main>
    )
  }
}

export default Step3
