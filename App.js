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
import { JobScreen, LegalScreen, DonateScreen} from './app/screens/screens.js';
import {FinScreen } from './app/screens/financial.js';
import { FinAppScreen } from './app/screens/FinDocScreen.js';
import { FinAppConfirmationScreen } from './app/screens/FinAppConfirmationScreen';
import { termsAndConditions } from './app/screens/termsAndConditions';

//Stephanie's Edit
import { AppointmentScreen} from './app/screens/appointment.js';
import { CalendlyScreen  } from './app/screens/legalCard.js';
import CFGIHeader from './app/screens/cfgiHeader.js'
// Used to authenticate the user's credentials so they can have access to the app
import { AuthContext } from './app/screens/context';
// Import sign in and create account
import {SignIn, CreateAccount, ForgotPassword, ResetPassword} from './app/screens/signin.js';
// Icons used for our bottom navigation bar
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'     //connects the server to the front end

// Globally defining our bottom navigation bar and our system hierarchy stack
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack hierarchy starting from the home screen, HomeScreen component is the top of the hierarchy and 
// leads to every other component

import { Entypo } from '@expo/vector-icons'; 
import {TouchableOpacity} from "react-native"


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

  function HomeStack({navigation}) {
    return (
      <Stack.Navigator
      //Header for Stack
      screenOptions={{
        headerStyle:{
          height: 85,
          backgroundColor:"#F7F5F9"
        },
        headerTitle: () => <CFGIHeader/>,
        headerTitleContainerStyle:{
          left:0,
          right:0
        },
        headerTintColor: '#459EFF',
        headerRight: () => 
        (<TouchableOpacity onPress={() => setUserToken(null)}>
          <Ionicons name="md-exit-outline" size={26} color="black" style={{paddingRight:15}}/>
        </TouchableOpacity>)
      }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        {/* Profile */}
        <Stack.Screen 
          name="Profile"
          component={ProfileScreen}
        />
        {/* retun to signIn */}
      </Stack.Navigator>
    )
  }
  
  // Stack that defines job hierarchy, all components related to jobs are listed here
  function JobStack() {
    return (
      <Stack.Navigator
      //Header for Stack
      screenOptions={{
        headerStyle:{
          height: 85,
          backgroundColor:"#F7F5F9"
        },
        headerTitle: () => <CFGIHeader/>,
        headerTitleContainerStyle:{
          left:0,
          right:0
        },
        headerTintColor: '#459EFF',
        headerRight: () => 
        (<TouchableOpacity onPress={() => setUserToken(null)}>
          <Ionicons name="md-exit-outline" size={26} color="black" style={{paddingRight:15}}/>
        </TouchableOpacity>)
      }}
      >
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
      <Stack.Navigator
      //Header for Stack
      screenOptions={{
        headerStyle:{
          height: 85,
          backgroundColor:"#F7F5F9"
        },
        headerTitle: () => <CFGIHeader/>,
        headerTitleContainerStyle:{
          left:0,
          right:0
        },
        headerTintColor: '#459EFF',
        headerRight: () => 
        (<TouchableOpacity onPress={() => setUserToken(null)}>
          <Ionicons name="md-exit-outline" size={26} color="black" style={{paddingRight:15}}/>
        </TouchableOpacity>)
      }}>
        {/* Landing page */}
        {/* <Stack.Screen
          name="Legal"
          component={LegalScreen}
        /> */}
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
      <Stack.Navigator
      //Header for Stack
      screenOptions={{
        headerStyle:{
          height: 85,
          backgroundColor:"#F7F5F9"
        },
        headerTitle: () => <CFGIHeader/>,
        headerTitleContainerStyle:{
          left:0,
          right:0
        },
        headerTintColor: '#459EFF',
        headerRight: () => 
        (<TouchableOpacity onPress={() => setUserToken(null)}>
          <Ionicons name="md-exit-outline" size={26} color="black" style={{paddingRight:15}}/>
        </TouchableOpacity>)
      }}>
        {/* Landing page */}
        <Stack.Screen 
          name="Financial"
          component={FinScreen}
        />
        <Stack.Screen
          name="termsAndConditions"
          component={termsAndConditions}
        />
        {/* Actual application */}
        <Stack.Screen
          name="FinDocs"
          component={FinAppScreen}
        />
        
        <Stack.Screen
          name="FinAppConfirmation"
          component={FinAppConfirmationScreen}
        />
      </Stack.Navigator>
    )
  }
  
  // Stack that defines donation hierarchy, all components related to donation are listed here
  function DonateStack() {
    return (
      <Stack.Navigator
      // Header for Stack
      screenOptions={{
        headerStyle:{
          height: 85,
          backgroundColor:"#F7F5F9"
        },
        headerTitle: () => <CFGIHeader/>,
        headerTitleContainerStyle:{
          left:0,
          right:0
        },
        headerTintColor: '#459EFF',
        headerRight: () => 
        (<TouchableOpacity onPress={() => setUserToken(null)}>
          <Ionicons name="md-exit-outline" size={26} color="black" style={{paddingRight:15}}/>
        </TouchableOpacity>)
      }} >
        {/* Landing page */}
        <Stack.Screen 
          name="Donate"
          component={DonateScreen}
        />
        {/* Add the actual donation screen here */}
      </Stack.Navigator>
    )
  }
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
      <Stack.Navigator 
      screenOptions={{
        headerStyle:{
          height: 85,
          backgroundColor:"#F7F5F9"
        },
        headerTintColor: '#459EFF'
      }}>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerTitle:null}}></Stack.Screen> 
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerTitle:null}}></Stack.Screen> 
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerTitle:null}}></Stack.Screen>
    </Stack.Navigator>
     )}
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
