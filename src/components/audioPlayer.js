import React from "react";
import caroPhenomenalWomanMayaAngelou from "../audio/Caro Phenomenal Woman Maya Angelou.mp3";
import styled, { keyframes } from "styled-components"

const Player = styled.section`
  margin-top: 1rem;
  display: table;
  width: 100vw; 
  table-layout: fixed;
  border-spacing: 1rem;
  overflow-x:auto;
  overflow-y:auto;
`

const element = {
  display: `table-cell`,
  width: `5%`,
}

const ButtonWrap = styled.div`
    width: 90px;
    height: 90px;
    position: relative;
    border-radius: 50%;
    background: #fadadd;
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Play = styled.button`
  position: absolute;
  left: 33px;
  border: 0;
  background: transparent;
  box-sizing: border-box;
  width: 0;
  height: 37px;

  border-color: transparent transparent transparent #202020;
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
    border-width: 0px 0px 0px 30px;

`
const Stop = styled.button`
    width: 25px;
    height: 25px;
    background: #202020;
    position: relative;
    border: none;
`

const FastForward = styled.button`
width: 0;
height: 0;
border: 6.6px solid transparent;
border-left: 10px solid;
margin: 6.6px;
&:before{
    position: absolute;
    left: 0;
    top: -10px; 
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left: 10px solid;
}
`


const Rewind = styled.button`
width: 20px;
height: 0;
border: 6.6px solid transparent;
border-right: 10px solid;
margin: 6.6px;
&:before{
    position: absolute;
    left: 0;
    top: -10px; 
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right: 10px solid;
}
`

const getTime = (time) => {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    }
}
  
class AudioPlayer extends React.Component {
    state = {
        selectedTrack: null,
        player: "stopped",
        currentTime: null,
        duration: null
      };
    
      componentDidMount() {
        this.player.addEventListener("timeupdate", e => {
          this.setState({
            currentTime: e.target.currentTime,
            duration: e.target.duration
          });
        });
      }
    
      componentWillUnmount() {
        this.player.removeEventListener("timeupdate", () => {});
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedTrack !== prevState.selectedTrack) {
          let track;
          switch (this.state.selectedTrack) {
            case "Caro Phenomenal Woman Maya Angelou":
              track = caroPhenomenalWomanMayaAngelou;
              break;
            // case "Booting Up":
            //   track = bootingUp;
            //   break;
            default:
              break;
          }
          if (track) {
            this.player.src = track;
            this.player.play();
            this.setState({ player: "playing", duration: this.player.duration });
          }
        }
        if (this.state.player !== prevState.player) {
          if (this.state.player === "paused") {
            this.player.pause();
          } else if (this.state.player === "stopped") {
            this.player.pause();
            this.player.currentTime = 0;
            this.setState({ selectedTrack: null });
          } else if (
            this.state.player === "playing" &&
            prevState.player === "paused"
          ) {
            this.player.play();
          }
        }
      }
    
      render() {
        const list = [
          { id: 1, title: "Caro Phenomenal Woman Maya Angelou" },
          { id: 2, title: "Booting Up" }
        ].map(item => {
          return (
            <li
              key={item.id}
              onClick={() => this.setState({ selectedTrack: item.title })}
            >
              {item.title}
            </li>
          );
        });
    
        const currentTime = getTime(this.state.currentTime);
        const duration = getTime(this.state.duration);
    
        return (
          <>
            <ul style={{width: `100vw`, marginBottom: `1rem`, display: `inline-block`, position: `absolute`, top: `10px`}}>{list}</ul>
            <Player>

            <div style={element}>
               <Rewind />
               </div>
            <div style={element}>

              {this.state.player === "paused" && (
                
                <ButtonWrap>
                  <Play label="Play" onClick={() => this.setState({ player: "playing" })} />
                  </ButtonWrap>
              )}
           
              {this.state.player === "playing" && (

                <ButtonWrap>
                <Pause label="Pause" onClick={() => this.setState({ player: "paused" })} />
                </ButtonWrap>
              )}
               </div>
                <div style={element}>
               <FastForward />
               </div>
               <div style={element}>
              {this.state.player === "playing" || this.state.player === "paused" ? (
                <Stop onClick={() => this.setState({ player: "stopped" })} />

              ) : (
                ""
              )}
              </div>
           
            {this.state.player === "playing" || this.state.player === "paused" ? (
              <div style={element}>
                {currentTime} / {duration}
              </div>
            ) : (
              ""
            )}
            <audio ref={ref => (this.player = ref)} />
            </Player>
          </>
        );
      }
    }

export default AudioPlayer