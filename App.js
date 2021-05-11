import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Navigation container used for navigating to every single component
import { NavigationContainer } from '@react-navigation/native'; 
// The bottom navigation bar used in our entire app
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
// Used to navigate from page to page, especially when we go from a different component to another component
import { createStackNavigator } from '@react-navigation/stack';
// All of our screens, importing them here so our navigation stack is aware of the system hierarchy
import {HomeScreen } from './app/screens/home.js';
import {ProfileScreen} from './app/screens/profile.js';
import {AboutScreen} from './app/screens/about.js';
import { JobScreen, LegalScreen, DonateScreen, CalendlyScreen } from './app/screens/screens.js';
import {FinScreen } from './app/screens/financial.js';
import { FinAppScreen } from './app/screens/FinDocScreen.js';
//Stephanie's Edit
import { AppointmentScreen } from './app/screens/appointment.js';
// Used to authenticate the user's credentials so they can have access to the app
import { AuthContext } from './app/screens/context';
// Import sign in and create account
import {SignIn, CreateAccount, ForgotPassword, ResetPassword} from './app/screens/signin.js';
// Icons used for our bottom navigation bar
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Globally defining our bottom navigation bar and our system hierarchy stack
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack hierarchy starting from the home screen, HomeScreen component is the top of the hierarchy and 
// leads to every other component
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      {/* Profile */}
      <Stack.Screen 
        name="Profile"
        component={ProfileScreen}
      />
      {/* About */}
      <Stack.Screen
        name="About"
        component={AboutScreen}
      />
    </Stack.Navigator>
  )
}

// Stack that defines job hierarchy, all components related to jobs are listed here
function JobStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={JobScreen}
      />
    </Stack.Navigator>
  )
}

// Stack that defines legal consultation hierarchy, all components related to legal
// are listed here
function LegalStack() {
  return (
    <Stack.Navigator>
      {/* Landing page */}
      <Stack.Screen
        name="Legal"
        component={LegalScreen}
      />
      <Stack.Screen
        name="AppointDocs"
        component={AppointmentScreen}
      />
      <Stack.Screen
        name="calendar"
        component={CalendlyScreen}
      />
    </Stack.Navigator>
  )
}

// Stack that defines financial assistance hierarchy, all components related to financial assistance
// are listed here
function FinStack() {
  return (
    <Stack.Navigator >
      {/* Landing page */}
      <Stack.Screen 
        name="Financial"
        component={FinScreen}
      />
      {/* Actual application */}
      <Stack.Screen
        name="FinDocs"
        component={FinAppScreen}
      />
    </Stack.Navigator>
  )
}

// Stack that defines donation hierarchy, all components related to donation are listed here
function DonateStack() {
  return (
    <Stack.Navigator>
      {/* Landing page */}
      <Stack.Screen 
        name="Donate"
        component={DonateScreen}
      />
      {/* Add the actual donation screen here */}
    </Stack.Navigator>
  )
}


// // make a stack out of all these screens
// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{activeTintColor: 'blue', inactiveTintColor: 'black'}}>
//       <Tab.Screen
//         // Each tab leads to a stack, which has the actual components
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name='home' color={color} size={size}/>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Jobs"
//         component={JobStack}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name='briefcase' color={color} size={size}/>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Legal"
//         component={LegalStack}
//         // onPress={() => this.props.navigation.navigate('LegalScreen')}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name='people' color={color} size={size}/>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Assistance"
//         component={FinStack}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name='hand-holding-usd' color={color} size={size}/>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Donate"
//         component={DonateStack}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name='gift' color={color} size={size}/>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// Export the App component, our "main"
export default function App() {
  
  // These are components related to user authentication  
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  
  // User authentication that is added to thhe authority stack
  // Currently it's all placeholder text
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        //isLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        //isLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        //isLoading(false);
        setUserToken(null);
      }
    };
  }, []);


  // Define the bottom navigation bar by setting icons and colors if the 
  // user has been accepted by the system
  return  (
    <AuthContext.Provider value={authContext}>
   <NavigationContainer style={styles.container}>
     {userToken ? (
       <Tab.Navigator
       initialRouteName="Home"
       tabBarOptions={{keyboardHidesTabBar: true, activeTintColor: 'blue', inactiveTintColor: 'black'}}>
       <Tab.Screen
         // Each tab leads to its respective stack, which 
        //  will lead the user to the actual components
         name="Home"
         component={HomeStack}
         options={{
           tabBarIcon: ({color, size}) => (
             <Ionicons name='home' color={color} size={size}/>
           ),
         }}
       />
       <Tab.Screen
         name="Jobs"
         component={JobStack}
         options={{
           tabBarIcon: ({color, size}) => (
             <Ionicons name='briefcase' color={color} size={size}/>
           ),
         }}
       />
       <Tab.Screen
         name="Legal"
         component={LegalStack}
         // onPress={() => this.props.navigation.navigate('LegalScreen')}
         options={{
           tabBarIcon: ({color, size}) => (
             <Ionicons name='people' color={color} size={size}/>
           ),
         }}
       />
       <Tab.Screen
         name="Assistance"
         component={FinStack}
         options={{
           tabBarIcon: ({color, size}) => (
             <Icon name='hand-holding-usd' color={color} size={size}/>
           ),
         }}
       />
       <Tab.Screen
         name="Donate"
         component={DonateStack}
         options={{
           tabBarIcon: ({color, size}) => (
             <Ionicons name='gift' color={color} size={size}/>
           ),
         }}
       />
     </Tab.Navigator>
     ) : (
      //  If user isn't accepted by the system, they are directed to the stack of 
      // sign up/log in options
      <Stack.Navigator >
        <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}></Stack.Screen> 
        <Stack.Screen name="ResetPassword" component={ResetPassword}></Stack.Screen> 
        <Stack.Screen name="CreateAccount" component={CreateAccount}></Stack.Screen>
    </Stack.Navigator>
     )}
     {/* <Stack.Navigator>
       <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>  
       <Stack.Screen name="CreateAccount" component={CreateAccount}></Stack.Screen>
     </Stack.Navigator> */}
   </NavigationContainer>
   </AuthContext.Provider>
    
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
