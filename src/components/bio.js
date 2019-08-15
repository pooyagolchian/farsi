/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm, scale } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
              alignItems:`center`,
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
                alignItems:`center`,
              
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p style={{margin:`0`}}>
               <span style={{
                 display:`flex`,
                 fontWeight:`bolder`,
                 ...scale(1/9),
                 alignItems:`center`,
                flex: `1`
               }}>مهندس نرم‌افزار و برنامه‌نویس <br></br></span>
              {` `}
              <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/${social.twitter}`}>
                توییتر 
              </a>
              {` | `}  
              <a target="_blank" rel="noopener noreferrer" href={`https://github.com/${social.github}`}>
                 گیت‌هاب
              </a>
              {` | `}   
              <a target="_blank" rel="noopener noreferrer" href={`https://linkedin.com/in/${social.linkedin}`}>
                 لینکدین
              </a>
              {` | `}   
              <a target="_blank" rel="noopener noreferrer" href={`https://dribbble.com/${social.dribbble}`}>
              دریبل
              </a>
              {` | `}   
              <a target="_blank" rel="noopener noreferrer" href={`${social.virgool}`}>
              ویرگول
              </a>
              {` | `}    
              <a target="_blank" rel="noopener noreferrer" href={`${social.english}`}>
              بلاگ انگلیسی
              </a>
            </p>
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
        social {
          twitter
          github
          linkedin
          dribbble
          english
          virgool
        }
      }
    }
  }
`

export default Bio
