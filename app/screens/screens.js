//import
import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";


export const HomeScreen = () => {   //home page component
    return (
      <View style={styles.container}>
        <Text>Home page component!</Text>
      </View>
    );
  }
  
export const JobScreen = () => {   //Jobs page component
    return (
      <View style={styles.container}>
        <Text>Jobs page</Text>
      </View>
    );
  }

  export const LegalScreen = () => {   //Jobs page component
    return (
      <View style={styles.container}>
        <Text>Legal page component</Text>
      </View>
    );
  }
  export const FinScreen = () => {   //Jobs page component
    return (
      <View style={styles.container}>
        <Text>Financial Aid component</Text>
      </View>
    );
  }
  export const DonateScreen = () => {   //Jobs page component
    return (
      <View style={styles.container}>
        <Text>Donate page component</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({        
    container: {
      flex: 1,
      backgroundColor: '#c3bffa',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });