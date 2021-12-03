import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-elements';
import call from 'react-native-phone-call';

  const ButtonPage = () => {
    callNum = (num) => {
        call(num).catch(console.error)
  }

  const SafewalkNum = {
    number:"" + "4085544410",
    prompt: false
  }

  const CampusSafetyNum = {
    number: "" + "4085544441",
    prompt: false
  }

  const CampusEmergencyNum = {
    number: "" + "4085544444",
    prompt: false
  }

  const CAPSNum = {
    number: "" + "4085544501",
    prompt: false
  }

  const SupportLineNum = {
    number: "" + "4085545220",
    prompt: false
  }

  return(
    <ScrollView style={{flexGrow: 1}}>
      <Card>
        <Card>
            <Card.Title>Emergency Button</Card.Title>
            <Card.Divider/>
            <Card.Image style={styles.image} resizeMode="cover" source={require('../assets/images/safewalk-logo.png')}/>
            <Text style={styles.description}>
                On Wednesdays, Fridays, and Saturdays, SafeWalk has two people on shift who can help walk you home. This does not involve Campus Safety.
            </Text>
            <TouchableOpacity
                style={styles.callButton}
                onPress = {() => callNum(CampusEmergencyNum)}>
                <Text style={styles.btnText}>Call number</Text>
            </TouchableOpacity>
        </Card>
        <Card>
            <Card.Title>SCU Safewalk</Card.Title>
            <Card.Divider/>
            <Card.Image style={styles.image} resizeMode="cover" source={require('../assets/images/safewalk-logo.png')}/>
            <Text style={styles.description}>
                Safewalk is open Wednesday, Friday, and Saturday, from 10:00PM to 1:00AM. They have people on shift
                who can help walk you home safely. Calls are kept confidential.
            </Text>
            <TouchableOpacity
                style={styles.callButton}
                onPress = {() => callNum(CampusEmergencyNum)}>
                <Text style={styles.btnText}>Call number</Text>
            </TouchableOpacity>
        </Card>
        <Card>
            <Card.Title>SCU Campus Safety</Card.Title>
            <Card.Divider/>
            <Text style={styles.description}>
                Campus Safety is open 24/7. They work to keep the campus community safe, directly under SCU.
            </Text>
            <TouchableOpacity
                style={styles.callButton}
                onPress = {() => callNum(CampusEmergencyNum)}>
                <Text style={styles.btnText}>Call number</Text>
            </TouchableOpacity>
        </Card>
        <Card>
            <Card.Title>SCU Campus Safety Emergency</Card.Title>
            <Card.Divider/>
            <Text style={styles.description}>
                Campus Safety's emergency phone line is open 24/7. Please only call in case of an emergency.
            </Text>
            <TouchableOpacity
                style={styles.callButton}
                onPress = {() => callNum(CampusEmergencyNum)}>
                <Text style={styles.btnText}>Call number</Text>
            </TouchableOpacity>
        </Card>
        <Card>
            <Card.Title>SCU CAPS</Card.Title>
            <Card.Divider/>
            <Text style={styles.description}>
                CAPS is open M-F, 8:30AM to 5:00PM. They provide students with mental health and wellness services.
                After hours, their crisis line is accessible through Campus Safety's non-emergency number.
            </Text>
            <TouchableOpacity
                style={styles.callButton}
                onPress = {() => callNum(CampusEmergencyNum)}>
                <Text style={styles.btnText}>Call number</Text>
            </TouchableOpacity>
        </Card>
        <Card>
            <Card.Title>24/7 Mental Health Support Line</Card.Title>
            <Card.Divider/>
            <Text style={styles.description}>
                CAPS has partnered to have a 24/7 Support Line.
                From 8:00AM to 5:00PM, the call will be answered by patient navigators.
                From 5:00PM to 8:00AM, the call will be answered by licensed clinicians.
            </Text>
            <TouchableOpacity
                style={styles.callButton}
                onPress = {() => callNum(CampusEmergencyNum)}>
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
  }
});

export default ButtonPage;
