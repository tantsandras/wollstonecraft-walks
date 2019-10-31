import React from "react"
import styled from "styled-components"

const Spinner = () => (
  <StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="0.8"
    />
  </StyledSpinner>
)

const StyledSpinner = styled.svg`
  animation: rotate 12s linear infinite;
  margin: 0 0 0 0;
  width: 100px;
  height: 100px;

  & .path {
    stroke: white;
    stroke-linecap: round;
    animation: dash 4s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

const Player = styled.section`
  margin-top: 6rem;
  margin-bottom: 6rem;
  display: table;
  margin-left: auto;
  margin-rigth: auto;
  table-layout: fixed;
  cellspacing: 0;
  cellpadding: 0;
  overflow-x: auto;
  overflow-y: auto;
`

const element = {
  textAlign: `center`,
  width: `120px`,
  height: `110px`,
  display: `table-cell`,
  overflow: `hidden`,
  verticalAlign: `middle`,
  alignItems: `center`,
  margin: `0 auto`,
  cursor: `pointer`
}

const ButtonWrap = styled.span`
  width: 90px;
  margin: 0 auto;
  height: 90px;
  position: relative;
  border-radius: 50%;
  background: #fadadd;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;
  -webkit-transition: transform 0.2s ease-out;
  -moz-transition: transform 0.2s ease-out;
  -o-transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.2);
  }
`

const Play = styled.button`
  position: absolute;
  left: 33px;
  border: 0;
  background: transparent;
  box-sizing: border-box;
  width: 0;
  height: 37px;

  border-color: transparent transparent transparent #333333;
  transition: 100ms all ease;
  cursor: pointer;

  border-style: solid;
  border-width: 18.5px 0 18.5px 30px;

  &:hover {
    border-color: transparent transparent transparent #404040;
  }
`

const Pause = styled(Play)`
  border-style: double;
  border-width: 0px 0px 0px 25px;
`
const Stop = styled.button`
  margin: 0 auto;
  width: 25px;
  height: 25px;
  background: #202020;
  position: relative;
  border: none;
`

const FastForward = styled.button`
  background: none;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-left: 10px solid;
  margin: 6.6px;
  &:before {
    position: absolute;
    left: 0;
    top: -10px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left: 10px solid;
  }
`

const DoubleFastForward = styled(FastForward)`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  font-style: normal;
  color: #333333;
  text-align: left;
  text-indent: -9999px;
  direction: ltr;
  transition: transform 0.2s ease;
  -webkit-transition: transform 0.2s ease-out;
  -moz-transition: transform 0.2s ease-out;
  -o-transition: transform 0.2s ease-out;
  &:before,
  &:after {
    content: "";
    pointer-events: none;
  }
  // &:hover {
  //   border-color: transparent transparent transparent #404040;
  //   transform: scale(1.2);
  // }
`
const Rewind = styled(FastForward)`
  transform: rotate(180deg);
`

const DoubleRewind = styled(Rewind)`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  font-style: normal;
  color: #333333;
  text-align: left;
  text-indent: -9999px;
  direction: ltr;
  transition: transform 0.2s ease;
  -webkit-transition: transform 0.2s ease-out;
  -moz-transition: transform 0.2s ease-out;
  -o-transition: transform 0.2s ease-out;
  &:before,
  &:after {
    content: "";
    pointer-events: none;
  }
  // &:hover {
  //   border-color: transparent transparent transparent #404040;
  //   transform: scale(1.2) rotate(180deg);
  // }
`

const getTime = time => {
  if (!isNaN(time)) {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
  }
}

class AudioPlayer extends React.Component {
  state = {
    selectedTrack: null,
    player: "stopped",
    currentTime: null,
    duration: null,
    isHovering: false,
  }

  componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration,
      })
    })

    let track = this.props.track

    if (track) {
      this.player.src = track
      this.player.src = track
      this.setState({ player: "stopped", duration: this.player.duration })
    }
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {})
  }

  setIntervalHelperBackward = () => {
    this.interval = setInterval(() => {
      this.player.currentTime -= 5
    }, 300)
  }

  setIntervalHelperForward = () => {
    this.interval = setInterval(() => {
      this.player.currentTime += 5
    }, 300)
  }

  clearIntervalHelper = () => {
    clearInterval(this.interval)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track = this.props.track

      if (track) {
        this.player.src = track
        this.player.play()
        this.setState({
          player: "playing",
          duration: this.player.duration,
          selectedTrack: track,
        })
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause()
      } else if (this.state.player === "stopped") {
        this.player.pause()
        this.player.currentTime = 0
        this.setState({ selectedTrack: null })
      } else if (
        this.state.currentTime > 1 &&
        this.state.currentTime === this.state.duration
      ) {
        this.setState({ selectedTrack: null, player: "stopped" })
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play()
      }
    }
  }

  render() {
    const currentTime = getTime(this.state.currentTime)
    const duration = getTime(this.state.duration)

    return (
      <>
        {this.state.player === "playing" || this.state.player === "paused" ? (
          <div style={{ textAlign: `center`, transform: `translateY(60px)` }}>
            {currentTime} / {duration}
          </div>
        ) : (
          ""
        )}
        <Player>
          <div style={element}>
            <DoubleRewind
              autocomplete="off"
              label="Rewind"
              onMouseDown={this.setIntervalHelperBackward}
              onMouseUp={this.clearIntervalHelper}
              onTouchStart={this.setIntervalHelperBackward}
              onTouchEnd={this.clearIntervalHelper}
              onClick={() => {
                return (this.player.currentTime -= 3)
              }}
              style={{ cursor: `pointer` }}
            />
          </div>
          <div style={element}>
            {this.state.player !== "playing" ||
            (this.player.currentTime > 1 &&
              this.player.currentTime === this.player.duration) ? (
              <ButtonWrap>
                <Play
                  autocomplete="off"
                  label="Play"
                  onClick={() => {
                    return this.setState({
                      player: "playing",
                      selectedTrack: this.props.track,
                    })
                  }}
                />
              </ButtonWrap>
            ) : (
              <ButtonWrap>
                <Spinner />
                <Pause
                  autocomplete="off"
                  label="Pause"
                  onClick={() => {
                    return this.setState({ player: "paused" })
                  }}
                />
              </ButtonWrap>
            )}
          </div>
          <div style={element}>
            <DoubleFastForward
              autocomplete="off"
              label="Fast forward"
              onMouseDown={this.setIntervalHelperForward}
              onMouseUp={this.clearIntervalHelper}
              onTouchStart={this.setIntervalHelperForward}
              onTouchEnd={this.clearIntervalHelper}
              onClick={() => {
                this.player.currentTime += 3
              }}
              style={{ cursor: `pointer` }}
            />
          </div>

          <audio ref={ref => (this.player = ref)} preload="auto" />
        </Player>
      </>
    )
  }
}

export default AudioPlayer
