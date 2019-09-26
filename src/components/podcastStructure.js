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
  font-family: Helvetica;
`

class Pods extends React.Component {
  render() {
    return (
      <main>
        <h1
          style={{
            fontFamily: `Yeseva One`,
            fontSize: `2.2rem`,
            textAlign: `center`,
            marginTop: `8rem`,
            letterSpacing: `1px`,
            marginBottom: `2rem`,
          }}
        >
          Wollstonecraft Walks Podcast
        </h1>
        <h2 style={{fontFamily: `Helvetica`, letterSpacing: `2px`, lineHeight: `2`, fontWeight: `lighter`, fontSize: `1rem`, textAlign: `center`}}>By Marina Garvey Birch and Erica McCoy</h2>
        <PodList>
          <PodBox>
            <h3
              style={{
                fontFamily: `Yeseva One`,
                fontSize: `1.4rem`,
                textAlign: `center`,
                letterSpacing: `1px`,
                marginBottom: `2rem`,
              }}
            >
              Wollstonecraft Walks <br /> Episode 1
            </h3>
            <p>
              Readings with walk context making walk experience
              accessible to a remote audience including people with access
              requirements
            </p>
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
                fontFamily: `Yeseva One`,
                fontSize: `1.4rem`,
                textAlign: `center`,
                letterSpacing: `1px`,
                marginBottom: `2rem`,
              }}
            >
              Wollstonecraft Walks <br /> Episode 2
            </h3>
            <p>
              Feedback from June 2019 audience at Stoke Newington Literary
              Festival
            </p>

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
                fontFamily: `Yeseva One`,
                fontSize: `1.4rem`,
                textAlign: `center`,
                letterSpacing: `1px`,
                marginBottom: `2rem`,
              }}
            >
              Wollstonecraft Walks <br /> Episode 2
            </h3>

            <p>
              Marina chats to Anna and Rebecca back stage about their project
              Wollstonecraft Walks: Anna Birch, Artistic Director Fragments
              &amp; Monuments performance and film company and Artistic
              Director, Rebecca Mordan Scary Little Girls, feminist production
              company
            </p>
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
