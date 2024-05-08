import React from "react";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import { Icon } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";

import "leaflet/dist/leaflet.css";
import { Marker } from "react-leaflet";

interface CustomMarkerProps {
  position: L.LatLngExpression;
  children: React.ReactNode;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ position, children }) => {
  const customIcon = L.divIcon({
    html: ReactDOMServer.renderToString(<Icon component={RoomIcon} color="primary" fontSize="large" />),
    iconSize: [25, 25],
  });

  return (
    <Marker position={position} icon={customIcon}>
      {children}
    </Marker>
  );
};

export default CustomMarker;
