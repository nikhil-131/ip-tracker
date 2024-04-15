import {React, useEffect, useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const MapComponent = ({ipTracker}) => {
  // const [position, setPosition] = useState([0, 0]); // Initial position

  // // Update position when ipTracker changes
  // useEffect(() => {
  //   if (ipTracker && ipTracker.location && ipTracker.location.lat && ipTracker.location.lng) {
  //     setPosition([ipTracker.location.lat, ipTracker.location.lng]);
  //   }
  // }, [ipTracker]);

  // const [map, setMap] = useState(null);

  // useEffect(() => {
  //   if (map && ipTracker) {
  //     map.setView([ipTracker.location.lat, ipTracker.location.lng], 13);
  //     console.log(map);
  //   }
  // }, [map, ipTracker]);



  // useEffect(() => {
  //   if (map && ipTracker) {
  //     map.setView([ipTracker.location.lat, ipTracker.location.lng], 13);
  //     console.log(map, ipTracker);
  //   }
  // }, []);

  function MyComponent() {
    const map = useMap()
    console.log('map center:', map.getCenter())
    map.setView([ipTracker.location.lat, ipTracker.location.lng], 13)
    return null
  }

  return (
    <div className="main-map w-[100vw] h-[54vh] max-h-[80vh]" id='map'>
      <MapContainer center={[ipTracker.location.lat, ipTracker.location.lng]} zoom={13} className='h-[54vh] z-0'>
      <MyComponent />
      {/* <MapContainer center={[11.520935, 78.217783]} zoom={13} className='h-[54vh] z-0'> */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[11.520935, 78.217783]}> */}
      <Marker position={[ipTracker.location.lat, ipTracker.location.lng]}>
        <Popup>
          {ipTracker.location.lat} <br /> {ipTracker.location.lng}
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  )
}

export default MapComponent
