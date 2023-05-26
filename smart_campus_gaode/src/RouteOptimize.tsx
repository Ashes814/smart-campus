import React, { useState } from "react";
import { AMap } from "@amap/amap-jsapi-types";
import "./RouteOptimize.css";

interface Props {
  AMap: AMap | null;
  map: AMap.map | null;
}
export default function RouteOptimize(props: Props) {
  const getData = () => {
    if (!localStorage.getItem("geojson")) {
      localStorage.setItem("geojson", "[]");
    }

    return JSON.parse(localStorage.getItem("geojson") as string);
  };
  const { AMap, map } = props;

  const clearMarker = () => {
    localStorage.removeItem("geojson");
    alert("ok");
    location.reload();
  };

  const startAnimation = () => {
    if (!AMap) {
      return;
    }
    AMap.plugin(["AMap.Driving", "AMap.MoveAnimation"], () => {
      const driving = new AMap.Driving({
        map: map,
        policy: AMap.DrivingPolicy.LEAST_TIME,
      });

      let start: AMap.LngLat;
      let end;
      const opts = {
        waypoints: [],
      };

      const geojson = new AMap.GeoJSON({
        geoJSON: null,
      });
      geojson.importData(getData());

      geojson.eachOverlay(function (
        item: AMap.Overlay,
        index: AMap.Overlay,
        collections: AMap.Overlay
      ) {
        if (index === 0) {
          start = item.getPosition();
        }
        if (index === collections.length - 1) {
          end = item.getPosition();
        }

        if (index !== 0 && index !== collections.length - 1) {
          opts.waypoints.push(item.getPosition());
        }
      });

      driving.search(start, end, opts, function (status, result) {
        if (status == "complete") {
          const lineArr = [];
          result.routes[0].steps.forEach(function (item) {
            lineArr.push(...item.path);
          });

          const marker = new AMap.Marker({
            map: map,
            position: start,
            icon: "https://webapi.amap.com/images/0.png",
            offset: new AMap.Pixel(-26, -13),
            angle: 180,
          });

          const passedPolyline = new AMap.Polyline({
            map: map,
            strokeColor: "#AF5",
            strokeWeight: 6,
          });

          marker.on("moving", function (e) {
            passedPolyline.setPath(e.passedPath);
          });
          map.setFitView();
          marker.moveAlong(lineArr, {
            duration: 50,
            addRotation: true,
          });
        } else {
          console.log("路线规划产生错误，请重新开始");
        }
      });
    });
  };

  return (
    <div className="btn">
      <button className="btn1" onClick={startAnimation}>
        规划游览路线
      </button>
      <button className="btn2" onClick={clearMarker}>
        清除所有标记
      </button>
    </div>
  );
}
