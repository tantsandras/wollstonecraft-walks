import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import styled, { keyframes } from "styled-components"
import { graphql } from "gatsby"
import "typeface-archivo-black"
import Circles from "../components/circles"
import AudioPlayer from "../components/audioPlayer"

const turnVisible = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`
const PdfList = styled.li`
  padding: 2rem;
  background: #fffeff;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
  list-style: none;
  height: auto;
  color: #241e20;
  max-width: 700px;
`

const Overlay = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  margin-top: 2rem;
`

const Preview = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
`

const Heading = styled.h2`
  font-family: "Archivo Black", 'Impact';
  padding-top: 1rem;
  letter-spacing: 1px;
  line-height: 1.3;
  z-index: 2;
  text-align: left;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: #333333;
`
const PdfLink = styled.a`
  color: #241e20;
  font-family: Helvetica, Roboto, 'Open Sans';
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: MediumBlue;
    cursor: pointer;
  }
`
const MainHeading = styled.h1`
font-family: 'Archivo Black', 'Impact';
font-size: 2.2rem;
text-align: center;
margin-top: 8rem;
letter-spacing: 1px;
margin-bottom: 6rem;
color: #333333;
animation: ${turnVisible} 0.6s ease-in;
`

const HeritageResearchPage = props => {
  const data = props.data.allFile.edges;
  return (
    <main style={{ fontFamily: `Helvetica, Roboto, 'Open Sans'` }}>
      <SEO title="Heritage Research" />
      <Menu />
      <Circles />
      <article style={{ padding: `0% 4% 10% 4%` }}>
      <MainHeading>
          Heritage Research
        </MainHeading>
        <PdfList maxWidth="640px" style={{ margin: `0 auto` }}>
          <Heading>Wollstonecraft Walks 
School assembly</Heading>
          <Overlay style={{ marginTop: `1rem`, marginBottom: `1rem` }}>
            <Preview
              src="https://drive.google.com/file/d/1CCEn1duUCjshdB1l0-oGZPJFpuN8-xlo/preview"
              width="640"
              height="480"
            ></Preview>
          </Overlay>
          <div style={{display: `grid`, justifyContent: `center`, alignItems: `center`, textAlign: `center`,}}>
        <div
          style={{
            display: `flex -webkit-box -moz-box -webkit-flex -ms-flexbox`,
            flexDirection: `row`,
            justifyContent: `center`,
            textAlign: `center`,
            alignContent: `center`,
            marginBottom: `2rem`
          }}
        >
          <AudioPlayer track={"https://docs.google.com/uc?export=download&id=1KTSf2Jn4u0TX9hoankZFVyyYiPIqgYrH"} />
        </div>
        </div>
          <PdfLink
            href="https://drive.google.com/uc?export=download&id=1CCEn1duUCjshdB1l0-oGZPJFpuN8-xlo"
            download
          >
            School assembly content researched, created and presented by volunteers
Hannah Maddison and James Moriarty. Click here to download.
          </PdfLink>
        </PdfList>
      </article>
      
      {data.map(research => (
      <article style={{ padding: `0% 4% 10% 4%` }}>
        <PdfList maxWidth="640px" style={{ margin: `0 auto` }}>
          <Heading>{research.node.childMarkdownRemark.frontmatter.title}</Heading>
          <Overlay style={{ marginTop: `1rem`, marginBottom: `1rem` }}>
            <Preview
              src={`https://drive.google.com/file/d/${research.node.childMarkdownRemark.frontmatter.file}/preview`}
              width="640"
              height="480"
            ></Preview>
          </Overlay>
          <PdfLink
            href={`https://drive.google.com/uc?export=download&id=${research.node.childMarkdownRemark.frontmatter.file}`}
            download
          >
            {research.node.childMarkdownRemark.frontmatter.linkText}
          </PdfLink>
        </PdfList>
      </article>
       ))}
    </main>
  )
}
export default HeritageResearchPage

export const query = graphql`
  query {
    allFile(
      filter: { relativeDirectory: { eq: "heritageResearchFolder" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              file
              linkText
            }
          }
        }
      }
    }
  }
`
