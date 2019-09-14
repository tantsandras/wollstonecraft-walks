import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"


const element = {
  gridTemplateColumns: `repeat(4, 1fr)`,
  gridTemplateRows: `repeat(2, 300px)`,
  fontFamily: `Helvetica`,
}

const Header = ({ siteTitle }) => (
  <header>
  <section className="hero"
    style={{
      backgroundSize: `cover`,
      padding: `4rem 2rem`,
      display: `grid`,
      alignItems: `center`,
      gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
      gap: `3%`,
      marginBottom: `4rem`
  }}>
  <div style={element}>
      <div style={{ maxWidth: `500px`, maxHeight: `500px`}}>
      <Image />
      </div>
    </div>
    <h1 style={element}>
        <Link
          to="/"
          style={{
            fontSize: `98%`,
            color: `#333333`,
            textDecoration: `none`,
            textAlign: `center`,
            fontFamily: `Yeseva One`,
            zIndex: `2`,
            textShadow: `1px 1px #000000`,
            letterSpacing: `2px`,
          }}
        >
        <h2 style={{fontFamily: `Yeseva One`, letterSpacing: `2px`, textShadow: `1px 1px #000000`,}}>Welcome to</h2>
          {siteTitle}
        </Link>
      </h1>
    <article style={element}>
<p style={{letterSpacing: `2px`, lineHeight: `2`}}>“I do not wish women to have power over men but over <b>themselves</b>” <br />
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
