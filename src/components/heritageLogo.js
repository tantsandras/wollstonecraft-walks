import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Logo = styled.div`
transition: all 0.2s ease;
-webkit-transition: all 0.2s ease-out;
-moz-transition: all 0.2s ease-out;
-o-transition: all 0.2s ease-out;   
opacity: 0.8;
&:hover {
  opacity: 1;
}
`

const HeritageLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "image001.jpg" }) {
        childImageSharp {
          fixed(width: 230) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Logo><Img fixed={data.placeholderImage.childImageSharp.fixed} /></Logo>
}

export default HeritageLogo
