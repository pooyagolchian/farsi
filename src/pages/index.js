import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import moment from 'jalali-moment'


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="پویا گلچیان - مهندس نرم‌افزار و برنامه‌نویس"
          keywords={[`وب‌سایت پویا گلچیان`, `پویا گلچیان`, `طراح و برنامه‌نویس وب`, `طراحی وب‌سایت`,`طراحی اپلیکیشن`,`جاوااسکریپت`,`طراحی پرتال و وب‌سایت‌های شخصی و شرکتی`,`گلچیان`,`پویا`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          let jalaliDate = moment(new Date(node.frontmatter.date)).locale('fa').format('YYYY/M/D')
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  fontSize:`1.5em`,
                  lineHeight:`1.7em`
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small style={{color:`#999`,fontSize:`.9em`}} >{jalaliDate}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
                style={{color:`000`,fontSize:`1.05em`}}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
