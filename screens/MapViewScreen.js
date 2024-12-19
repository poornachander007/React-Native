import React from "react";
import MapView from "react-native-maps";

const MapViewComponent = () => {
    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                // latitude: 17.4504,
                latitude: 17.4506,
                // longitude: 78.3808,
                longitude: 78.3812,
                // latitudeDelta: 0.0922,
                latitudeDelta: 0.0001,
                // longitudeDelta: 0.0421,
                longitudeDelta: 0.0001,
              }}
              
        />
    );
};

export default MapViewComponent;