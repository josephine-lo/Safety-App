import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e8d5',
    maxHeight:'100%',
    alignItems: 'center'
  },
});

export default TextPage;
