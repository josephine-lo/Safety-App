//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faExclamationTriangle, faPhoneAlt, faComment, faMapMarkerAlt, faWrench } from '@fortawesome/free-solid-svg-icons'
// import { Tab, TabView } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ButtonPage from './pages/buttonPage';
import CallPage from './pages/callPage';
import LocationPage from './pages/locationPage';
import TextPage from './pages/textPage';
import ContactsPage from './pages/contactsPage';

const Tab = createMaterialTopTabNavigator();

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case 'button':
      iconName = 'faExclamationTriangle';
      break;
    case 'call':
      iconName = 'faPhoneAlt';
      break;
    case 'text':
      iconName = 'faComment';
      break;
    case 'location':
        iconName = 'faMapMarkerAlt';
        break;
    case 'contacts':
      iconName = 'faWrench';
      break;
    default:
      break;
  }
  return <FontAwesomeIcon icon={iconName} size={40} color={color} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => screenOptions(route, color),
        })}>
        <Tab.Screen name="button" component={ButtonPage}/>
        <Tab.Screen name="call" component={CallPage}/>
        <Tab.Screen name="text" component={TextPage}/>
        <Tab.Screen name="location" component={LocationPage}/>
        <Tab.Screen name="contacts" component={ContactsPage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );


  // const [index, setIndex] = useState(0)
  // return (
  //   <div className="App">
  //     <View style={{justifyContent: "space-evenly"}}>
  //       <Text style={styles.title}>Safety App</Text>
  //       <Tab value={index} onChange={setIndex}>
  //         <Tab.Item
  //           style={styles.tab}
  //           icon={<FontAwesomeIcon icon={faExclamationTriangle} size={40} color={"black"} />}>
  //           {/* // onPress={() => Alert.alert('pressed')} */}
  //         </Tab.Item>
  //         <Tab.Item style={styles.tab} icon={<FontAwesomeIcon icon={faPhoneAlt} size={40} color={"black"} />} />
  //         <Tab.Item style={styles.tab} icon={<FontAwesomeIcon icon={faComment} size={40} color={"black"} />}/>
  //         <Tab.Item style={styles.tab} icon={<FontAwesomeIcon icon={faMapMarkerAlt} size={40} color={"black"} />}/>
  //         <Tab.Item style={styles.tab} icon={<FontAwesomeIcon icon={faWrench} size={40} color={"black"} />}/>
  //       </Tab>
  //     </View>
  //   </div>
  // );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight:'bold',
    fontSize: 33,
    textAlign: 'center',
    color: '#a6a6a6',
    paddingBottom: '5vh',
    paddingTop: '5vh'
  },
  tab: {
    // backgroundColor: '#afafaf',
    //width: '80%',
    alignContent:'center'
  }
});

export default App;
