import React from "react"
import styled, { keyframes } from "styled-components"
import AudioPlayer from "../components/audioPlayer"
import Ep1 from "../audio/podcast/EP1.mp3"
import Ep2 from "../audio/podcast/EP2.mp3"
import Ep3 from "../audio/podcast/EP3.mp3"

class Pods extends React.Component {
  render() {
    return (
      <main>
        <div
          style={{
            display: `grid`,
            justifyContent: `center`,
          }}
        >
          <AudioPlayer track={Ep1} />

          <AudioPlayer track={Ep2} />
          <AudioPlayer track={Ep3} />
        </div>
      </main>
    )
  }
}

export default Pods
