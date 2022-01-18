import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Footer from "./footer"
import { DarkModeToggle } from "gatsby-theme-overreacted-toggle"
import "./../index.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(0.7),
            marginTop: 0,
            marginBottom: 0,
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
            margin: 0,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            fontSize: rhythm(1),
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
        }}
      >
        <header
          style={{
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            marginBottom: rhythm(1.2),
          }}
        >
          <div>{header}</div>
          <div
            style={{
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
            }}
          >
            <DarkModeToggle />
          </div>
        </header>
        <main>{children}</main>

        <footer
          style={{
            color: `#666`,
            fontSize: `.8em`,
            paddingTop: `5em`,
            display: `flex`,
            justifyContent: `space-between`,
          }}
        >
          <Footer />
          <div>
            <a
              style={{
                color: `#666`,
              }}
              target="blank"
              href={`https://pooyagolchian.com/farsi/rss.xml`}
            >
              فید
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
