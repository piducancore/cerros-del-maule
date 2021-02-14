import React, { useRef } from "react"
import ReactMapGL, { Layer, LinearInterpolator } from "react-map-gl"
import { easeLinear } from "d3-ease"
import mapboxgl from "mapbox-gl" // This is a dependency of react-map-gl even if you didn't explicitly install it

import useStore from "./viewport"

import "mapbox-gl/dist/mapbox-gl.css"

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default

const skyLayer = {
  id: "sky",
  type: "sky",
  paint: {
    "sky-opacity": ["interpolate", ["linear"], ["zoom"], 0, 0, 5, 0.3, 8, 1],
    "sky-type": "atmosphere",
    "sky-atmosphere-sun": [0.0, 0.0],
    "sky-atmosphere-sun-intensity": 3,
  },
}

export default function Map(props) {
  const { viewport, setViewport } = useStore()
  const ref = useRef()
  const onLoad = () => {
    const map = ref.current.getMap()
    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      maxzoom: 14,
    })
    map.setTerrain({ source: "mapbox-dem", exaggeration: 1.6 })
  }
  const onTransitionEnd = () =>
    setViewport({
      bearing: 720,
      transitionDuration: 90000,
      transitionInterpolator: new LinearInterpolator(),
      transitionEasing: easeLinear,
    })
  return (
    <ReactMapGL
      {...viewport}
      {...props}
      ref={ref}
      height="100vh"
      width="100vw"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -500,
      }}
      onViewportChange={setViewport}
      onLoad={onLoad}
      onTransitionEnd={onTransitionEnd}
      mapStyle="mapbox://styles/mapbox/satellite-v9"
      mapboxApiAccessToken={process.env.GATSBY_MAPBOX_ACCESS_TOKEN}
    >
      <Layer {...skyLayer} />
    </ReactMapGL>
  )
}
