import React from "react"
import styled from "styled-components"
import Instagram from "../images/icons/Instagram.png"
import Twitter from "../images/icons/Twitter.png"
import Email from "../images/icons/Email.png"
import Facebook from "../images/icons/Facebook.png"

const Box = styled.li`
  padding: 2rem;
  background:rgba(255,255,255, 0.98);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  list-style: none;
  position: relative;
`

const Icon = styled.img`
max-width: 50px;
float: left;
margin-top: -0.6rem;
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
                  <h3
                    style={{
                      fontSize: `2rem`,
                      fontFamily: `Yeseva One`,
                      fontWeight: `bold`,
                      letterSpacing: `1px`,
                    }}
                  >
        Anna Birch 
        </h3>
        <h4 style={{fontFamily: `Helvetica`, letterSpacing: `2px`, lineHeight: `2`,}}>Fragments & Monuments performance and film
            <br />
             director @ fragmentsandmonuments.com</h4>
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
                  <h4 style={{fontFamily: `Helvetica`, letterSpacing: `2px`, lineHeight: `2`,}}>www.scarylittlegirls.co.uk</h4>
                  
                    <p>Production hub and arts charity Scary Little Girls hope you have
          enjoyed this Living Literature Event. If you have any comments, rave
          reviews or suggestions for the future, we'd love to hear from you.
          </p>
          <Social><a href="www.scarylittlegirls.co.uk" target="_blank" rel="noopener noreferrer"><Icon src={Email} /></a><p style={{marginLeft: `80px`}}>Email us at info@scarylittlegirls.co.uk</p></ Social>
          <Social><a href="https://www.facebook.com/ScaryLittleGirls/" target="_blank" rel="noopener noreferrer"><Icon src={Facebook} /></a><p style={{marginLeft: `80px`}}>Message us @ScaryLittleGirls</p></ Social>
          <Social><a href="https://twitter.com/scarylittlegs" target="_blank" rel="noopener noreferrer"><Icon src={Twitter} /></a><p style={{marginLeft: `80px`}}>Message us @ScaryLittleGs</p></ Social>
                </Box>
        </>
      )
    }
  }
  
  export default ContactBox
  