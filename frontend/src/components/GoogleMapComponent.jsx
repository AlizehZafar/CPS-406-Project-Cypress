// src/App.js
import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 37.7749, 
  lng: -122.4194,
};

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBBqPRuD8nvR6m6dyXo9ZcYBv0w1gVhvrg', 
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
