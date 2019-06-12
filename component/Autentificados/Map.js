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
                    title: 'red barz',description:'Grupo de StreetWorkout'
                    ,pincolor : 'red'
                },
                {
                    latlng: {
                        latitude: -33.535098,
                        longitude: -70.573366
                    }, title: 'Gimnasio',description:'pacific'
                    ,pincolor : 'blue'
                },
                {
                    latlng: {
                        latitude: -33.535801,
                        longitude: -70.573646
                    }, title: 'Biker',description:'Grupo de Ciclista'
                    ,pincolor : 'yellow'
                },
                {
                    latlng: {
                        latitude: -33.536749,
                        longitude:  -70.572970
                    }, title: 'Slack',description:'Grupo aficionado al Slack'
                    ,pincolor : 'grey'
                }
            ]
        }
    }

    render() {
        return (
            <MapView provider={PROVIDER_GOOGLE}
                style={style.map}
                maxZoomLevel = {20}
                minZoomLevel = {15}
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
                        pinColor = {marker.pincolor}
                    />
                ))}
            </MapView>
        );
    }
}

const style = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        marginLeft : 5
    }
});

export default Map;