import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const InnImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default InnImage
