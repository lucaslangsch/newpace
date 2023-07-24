import React, { useCallback, useEffect, useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const key = import.meta.env.VITE_API_GKEY   // Usa a chave de produção durante a fase de produção
const options = {
  streetViewControl: false,
  mapTypeControl: false,
};

const Map = ({ location }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key
  });

  const mapRef = useRef(null);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback() {
  }, []);

  useEffect(() => {
    return () => {
      onUnmount();
    };
  }, [onUnmount]);

  if (!isLoaded) return null;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={14}
      options={options}
      onLoad={onLoad}
    >
      <Marker position={location} />
    </GoogleMap>
  );
};

export default Map;
