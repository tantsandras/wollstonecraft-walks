import React from "react"
import styled, { keyframes } from "styled-components"
import AudioPlayer from "../components/audioPlayer"
import Ep1 from "../audio/podcast/EP1.mp3"
import Ep2 from "../audio/podcast/EP2.mp3"
import Ep3 from "../audio/podcast/EP3.mp3"


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

const PageCircle = styled.div`
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
  animation: ${fadeInRight} ease 1.2s forwards;
`
const PageHeading = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border-left: 6px double #5D00FF;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  position: relative;
  clip-path: circle(50%);
  -webkit-clip-path: circle(50%);
  -webkit-shape-outside: circle(20em);
  shape-outside: circle(20em);
  animation: ${fadeInRight} ease 1.2s forwards;
`
const MainHeading = styled.h1`
  font-family: "Archivo Black", Impact;
  font-size: 2.4rem;
  text-align: center;
  letter-spacing: 1px;
  margin-top: -9rem;
  padding-left: 8rem;
  margin-bottom: 3rem;
  color: #333333;
  animation: ${fadeInRight} ease 1.6s forwards;
`

const PodBox = styled.li`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
  list-style: none;
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`

const PodList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 2fr));
  grid-gap: 1rem;
  padding: 6rem 2rem 4rem 2rem;
  column-gap: 4%;
  margin: 0 auto;
  grid-template-rows: repeat(3, auto);
  justify-content: center;
  font-family: Helvetica, Roboto, 'Open Sans';
`
const Normal = styled.p`
line-height: 1.8;
`

class Pods extends React.Component {
  render() {
    return (
      <main>
      <PageCircle style={{ marginBottom: `4rem`, marginTop: `4rem` }}>
          <PageHeading></PageHeading>
        </PageCircle>
        <MainHeading>Podcast.</MainHeading>
        <h2 style={{fontFamily: `Helvetica, Roboto, 'Open Sans'`, fontWeight: `normal`, letterSpacing: `2px`, lineHeight: `1.8`, fontSize: `0.9rem`, textAlign: `center`}}>By Marina Garvey Birch and Erica McCoy</h2>
        <PodList>
          <PodBox>
            <h3
              style={{
                fontFamily: `'Archivo Black', Impact`,
                fontSize: `1.4rem`,
                textAlign: `center`,
                letterSpacing: `1px`,
                marginBottom: `2rem`,
                lineHeight: `1.5`,
                color: `#333333`,
              }}
            >
              Wollstonecraft Walks</h3><h4 style={{textAlign: `center`, fontWeight: `normal`, color: `#333333`, textTransform: `uppercase`, letterSpacing: `2px`, marginTop: `2rem`}}><i>Episode 1</i></h4>
            
            <Normal>
              Readings with walk context making walk experience
              accessible to a remote audience including people with access
              requirements
            </Normal>
            <div
              style={{
                display: `grid`,
                justifyContent: `center`,
              }}
            >
              <AudioPlayer track={Ep1} />
            </div>
          </PodBox>
          <PodBox>
            <h3
              style={{
                fontFamily: `'Archivo Black', Impact`,
                fontSize: `1.4rem`,
                textAlign: `center`,
                letterSpacing: `1px`,
                marginBottom: `2rem`,
                lineHeight: `1.5`,
                color: `#333333`,
              }}
            >
              Wollstonecraft Walks </h3> <h4 style={{textAlign: `center`, fontWeight: `normal`, color: `#333333`, textTransform: `uppercase`, letterSpacing: `2px`, marginTop: `2rem`}}><i>Episode 2</i></h4>
            
            <Normal>
              Feedback from June 2019 audience at Stoke Newington Literary
              Festival
            </Normal>

            <div
              style={{
                display: `grid`,
                justifyContent: `center`,
              }}
            >
              <AudioPlayer track={Ep2} />
            </div>
          </PodBox>
          <PodBox>
            <h3
              style={{
                fontFamily: `'Archivo Black', Impact`,
                fontSize: `1.4rem`,
                textAlign: `center`,
                letterSpacing: `1px`,
                marginBottom: `2rem`,
                lineHeight: `1.5`,
                color: `#333333`,
              }}
            >
              Wollstonecraft Walks  </h3><h4 style={{textAlign: `center`, fontWeight: `normal`, color: `#333333`, textTransform: `uppercase`, letterSpacing: `2px`, marginTop: `2rem`}}><i>Episode 3</i></h4>
           

            <Normal>
              Marina chats to Anna and Rebecca back stage about their project
              Wollstonecraft Walks: Anna Birch, Artistic Director Fragments
              &amp; Monuments performance and film company and Artistic
              Director, Rebecca Mordan Scary Little Girls, feminist production
              company
            </Normal>
            <div
              style={{
                display: `grid`,
                justifyContent: `center`,
              }}
            >
              <AudioPlayer track={Ep3} />
            </div>
          </PodBox>
        </PodList>
      </main>
    )
  }
}

export default Pods
