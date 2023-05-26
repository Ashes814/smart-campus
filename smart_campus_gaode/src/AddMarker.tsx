import React from "react";

export default function AddMarker(props) {
  // get Marker data from localStroage
  const getData = () => {
    if (!localStorage.getItem("geojson")) {
      localStorage.setItem("geojson", "[]");
    }

    return JSON.parse(localStorage.getItem("geojson"));
  };

  // save Marker data from localStroage
  const saveData = (data) => {
    localStorage.setItem("geojson", JSON.stringify(data));
  };

  if (props.map !== null && props.AMap !== null) {
    const AMap = props.AMap;
    const map = props.map;

    const geojson = new AMap.GeoJSON({
      geoJSON: null,
    });

    // Reading LocalStorage and Rendering Markers that have been added to map
    if (JSON.stringify(getData()) !== "[]") {
      geojson.importData(getData());
      geojson.eachOverlay(function (item) {
        item.on("click", () => {
          const ext = item.getExtData();
          const click = ++ext._geoJsonProperties.click;
          saveData(geojson.toGeoJSON());
          const infowindow = new AMap.InfoWindow({
            anchor: "top-center",
            content: `<div>打卡了${click}次</div`,
          });
          infowindow.open(map, item.getPosition());
        });
      });
    }
    map.add(geojson);

    // Adding new Marker to the map and saving it to LocalStorage
    map.on("click", (ev) => {
      // create new Marker on its position
      const marker = new AMap.Marker({
        position: ev.lnglat,
        extData: {
          _geoJsonProperties: {
            gid: geojson.getOverlays().length + 1,
            click: 0,
          },
        },
      });
      // add new Marker to localStorage geojson
      geojson.addOverlay(marker);
      // add click event for the new Marker
      marker.on("click", () => {
        const ext = marker.getExtData();
        const click = ++ext._geoJsonProperties.click;
        saveData(geojson.toGeoJSON());
        const infowindow = new AMap.InfoWindow({
          anchor: "top-center",
          content: `<div>打卡了${click}次</div`,
        });
        infowindow.open(map, marker.getPosition());
      });

      // save new Marker to LocalStorage
      saveData(geojson.toGeoJSON());
    });
  }
  return <></>;
}
