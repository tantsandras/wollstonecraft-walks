import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Menu from "../components/menu"
import "./layout.css"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import "typeface-archivo-black"
import "typeface-roboto"
import "typeface-yeseva-one"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Archivo Black', Impact, sans-serif;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: "description",
            content: "Walk guide app about Mary Wollstonecraft",
          },
          {
            name: "keywords",
            content:
              "marywollstonecraft, wollstonecraft, walkguide, historiclondon, newingtongreen, feminism, britishfeminists, herstory, londonwalks, britishhistory, fragments&monuments",
          },
        ]}
      >
        <html
          lang="en"
          style={{ fontFamily: `'Archivo Black', Impact, sans-serif` }}
        />
        <link rel="canonical" href="https://wollstonecraftwalks.netlify.com" />
        <meta
          name="google-site-verification"
          content="ZtGNrohmz3XFRtLU30FDSYpxw4d5jQe70PdolyjkVes"
        />
      </Helmet>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
