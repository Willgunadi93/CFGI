//import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';


import WelcomeScreen from './app/screens/WelcomeScreen';
import { SafeAreaView, StyleSheet } from 'react-native'
import CarouselCards from './app/assets/CarouselCards'

export default function App() {
  return  (
    <SafeAreaView style={styles.container}>
      <CarouselCards />
    </SafeAreaView>
  );
    // <View style={styles.container}>
    //   <Text>CFGI Home Page</Text>
    //   <StatusBar style="auto" />
    // </View>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3bffa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
