import React, { useEffect, useState } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import "./MapContainer.css";

import TrafficButton from "./TrafficButton";
import RouteOptimize from "./RouteOptimize";
import AddMarker from "./AddMarker";

const API_KEY = "5d630c3e6f0c259cec139b15e9f3028f";
const API_PASSWORD = "ff320aaa2b6423167056adffb8658972";
window._AMapSecurityConfig = {
  securityJsCode: API_PASSWORD,
};

export default function MapContainer() {
  const [mapInstance, setMapInstance] = useState(null);
  const [AMapInstance, setAMapInstance] = useState(null);
  //   const [trafficLayerInstance, setTrafficLayerInstance] = useState(null);

  // Basic Map Configuration
  useEffect(() => {
    AMapLoader.load({
      key: API_KEY,
      version: "2.0",
      plugins: [""],
    }).then((AMap) => {
      const map = new AMap.Map("container", {
        viewMode: "3D",
        zoom: 18,
        center: [121.516611, 30.837185],
        pitch: 45,
        mapStyle: "amap://styles/darkblue",
      });
      AMap.plugin(
        ["AMap.ToolBar", "AMap.Scale", "AMap.ControlBar", "AMap.GeoJSON"],
        function () {
          map.addControl(new AMap.ToolBar());
          map.addControl(new AMap.Scale());
          map.addControl(new AMap.ControlBar());
        }
      );
      //   const trafficLayer = new AMap.TileLayer.Traffic();
      setMapInstance(map);
      setAMapInstance(AMap);
      //   setTrafficLayerInstance(trafficLayer);
      //   console.log(AMap);
    });
  }, []);

  return (
    <>
      <div id="container" className="map" style={{ height: "800px" }}></div>
      {/* <TrafficButton
        map={mapInstance}
        AMap={AMapInstance}
        trafficLayer={trafficLayerInstance}
      /> */}
      <AddMarker map={mapInstance} AMap={AMapInstance} />
      {/* <RouteOptimize
        map={mapInstance}
        AMap={AMapInstance}
        trafficLayer={trafficLayerInstance}
      /> */}
    </>
  );
}
