import React, { Component } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};
const key = import.meta.env.VITE_API_GKEY   // Usa a chave de produção durante a fase de produção
console.log(import.meta.env);
const options = {
  streetViewControl: false,
  mapTypeControl: false,
}

class Map extends Component {
  render() {
    const {location} = this.props;
    return (
      <>
        {
          window.google === undefined ? 
            <LoadScript
              googleMapsApiKey={key}
            >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={location}
              zoom={14}
              options={options}
            >
              <MarkerF position={location}/>
            </GoogleMap>
            </LoadScript> :
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={location}
              zoom={14}
              options={options}
            >
              <MarkerF position={location}/>
            </GoogleMap>
        }
      </>
    )
  }
}

export default Map;