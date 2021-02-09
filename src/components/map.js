import React from "react"
import ReactMapGL, { FlyToInterpolator } from "react-map-gl"
import { easeCubic } from "d3-ease"
import { Scrollama, Step } from "react-scrollama"

import useStore from "./viewport"
import { results } from "./cerrosMaule.json"

import "mapbox-gl/dist/mapbox-gl.css"

const chapters = results.map(cerro => ({
  ...cerro,
  latitude: parseFloat(cerro.latitude),
  longitude: parseFloat(cerro.longitude),
  zoom: 12,
  pitch: 60,
  bearing: 0,
}))

export default function Map() {
  const { viewport, setViewport } = useStore()
  const flyTo = newViewport => {
    setViewport({
      ...viewport,
      ...newViewport,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic,
    })
  }
  return (
    <div>
      <ReactMapGL
        {...viewport}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -500,
        }}
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_ACCESS_TOKEN}
      />
      <button
        style={{ position: "fixed" }}
        onClick={() =>
          flyTo({
            longitude: -74.1,
            latitude: 40.7,
            zoom: 14,
          })
        }
      >
        New York City
      </button>
      <Scrollama offset={0.5} onStepEnter={({ data }) => flyTo(data)}>
        {chapters.map((chapter, index) => (
          <Step key={index} data={chapter}>
            <div
              style={{
                position: "relative",
                marginBottom: "180vh",
                maxWidth: "480px",
              }}
            >
              <pre
                style={{
                  padding: 8,
                  margin: 8,
                  background: "rgba(0,0,0,0.8)",
                  color: "#fff",
                }}
              >
                {JSON.stringify(chapter, null, 2)}
              </pre>
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  )
}
