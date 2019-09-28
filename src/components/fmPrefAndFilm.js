import React from "react"
import styled, { keyframes } from "styled-components"

const element = {
  gridTemplateColumns: `repeat(3, 1fr)`,
  gridTemplateRows: `repeat(3, 400px)`,
  fontFamily: `Helvetica`,
}

const ProjectHeading = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 50%;
  border-left: 6px double MediumBlue;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  font-size: 1rem;
  position: relative;
  clip-path: circle(50%);
  -webkit-clip-path: circle(50%);
  float: left;
  -webkit-shape-outside: circle(20em);
  shape-outside: circle(20em);
  margin: 5% 28% 10% 1%;
`

const VideoList = styled.li`
  border: none;
  color: grey;
  text-decoration: none;
  max-width: 427px;
  list-style: none;
`

const Overlay = styled.div`
  position: relative;
  max-width: 427px;
  max-height: 240px;
  padding: 0;
  margin: 0 auto;
  &:hover {
    opacity: 0.6;
  }
`

const Hover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background: rgb(245, 245, 245);
  &:hover {
    opacity: 0.6;
  }
`

const Video = styled.iframe`
  min-width: 213.5px;
  min-height: 120px;
  padding: 0;
  margin: 0 auto;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`

const MainHeading = styled.h1`
  font-family: Yeseva One;
  font-size: 2rem;
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 4rem;
  margin-top: 10rem;
`

class FmPrefAndFilm extends React.Component {
  render() {
    return (
      <main>
        <MainHeading>
          Fragments & Monuments Preformance and Film Archive
        </MainHeading>
        <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Helvetica` }}>
          <span
            style={{ width: `100%`, margin: `0 auto`, display: `inline-block` }}
          >
            <ProjectHeading>
              <h2
                style={{
                  fontFamily: `Yeseva One`,
                  fontSize: `1.2rem`,
                  textAlign: `center`,
                  letterSpacing: `1px`,
                  paddingTop: `150px`,
                  marginBottom: `200px`,
                }}
              >
                Wollstonecraft Live! <br />
                <h3
                  style={{
                    fontFamily: `Yeseva One`,
                    fontSize: `1rem`,
                    textAlign: `center`,
                    letterSpacing: `1px`,
                    marginTop: `1rem`,
                  }}
                >
                  by Kaethe Fine 2005
                </h3>
              </h2>
            </ProjectHeading>
            <p
              style={{
                fontSize: `0.8rem`,
                marginTop: `10rem`,
                paddingTop: `2rem`,
                width: `66%`,
                marginLeft: `1.4rem`,
              }}
            >
              <i
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                }}
              >
                Script{" "}
              </i>
              - Kaethe Fine
              <br />
              <i
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                }}
              >
                Director{" "}
              </i>
              - Anna Birch
              <br />
              <i
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                }}
              >
                Composer{" "}
              </i>
              - Alastair Gavin <br />
              <i
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                }}
              >
                Movement{" "}
              </i>
              - Sarah Rubidge <br />
              <i
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                }}
              >
                Voice{" "}
              </i>
              - Sheila Landahl
              <br />
            </p>
          </span>
          <p style={{ marginTop: `5.4rem` }}>
            A documentary of the site specific performance of this multimedia
            play on Newington Green and in the Unitarian Chapel, London N1.
          </p>

          <section
            style={{
              backgroundSize: `cover`,
              padding: `4rem 2rem`,
              fontFamily: `Helvetica`,
              backgroundSize: `cover`,
              display: `grid`,
              alignItems: `center`,
              gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
              gap: `3%`,
              marginBottom: `6rem`,
            }}
          >
            <VideoList style={element}>
              <h2
                style={{
                  fontFamily: `Yeseva One`,
                  paddingTop: `2rem`,
                  letterSpacing: `1px`,
                }}
              >
                Part 1
              </h2>
              <Overlay>
                <Video
                  title="Wollstonecraft Live video, Part 1"
                  src="https://www.youtube.com/embed/vSFDuNrA_lA"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                  <Hover></Hover>
                </Video>
              </Overlay>
            </VideoList>
            <VideoList style={element}>
              <h2
                style={{
                  fontFamily: `Yeseva One`,
                  paddingTop: `2rem`,
                  letterSpacing: `1px`,
                }}
              >
                Part 2
              </h2>
              <Overlay>
                <Video
                  title="Wollstonecraft Live video, Part 2"
                  src="https://www.youtube.com/embed/i5Uxlj9eDNI"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                  <Hover></Hover>
                </Video>
              </Overlay>
            </VideoList>
            <VideoList style={element}>
              <h2
                style={{
                  fontFamily: `Yeseva One`,
                  paddingTop: `2rem`,
                  letterSpacing: `1px`,
                }}
              >
                Part 3
              </h2>
              <Overlay>
                <Video
                  title="Wollstonecraft Live video, Part 3"
                  src="https://www.youtube.com/embed/PLOLhxc5wqE"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                  <Hover></Hover>
                </Video>
              </Overlay>
            </VideoList>
          </section>
        </article>
        *VINDICATION (10 mins) by Kaethe Fine (2005) new B&amp;W version AB
        (2018) to send plus copy to describe film *The Wollstonecraft Live
        Experience! outdoor screening
        <iframe
          width="510"
          height="382.5"
          src="https://www.youtube.com/embed/nDSlEmgryyA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        *The Wollstonecraft Live Experience! Limited edition art book PDF * The
        Wollstonecraft Live Experience! flyers and posters etc including New
        York and Di’s Midsummer Night Party PDF’s *MARCH film by collaboration
        with Glasgow Women’s Library and Royal Conservatoire of Scotland
        featuring Mary Wollstonecraft and bridging Mary Wollstonecraft as the
        founder of British feminism vimeo link Fawcett quote on MW and the vote
        plus flyer and poster PDF’s *Maggi Hambling social media video Anna
        talking about artists Maggi Hambling for NG _ MOTG ( plus image of
        maquette and Stewy Stencil artwork) *Wollstonecraft Live! by Kaethe Fine
        revival/ Take 2 in 2018 rehearsed reading rehearsal (2018) in the
        Unitarian Meeting, Newington Green Alastair Gavin 3-minute film of
        September 2018 reading projected at St Pancras Old Church, 30 second
        teaser for Instagram, audio recording of reading
      </main>
    )
  }
}

export default FmPrefAndFilm
