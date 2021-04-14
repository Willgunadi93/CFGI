//import
import * as React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from '../screens/context';

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

 