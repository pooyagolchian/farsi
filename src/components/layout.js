import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import '../styles/global.css'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontFamily:`Sahel`
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Sahel`,
            marginTop: 0,
            color:`black`
          }}
        >
        <span style={{
          verticalAlign:`sub`
      
        }}
        >→</span>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(25),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          direction: `rtl`
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer style={{color: `#666`,fontSize:`.9em`}}>
          © 2015 - {new Date().getFullYear()}. تمامی حقوق محفوظ است.
        </footer>
      </div>
    )
  }
}

export default Layout
