import React from "react"
import styled, { keyframes } from "styled-components"
import PsImage from "../images/chapter4.jpg"

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
  background: rgba(255, 0, 0, 0.4);
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
  color: #ff0000;
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

const element = {
  gridTemplateColumns: `repeat(2, 1fr)`,
  gridTemplateRows: `repeat(2, 300px)`,
}

const QuotationMarks = styled.p`
  line-height: 1.8;
  position: relative;
  padding: 1em 0em;
  min-height: 5em;
  &:before {
    font-family: Yeseva One;
    font-size: 3rem;
    position: absolute;
    height: 3rem;
    content: "“";
    top: -0.4rem;
    left: -2rem;
  }

  &:after {
    font-family: Yeseva One;
    font-size: 3rem;
    position: absolute;
    height: 3rem;
    content: "”";
    bottom: 1rem;
    right: 0;
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

const Credits = styled.h5`
  font-family: Helvetica, Roboto, "Open Sans";
  letter-spacing: 2px;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 1.8;
`

const ImgWrap = styled.div`
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  overflow: hidden;
  mix-blend-mode: lighten;
  animation: ${fadeInRight} ease 1.2s forwards;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
`

class Step4 extends React.Component {
  render() {
    return (
      <main style={{ position: `relative` }}>
        <ImgWrap
          style={{
            width: `254px`,
            height: `254px`,
            zIndex: `-2`,
            margin: `0 auto`,
            marginTop: `-4.8rem`,
          }}
        >
            <img src={`${PsImage}`} alt="Caroline Parker outside of Newington Green Primary School" />
        </ImgWrap>
        <StepCircle style={{ marginTop: `-70px` }}>
          <StepNum>4</StepNum>
        </StepCircle>
        <StepHeading>Newington Green Primary School</StepHeading>
        <article
          style={{
            padding: `5% 8% 3% 8%`,
            fontFamily: `Helvetica, Roboto, 'Open Sans'`,
          }}
        >
          <ul style={{ listStyle: `none` }}>
            <Direction>
              <Arrow color={"#383790"}></Arrow>Turn left and walk to the end of
              Newington Green towards Belle Époque. When you reach the end of
              the Green, take the exit on your right. Cross at the first zebra
              crossing in front of you as you leave the Green and then turn to
              your right and carry on across the second zebra crossing. You are
              now on the corner of Mathias Road; walk along it keeping the
              Mildmay Club on your left over the road.
            </Direction>
            <Direction>
              <Arrow color={"#FF008A"}></Arrow>Walk for 100 yards and turn right
              down Mathias Road going past The Factory Children&#39;s Centre, a
              wonderful local community centre with lots of activities.
              You&#39;ll soon come to a striking green fence on your right
              behind which is Newington Green Primary school which is our
              destination. Behind the high green gate is the school playground
              which holds a folly to Mary Wollstonecraft built by Foundry and
              Bottle. Take a few moments here to listen to the next readings...
            </Direction>
          </ul>
          <SubHeading>
            On Poetry, and Our Relish for the Beauties of Nature
          </SubHeading>
          <Credits>by Mary Wollstonecraft<br />
            (which originally appeared in the Monthly Magazine, April 1797)
          </Credits>
          <QuotationMarks>
            <Normal>
              A taste for rural scenes, in the present state of society, appears
              to be very often an artificial sentiment, rather inspired by
              poetry and romances, than a real perception of the beauties of
              nature. But, as it is reckoned a proof of refined taste to praise
              the calm pleasures which the countryside affords, the theme is
              never exhausted. Yet it may be made a question, whether this
              romantic kind of declamation, has much effect on the conduct of
              those, who leave, for a season, the crowded cities in which they
              were bred.{" "}
            </Normal>
            <Normal>
              In this more advanced state of civilisation a poet is rather the
              creature of art, than of nature. The books that he reads in his
              youth become a hotbed in which artificial flowers are produced,
              beautiful to the common eye, though they want the true hue and
              favour. His images do not arise from sensations, they are copies.
              The silken wings of fancy are shrivelled by rules; and a desire of
              attaining elegance of diction occasions an attention to words,
              incompatible with sublime, impassioned thoughts.
            </Normal>
            <Normal>
              But God is seen in every floating cloud, and comes from the misty
              mountains to receive the noblest homage of an intelligent creature
              – praise. How solemn is the moment when all affections and
              remembrances fade before the admiration which the goodness and
              wisdom of God inspires when he is worshiped in a temple not made
              with the hands, and the world seems only to contain the mind that
              formed and the mind that contemplates it! These are not the weak
              responses of ceremonial devotion; nor, to express them, would the
              true poet need another poets aid; his heart burns within him, and
              he speaks the language of truth and nature with resistless energy.
            </Normal>
            <Normal>
              Boys who have received a classical education load their memory
              with words and the correspondent ideas are perhaps never
              distinctly comprehended. But though it should be allowed that
              books may produce some poets, I fear they will never be the poets
              that charm our cares to sleep, or exhort admiration. They may
              diffuse taste, and polish the language; but I am inclined to
              conclude that they will seldom rouse the passions, or amend the
              heart.
            </Normal>
          </QuotationMarks>

          <section
            style={{
              backgroundSize: `cover`,
              display: `grid`,
              alignItems: `center`,
              gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
              marginBottom: `4rem`,
            }}
          >
            <div style={element}>
              <SubHeading style={{ marginTop: `2rem` }}>
                Phenomenal Woman (1995){" "}
              </SubHeading>
              <Credits>by Maya Angelou</Credits>

              <Normal style={{ fontSize: `0.8rem` }}>
                Pretty women wonder where my secret lies.
                <br /> I’m not cute or built to suit a fashion model’s size
                <br /> But when I start to tell them,
                <br /> They think I’m telling lies.
                <br /> I say,
                <br />
                It’s in the reach of my arms,
                <br /> The span of my hips,
                <br /> The stride of my step,
                <br /> The curl of my lips. I’m a woman
                <br />
                <Normal
                  style={{
                    fontSize: `1rem`,
                    letterSpacing: `2px`,
                  }}
                >
                  Phenomenally.
                </Normal>
                <Normal>
                  Phenomenal woman, That’s me.
                  <br /> I walk into a room <br />
                  Just as cool as you please,
                  <br /> And to a man, <br />
                  The fellows stand or
                  <br /> Fall down on their knees. <br />
                  Then they swarm around me,
                  <br />{" "}
                  <i
                    style={{
                      fontSize: `1rem`,
                      letterSpacing: `2px`,
                    }}
                  >
                    A hive of honey bees.
                  </i>
                  <br /> I say,
                  <br />
                  It’s the fire in my eyes,
                  <br /> And the flash of my teeth,
                  <br /> The swing in my waist, <br />
                  And the joy in my feet.
                  <br /> I’m a woman <br />
                  Phenomenally.
                </Normal>
                <Normal>
                  Phenomenal woman, <br />
                  That’s me. <br />
                  Men themselves have wondered
                  <br /> What they see in me.
                  <br />
                  They try so much
                  <br /> But they can’t touch
                  <br /> My inner mystery. <br />
                  When I try to show them, <br />
                  They say they still can’t see. <br />I say, <br />
                  It’s in the arch of my back, <br />
                  <i
                    style={{
                      fontSize: `1rem`,
                      letterSpacing: `2px`,
                    }}
                  >
                    The sun of my smile,
                  </i>{" "}
                  <br />
                  The ride of my breasts, <br />
                  The grace of my style. <br />
                  I’m a woman
                  <br /> Phenomenally.
                </Normal>
                <Normal>
                  Phenomenal woman, <br />
                  That’s me. <br />
                  Now you understand <br />
                  Just why my head’s not bowed. <br />I don’t shout or jump
                  about
                  <br /> Or have to talk real loud. <br />
                  When you see me passing, <br />
                  It ought to make you proud. <br />I say, <br />
                  It’s in the click of my heels,
                  <br /> The bend of my hair, the palm of my hand, <br />
                  The need for my care. <br />
                  ’Cause I’m a woman
                  <br />
                  Phenomenally. <br />
                  <Normal
                    style={{
                      fontSize: `1rem`,
                      letterSpacing: `2px`,
                    }}
                  >
                    Phenomenal woman, <br />
                    That’s me.
                  </Normal>
                </Normal>
              </Normal>
            </div>
          </section>
        </article>
      </main>
    )
  }
}

export default Step4
