import React, { useState } from "react";

export default function TrafficButton(props) {
  let trafficLayerHandler;
  const [trafficLayerShown, setTrafficLayerShown] = useState(false);

  if (props.map !== null && props.AMap !== null) {
    trafficLayerHandler = () => {
      trafficLayerShown
        ? props.map.remove(props.trafficLayer)
        : props.map.add(props.trafficLayer);
      setTrafficLayerShown(!trafficLayerShown);
    };
  }

  return <button onClick={trafficLayerHandler}>TrafficButton</button>;
}
