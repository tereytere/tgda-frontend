import { useState, useEffect, useRef } from 'react';
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';
import markerDataList, { MarkerData } from './markerData';
import * as L from 'leaflet';
import StoreIcon from '@mui/icons-material/Store';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BusinessIcon from '@mui/icons-material/Business';

type LatLng = [number, number];

export default function Map() {
  const defaultCenter: LatLng = [40.5284, -3.815];
  const [selectedLegendItem, setSelectedLegendItem] = useState<string | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const calculateCenter = (markerDataList: MarkerData[]): LatLng => {
    if (markerDataList.length === 0) return defaultCenter;

    const totalLat = markerDataList.reduce((acc, markerData) => acc + markerData.position[0], 0);
    const totalLng = markerDataList.reduce((acc, markerData) => acc + markerData.position[1], 0);
    const avgLat = totalLat / markerDataList.length;
    const avgLng = totalLng / markerDataList.length;

    return [avgLat, avgLng];
  };

  const center = calculateCenter(markerDataList);

  const handleLegendItemClick = (legendItem: string) => {
    setSelectedLegendItem(legendItem === selectedLegendItem ? null : legendItem);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (mapContainerRef.current && !mapContainerRef.current.contains(event.target as Node)) {
      setSelectedLegendItem(null); // Deselect legend item when clicking outside the map
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={mapContainerRef}>
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ height: '100vh' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerDataList.map((markerData: MarkerData, index: number) => {
          if (selectedLegendItem && markerData.markerType !== selectedLegendItem) {
            return null; // Skip rendering markers that do not match the selected legend item
          }

          let markerColor = 'black'; // Default color for markers
          switch (markerData.markerType) {
            case 'store':
              markerColor = 'red';
              break;
            case 'restaurant':
              markerColor = 'green';
              break;
            case 'organization':
              markerColor = 'blue';
              break;
            default:
              break;
          }

          return (
            <Marker key={index} position={markerData.position} icon={new L.Icon({ iconUrl: `http://www.google.com/mapfiles/marker_${markerColor}.png` })}>
              <Popup>{markerData.popupContent}</Popup>
            </Marker>
          );
        })}
        <div className="legend">
          <div className="legend-item" onClick={() => handleLegendItemClick('store')}>
            <StoreIcon sx={{ color: 'red', fontSize: 20 }} />
            <span>Tienda</span>
          </div>
          <div className="legend-item" onClick={() => handleLegendItemClick('restaurant')}>
            <RestaurantIcon sx={{ color: 'green', fontSize: 20 }} />
            <span>Restaurante</span>
          </div>
          <div className="legend-item" onClick={() => handleLegendItemClick('organization')}>
            <BusinessIcon sx={{ color: 'blue', fontSize: 20 }} />
            <span>Organización</span>
          </div>
        </div>
      </MapContainer>
    </div>
  );
}