import React from "react"
import styled, { keyframes } from "styled-components"
import AudioPlayer from "../components/audioPlayer"
import Ep1 from "../audio/podcast/EP1.mp3"
import Ep2 from "../audio/podcast/EP2.mp3"
import Ep3 from "../audio/podcast/EP3.mp3"

const PodBox = styled.li`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.98);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  font-family: Roboto, 'Open Sans';
`
const Normal = styled.p`
line-height: 1.8;
`

class Pods extends React.Component {
  render() {
    return (
      <main>
        <h1
          style={{
            fontFamily: `'Archivo Black', Impact`,
            fontSize: `1.8rem`,
            textAlign: `center`,
            marginTop: `8rem`,
            letterSpacing: `1px`,
            marginBottom: `2rem`,
            color: `#333333`,
          }}
        >
          Wollstonecraft Walks Podcast
        </h1>
        <h2 style={{fontFamily: `Roboto, 'Open Sans'`, letterSpacing: `2px`, lineHeight: `2`, fontWeight: `lighter`, fontSize: `1rem`, textAlign: `center`}}>By Marina Garvey Birch and Erica McCoy</h2>
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
              Wollstonecraft Walks <br /> <h4 style={{color: `#333333`, textTransform: `uppercase`, letterSpacing: `2px`, marginTop: `2rem`}}><i>Episode 1</i></h4>
            </h3>
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
              Wollstonecraft Walks <br /> <h4 style={{color: `#333333`, textTransform: `uppercase`, letterSpacing: `2px`, marginTop: `2rem`}}><i>Episode 2</i></h4>
            </h3>
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
              Wollstonecraft Walks <br /><h4 style={{color: `#333333`, textTransform: `uppercase`, letterSpacing: `2px`, marginTop: `2rem`}}><i>Episode 3</i></h4>
            </h3>

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
