import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"
import InnImg from "../images/chapter5.jpg"

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

const Back = styled(Link)`
  padding: 0.6rem 1rem 0.6rem 1rem;
  font-size: 22px;
  background: #1451ad;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.25);
  font-family: Helvetica, Roboto, "Open Sans";
  text-align: center;
  border: 2px solid white;
  letter-spacing: 0.04em;
  color: #ffd0d0;
  text-transform: uppercase;
  text-decoration: none;
  min-width: 240px;
  overflow: hidden;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  transition: background-color 0.6s ease;
  -webkit-transition: background-color 0.6s ease-out;
  -moz-transition: background-color 0.6s ease-out;
  -o-transition: background-color 0.6s ease-out;

  &:hover {
    background-color: #ff0000;
    box-shadow: 0 0 0 2px rgb(255, 0, 0, 0.6);

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
  background: rgba(0, 49, 173, 0.24);
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
  color: #0031ad;
  text-align: center;
  animation: ${fadeInRight} ease 1.6s forwards;
`
const Direction = styled.li`
  position: relative;
  padding-left: 2rem;
  padding-bottom: 1.4rem;
  line-height: 1.8;
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

const Quote = styled.i`
  letter-spacing: 2px;
  line-height: 2;
  position: relative;
  padding: 1em 2em;
  min-height: 5em;
  &:before {
    font-family: Yeseva One;
    font-size: 3rem;
    position: absolute;
    height: 3rem;
    content: "“";
    top: -0.8rem;
    left: 0rem;
  }

  &:after {
    font-family: Yeseva One;
    font-size: 3rem;
    position: absolute;
    height: 3rem;
    content: "”";
    bottom: 0.8rem;
    right: 0.8rem;
  }
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

const SubHeading = styled.h4`
  font-family: "Archivo Black", 'Impact';
  letter-spacing: 1px;
  line-height: 1.5;
  color: #333333;
  font-size: 1.2rem;
  margin-top: 2rem;
`
const Normal = styled.p`
  line-height: 1.8;
`
const Block = styled.blockquote`
  line-height: 1.8;
`
const ImgageWrap = styled.div`
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  overflow: hidden;
  mix-blend-mode: screen;
  animation: ${fadeInRight} ease 1s forwards;
  margin: 0 auto;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
`

class Step5 extends React.Component {
  render() {
    return (
      <main>
        <ImgageWrap
          style={{
            width: `250px`,
            height: `250px`,
            zIndex: `-1`,
            marginTop: `-4.8rem`,
          }}
        >
            <img src={`${InnImg}`} alt="Photo of a basket with the Wollstonecraft walk guide inside" style={{height: `250px`}} />
        </ImgageWrap>
        <StepCircle style={{ marginTop: `-60px` }}>
          <StepNum>5</StepNum>
        </StepCircle>
        <StepHeading>The Lady Mildmay Inn</StepHeading>
        <article
          style={{
            padding: `15% 8% 3% 8%`,
            fontFamily: `Helvetica, Roboto, 'Open Sans'`,
          }}
        >
          <ul style={{ listStyle: `none` }}>
            <Direction>
              <Arrow color={"#FF008A"}></Arrow>
              Now leave the school, turn left and walk back up Mathias Road the
              way you came to Newington Green.
            </Direction>
          </ul>
          <SubHeading>Did you know?</SubHeading>
          <Block>
            The extract by Mary Wollstonecraft you have just heard was from an
            essay called{" "}
            <i
              style={{
                fontSize: `1.1rem`,
                letterSpacing: `2px`,
              }}
            >
              ‘On Poetry’
            </i>{" "}
            which she wrote in response to criticism from her lover William
            Godwin about the lack of formality in her style. Very little of this
            work remains because Godwin destroyed this and others of her works
            that didn&#39;t fit his view of what her legacy should be after her
            death. However, when Mary and Godwin&#39;s daughter, Mary, and the
            poet Percy Shelley were falling in love they would obsessively read
            a remaining copy of the essay they have found over Wollstonecraft’s
            grave. The ideas in it inspired the young writers and through them
            became the backbone of the ideology of the Romantic movement,
            another debt we owe to Wollstonecraft&#39;s remarkable vision,
            prowess and resilience.
          </Block>
          <SubHeading>Back to the directions!</SubHeading>
          <ul style={{ listStyle: `none` }}>
            <Direction>
              <Arrow color={"#0031ad"}></Arrow>
              When you get back to the corner of Mathias Road, turn left and
              walk forward keeping Newington Green over the road on your right.
              As you walk you will draw level with the bus stop on your right;
              pause, look up at the plaque to Mary Wollstonecraft on the tall
              school building on your left.
            </Direction>
          </ul>
          <SubHeading>Did you know?</SubHeading>
          <Block>
            Mary Wollstonecraft opened a school for girls near the site in 1784.
            This plaque celebrates that Wollstonecraft lived and worked on the
            Green at a formative time in her life and her experience of running
            a school on the Green inspired her to write{" "}
            <i
              style={{
                fontSize: `1.1rem`,
                letterSpacing: `2px`,
              }}
            >
              ‘Thoughts on the Education of Daughters’ (1786)
            </i>
            . The school may have been on the east or south side of the Green as
            Wollstonecraft notes in a letter that the church and Dr Price’s
            house could be seen from a school window. The plaque is on the back
            of Newington Green school where we have just been.
          </Block>
          <SubHeading>Back to the directions!</SubHeading>
          <ul style={{ listStyle: `none` }}>
            <Direction>
              <Arrow color={"#FF0000"}></Arrow>
              Now walk about 100 meters past recycling bins, flats and Shine
              Hairdressers all on your left till you get to the zebra crossings
              with the Lady Mildmay Inn.{" "}
            </Direction>
          </ul>
          <SubHeading>Did you know?</SubHeading>
          <Normal>
            In stark opposition to her father Godwin and his attack on her
            mother&#39;s literary contributions, when Percy Shelley died Mary
            Shelley made time within her own writing career to compile, complete
            and edit all Percy&#39;s remaining output, helping his legacy to
            endure and the Romantic movement&#39;s ideals and principles to be
            able to continue influencing us to this day. As Joanna Russ points
            out in ‘How to Suppress Women&#39;s Writing’;
          </Normal>
          <Block
            style={{
              margin: `1rem`,
              fontSize: `1.1rem`,
              letterSpacing: `2px`,
              lineHeight: `1.6`,
            }}
          >
            <Quote>
              When the memory of one&#39;s predecessors is buried, the
              assumption persists that there were none and each generation of
              women believes itself to be faced with the burden of doing
              everything for the first time. And if no one ever did it before,
              if no woman was ever that socially sacred creature, &quot;a great
              writer,&quot; why do we think we can succeed now?
            </Quote>
          </Block>{" "}
          <Normal>
            Thanks to the work of second wave radical feminists in the 70&#39;s
            and 80&#39;s, Mary&#39;s influence in history, politics and
            literature has been rediscovered and we can once again celebrate her
            part in the major movements of her time, nationally and
            internationally. We think that calls for a toast!
          </Normal>
          <SubHeading>Back to the directions!</SubHeading>
          <ul style={{ listStyle: `none` }}>
            <Direction>
              <Arrow color={"#5D00FF"}></Arrow>
              Once you have crossed over the crossing, head over to the Lady
              Mildmay Inn...
            </Direction>
          </ul>
          <Normal>
            Here our live audiences were greeted by drag king Don One who hosted
            a birthday celebration for Mary, at which everyone raised a glass,
            had a slice of birthday cake and were invited to read quotes from
            illustrious women like Maya Angelou, bell hooks, Radcliffe Hall and
            Michele Obama! You can recreate this by heading inside for a drink
            or bite to eat and reading these quotes (that can be found <Link to="/media/#inspirational">here</Link>) and treating yourself to a bit of inspirational me time!
          </Normal>
          <Normal
            style={{
              margin: `0.4rem`,
              fontSize: `1.1rem`,
              letterSpacing: `2px`,
              lineHeight: `1.6`,
            }}
          >
            Thank you so much for completing this Wollstonecraft Walk and
            celebrating Mary, our remarkable Green and the advances of feminism
            – onwards and upwards!
          </Normal>
        </article>
        <div
          style={{
            display: `grid`,
            justifyContent: `center`,
            padding: `6em 2em`,
          }}
        >
          <Back style={{ margin: `0 auto` }} to={"/"}>
            Back to Home
          </Back>
        </div>
      </main>
    )
  }
}

export default Step5
