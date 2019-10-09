import React from "react"
import styled from "styled-components"
import Instagram from "../images/icons/Instagram.png"
import Twitter from "../images/icons/Twitter.png"
import Email from "../images/icons/Email.png"
import Facebook from "../images/icons/Facebook.png"
import Anna from "../components/anna.js"

const Box = styled.li`
  padding: 2rem;
  background:rgba(255,255,255, 0.98);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

class ContactBox extends React.Component {
    render() {
      return (
        <>
                <Box>

        <div style={{maxWidth: `400px`, marginRight: `0`, marginLeft: `50%`, marginTop: `-8%`}}><Anna /></div>
        <h3
                    style={{
                      fontSize: `2rem`,
                      fontFamily: `Yeseva One`,
                      fontWeight: `bold`,
                      letterSpacing: `1px`,
                      marginTop: `1rem`
                    }}
                  >
        Anna Birch 
        </h3>
        <h4 style={{fontFamily: `Helvetica`, letterSpacing: `2px`, lineHeight: `2`, fontWeight: `lighter`, fontSize: `0.8rem`}}>Fragments & Monuments performance and film
            <br />
             director @ fragmentsandmonuments.com</h4>
             <p>Anna  combines her professional expertise as a theatre and film director with her scholarly research and activism. Moving beyond the theatre building, she has created a ‘living monuments’ dramaturgical method to both search out and reveal hidden and often neglected feminist biographies and histories. She researched her method through site-specific performance and films about the life of early feminist Mary Wollstonecraft (1759-1797) to show how this use of multimedia provides an essential link to the performativity of particular feminist achievements through history.</p>
        <p>
          Keep in touch and follow our updates for more volunteer opportunities
          and exciting Wollstonecraft Walks events! 
        </p>
          <Social><a href="https://twitter.com/anna_birch1" target="_blank" rel="noopener noreferrer"><Icon src={Twitter} /></a><p style={{marginLeft: `80px`}}>@anna_birch1</p></Social>
          <Social><a href="https://www.instagram.com/annabirch1/" target="_blank" rel="noopener noreferrer"><Icon src={Instagram} /></a><p style={{marginLeft: `80px`}}>@annabirch1</p></Social>
                  
                </Box>
                <Box>
                  <h3
                    style={{
                      fontSize: `2rem`,
                      fontFamily: `Yeseva One`,
                      fontWeight: `bold`,
                      letterSpacing: `1px`,
                    }}
                  > 
                  Rebecca Mordan 
                  </h3>
                  <h4 style={{fontFamily: `Helvetica`, letterSpacing: `2px`, lineHeight: `2`, fontWeight: `lighter`, fontSize: `0.8rem`}}>www.scarylittlegirls.co.uk</h4>
                  <p>After graduating from Bristol Old Vic and working in film, theatre and television, Rebecca created her own company, Scary Little Girls, to try and ‘level the playing field’, populating stories with fascinating, diverse female characters.

Rebecca has been intimately involved with every aspect of SLG, writing, directing, producing and performing. She is a grassroots campaigner against male violence and frequent guest expert on BBC Radio and Sky News.</p>
                    <p>Production hub and arts charity Scary Little Girls hope you have
          enjoyed this Living Literature Event. If you have any comments, rave
          reviews or suggestions for the future, we'd love to hear from you.
          </p>
          <Social><a href="www.scarylittlegirls.co.uk" target="_blank" rel="noopener noreferrer"><Icon src={Email} /></a><p style={{marginLeft: `80px`}}>info@scarylittlegirls.co.uk</p></ Social>
          <Social><a href="https://www.facebook.com/ScaryLittleGirls/" target="_blank" rel="noopener noreferrer"><Icon src={Facebook} /></a><p style={{marginLeft: `80px`}}>@ScaryLittleGirls</p></ Social>
          <Social><a href="https://twitter.com/scarylittlegs" target="_blank" rel="noopener noreferrer"><Icon src={Twitter} /></a><p style={{marginLeft: `80px`}}>@ScaryLittleGs</p></ Social>
                </Box>
        </>
      )
    }
  }
  
  export default ContactBox
  