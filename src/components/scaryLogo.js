import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ScaryLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Scary_logo_Text_Black.jpg" }) {
        childImageSharp {
          fixed(width: 230) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    } 
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
} 

export default ScaryLogo
