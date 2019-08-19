import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import Menu from "../components/menu"


const element = {
  gridTemplateColumns: `repeat(4, 1fr)`,
  gridTemplateRows: `repeat(2, 300px)`
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
  }}>
  <div style={element}>
      <Image />
    </div>
    <h1 style={element}>
        <Link
          to="/"
          style={{
            color: `grey`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    <article style={element}>
“I do not wish women to have power over men but over <b>themselves</b>” <br />
<i>A Vindication of the Rights of Woman (1792)</i>
    </article>
    <Menu />
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
