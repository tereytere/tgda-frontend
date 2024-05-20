import { useState, useEffect, useRef } from 'react';
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';
import markerDataList, { MarkerData } from './markerData';
import * as L from 'leaflet';
import StoreIcon from '@mui/icons-material/Store';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BusinessIcon from '@mui/icons-material/Business';

type LatLng = [number, number];

export default function Map() {
  const defaultCenter: LatLng = [40.43034866984487, -3.7066612157011805];
  const [selectedLegendItem, setSelectedLegendItem] = useState<string | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

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
      <MapContainer center={defaultCenter} zoom={13} scrollWheelZoom={false} style={{ height: '80vh' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerDataList.map((markerData: MarkerData, index: number) => {
          if (selectedLegendItem && markerData.markerType !== selectedLegendItem) {
            return null;
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
            <Marker key={index} position={markerData.position} icon={new L.Icon({ iconUrl: `http://maps.google.com/mapfiles/ms/icons/${markerColor}-dot.png` })}>
              <Popup>{markerData.popupContent}</Popup>
            </Marker>
          );
        })}
        <div className='legend'>
          <div className='legend-item' onClick={() => handleLegendItemClick('store')}>
            <StoreIcon sx={{ color: 'red', fontSize: 20 }} />
            <span>Tienda</span>
          </div>
          <div className='legend-item' onClick={() => handleLegendItemClick('restaurant')}>
            <RestaurantIcon sx={{ color: 'green', fontSize: 20 }} />
            <span>Restaurante</span>
          </div>
          <div className='legend-item' onClick={() => handleLegendItemClick('organization')}>
            <BusinessIcon sx={{ color: 'blue', fontSize: 20 }} />
            <span>Organización</span>
          </div>
        </div>
      </MapContainer>
    </div>
  );
}
