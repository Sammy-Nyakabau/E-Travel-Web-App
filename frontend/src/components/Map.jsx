/* eslint-disable */
import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Map = ({ center }) => {
  const [myMap, setMyMap] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDjQL5K3KNqTlkqM0_uRgdNnc5O6uJ_9do", //this should not be publicly visible but oh well
  });

  const renderMap = () => (
    <GoogleMap
      mapContainerStyle={{
        height: "50vh",
        width: "40vw",
      }}
      zoom={16}
      center={center}
      onLoad={(map) => setMyMap(map)}
    >
      <Marker position={center} />
    </GoogleMap>
  );

  return isLoaded ? renderMap() : null;
};

export default Map;
