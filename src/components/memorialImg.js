import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MemorialImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "chapter3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default MemorialImage
