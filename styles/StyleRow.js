import React from 'react';
import {StyleSheet } from 'react-native';

const StylesRow = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,        
        backgroundColor: '#FFF',
        
    },
    title: {
        fontSize: 15,
        color: '#008cd8',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
        color : '#008cd8'
    },
    description: {
        fontSize: 14,        
        color : '#008cd8'
    },
    photo: {
        height: 50,
        width: 50,
    },
    storyCounters: {
        width: 25,
    },

    iconCounter: {
        fontSize: 12,
        color: '#bbbbbb'
    },

    iconCounterText: {
        color: '#bbbbbb',
        fontSize: 11,
        textAlign: 'center'
    }
});

export default StylesRow;