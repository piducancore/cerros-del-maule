import React from "react";
import { Scrollama, Step } from "react-scrollama";
import { FlyToInterpolator } from "react-map-gl";
import { easeCubic } from "d3-ease";

import Layout from "../components/layout";
import { useMapStore } from "../components/map";
import { results } from "../cerrosMaule.json";

export default function Home() {
  const {
    setViewport,
    viewport: { latitude, longitude, zoom, pitch, bearing },
  } = useMapStore();
  const handleStepEnter = ({ data }) => {
    setViewport({
      ...data,
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitude),
      zoom: 12,
      pitch: 35,
      bearing: 0,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic,
    });
  };
  return (
    <Layout>
      <Scrollama offset={0.5} onStepEnter={handleStepEnter}>
        {results.map((chapter, index) => (
          <Step key={index} data={chapter}>
            <div
              style={{
                position: "relative",
                paddingTop: index > 0 ? null : "180vh",
                marginBottom: "180vh",
                maxWidth: "480px",
              }}
            >
              <h1>
                <span style={{ background: "#22222288", color: "#eeeeeeee", padding: "4px" }}>
                  {chapter.name.split(" (")[0]}
                </span>
                <br />
                <span style={{ background: "#22222288", color: "#eeeeeeee", padding: "4px" }}>
                  {"("}
                  {chapter.name.split(" (")[1]}
                </span>
              </h1>
              <pre>
                <span style={{ background: "#22222288", color: "#eeeeeeee", padding: "4px" }}>
                  {JSON.stringify({ latitude, longitude, zoom, pitch, bearing }, null, 2)}
                </span>
              </pre>
            </div>
          </Step>
        ))}
      </Scrollama>
    </Layout>
  );
}
