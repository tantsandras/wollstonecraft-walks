import React from "react"
import styled from "styled-components"
import Instagram from "../images/icons/Instagram.png"
import Twitter from "../images/icons/Twitter.png"
import Email from "../images/icons/Email.png"
import Facebook from "../images/icons/Facebook.png"
import Anna from "../components/anna.js"

const Box = styled.li`
  padding: 2rem;
  background: #fffeff;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
  list-style: none;
  position: relative;
`

const Icon = styled.img`
  max-width: 40px;
  float: left;
  margin-top: -0.4rem;
  cursor: pointer;
`

const Social = styled.span`
  padding-top: 1rem;
  display: inline-block;
  text-align: left;
  vertical-align: middle;
  width: 100%;
`
const Heading = styled.h3`
  font-size: 2rem;
  font-family: "Archivo Black", 'Impact';
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 1rem;
  line-height: 2;
  color: #333333;
`

const SubHeading = styled.h4`
  font-family: Helvetica, Roboto, 'Open Sans';
  letter-spacing: 2px;
  line-height: 2;
  font-weight: normal;
  font-size: 0.8rem;
`

const Handle = styled.a`
  text-decoration: none;
  color: #656565;
  letter-spacing: 1px;
  &:hover {
    text-decoration: none;
    color: MediumBlue;
    cursor: pointer;
  }
`

const Normal = styled.p`
line-height: 1.8;
`

class ContactBox extends React.Component {
  render() {
    return (
      <>
        <Box>
          <Heading>Anna Birch</Heading>
          <SubHeading>
            Fragments & Monuments performance and film
            <br />
            director @ fragmentsandmonuments.com
          </SubHeading>
          <Normal>
            Anna combines her professional expertise as a theatre and film
            director with her scholarly research and activism. Moving beyond the
            theatre building, she has created a ‘living monuments’ dramaturgical
            method to both search out and reveal hidden and often neglected
            feminist biographies and histories. She researched her method
            through site-specific performance and films about the life of early
            feminist Mary Wollstonecraft (1759-1797) to show how this use of
            multimedia provides an essential link to the performativity of
            particular feminist achievements through history.
          </Normal>
          <Normal style={{ paddingBottom: `2rem` }}>
            Keep in touch and follow our updates for more volunteer
            opportunities and exciting Wollstonecraft Walks events!
          </Normal>
          <Social>
            <Handle
              href="https://twitter.com/anna_birch1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Twitter} />

              <SubHeading style={{ marginLeft: `80px`,  }}>@anna_birch1</SubHeading>
            </Handle>{" "}
          </Social>
          <Social>
            <Handle
              href="https://www.instagram.com/annabirch1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Instagram} />

              <SubHeading style={{ marginLeft: `80px` }}>@annabirch1</SubHeading>
            </Handle>{" "}
          </Social>
          <div
            style={{
              maxWidth: `400px`,
              marginRight: `0`,
              marginLeft: `50%`,
            }}
          >
            <Anna />
          </div>
        </Box>
        <Box>
          <Heading>Rebecca Mordan</Heading>
          <SubHeading>www.scarylittlegirls.co.uk</SubHeading>
          <Normal>
            After graduating from Bristol Old Vic and working in film, theatre
            and television, Rebecca created her own company, Scary Little Girls,
            to try and ‘level the playing field’, populating stories with
            fascinating, diverse female characters. Rebecca has been intimately
            involved with every aspect of SLG, writing, directing, producing and
            performing. She is a grassroots campaigner against male violence and
            frequent guest expert on BBC Radio and Sky News.
          </Normal>
          <Normal style={{ paddingBottom: `2rem` }}>
            Production hub and arts charity Scary Little Girls hope you have
            enjoyed this Living Literature Event. If you have any comments, rave
            reviews or suggestions for the future, we'd love to hear from you.
          </Normal>
          <Social>
            <Handle
              href="www.scarylittlegirls.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Email} />
              <SubHeading style={{ marginLeft: `80px` }}>
                info@scarylittlegirls.co.uk
              </SubHeading>{" "}
            </Handle>
          </Social>
          <Social>
            <Handle
              href="https://www.facebook.com/ScaryLittleGirls/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Facebook} />
              <SubHeading style={{ marginLeft: `80px` }}>@ScaryLittleGirls</SubHeading>{" "}
            </Handle>
          </Social>
          <Social>
            <Handle
              href="https://twitter.com/scarylittlegs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Twitter} />

              <SubHeading style={{ marginLeft: `80px` }}>@ScaryLittleGs</SubHeading>
            </Handle>{" "}
          </Social>
        </Box>
      </>
    )
  }
}

export default ContactBox
