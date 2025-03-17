import { MapContainer, TileLayer, ZoomControl, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import { flightLogo } from '../../assets';
import './body.css';

function Body() {
  const markers: { geocode: [number, number]; popUp: string }[] = [
    {
      geocode: [28.6139, 77.209],
      popUp: 'delhi',
    },
    {
      geocode: [19.076, 72.8777],
      popUp: 'mumbai',
    },
    { geocode: [22.5726, 88.3639], popUp: 'Kolkata' },
    { geocode: [13.0827, 80.2707], popUp: 'Chennai' },
    { geocode: [26.9124, 75.7873], popUp: 'Jaipur' },
    { geocode: [15.2993, 74.124], popUp: 'Goa' },
  ];
  const customIcon = new Icon({
    iconUrl: flightLogo,
    iconSize: [40, 40],
  });
  return (
    <MapContainer
      center={[20.5937, 78.9629] as [number, number]}
      zoom={5}
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomleft" />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode} icon={customIcon} />
      ))}
    </MapContainer>
  );
}

export default Body;
