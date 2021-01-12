import React from "react";
import L from "leaflet";
import Icon from "../images/icon-location.svg";
import classes from "../styles/MapView.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapView() {
  const markerIcon = L.icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [30, 36],
    className: "leaflet-venue-icon",
  });
  return (
    <MapContainer
      className={classes.leafletContainer}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[51.505, -0.09]} icon={markerIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
