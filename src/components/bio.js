/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div>
            <div
              style={{
                display: `flex`,
                marginBottom: rhythm(2.5),
                alignSelf: `center`,
                alignItems: `center`,
              }}
            >
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginLeft: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `100%`,
                }}
              />
              <div>
                <div>
                  <span>وبلاگ</span> <strong>{author}</strong>.{" "}
                </div>
                <div>
                  مهندس نرم‌افزار و توسعه‌دهنده وب، مشاور تیم‌های فنی نرم‌افزاری
                </div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Bio
