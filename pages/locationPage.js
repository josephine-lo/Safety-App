import React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const LocationPage = () => {
  const SCU_LAT = 37.3496;
  const SCU_LONG = -121.9390;
  return (
    <MapView
       style = {{ flex: 1 }}
       provider = {PROVIDER_GOOGLE}
       showsUserLocation = {true}
       initialRegion = {{
       latitude: SCU_LAT,
       longitude: SCU_LONG,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421}}
    />
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e8d5',
    maxHeight:'100%',
    alignItems: 'center'
  },
});

export default LocationPage;
