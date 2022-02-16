/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Scrollama, Step } from "react-scrollama"
import { FlyToInterpolator } from "react-map-gl"
import { easeCubic } from "d3-ease"
import { useMapStore } from "../components/map"
import Layout from "../components/layout"

const shortcodes = { Link } // Provide common components here

export default function StoryTemplate({ pageContext }) {
  const chapters = Object.values(pageContext)
  const { setViewport } = useMapStore()
  const handleStepEnter = ({ data }) => {
    setViewport({
      ...data,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic,
    })
  }
  return (
    <Layout>
      <MDXProvider components={shortcodes}>
        <Scrollama offset={0.5} onStepEnter={handleStepEnter}>
          {chapters.map((chapter, index) => {
            const { body, slug, frontmatter } = chapter
            return (
              <Step
                key={index}
                data={{
                  ...frontmatter,
                }}
              >
                <div
                  sx={{
                    maxWidth: "container",
                    ml: "auto",
                    mb: index < chapters.length - 1 ? "100vh" : 4,
                    p: 3,
                    bg: "background",
                  }}
                >
                  <MDXRenderer key={slug}>{body}</MDXRenderer>
                </div>
              </Step>
            )
          })}
        </Scrollama>
      </MDXProvider>
    </Layout>
  )
}
