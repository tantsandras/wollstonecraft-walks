import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"

const Image = styled.div`
position: relative;
transition: all 0.2s ease;
-webkit-transition: all 0.2s ease-out;
-moz-transition: all 0.2s ease-out;
-o-transition: all 0.2s ease-out;

&:hover {
  transform: scale(2);
  z-index: 2;
  box-shadow: 10px 10px 100px 50px rgba(0, 0, 0, 0.4);
  border: 0.6px solid white;
}
`

class Photos extends React.Component {
    
  render() {

  return (
    <StaticQuery query={
     graphql`{
    image1: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
      image5: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image6: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image7: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image8: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image9: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image10: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image11: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image12: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-12jpg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image13: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image14: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image15: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-15.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image16: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-16.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image17: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-17.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image18: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-18.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image19: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-19.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image20: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-20.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image21: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-21.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image22: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-22.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image23: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-23.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image24: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-24 (1).jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image25: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-25.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image26: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-26.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image27: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-27.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image28: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-28.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image29: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-29.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image30: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-30.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image31: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-31.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image32: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-32.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image33: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-33.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image34: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-34.jpg" }) {
            childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image35: file(relativePath: { eq: "wollstonecraft/Wollstonecraft Walks 9th June 2019-instagram res-35.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`}
render={(data) => (
  <>
<div className="item">
<Image className="content">
<Img fluid={data.image1.childImageSharp.fluid} /></Image>
</div>
<div className="item">
<Image className="content" >
<Img fluid={data.image2.childImageSharp.fluid} /></Image>
</div>
<div className="item">
<Image className="content" >
<Img fluid={data.image3.childImageSharp.fluid} /></Image>
</div>
<div className="content">
          <h3 style={{ letterSpacing: `2px`, fontSize: `1rem`, fontFamily: `Helvetica`, fontWeight: `lighter` }}>
            <i style={{textTransform: `uppercase`}}>Photos by</i><br />Christine Bradshaw
          </h3>
          </div>
<div className="item">
<Image className="content" >
<Img fluid={data.image8.childImageSharp.fluid} /></Image>
</div>
<div className="item">
<Image className="content" >
<Img fluid={data.image5.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image6.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image4.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image32.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image9.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image10.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image17.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image12.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image13.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image15.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image14.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image16.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image18.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image11.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image19.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image20.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image21.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image22.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image23.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image24.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image27.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image25.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image26.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image28.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image29.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image30.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image31.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image7.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image33.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image34.childImageSharp.fluid} /></Image>
</div> 
<div className="item">
<Image className="content" >
<Img fluid={data.image35.childImageSharp.fluid} /></Image>
</div> 
</>
)}/>
  )
}
}

export default Photos