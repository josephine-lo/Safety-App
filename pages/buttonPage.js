import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Button, Card } from 'react-native-elements';
import call from 'react-native-phone-call';

const ButtonPage = () => {
  callNum = (num) => {
    call(num).catch(console.error)
  }

  const SafewalkNum = {
    number: "4085544410",
    prompt: false
  }

  const CampusSafetyNum = {
    number: "4085544441",
    prompt: false
  }

  const CampusEmergencyNum = {
    number: "4085544444",
    prompt: false
  }

  return(
      <Card>
        <Card>
            <Card.Title>SCU Safewalk</Card.Title>
            <Card.Divider/>
            <Card.Image style={styles.image} resizeMode="cover" source={require('../assets/images/safewalk-logo.png')}/>
            <Text style={{marginBottom: 10}}>
                On Wednesdays, Fridays, and Saturdays, SafeWalk has two people on shift who can help walk you home. This does not involve Campus Safety.
            </Text>
            <Button
                title = "Call number"
                onPress = {() => callNum(SafewalkNum)}
            />
        </Card>
        <Card>
            <Card.Title>SCU Campus Safety</Card.Title>
            <Card.Divider/>
            <Text style={{marginBottom: 10}}>
                Campus Safety is open 24 hours a day. They work to keep the campus community safe, directly under SCU.
            </Text>
            <Button
                title = "Call number"
                onPress = {() => callNum(CampusSafetyNum)}
            />
        </Card>
        <Card>
            <Card.Title>SCU Campus Safety Emergency</Card.Title>
            <Card.Divider/>
            <Text style={{marginBottom: 10}}>
                These are also directed toward Campus Safety, which is open 24 hours a day. Please only call in case of an emergency.
            </Text>
            <Button
                title = "Call number"
                onPress = {() => callNum(CampusEmergencyNum)}
            />
        </Card>
      </Card>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e8d5',
    maxHeight:'100%',
    alignItems: 'center'
  },
});

export default ButtonPage;
