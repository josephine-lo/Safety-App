import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Button, Card } from 'react-native-elements';
import SendSMS from 'react-native-sms';
/*//const items = []
      //const nameslist = ['Kacy, Steven, Mace, Paul']

        /*for (let i=0; i < 5; i++) {
          items.push(<Card><Card.Title>Grace Tantra</Card.Title></Card>)
        }{items}*/
const TextPage = () => {
    sendText = () => {
        console.log('Text testing');
        SendSMS.send({
            body: 'The default body of the SMS!',
            recipients: ['0123456789'],
            successTypes: ['sent', 'queued'],
            allowAndroidSendWithoutReadPermission: true
        }, (completed, cancelled, error) => {
            console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
        });
        console.log('Text testing end');
    }

    const items = [<Card><Card.Title>Test Name</Card.Title></Card>, <Card/>]

    return(
    <Card>
        {items}
        <Card/>
        <Card>
            <Card.Title>Test Name</Card.Title>
            <Card.Divider/>
            <Button
                title = "Send text"
                onPress = {this.sendText}
            />
        </Card>
        </Card>
 )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afafaf',
    maxHeight:'100vh',
    alignItems: 'center'
  },
});

export default TextPage;
