import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"


const element = {
  gridTemplateColumns: `repeat(4, 1fr)`,
  gridTemplateRows: `repeat(2, 300px)`,
  fontFamily: `Helvetica, Roboto, 'Open Sans'`,
}

const Header = ({ siteTitle }) => (
  <header>
  <section
    style={{
      // backgroundSize: `cover`,
      padding: `4rem 2rem`,
      display: `grid`,
      alignItems: `center`,
      gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
      gap: `3%`,
      marginBottom: `6rem`,
  }}>
    <div style={element}>
    <h2 style={{fontFamily: `'Archivo Black', Impact`, color: `#333333`, transform: `translateY(-90px)`, letterSpacing: `1px`,}}>Welcome to</h2>
        <h1
          style={{
            color: `#333333`,
            textDecoration: `none`,
            textAlign: `center`,
            fontFamily: `'Archivo Black', Impact`,
            fontWeight: `bolder`,
            zIndex: `1`,
            transform: `translate(2px, -90px)`,
            lineHeight: `1.5`,
            fontSize: `200%`,
            marginTop: `3.8rem`,
            marginBottom: `-2.4rem`,
            letterSpacing: `1px`,
          }}
        > 
          {siteTitle}
        </h1>
      </div>
      <div style={element}>
      <div style={{ maxWidth: `500px`, maxHeight: `500px`, zIndex: `1`}}>
      <Image />
      </div>
    </div>
    <article style={element}>
<p style={{letterSpacing: `2px`, lineHeight: `2`, transform: `translateY(70px)`,}}>“I do not wish women to have power over men but over <b>themselves</b>” <br />
<i>A Vindication of the Rights of Woman (1792)</i></p>
    </article>

    </section>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
