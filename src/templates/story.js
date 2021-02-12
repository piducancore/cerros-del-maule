import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Scrollama, Step } from "react-scrollama"
import { FlyToInterpolator } from "react-map-gl"
import { easeCubic } from "d3-ease"
import Map from "../components/map"
import useStore from "../components/viewport"

const shortcodes = { Link } // Provide common components here

export default function StoryTemplate({ pageContext }) {
  const chapters = Object.values(pageContext)
  const { setViewport } = useStore()
  const handleStepEnter = ({ data }) => {
    setViewport({
      ...data,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic,
    })
  }
  return (
    <React.Fragment>
      <MDXProvider components={shortcodes}>
        <Scrollama offset={0.5} onStepEnter={handleStepEnter}>
          {chapters.map(({ body, slug, frontmatter }, index) => (
            <Step
              key={index}
              data={{
                ...frontmatter,
              }}
            >
              <div
                style={{
                  position: "relative",
                  paddingTop: index > 0 ? null : "180vh",
                  marginBottom: "180vh",
                  maxWidth: "480px",
                }}
              >
                <MDXRenderer key={slug}>{body}</MDXRenderer>
              </div>
            </Step>
          ))}
        </Scrollama>
      </MDXProvider>
      <Map
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -500,
        }}
      />
    </React.Fragment>
  )
}
