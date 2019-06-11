import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';


class Map extends React.Component {

    constructor() {
        super();

        this.state = {
            markers :[
                {
                    latlng: {
                        latitude: -33.535840,
                        longitude: -70.573289
                    },
                    title: 'red barz',description:'sw'
                },
                {
                    latlng: {
                        latitude: -33.535098,
                        longitude: -70.573366
                    }, title: 'gym',description:'pacific'
                }
            ]
        }
    }

    render() {
        return (
            <MapView provider={PROVIDER_GOOGLE}
                style={style.map}
                region={{
                    latitude: -33.535840,
                    longitude: -70.573289,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                showsUserLocation={true}>
                {this.state.markers.map(marker => (
                    <Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
        );
    }
}

const style = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});

export default Map;