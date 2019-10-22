import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import styled, { keyframes } from "styled-components"
import { graphql } from "gatsby"

const PdfList = styled.li`
  padding: 2rem;
  background: #fffeff;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  font-family: "Archivo Black", Impact;
  padding-top: 1rem;
  letter-spacing: 1px;
  line-height: 2;
  z-index: 2;
  text-align: left;
  text-transform: uppercase;
  font-size: 1.4rem;
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

const HeritageResearchPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  {
    console.log(data)
  }
  return (
    <section style={{ fontFamily: `Helvetica, Roboto, 'Open Sans'` }}>
      <SEO title="Heritage Research" />
      <Menu />
      <article style={{ padding: `0% 10% 10% 10%` }}>
        <h1
          style={{
            fontFamily: `'Archivo Black', Impact`,
            fontSize: `2.2rem`,
            textAlign: `center`,
            marginTop: `8rem`,
            letterSpacing: `1px`,
            marginBottom: `6rem`,
            color: `#333333`,
          }}
        >
          Heritage Research
        </h1>
        <PdfList maxWidth="640px" style={{ margin: `0 auto` }}>
          <Heading>{data.title}</Heading>
          <Overlay style={{ marginTop: `1rem`, marginBottom: `1rem` }}>
            <Preview
              src={`https://drive.google.com/file/d/${data.file}/preview`}
              width="640"
              height="480"
            ></Preview>
          </Overlay>
          <PdfLink
            href={`https://drive.google.com/uc?export=download&id=${data.file}`}
            download
          >
            {data.linkText}
          </PdfLink>
        </PdfList>
      </article>
    </section>
  )
}
export default HeritageResearchPage

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "heritage-research" }
      }
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
