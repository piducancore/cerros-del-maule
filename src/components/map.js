import React, { useRef } from "react"
import ReactMapGL from "react-map-gl"
import mapboxgl from "mapbox-gl" // This is a dependency of react-map-gl even if you didn't explicitly install it

import useStore from "./viewport"

import "mapbox-gl/dist/mapbox-gl.css"

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default

export default function Map(props) {
  const { viewport, setViewport } = useStore()
  const ref = useRef()
  const handleLoaded = () => {
    const map = ref.current.getMap()

    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      maxzoom: 14,
    })
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ source: "mapbox-dem", exaggeration: 1.6 })
    // add a sky layer that will show when the map is highly pitched
    map.addLayer({
      id: "sky",
      type: "sky",
      paint: {
        "sky-type": "atmosphere",
        "sky-atmosphere-sun": [0.0, 0.0],
        "sky-atmosphere-sun-intensity": 15,
      },
    })
  }

  return (
    <ReactMapGL
      {...viewport}
      {...props}
      ref={ref}
      height="100%"
      width="100%"
      onLoad={handleLoaded}
      onViewportChange={setViewport}
      mapStyle="mapbox://styles/mapbox/satellite-v9"
      mapboxApiAccessToken={process.env.GATSBY_MAPBOX_ACCESS_TOKEN}
    />
  )
}
