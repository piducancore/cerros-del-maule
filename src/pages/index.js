import React from "react"

import Map from "../components/map"

export default function Home() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
      }}
    >
      <Map />
    </div>
  )
}
