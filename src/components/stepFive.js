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
  background: rgba(0, 49, 173, 0.24);
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
  color: #0031ad;
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

class Step5 extends React.Component {
  render() {
    return (
      <main>
        <StepCircle style={{ marginTop: `-2rem` }}>
          <StepNum>5</StepNum>
        </StepCircle>
        <h3
          style={{
            fontFamily: `Yeseva One`,
            fontSize: `1.6rem`,
            textAlign: `center`,
            paddingTop: `1rem`,
          }}
        >
          The Lady Mildmay Inn
        </h3>
        <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Helvetica` }}>
          <ul style={{ listStyle: `none` }}>
            <Direction>
              <Arrow color={"#FF008A"}></Arrow>
              Now leave the school, turn left and walk back up Mathias Road the
              way you came to Newington Green.
            </Direction>
          </ul>
          <h3 style={{ fontFamily: `Yeseva One`, marginTop: `4rem` }}>Did you know?</h3>
          <blockquote>
            The extract by Mary Wollstonecraft you have just heard was from an
            essay called ‘On Poetry’ which she wrote in response to criticism
            from her lover William Godwin about the lack of formality in her
            style. Very little of this work remains because Godwin destroyed
            this and others of her works that didn&#39;t fit his view of what
            her legacy should be after her death. However, when Mary and
            Godwin&#39;s daughter, Mary, and the poet Percy Shelley were falling
            in love they would obsessively read a remaining copy of the essay
            they have found over Wollstonecraft’s grave. The ideas in it
            inspired the young writers and through them became the backbone of
            the ideology of the Romantic movement, another debt we owe to
            Wollstonecraft&#39;s remarkable vision, prowess and resilience.
          </blockquote>
          <h3 style={{ fontFamily: `Yeseva One`, marginTop: `4rem` }}>Back to the directions!</h3>
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
          <h3 style={{ fontFamily: `Yeseva One`, marginTop: `4rem` }}>Did you know?</h3>
          <blockquote>
            Mary Wollstonecraft opened a school for girls near the site in 1784.
            This plaque celebrates that Wollstonecraft lived and worked on the
            Green at a formative time in her life and her experience of running
            a school on the Green inspired her to write ‘Thoughts on the
            Education of Daughters’ (1786). The school may have been on the east
            or south side of the Green as Wollstonecraft notes in a letter that
            the church and Dr Price’s house could be seen from a school window.
            The plaque is on the back of Newington Green school where we have
            just been.
          </blockquote>

          <h3 style={{ fontFamily: `Yeseva One`, marginTop: `4rem` }}>Back to the directions!</h3>
          <ul style={{ listStyle: `none` }}>
            <Direction>
              <Arrow color={"#FF0000"}></Arrow>
              Now walk about 100 meters past recycling bins, flats and Shine
              Hairdressers all on your left till you get to the zebra crossings
              with the Lady Mildmay Inn.{" "}
            </Direction>
          </ul>
          <h3 style={{ fontFamily: `Yeseva One`, marginTop: `4rem` }}>Did you know?</h3>
          <p>
            In stark opposition to her father Godwin and his attack on her
            mother&#39;s literary contributions, when Percy Shelley died Mary
            Shelley made time within her own writing career to compile, complete
            and edit all Percy&#39;s remaining output, helping his legacy to
            endure and the Romantic movement&#39;s ideals and principles to be
            able to continue influencing us to this day. As Joanna Russ points
            out in ‘How to Suppress Women&#39;s Writing’;
            <blockquote style={{margin: `1rem`, fontSize: `1.2rem`, maxWidth: `800px`}}><i>&#39;When the memory
            of one&#39;s predecessors is buried, the assumption persists that
            there were none and each generation of women believes itself to be
            faced with the burden of doing everything for the first time. And if
            no one ever did it before, if no woman was ever that socially sacred
            creature, &quot;a great writer,&quot; why do we think we can succeed
            now?&#39;</i></blockquote> Thanks to the work of second wave radical feminists in the
            70&#39;s and 80&#39;s, Mary&#39;s influence in history, politics and
            literature has been rediscovered and we can once again celebrate her
            part in the major movements of her time, nationally and
            internationally. We think that calls for a toast!
          </p>
          <h3 style={{ fontFamily: `Yeseva One`, marginTop: `4rem` }}>Back to the directions!</h3>
          <ul style={{ listStyle: `none` }}>
            <Direction>
              <Arrow color={"#5D00FF"}></Arrow>
              Once you have crossed over the crossing, head over to the Lady
              Mildmay Inn...
            </Direction>
          </ul>

          <p>
            Here our live audiences were greeted by drag king Don One who hosted
            a birthday celebration for Mary, at which everyone raised a glass,
            had a slice of birthday cake and were invited to read quotes from
            illustrious women like Maya Angelou, bell hooks, Radcliffe Hall and
            Michele Obama! You can recreate this by heading inside for a drink
            or bite to eat and reading the PDF of these quotes that can be found
            on this app and treating yourself to a bit of inspirational me time!
            <br /> <br />
            <p style={{margin: `3rem`, fontSize: `1.2rem`}}>Thank you so much for completing this Wollstonecraft Walk and
            celebrating Mary, our remarkable Green and the advances of feminism<br />
            – onwards and upwards!</p>
          </p>
        </article>
      </main>
    )
  }
}

export default Step5
