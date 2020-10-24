import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 6.753350,
    lng: 81.831003
};

const position = {
    lat: 6.753350,
    lng: 81.831003
};

class SimpleMap extends Component {
    render() {
        return (
            <LoadScript
                googleMapsApiKey="AIzaSyCpDSNfhj3SHQZNUQ8ZR6bwCoo7baZ0e54"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                >
                    <Marker
                        position={position}
                    />
                </GoogleMap>
            </LoadScript>
        )
    }
}


export default SimpleMap