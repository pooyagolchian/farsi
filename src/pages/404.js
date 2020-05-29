import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="۴۰۴:‌ پیدا نشد" />
        <div style={{ marginBottom: `2em` }}>
          <h1>صفحه مورد نظر یافت نشد.</h1>
          <p>
            صفحه‌ای که به دنبال آن می‌گردید یافت نشد، لطفا بر‌روی لینک زیر کلیک
            کنید.
          </p>
          <a href="/farsi">بازگشت به صفحه اصلی</a>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
