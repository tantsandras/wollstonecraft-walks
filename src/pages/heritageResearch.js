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
  padding-top: 2rem;
  letter-spacing: 1px;
  line-height: 2;
  z-index: 2;
  text-align: left;
  text-transform: uppercase;
  font-size: 1.4rem;
`

const HeritageResearchPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <section style={{ fontFamily: `Open Sans` }}>
      <SEO title="Heritage Research" />
      <Menu />
      <article style={{ padding: `0% 10% 10% 10%` }}>
        <PdfList maxWidth="640px" style={{ margin: `0 auto` }}>
          <Heading>{data.title}</Heading>
          <Overlay style={{ marginTop: `1rem`, marginBottom: `1rem` }}>
            <Preview
              src={`"https://drive.google.com/file/d/${data.id}"`}
              width="640"
              height="480"
            ></Preview>
          </Overlay>
          <PdfLink
            href={`"https://drive.google.com/uc?export=download&id=${data.id}"`}
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

export const researchQuery = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "heritageResearch" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              id
              linkText
            }
          }
        }
      }
    }
  }
`
