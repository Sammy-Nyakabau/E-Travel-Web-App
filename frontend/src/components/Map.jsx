/* eslint-disable */
import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Map = ({ center }) => {
  const [myMap, setMyMap] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDjQL5K3KNqTlkqM0_uRgdNnc5O6uJ_9do",
  });

  const renderMap = () => (
    <GoogleMap
      mapContainerStyle={{
        height: "50vh",
        width: "45vw",
        margin: "20px",
      }}
      zoom={10}
      center={center}
      onLoad={(map) => setMyMap(map)}
    >
      <Marker position={center} />
    </GoogleMap>
  );

  return isLoaded ? renderMap() : null;
};

export default Map;
