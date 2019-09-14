import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StokeLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "FaceBook-header.png" }) {
        childImageSharp {
          fixed(width: 220) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default StokeLogo
