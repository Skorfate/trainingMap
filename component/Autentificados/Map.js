import React, { Component } from 'react';
import {  StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Alert, } from 'react-native';
import MapView, { PROVIDER_GOOGLE ,Marker, Callout,
    CalloutSubview,
    ProviderPropType,} from 'react-native-maps';

import CustomCallout from './CustomCallout';


class Map extends React.Component {

    constructor() {
        super();

        this.state = {
            cnt: 0,
            markers :[
                {   key : 1,
                    latlng: {
                        latitude: -33.535840,
                        longitude: -70.573289
                    },
                    title: 'red barz',description:'Grupo de StreetWorkout'
                    ,pincolor : 'red'
                },
                {
                    key : 2,
                    latlng: {
                        latitude: -33.535098,
                        longitude: -70.573366
                    }, title: 'Gimnasio',description:'pacific'
                    ,pincolor : 'blue'
                },
                {
                    key : 3,
                    latlng: {
                        latitude: -33.535801,
                        longitude: -70.573646
                    }, title: 'Biker',description:'Grupo de Ciclista'
                    ,pincolor : 'yellow'
                },
                {
                    key : 4,
                    latlng: {
                        latitude: -33.536749,
                        longitude:  -70.572970
                    }, title: 'Slack',description:'Grupo aficionado al Slack'
                    ,pincolor : 'grey'
                }
            ]
        }
    }

    show() {
        this.marker1.showCallout();
      }
    
      hide() {
        this.marker1.hideCallout();
      }
    render() {
        return (
            <MapView provider={PROVIDER_GOOGLE}
                style={styles.map}
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
                    <Marker key = {marker.key}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                        pinColor = {marker.pincolor}
                   >
                   <Callout style={styles.plainView}>
                  <View>
                    <Text>This is a plain view</Text>
                  </View>
                </Callout>

                   </Marker>
                ))}
            </MapView>
        );
    }


    
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        marginLeft : 5
    },
    customView: {
        width: 140,
        height: 140,
      },
      plainView: {
        width: 60,
      },
      container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
      bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
      },
      latlng: {
        width: 200,
        alignItems: 'stretch',
      },
      button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
      },
      calloutButton: {
        width: 'auto',
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 12,
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
      },
});

Map.propTypes = {
    provider: ProviderPropType,
  };

export default Map;