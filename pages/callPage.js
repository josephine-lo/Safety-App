import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Button, Card } from 'react-native-elements';
import call from 'react-native-phone-call';

const CallPage = () => {
  callNum = (numstring) => {
    const num = {
        number: numstring,
        prompt: false
    }
    call(num).catch(console.error)
  }

  const items = [
      <Card>
          <Card.Title>Emergency Contact Name</Card.Title>
          <Button
              title = "Call number"
              onPress = {() => callNum('9876543210')}
          />
      </Card>
  ]

  return(
      <Card>
          {items}
       </Card>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afafaf',
    maxHeight:'100vh',
    alignItems: 'center',
  },
 
});

export default CallPage;
