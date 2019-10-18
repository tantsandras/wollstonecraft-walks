import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import AudioPlayer from "../components/audioPlayer"
import Intro from "../components/intro"

const element = {
    gridTemplateColumns: `repeat(4, 1fr)`,
    gridTemplateRows: `repeat(2, 300px)`,
    fontFamily: `Roboto, 'Open Sans'`,
  }

const hero = {
    backgroundSize: `cover`,
    padding: `4rem 2rem`,
    display: `grid`,
    alignItems: `center`,
    gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
}

class WalkGuide extends React.Component {
    constructor() {
        super()
        this.state = {
          isActive: false,
          hover: false,
        }
      }

  render() {
    return (
        <> 
        <div style={{
            display: `grid`,
            justifyContent: `center`}}>
                <AudioPlayer />

        </div>

        <div><Intro /></div>
            </>
        )
    }
}

export default WalkGuide 
