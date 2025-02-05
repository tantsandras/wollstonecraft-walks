import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Mary from "../../public/icons/icon-512x512.png"

// const Image = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(
//         relativePath: { eq: "Wollstonecraft_portrait_logo-02 copy.png" }
//       ) {
//         childImageSharp {
//           fluid(maxWidth: 500) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
//   return (
const Image = (
  <img
    // maxWidth="500"
    src={"/icon-512x512png"}
    alt="Illustration of Mary Wollstonecraft, made by artist Jess Ebsworth"
  />
)
//   )
// }

export default Image
