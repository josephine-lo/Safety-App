import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-elements';
import call from 'react-native-phone-call';
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
          onPress = {() => callNum(mobile)}>
          <Text style={styles.btnText}>Call {name}</Text>
        </TouchableOpacity>
      ))
    )
  }
}

const CallPage = () => {
  callNum = (numstring) => {
    const num = {
        number: numstring,
        prompt: false
    }
    call(num).catch(console.error)
  }

  return(
    <Card>
      <Card>
      <Card.Title>Call (Contacts)</Card.Title>
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
    alignItems: 'center',
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

export default CallPage;
