import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView,StyleSheet, Text, View, StatusBar, TextInput, Touchable, TouchableOpacityComponent, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import db from './firebaseDB';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


/*let addItem = item => {
  database().ref('/items').push({
    name: item
  });
};

export default function AddItem (){
  const [name,setName] = React.useState('')
  const [phone,setPhone] = React.useState('')}
*/

const usersCollection = db.firestore().collection('users');

const ContactsPage = () => {
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  /*const navigation = useNavigation

  useEffect(() => async() => {
    const unsubscribe = authh.onAuthStateChanged(async (user) => {
      if(user){
        navigation.navigate("./pages/textPage")
      }
    })

    return unsubscribe
  }, [])*/

  const handlePhone = () => {
    database().ref('/items').push({
    name: setName,
    phone: setPhone
  })

    addItem(name);
    Alert.alert('Item saved successfully');
      /*.createPhone(name,phone)
      ,then(userCredential => {
        const user = userCredential.user;
        console.log("Hallo", user.name);
      })
      .catch(error => alert(error.message))*/
  }


  return(
  <KeyboardAvoidingView style={styles.container} 
    behavior="padding">
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}/>

      <TextInput 
        placeholder="Phone number"
        value={phone}
        onChangeText={text => setPhone(text)}
        style={styles.input}/>
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        onPress={() => {handlePhone}} 
        style={styles.button}
        >
        <Text Block primary onPress={() => this.pushToFirebase()} style={styles.button}>Add Contactor</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#afafaf',
    maxHeight:'100vh',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
 
});

export default ContactsPage;