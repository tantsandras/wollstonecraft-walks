
import React from "react"
import styled, { keyframes } from "styled-components"

const Collaps = styled.button`
  padding: 0.4rem 2rem 0.4rem 0.2rem;
  margin-bottom: 2rem;
  font-size: 18px;
  background: #1451ad;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.25);
  font-family: Helvetica;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffd0d0;
  text-transform: uppercase;
  position: relative;
  min-width: 148px;
    overflow: hidden;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    transition: background-color 0.2s ease;
    -webkit-transition: background-color 2s ease-out;
    -moz-transition: background-color 2s ease-out;
    -o-transition: background-color 2s ease-out;    

    &:hover {
        background-color: #ff0000;
        box-shadow: 0 0 0 4px rgb(255, 0, 0, 0.60);
        border: 2px solid white;
    }
`

const arrow = {
  border: `solid #FFD0D0`,
  borderWidth: `0px 1px 1px 0px`,
  display: `table-cell`,
  position: `absolute`,
  top: `38%`,
  right: `10%`,
  msTransform: `translateY(-50%)`,
  transform: `translateY(-50%)`,
  padding: `8px`,
  transform: `rotate(-135deg)`,
  WebkitTransform: `rotate(-135deg)`,
}

const Lyrics = styled.section`
background-color: none;
transition: background-color 0.2s ease;
-webkit-transition: background-color 2s ease-out;
-moz-transition: background-color 2s ease-out;
-o-transition: background-color 2s ease-out;    
cursor: pointer;
margin: 2% 10% 3% 10%; 
border: 6px double #383790;

&:hover {
    background-color: rgba(20, 81, 173, 0.33);
    border: 6px double rgba(20, 81, 173, 0.33);
}
`

class Song extends React.Component {
  constructor() {
    super()
    this.state = {
      isActive: false,
      hover: false,
    }
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
        <>
        {!this.state.isActive && (
        <Lyrics onClick={this.handleClick} style={{}}>
            <h4 style={{ fontFamily: `Yeseva One`, padding: `40px 0px 0px 20px` }}>
                 Let Us All Speak Our Minds! (1863)
               </h4>
               <p
                 style={{
                   fontFamily: `Helvetica`,
                   marginBottom: `2rem`,
                   marginLeft: `1.5rem`,
                   fontSize: `0.8rem`,
                 }}
               >
                 <i>by William Brough and J. Gaspard Maeder</i>
               </p>
               <p style={{fontFamily: `Helvetica`, marginBottom: `2rem`, textAlign: `center`}}>Click to see lyrics and chords</p>
            </Lyrics>
        )}

    {this.state.isActive && (

      <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Helvetica` }}>
              <Collaps onClick={this.handleClick}>Collaps<i style={arrow}></i></Collaps>
        <aside style={{ fontSize: `0.8rem`, lineHeight: `2` }}>
          <h4 style={{ fontFamily: `Yeseva One` }}>
            Let Us All Speak Our Minds! (1863)
          </h4>
          <p
            style={{
              fontFamily: `Helvetica`,
              marginBottom: `2rem`,
              marginLeft: `1rem`,
            }}
          >
            <i>by William Brough and J. Gaspard Maeder</i>
          </p>
          <span>
            A &emsp; &emsp; &emsp; &emsp; &emsp; &ensp; D &emsp;&emsp; &ensp; A
            &emsp; &emsp; &emsp; &emsp; &ensp; D
          </span>{" "}
          <br />
          Men tell us &#39;tis fit that wives should submit
          <br />
          <span>
            {" "}
            &emsp; &emsp; &emsp; &ensp;A &emsp; &emsp; &emsp; &emsp; &emsp;
            &emsp; &emsp; &emsp; &emsp; &ensp;E
          </span>{" "}
          <br />
          To their husbands, submissively meekly,
          <br />
          <span>
            &emsp; &emsp; &emsp;D&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            &emsp; &emsp;&emsp; A
          </span>{" "}
          <br />
          Tho&#39; whatever they say their wives should obey,
          <br />
          <span>
            E &emsp; &emsp; &emsp; &emsp; &emsp; &ensp;B7 &emsp; E
          </span>{" "}
          <br />
          Unquestioning, stupidly, weakly;
          <br />
          <br />
          <span>
            &emsp; &ensp;Bm &emsp; &emsp; &emsp; &emsp; &emsp;&emsp;&emsp;A
            &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;D&emsp;&emsp;&emsp;&emsp; A
          </span>{" "}
          <br />
          Our husbands would make us their own dictum take
          <br />
          <span>
            &emsp;&emsp;&emsp;&emsp;Bm&emsp;&emsp;&ensp; A
            &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;E
          </span>{" "}
          <br />
          Without ever a wherefore or why for it 
          <br />
          <span>
            &emsp;&emsp;&ensp;A &emsp;&emsp;D&emsp;&emsp;&emsp;&emsp;&emsp; A
            &emsp;&emsp;&emsp;&emsp;&emsp;D
          </span>{" "}
          <br />
          But I don&#39;t and I can&#39;t, and I won&#39;t and I shan&#39;t!
          <br />
          <span>
            &emsp;&emsp;&emsp;&emsp;&emsp;A&emsp;&emsp;&emsp;&emsp; &ensp;E
            &emsp;&emsp;&emsp;&ensp;A
          </span>{" "}
          <br />
          No, I will speak my mind if I die for it!
          <br />
          <br />
          <span>
            A&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp; &emsp;&ensp; D
            &emsp;&emsp;&emsp;&emsp;&emsp; A&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp; D
          </span>{" "}
          <br />
          For we know it&#39;s all fudge to say man&#39;s the best judge
          <br />
          <span>
            &emsp;&emsp;&emsp;&emsp; A &emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp; &ensp;E
          </span>{" "}
          <br />
          Of what should be, and shouldn&#39;t and so on,
          <br />
          <span>
            &emsp;&emsp;&emsp;D&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp; &emsp;A
          </span>{" "}
          <br />
          That woman should bow, nor attempt to say how
          <br />
          <span>
            &emsp;&emsp;&ensp;E&emsp;&emsp;&emsp;&ensp;
            B7&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; E
          </span>{" "}
          <br />
          She considers that matters should go on;
          <br />
          <br />
          <span>
            &ensp; Bm &emsp;&emsp;&emsp; A &emsp;&emsp; D
            &emsp;&emsp;&emsp;&emsp;&ensp; A
          </span>{" "}
          <br />
          I never yet gave up myself thus a slave,
          <br />
          <span>
            Bm&emsp;&emsp;&emsp; &emsp;&ensp; A
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;E
          </span>{" "}
          <br />
          However my husband might try for it –
          <br />
          <span>
            &emsp;&emsp;&ensp; A&emsp;&emsp; D&emsp;&emsp;&emsp; &emsp;&ensp;
            A&emsp;&emsp;&emsp; &emsp;&emsp; D
          </span>{" "}
          <br />
          For I can&#39;t and I won&#39;t, and I shan&#39;t and I don&#39;t,
          <br />
          <span>
            &emsp;&emsp;&emsp; &emsp;&emsp;A &emsp;&emsp;&emsp; &emsp;E
            &emsp;&emsp;&emsp;&ensp;A
          </span>{" "}
          <br />
          But I will speak my mind if I die for it!
        </aside>
      </article>
    )}
      </>
    )
  }
}

export default Song
