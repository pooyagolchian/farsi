import React from "react"
import { StaticQuery, graphql } from "gatsby"

function Footer() {
  return (
    <StaticQuery
      query={socialQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <div>
            <ul className="footer-social">
              <li>
                <a target="blank" href={`https://github.com/${social.github}`}>
                  گیت‌هاب
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href={`https://linkedin.com/in/${social.linkedin}`}
                >
                  لینکدین
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href={`https://dribbble.com/${social.dribbble}`}
                >
                  دریبل
                </a>
              </li>
              <li>
                <a target="blank" href={`${social.english}`}>
                  وبلاگ انگلیسی
                </a>
              </li>
            </ul>
          </div>
        )
      }}
    />
  )
}

const socialQuery = graphql`
  query socialQuery {
    site {
      siteMetadata {
        social {
          twitter
          github
          linkedin
          dribbble
          english
        }
      }
    }
  }
`

export default Footer
