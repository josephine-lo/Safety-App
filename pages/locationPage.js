import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Dimensions, ScrollView, TouchableOpacity, Image  } from 'react-native';
import { Card } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as Location from 'expo-location';
import * as Clipboard from 'expo-clipboard';

const { width, height } = Dimensions.get('window');
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width

var arr = [];
var dataArr = [];
var nameArr = [];
const userDocument = firebase.firestore()
  .collection('users')
  .get()
  .then(collectionSnapshot => {
      console.log('Total users: ', collectionSnapshot.size);
      collectionSnapshot
          .forEach(documentSnapshot => {
              console.log('User ID: ', documentSnapshot.id,
                  documentSnapshot.data());
              arr.push(documentSnapshot.data());
              dataArr.push(documentSnapshot.get('mobile'));
              nameArr.push(documentSnapshot.get('name'));
          });
    //console.log(arr)
    console.log(dataArr);
    console.log(nameArr);
  });

// Buttons from db only show up when app refreshes
const renderButtons = () => {
  for( let i = 0; i < arr.length; i++) {
    return(
      arr.map(({ mobile, name }) => (
        <TouchableOpacity
          style={styles.stackedButton}
          onPress = {() => sendText(mobile)}>
          <Text style={styles.btnText}>Send to {name}</Text>
        </TouchableOpacity>
      ))
    )
  }
}

const LocationPage = () => {
  const SCU_LAT = 37.3496;
  const SCU_LONG = -121.9390;

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  Location.installWebGeolocationPolyfill();
    var getPosition = function (options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  getPosition()
    .then((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    })
    .catch((err) => {
      console.error(err.message);
    });

  const copyLink = () => {
    Clipboard.setString("https://www.google.com/maps/search/?api=1&query=" +
    lat + "," + long);
  }

  return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <MapView
                style = {styles.map}
                provider = {PROVIDER_GOOGLE}
                showsUserLocation = {true}
                initialRegion = {{
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421}} />
          <Card>
            <Card>
              <TouchableOpacity
                  style={styles.callButton}
                  onPress = {() => copyLink()}>
                  <Text style={styles.btnText}>Copy Location Link</Text>
              </TouchableOpacity>
            </Card>
            <Card>
              <Card.Title>Send Location (Contacts)</Card.Title>
              <Card.Divider/>
              <View>{renderButtons()}</View>
            </Card>

            <Card>
            <Card.Title>Send Location (Services)</Card.Title>
                <Card.Divider/>
                <TouchableOpacity
                    style={styles.callButton}
                    onPress = {() => callNum(CampusEmergencyNum)}>
                    <Text style={styles.btnText}>SafeWalk</Text>
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
  stackedButton: {
    backgroundColor: '#b30738',
    paddingTop: '4%',
    paddingBottom: '4%',
    marginTop: '3%',
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffff',
    fontSize: 18
  }

});

export default LocationPage;
