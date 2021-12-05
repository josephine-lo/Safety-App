import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
//import SendSMS from 'react-native-sms';
import * as SMS from 'expo-sms';
import db from '../database/firebaseDB';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
          <Text style={styles.btnText}>Text {name}</Text>
        </TouchableOpacity>
      ))
    )
  }
}

const TextPage = () => {
    sendText = (num) => {
        const isAvailable = SMS.isAvailableAsync();
        if (isAvailable) {
          console.log('SMS is available');
        } else {
          console.log('SMS is unavailable');
          return;
        }

        const { result } = SMS.sendSMSAsync(
          [num]
        );
    }

    return(
    <Card>
        <Card>
            <Card.Title>Send Text (Contacts)</Card.Title>
            <Card.Divider/>
            <View>{renderButtons()}</View>
        </Card>
    </Card>
 )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e8d5',
    maxHeight:'100%',
    alignItems: 'center'
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
  },
});

export default TextPage;
