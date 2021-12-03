//import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faExclamationTriangle, faPhoneAlt, faComment, faMapMarkerAlt, faWrench } from '@fortawesome/free-solid-svg-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ButtonPage from './pages/buttonPage';
import CallPage from './pages/callPage';
import LocationPage from './pages/locationPage';
import TextPage from './pages/textPage';
import ContactsPage from './pages/contactsPage';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Text style={styles.title}>SCU SAFETY TOOLKIT</Text>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarShowLabel: 'false',
            tabBarIndicatorStyle: { backgroundColor: '#811e2d'},
            tabBarShowIcon: 'true',
            tabBarLabelStyle: { color: 'transparent', fontSize: '5'},
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'service')  iconName = faExclamationTriangle;
              else if (route.name === 'call') iconName = faPhoneAlt;
              else if (route.name === 'text') iconName = faComment;
              else if (route.name === 'location') iconName = faMapMarkerAlt;
              else if (route.name === 'contacts') iconName = faWrench;
              else ;

              return <FontAwesomeIcon icon={iconName} size={20} color={color} />;
            },
            tabBarActiveTintColor: '#811e2d',
            tabBarInactiveTintColor: '#b0aa7e',
            tabBarStyle: { backgroundColor: '#dfdbd3', top: '5%', shadowRadius:'5px' },
            tabBarIconStyle: { top: '15%', justifyContent:'center', alignItems:'center' },
          })}>
          <Tab.Screen name="service" component={ButtonPage}/>
          <Tab.Screen name="call" component={CallPage}/>
          <Tab.Screen name="text" component={TextPage}/>
          <Tab.Screen name="location" component={LocationPage}/>
          <Tab.Screen name="contacts" component={ContactsPage}/>

        </Tab.Navigator>

      </NavigationContainer>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f2f0',
  },
  title: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 23,
    textAlign: 'center',
    color: '#811e2d',
    paddingBottom: '6.5%',
    bottom: '-6%',
    letterSpacing: 1.2
  },
  tab: {
    alignContent:'center'
  }
});

export default App;
