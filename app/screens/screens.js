//import
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image, Pressable, TextInput } from "react-native";
import { Card } from "react-native-elements";
import { AuthContext } from '../screens/context';
//import { TextInput } from 'react-native-gesture-handler';
import { ScreenContainer } from 'react-native-screens';

export const HomeScreen = () => {   //home page component

    const { signOut } = React.useContext(AuthContext);
    return (
      <View style={styles.container}>
        <Text>Home page component!</Text>
        <Button title="Sign out" onPress={() => signOut()}/>
      </View>
    );
  }
  
export const JobScreen = () => {   //Jobs page component
    return (
      <ScrollView style={styles.scrollView}>
      <ScreenContainer style={StyleSheet.container}>
      <View style={{paddingVertical: 30, alignItems: 'center'}}>
        <Image style={{marginTop: 10}} source={require('../assets/img/logo-full.png')} />
      </View>

      <View style={{width: 104, height: 29, left: 34, top: 5}}> 
        <Text style={{fontSize: 24, color: "#FF6E00", fontWeight: 'bold', lineHeight: 29}}>CAREER</Text>
      </View>

      <View style={{width: 309, height: 60, left: 36, top: 10}}> 
        <Text style={{fontSize: 24, color: "#3F3356", fontWeight: 'bold', lineHeight: 30}}>Find A Job From Trusted Partners</Text>
      </View>

      <View style={{width: 308, height: 60, left: 37, top: 15}}> 
        <Text style={{fontSize: 13, color: "#000000", lineHeight: 16}}>
          These companies took the CFGI diversity pledge{'\n'}
          and are open to considering sponsorship for the right candidates.
        </Text>
      </View>

      <View style={styles.inputContainer}>
          <View style={{paddingVertical: 5}}>
            <TextInput
                style={styles.input}
                placeholder="          job title, keywords, or company"/>
          </View>
          <View style={{paddingVertical: 5}}>
            <TextInput
                style={styles.input}
                placeholder="          zipcode or city"/>
          </View>
      </View>

      <View style={{width: 153, height: 35, left: 2, top: 30}}>
        <Pressable style={styles.button}>
            <Text style={styles.textStyle}>SEARCH</Text>
        </Pressable>
      </View>

      <View style={{width: 98, height: 42, left: 36, top: 170}}> 
        <Text style={{fontSize: 16, color: "#000000", fontWeight: 'bold'}}>105 Results</Text>
      </View>

      <View style={{top: 150, paddingStart: 22, paddingEnd: 16}}> 
        <Card style={styles.cardLayout} name="card"  pointerEvents="none">
          <Text style={{fontSize: 13, paddingLeft: 193, color: '#3C65CC',  marginBottom: 7, marginTop: -7}} >UI/UX Design </Text>
          <Text style={{fontSize: 16, left: 45, top: -5, fontWeight: 'bold'}} >SaaS Homepage redesign and onboarding updates </Text>
          <Text style={{fontSize: 13, left: 45, color: '#50555C', marginTop: 2}} >Albany, NY </Text>
          <Text style={{fontSize: 11, paddingLeft: 149, color: '#929599', marginBottom: -8, marginTop: 13}} >Posted 51 minnutes ago </Text>
        </Card>
        <Card style={styles.cardLayout} name="card"  pointerEvents="none">
          <Text style={{fontSize: 13, paddingLeft: 132, color: '#3C65CC',  marginBottom: 7, marginTop: -7}} >Information Technology </Text>
          <Text style={{fontSize: 16, left: 45, top: -5, fontWeight: 'bold'}} >Web/app designer required to create web apps </Text>
          <Text style={{fontSize: 13, left: 45, color: '#50555C', marginTop: 2}} >Blackwood, WA </Text>
          <Text style={{fontSize: 11, paddingLeft: 149, color: '#929599', marginBottom: -8, marginTop: 13}} >Posted 51 minnutes ago </Text>
        </Card>
        <Card style={styles.cardLayout} name="card"  pointerEvents="none">
          <Text style={{fontSize: 13, paddingLeft: 193, color: '#3C65CC',  marginBottom: 7, marginTop: -7}} >UI/UX Design </Text>
          <Text style={{fontSize: 16, left: 45, top: -5, fontWeight: 'bold'}} >SaaS Homepage redesign and onboarding updates </Text>
          <Text style={{fontSize: 13, left: 45, color: '#50555C', marginTop: 2}} >Albany, NY </Text>
          <Text style={{fontSize: 11, paddingLeft: 149, color: '#929599', marginBottom: -8, marginTop: 13}} >Posted 51 minnutes ago </Text>
        </Card>
      </View>

      </ScreenContainer>
      </ScrollView>
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
    scrollView: {
      backgroundColor: '#F7F5F9',
    },

    container: {
      flex: 1,
      backgroundColor: '#c3bffa',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button: {
      borderRadius: 10,
      width: 153,
      height: 35,
      left: 110,
      top: 80,
      backgroundColor: "#4C67F6"
    },

    textStyle: {
      color: "#FFFFFF",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 16,
      marginTop: 8
    },

    inputContainer: {
      width: 300,
      height: 36.59,
      left: 36,
      top: 25,
    },
    
    input: {
      height: 40,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: 'white',
      borderColor: '#DADADA',
      fontStyle: 'italic'
    },

    cardLayout: {
      //justifyContent: 'flex-start',
      flexDirection: 'row',
      width: 200,
      height: 100,
    },
});