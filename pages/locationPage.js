import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const LocationPage = () => {
  return(
  <View style={styles.container}>
    <Text style={styles.text}>this is the location page</Text>
  </View>
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
