import React from "react";

export default function RouteOptimize(props) {

  

    

    
  }

  const startAnimation = () => {
    if (!AMap) {
      return;
    }
    AMap.plugin(["AMap.Driving", "AMap.MoveAnimation"], () => {
      const driving = new AMap.Driving({
        map: map,
        policy: AMap.DrivingPolicy.LEAST_TIME,
      });

      const start = new AMap.LngLat(121.521378, 30.83993);
      const end = new AMap.LngLat(121.517461, 30.838618);
      //   console.log(driving);

      const opts = {
        waypoints: [],
      };

      const geojson = new AMap.GeoJSON({
        geoJSON: null,
      });
      geojson.importData(getData());
      geojson.eachOverlay(function (item) {
        opts.waypoints.push(item.getPosition());
      });
      driving.search(start, end, opts, function (status, result) {
        console.log("status", status);
        console.log("result", result);
        if (status == "complete") {
          const lineArr = [];
          result.routes[0].steps.forEach(function (item) {
            lineArr.push(...item.path);
          });

          const marker = new AMap.Marker({
            map: map,
            position: start,
            icon: "https://webapi.amap.com/images/car.png",
            offset: new AMap.Pixel(-26, -13),
            angle: 180,
            // autoRotation(true);
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
          console.log("no");
        }
      });
    });
    console.log("start");
  };

  return (
    <div className="input-card">
      <h4>推荐浏览路线</h4>
      <div className="input-item">
        <button className="btn" onClick={startAnimation}>
          Start
        </button>
      </div>
    </div>
  );
}
