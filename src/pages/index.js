import * as React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Landing from "../components/landing/landing"

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Home" />
      <Landing />
    </Layout>
  </>
)

export default IndexPage
