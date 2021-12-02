import React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Dimensions, ScrollView, TouchableOpacity  } from 'react-native';
import { Card } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width

const LocationPage = () => {
  const SCU_LAT = 37.3496;
  const SCU_LONG = -121.9390;

  // create button for each contact/service
  const items = [
    <TouchableOpacity
      style={styles.callButton}
      onPress = {() => callNum(CampusEmergencyNum)}>
      <Text style={styles.btnText}>Call number</Text>
    </TouchableOpacity> 
]

  return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <MapView
                style = {styles.map}
                provider = {PROVIDER_GOOGLE}
                showsUserLocation = {true}
                initialRegion = {{
                latitude: SCU_LAT,
                longitude: SCU_LONG,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421}} />
          <Card>
            <Card>
              <Card.Title>Send Location (Contacts)</Card.Title>
              <Card.Divider/>
              <Text style={styles.description}>
                  Select contacts to send location:
              </Text>
              <TouchableOpacity
                  style={styles.callButton}
                  onPress = {() => callNum(CampusEmergencyNum)}>
                  <Text style={styles.btnText}>Call number</Text>
              </TouchableOpacity>
            </Card>

            <Card>
            <Card.Title>Send Location (Services)</Card.Title>
                <Card.Divider/>
                <Text style={styles.description}>
                    Select contacts to send location:
                </Text>
                <TouchableOpacity
                    style={styles.callButton}
                    onPress = {() => callNum(CampusEmergencyNum)}>
                    <Text style={styles.btnText}>Call number</Text>
                </TouchableOpacity>
            </Card>
        </Card>
      </ScrollView>
      </View>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT/2,
  },
  description: {
    marginBottom: '5%',
  },
  callButton: {
    backgroundColor: '#b30738',
    paddingTop: '4%',
    paddingBottom: '4%',
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffff',
    fontSize: 18
  }

});

export default LocationPage;
