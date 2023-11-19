import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const GoogleMapComponent = () => {
    const containerStyle = {
        width: '100%',
        height: '400px'
      };
      
      const center = {
        lat: -3.745,
        lng: -38.523
      };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBn_x96P3RoDxmzQM98fZLLEt2ByopnkZU"
      })
    return isLoaded? (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
     
       >
    </GoogleMap>):<></>

}

export default GoogleMapComponent