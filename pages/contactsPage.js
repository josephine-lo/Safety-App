import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View, Card } from 'react-native';
import { ListItem } from 'react-native-elements'
import db from '../database/firebaseDB';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class addContacts extends Component {
    constructor() {
      super();
      this.dbRef = firebase.firestore().collection('users');
      this.state = {
        name: '',
        mobile: '',
        isLoading: false,
        userArray: []
      };
    }

    componentDidMount() {
      this.unsubscribe = this.dbRef.onSnapshot(this.getCollection);
    }

    componentWillUnmount(){
      this.unsubscribe();
    }

    getCollection = (querySnapshot) => {
      const userArray = [];
      querySnapshot.forEach((res) => {
        const { name, mobile } = res.data();
        userArray.push({
          key: res.id,
          res,
          name,
          mobile,
        });
      });
      this.setState({
        userArray,
        isLoading: false,
     });
    }
  
    inputValueUpdate = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }
  
    storeUser() {
      if(this.state.name === ''){
       alert('Fill at least your name!')
      } else {
        this.setState({
          isLoading: true,
        });      
        this.dbRef.add({
          name: this.state.name,
          mobile: this.state.mobile,
        }).then((res) => {
          this.setState({
            name: '',
            mobile: '',
            isLoading: false,
          });
          this.props.navigation.navigate('textPage')
          console.log('lol')
        })
        .catch((err) => {
          console.error("Error found: ", err);
          this.setState({
            isLoading: false,
          });
        });
      }
    }
  
    render() {
      if(this.state.isLoading){
        return(
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
        )
      }

      return (
        <ScrollView style={styles.container}>
          {
            this.state.userArray.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.name}
                  onPress={() => {
                    this.props.navigation.navigate('textPage', {
                      userkey: item.key
                    });
                  }}/>
              );
            })
          }
          <View style={styles.inputGroup}>
            <TextInput
                placeholder={'Name'}
                value={this.state.name}
                onChangeText={(val) => this.inputValueUpdate(val, 'name')}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
                placeholder={'Mobile'}
                value={this.state.mobile}
                onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Add User'
              onPress={() => this.storeUser()} 
              color="#0782F9"
            />
          </View>
        </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    inputGroup: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  
  export default addContacts;
