import React from "react"

import Story from "../components/story"
import Layout from "../components/layout"
import chapters from "../components/full.json"

export default function Home() {
  return (
    <Layout>
      <Story chapters={chapters} />
    </Layout>
  )
}
