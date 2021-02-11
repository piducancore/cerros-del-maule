import React from "react"

import Map from "../components/map"
import Story from "../components/story"
import chapters from "../components/full.json"

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
