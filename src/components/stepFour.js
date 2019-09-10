import React from "react"
import styled, { keyframes } from "styled-components"

const StepCircle = styled.div`
  z-index: -1;
  position: relative;
  border-radius: 50%;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  line-height: 100px;
  background: rgba(255, 0, 0, 0.4);
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
  font-size: 36px;
  color: #ff0000;
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

class Step4 extends React.Component {
  render() {
    return (
      <main>
        <StepCircle style={{ marginTop: `-2rem` }}>
          <StepNum>4</StepNum>
        </StepCircle>
        <h3
          style={{
            fontFamily: `Yeseva One`,
            fontSize: `1.6rem`,
            textAlign: `center`,
            paddingTop: `1rem`,
          }}
        >
          Newington Green Primary School
        </h3>
        <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Helvetica` }}>
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
          <h3 style={{ fontFamily: `Yeseva One` }}>
            “On Poetry, and Our Relish for the Beauties of Nature”
          </h3>
          <h4 style={{ fontFamily: `Yeseva One` }}>
            by Mary Wollstonecraft which originally appeared in the Monthly
            Magazine, April 1797
          </h4>
          A taste for rural scenes, in the present state of society, appears to
          be very often an artificial sentiment, rather inspired by poetry and
          romances, than a real perception of the beauties of nature. But, as it
          is reckoned a proof of refined taste to praise the calm pleasures
          which the countryside affords, the theme is never exhausted. Yet it
          may be made a question, whether this romantic kind of declamation, has
          much effect on the conduct of those, who leave, for a season, the
          crowded cities in which they were bred. <br /> <br />
          In this more advanced state of civilisation a poet is rather the
          creature of art, than of nature. The books that he reads in his youth
          become a hotbed in which artificial flowers are produced, beautiful to
          the common eye, though they want the true hue and favour. His images
          do not arise from sensations, they are copies. The silken wings of
          fancy are shrivelled by rules; and a desire of attaining elegance of
          diction occasions an attention to words, incompatible with sublime,
          impassioned thoughts.
          <br /> <br />
          But God is seen in every floating cloud, and comes from the misty
          mountains to receive the noblest homage of an intelligent creature –
          praise. How solemn is the moment when all affections and remembrances
          fade before the admiration which the goodness and wisdom of God
          inspires when he is worshiped in a temple not made with the hands, and
          the world seems only to contain the mind that formed and the mind that
          contemplates it! These are not the weak responses of ceremonial
          devotion; nor, to express them, would the true poet need another poets
          aid; his heart burns within him, and he speaks the language of truth
          and nature with resistless energy.
          <br /> <br />
          Boys who have received a classical education load their memory with
          words and the correspondent ideas are perhaps never distinctly
          comprehended. But though it should be allowed that books may produce
          some poets, I fear they will never be the poets that charm our cares
          to sleep, or exhort admiration. They may diffuse taste, and polish the
          language; but I am inclined to conclude that they will seldom rouse
          the passions, or amend the heart.
          <br /> <br />
          <h4 style={{ fontFamily: `Yeseva One`, marginTop: `2rem` }}>
            Phenomenal Woman (1995) by Maya Angelou
          </h4>
          <p style={{ fontSize: `0.8rem` }}>
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
            <p style={{ fontSize: `1.2rem` }}>Phenomenally.</p>
            <br />
            Phenomenal woman, That’s me.
            <br /> I walk into a room <br />
            Just as cool as you please,
            <br /> And to a man, <br />
            The fellows stand or
            <br /> Fall down on their knees. <br />
            Then they swarm around me,
            <br /> <i style={{ fontSize: `1.2rem` }}>A hive of honey bees.</i>
            <br /> I say,
            <br />
            It’s the fire in my eyes,
            <br /> And the flash of my teeth,
            <br /> The swing in my waist, <br />
            And the joy in my feet.
            <br /> I’m a woman <br />
            Phenomenally.
            <br />
            <br />
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
            <b style={{ fontSize: `1rem`, color: `#383790` }}>
              The sun of my smile,
            </b>{" "}
            <br />
            The ride of my breasts, <br />
            The grace of my style. <br />
            I’m a woman
            <br /> Phenomenally. <br />
            <br />
            Phenomenal woman, <br />
            That’s me. <br />
            Now you understand <br />
            Just why my head’s not bowed. <br />I don’t shout or jump about
            <br /> Or have to talk real loud. <br />
            When you see me passing, <br />
            It ought to make you proud. <br />I say, <br />
            It’s in the click of my heels,
            <br /> The bend of my hair, the palm of my hand, <br />
            The need for my care. <br />
            ’Cause I’m a woman
            <br />
            Phenomenally. <br />
            <i style={{ fontSize: `1.4rem` }}>
              Phenomenal woman, <br />
              That’s me.
            </i>
          </p>
        </article>
      </main>
    )
  }
}

export default Step4
