import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
//import SendSMS from 'react-native-sms';
import * as SMS from 'expo-sms';

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

    const items = [
        <Card>
            <Card.Title>Emergency Contact Name</Card.Title>
            <TouchableOpacity
              style={styles.stackedButton}
              onPress = {() => sendText('4089999996')}>
              <Text style={styles.btnText}>Jessica Dinh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.stackedButton}
              onPress = {() => sendText('4089999997')}>
              <Text style={styles.btnText}>Reanne Inafuku</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.stackedButton}
              onPress = {() => sendText('4089999998')}>
              <Text style={styles.btnText}>Josephine Lo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.stackedButton}
              onPress = {() => sendText('4089999999')}>
              <Text style={styles.btnText}>Grace Tantra</Text>
            </TouchableOpacity>
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
