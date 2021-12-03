import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-elements';
import call from 'react-native-phone-call';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'


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

  const NineOneOne = {
    number: "911",
    prompt: false
  }

  return(
    <ScrollView style={{flexGrow: 1}}>
      <Card>
        <Card>
            <Card.Title>Emergency Button</Card.Title>
            <Card.Divider/>
            <TouchableOpacity //faExclamationTriangle
                style={styles.emergencyButton}
                onPress = {() => callNum(CampusEmergencyNum)}>
                <FontAwesomeIcon icon={faExclamationTriangle} size={90} color={'white'} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.description}>
                Send current location to all contacts. Only press during an emergency! 
            </Text>
        </Card>
        <Card>
            <Card.Title>SCU Safewalk</Card.Title>
            <Card.Divider/>
            <Card.Image style={styles.image} resizeMode="cover" source={require('../assets/images/safewalk-logo.png')}/>
            <Text style={styles.description}>
                On Wednesdays, Fridays, and Saturdays, SafeWalk has two people on shift who can help walk you home. This does not involve Campus Safety.
            </Text>
            <TouchableOpacity
                style={styles.callButton}
                onPress = {() => callNum(SafewalkNum)}>
                <Text style={styles.btnText}>Call number</Text>
            </TouchableOpacity>
        </Card>
        <Card>
            <Card.Title>SCU Campus Safety</Card.Title>
            <Card.Divider/>
            <Text style={styles.description}>
                Campus Safety is open 24 hours a day. They work to keep the campus community safe, directly under SCU.
            </Text>
            <TouchableOpacity
                style={styles.callButton}
                onPress = {() => callNum(CampusSafetyNum)}>
                <Text style={styles.btnText}>Call number</Text>
            </TouchableOpacity>
        </Card>
        <Card>
            <Card.Title>SCU Campus Safety Emergency</Card.Title>
            <Card.Divider/>
            <Text style={styles.description}>
                These are also directed toward Campus Safety, which is open 24 hours a day. Please only call in case of an emergency.
            </Text>
            <TouchableOpacity
                style={styles.callButton}
                onPress = {() => callNum(CampusEmergencyNum)}>
                <Text style={styles.btnText}>Call number</Text>
            </TouchableOpacity>
        </Card>
        <Card>
            <Card.Title>911</Card.Title>
            <Card.Divider/>
            <Text style={styles.description}>
                This number is only intended for use in emergency circumstances. Proceed with caution!
            </Text>
            <TouchableOpacity
                style={styles.callButton}
                onPress = {() => callNum(NineOneOne)}>
                <Text style={styles.btnText}>Call number</Text>
            </TouchableOpacity>
        </Card>
      </Card>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e8d5',
    alignItems: 'center'
  },
  image: {
    marginBottom:'5%'
  },
  description: {
    marginBottom: '5%',
  },
  emergencyButton: {
    width: 150,
    height: 150,
    backgroundColor: '#b30738',
    borderRadius: 100,
    alignItems: 'center',
    left: '20%',
    shadowRadius: 10,
    marginBottom: '10%'
  },
  icon: {
    alignItems: 'center',
    marginTop: '14%',
  },
  callButton: {
    backgroundColor: '#b30738',
    paddingTop: '4%',
    paddingBottom: '4%',
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffff',
    fontSize: 18
  },
});

export default ButtonPage;
