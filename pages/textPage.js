import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
<<<<<<< Updated upstream

const TextPage = () => {
  return(
  <View style={styles.container}>
    <Text style={styles.text}>this is the text page</Text>
  </View>
  )};
=======
import { Button, Card } from 'react-native-elements';
import SendSMS from 'react-native-sms';

const TextPage = () => {
    sendText = (num) => {
        console.log('Text testing');
        SendSMS.send({
            body: '',
            recipients: [num],
            successTypes: ['sent', 'queued'],
            allowAndroidSendWithoutReadPermission: true
        }, (completed, cancelled, error) => {
            console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
        });
        console.log('Text testing end');
    }

    const items = [
        <Card>
            <Card.Title>Emergency Contact Name</Card.Title>
            <Button
                title = "Send text"
                onPress = {() => sendText('9876543210')}
            />
        </Card>
    ]

    return(
    <Card>
        {items}
    </Card>
 )};
>>>>>>> Stashed changes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afafaf',
    maxHeight:'100vh',
    alignItems: 'center'
  },
});

export default TextPage;
