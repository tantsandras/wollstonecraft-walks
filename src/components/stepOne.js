import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"
import Song from "../components/song"

const StepCircle = styled.div`
  position: relative;
  border-radius: 50%;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  line-height: 200px;
  background: rgba(20, 81, 173, 0.33);
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
  color: #383790;
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

class Step1 extends React.Component {
  render() {
    return (
      <main>
        <StepCircle>
          <StepNum>1</StepNum>
        </StepCircle>
        <h3
          style={{
            fontFamily: `'Archivo Black', Impact`,
            fontSize: `2.2rem`,
            textAlign: `center`,
            marginTop: `-2.8rem`,
            letterSpacing: `1px`,
            marginBottom: `4rem`,
          }}
        >
          The Mildmay Club
        </h3>
        <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Open Sans` }}>
          <section style={{ paddingBottom: `3rem` }}>
            
                <p style={{letterSpacing: `2px`, borderLeft: `4px double #383790`, paddingLeft: `1rem`}}> Wollstonecraft Walks Guide researched and written by Anna Birch and Rebecca Mordan. </p>
                <p style={{letterSpacing: `2px`, borderLeft: `4px double #383790`, paddingLeft: `1rem`}}> Read by: Rebecca Mordan with readings read by Rebecca Boey and Caroline Parker </p>
                <p style={{letterSpacing: `2px`, borderLeft: `4px double #383790`, paddingLeft: `1rem`}}> Sound Composition: Alastair Gavin </p>
          </section>
          <p>
            Hello, I&#39;m Rebecca and I&#39;m here to Welcome you to this Mary
            Wollstonecraft Living Literature Walk exploring the heritage of Mary
            Wollstonecraft and Newington Green where she lived. I&#39;m going to
            give you both directions and some local info, please feel free to
            pause and rewind these instructions as you need to.
          </p>
          <p>
            When I&#39;m about to give you some local information I&#39;ll say,{" "}
            <b style={{ letterSpacing: `2px`, lineHeight: `2` }}>
              &#39;Did you know&#39;
            </b>{" "}
            and then when that&#39;s done, I&#39;ll say{" "}
            <b style={{ letterSpacing: `2px`, lineHeight: `2` }}>
              &#39;Back to the directions&#39;
            </b>
            .
          </p>
          <p> 
          We&#39;ll also come to sites along the way where there would have been
          a live performance on our show days in June 2019, and at these points
          you&#39;ll either hear these readings or I&#39;ll tell you about what
          happened on the site you have reached. Let&#39;s get started with a
          couple of pieces to get you in the mood!
          </p>
          <br />
          <h4
            style={{
              fontFamily: `'Archivo Black', Impact`,
              paddingTop: `2rem`,
              letterSpacing: `1px`,
            }}
          >
            Excerpt from
            <h3
              style={{
                fontFamily: `'Archivo Black', Impact`,
                paddingTop: `1rem`,
                letterSpacing: `1px`,
              }}
            >
              A Vindication of the Rights of Woman (1792)
            </h3>
            by Mary Wollstonecraft
          </h4>
          <blockquote>
            My own sex, I hope, will excuse me, if I treat them like rational
            creatures, instead of flattering their{" "}
            <i style={{ letterSpacing: `2px`, lineHeight: `2` }}>FASCINATING</i>{" "}
            graces, and viewing them as if they were in a state of perpetual
            childhood, unable to stand alone. I earnestly wish to point out in
            what true dignity and human happiness consists—I wish to persuade
            women to endeavour to acquire strength, both of mind and body, and
            to convince them, that the soft phrases, susceptibility of heart,
            delicacy of sentiment, and refinement of taste, are almost
            synonymous with epithets of weakness, and that those beings who are
            only the objects of pity and that kind of love, which has been
            termed its sister, will soon become objects of contempt.
            <br /> <br />
            Dismissing then those pretty feminine phrases, which the men
            condescendingly use to soften our slavish dependence, and despising
            that weak elegancy of mind, exquisite sensibility, and sweet
            docility of manners, supposed to be the sexual characteristics of
            the weaker vessel, I wish to show that elegance is inferior to
            virtue, that the first object of laudable ambition is to obtain a
            character as a human being, regardless of the distinction of sex;
            and that secondary views should be brought to this simple
            touchstone.
          </blockquote>
          <Song />
          <br />
          <ul style={{ listStyle: `none` }}>
            <Direction>
              <Arrow color={"#FF0000"}></Arrow>
              To begin this walk, please make your way to the Mildmay Club on
              Newington Green and stand with your back to it looking out at the
              Green; you are facing Mathias Road.
            </Direction>
            <Direction>
              <Arrow color={"#0031AD"}></Arrow>
              Turn right and walk past a large concrete obelisk on a stand at
              the end of the Club&#39;s wall which looks like an egg in a cup!{" "}
            </Direction>
            <Direction>
              <Arrow color={"#FF008A"}></Arrow>Walk past PUSH Cycle shop and see
              Newington Green on your left.
            </Direction>
            <Direction>
              <Arrow color={"#5D00FF"}></Arrow>
              Continue past famous Belle Époque Patisserie and you arrive at the
              Unitarian Meeting House now a building site.
            </Direction>
          </ul>
          <h4 style={{ fontFamily: `'Archivo Black', Impact`, letterSpacing: `1px` }}>
            Did you know?
          </h4>
          <blockquote>
            When Mary Wollstonecraft was 25, she arrived at Newington Green and
            attended the sermons by Rational Dissenter Dr Richard Price here in
            her pew, number 19, which can still be seen inside. As part of her
            time in Dr Price&#39;s circle, Mary would engage with and inspire
            workers’ rights activist Thomas Paine, publisher Joseph Johnson and
            artist Henry Fuseli. The Unitarian Meeting House also has a plaque
            to 18th century woman of letters Anna Laetitia Barbauld, prominent
            English poet, essayist,  literary critic , editor, and author of 
            children&#39;s literature . Excitingly this building is currently
            undergoing a full conservation and restoration funded by National
            Lottery Heritage Fund which will be completed in 2020 – it may be
            finished by the time you do this walk!
          </blockquote>
          <br />
          <h4 style={{ fontFamily: `'Archivo Black', Impact`, letterSpacing: `1px` }}>
            Back to the directions -
          </h4>
          <ul style={{ listStyle: `none` }}>
            <Direction>
              <Arrow color={"#FF0000"}></Arrow>
              Peak around the corner of the Unitarian Meeting House and you may
              catch a glimpse of Mary Wollstonecraft stencil by graffiti artist
              Stewy – at the time of the walk you could just about see her head
              peeking over the metal construction gates. This stencil is the
              first street art to be submitted to the Government Art Collection;
              limited edition screen prints of the image are available from Mary
              on the Green maryonthegreen.com to raise money for a memorial to
              Wollstonecraft on Newington Green.
            </Direction>
            <Direction>
              <Arrow color={"#0031AD"}></Arrow>
              Now continue walking forward past the old bank building, which is
              now private apartments, keeping Newington Green over the road on
              your left.
            </Direction>
            <Direction>
              <Arrow color={"#FF008A"}></Arrow>
              You&#39;ll soon come to the pedestrian crossing – use it to cross
              over. Once on this side of the road, turn immediately to your left
              and cross at the double pedestrian crossing which takes you across
              Newington Green; you&#39;ll end up in front of popular local
              restaurant Trattoria.
            </Direction>
            <Direction>
              <Arrow color={"#5D00FF"}></Arrow>
              Green Lanes is the longest road in London and fashionable Perilla
              Restaurant is on the corner just behind you.
            </Direction>
            <Direction>
              <Arrow color={"#383790"}></Arrow>
              Walk straight on past the Chinese Mission and head up the pavement
              for about 100 hundred yards. Keep Newington Green on your left
              over the road and the rows of shops such as Yield and Boots on
              your right.
            </Direction>
          </ul>
          <h4 style={{ fontFamily: `'Archivo Black', Impact`, letterSpacing: `1px` }}>
            Did you know?
          </h4>
          <blockquote>
            The Chinese mission, now student accommodation, was built in 1895 to
            house China Inland Missions, a nonconformist missionary group
            founded by James Hudson Taylor in 1865. As you might imagine, China
            Inland Missions specialised in missions to China. But unlike other
            missionaries, CIM attracted students, single women and members of
            the working class, making them far more radical and nonconformist
            than other similar projects. The group also helped spread western
            medicine, technology and trained doctors to China – Taylor himself
            was a doctor. Newington Green is steeped in history, for example you
            are now walking towards the oldest terrace in London.
          </blockquote>
         
        </article>
      </main>
    )
  }
}

export default Step1
