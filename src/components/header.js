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
            fontSize: `3rem`,
            color: `#4B4E53`,
            textDecoration: `none`,
            textAlign: `center`,
            fontFamily: `Yeseva One`,
            zIndex: `2`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    <article style={element}>
“I do not wish women to have power over men but over <b>themselves</b>” <br />
<i>A Vindication of the Rights of Woman (1792)</i>
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
