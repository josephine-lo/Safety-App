import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const TextPage = () => {
  return(
  <View style={styles.container}>
    <Text style={styles.text}>this is the text page</Text>
  </View>
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
