import React from "react"

import Map from "../components/map"
import Story from "../components/story"
import { results } from "../components/cerrosMaule.json"

const chapters = results.map(cerro => ({
  ...cerro,
  latitude: parseFloat(cerro.latitude),
  longitude: parseFloat(cerro.longitude),
  zoom: 12,
  pitch: 60,
  bearing: 0,
}))

export default function Home() {
  return (
    <div>
      <Map
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -500,
        }}
      />
      <Story chapters={chapters} />
    </div>
  )
}
