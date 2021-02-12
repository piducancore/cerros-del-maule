import React from "react"
import { Scrollama, Step } from "react-scrollama"
import { FlyToInterpolator } from "react-map-gl"
import { easeCubic } from "d3-ease"

import useStore from "./viewport"

export default function Story({ chapters }) {
  const { setViewport } = useStore()
  const handleStepEnter = ({ data }) => {
    setViewport({
      ...data,
      zoom: 8,
      pitch: 0,
      bearing: 0,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic,
    })
  }
  return (
    <Scrollama offset={0.5} onStepEnter={handleStepEnter}>
      {chapters.map((chapter, index) => (
        <Step key={index} data={chapter}>
          <div
            style={{
              position: "relative",
              paddingTop: index > 0 ? null : "180vh",
              marginBottom: "180vh",
              maxWidth: "480px",
            }}
          >
            {/* <pre>{JSON.stringify(chapter, null, 2)}</pre> */}
            <div
              style={{
                padding: 8,
                margin: 8,
                background: "rgba(0,0,0,0.8)",
                color: "#fff",
              }}
            >
              <h1>{chapter.name}</h1>
              <img
                src={chapter.images[0]}
                alt={chapter.name}
                style={{ width: "100%" }}
              />
              <div dangerouslySetInnerHTML={{ __html: chapter.html }} />
            </div>
          </div>
        </Step>
      ))}
    </Scrollama>
  )
}
