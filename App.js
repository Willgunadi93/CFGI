import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Import react navigation
import { NavigationContainer } from '@react-navigation/native'; //container
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //bottom nav
import { createStackNavigator } from '@react-navigation/stack';
//import screens
import {HomeScreen, JobScreen, LegalScreen, FinScreen, DonateScreen} from './app/screens/screens.js';
//import sign in and create account
import {SignIn, CreateAccount} from './app/screens/signin.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';


    //import WelcomeScreen from './app/screens/WelcomeScreen';
    //import { SafeAreaView, StyleSheet } from 'react-native'

    //Carousel homepage. 
    //import CarouselCards from './app/assets/CarouselCards'

//bottom nav
const Tab = createBottomTabNavigator();
//authentication stack
const AuthStack = createStackNavigator();

export default function App() {

  const [userToken, setUserToken] = React.useState("asdf");
  //registering these components are stacks

  return  (
   <NavigationContainer style={styles.container}>
     {userToken ? (
       <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
          // let iconName;
          // let assistIcon;
          if (route.name == "Home") {
            return <Ionicons name="home" size={size} color={color}/>
          }
          else if (route.name == "Jobs") {
            return <Ionicons name="briefcase" size={size} color={color}/>
          }
          else if (route.name == "Legal") {
            return <Ionicons name="people" size={size} color={color}/>
          }
          else if (route.name == "Assistance") {
            return <Icon name={"hand-holding-usd"} size={size} color={color}/>
          }
          else if (route.name == "Donate") {
            return <Ionicons name="gift" size={size} color={color}/>
          }
        },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'black',
        }}
        >
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Jobs" component={JobScreen}></Tab.Screen>
        <Tab.Screen name="Legal" component={LegalScreen}></Tab.Screen>
        <Tab.Screen name="Assistance" component={FinScreen}></Tab.Screen>
        <Tab.Screen name="Donate" component={DonateScreen}></Tab.Screen>
     </Tab.Navigator>
     ) : (
      <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn}></AuthStack.Screen>  
        <AuthStack.Screen name="CreateAccount" component={CreateAccount}></AuthStack.Screen>
    </AuthStack.Navigator>
     )}
     {/* <AuthStack.Navigator>
       <AuthStack.Screen name="SignIn" component={SignIn}></AuthStack.Screen>  
       <AuthStack.Screen name="CreateAccount" component={CreateAccount}></AuthStack.Screen>
     </AuthStack.Navigator> */}
   </NavigationContainer>
    
  );  
}
/* <NavigationContainer>
<Tab.Navigator>
  <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
  <Tab.Screen name="Job" component={JobScreen}></Tab.Screen>
  <Tab.Screen name="Legal" component={LegalScreen}></Tab.Screen>
  <Tab.Screen name="Financial" component={FinScreen}></Tab.Screen>
  <Tab.Screen name="Donate" component={DonateScreen}></Tab.Screen>
</Tab.Navigator>
</NavigationContainer> */


 // <SafeAreaView style={styles.container}>
    //   <WelcomeScreen />
    // </SafeAreaView>

/* <View style={styles.container}>
      <Text>CFGI Landing page / Signup page eventually</Text>
      <StatusBar style="auto" />
      </View> */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3bffa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
