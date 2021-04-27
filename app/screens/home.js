import * as React from 'react';
import { View, Text, StyleSheet,  TouchableOpacity,Image } from "react-native";
import { AuthContext } from '../screens/context';
import { Card,ListItem, Button, Icon } from "react-native-elements";
import { ScreenContainer } from 'react-native-screens';
import {ProfileScreen} from '../screens/profile.js';

 export const HomeScreen = ({navigation}) => { 
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.inRow}> 
                <TouchableOpacity  onPress={() => navigation.navigate("About")}>
                    <Image style={ {width: 55, height: 55, top: 20, left: 10} } source={require("../assets/img/CFGInews.png")}/>
                </TouchableOpacity>
                <Image style={{ paddingLeft: 10, paddingRight: 10,width: 270, height: 55, top: 100,left: 15,right: 20}} source={require("../assets/img/logo-full.png")}/>
                <TouchableOpacity  onPress={() => navigation.navigate("Profile")}>
                <Image style={ {width: 50, height: 50, top: 23, left: 10}}  source={require("../assets/img/profile.png")}/>
                </TouchableOpacity>
            </View>

            <View style={styles.section1}>
                <Text style={styles.h1}>Upcomming Appointments</Text>
            
                <TouchableOpacity  onPress={() => navigation.navigate("Legal")}>
                <Card style={styles.cardLayout} name="card"  pointerEvents="none">
                    <Image style={styles.cardImg} source={require("../assets/img/attorney.png")} />         
                    <Text style={styles.cardTxt} >Attorney: Toby Renolds{"\n"}{"\n"}Starting @ 7:00 AM - May 8, 2019 </Text>
                    <Image  style={styles.cardArrow} source={require("../assets/img/rightArrow.png")} />         
                </Card>
                </TouchableOpacity>
            </View> 

            <View style={styles.section2}>
                <Text style={styles.h1}>Saved Financial Forms</Text>
                
                <TouchableOpacity  onPress={() => navigation.navigate("FinDocs")}>
                <Card name="card" style={styles.cardLayout} pointerEvents="none">
                <Text style={{ color: 'red', textAlign: 'right', marginTop: -2, textDecorationLine: 'underline'}}>Delete draft</Text>
                    <Image style={styles.cardImg} source={require("../assets/img/notSubmittedFin.png")} />         
                    <Text style={styles.cardTxt}>Status: not yet submitted{"\n"}{"\n"}Submitted at 7:00 AM - May 8, 2019 </Text>
                </Card>
                </TouchableOpacity>
            </View>
   </ScreenContainer>
    );
  }


  const styles = StyleSheet.create({   
    inRow: {
        flexDirection: 'row',
        //paddingLeft: 10,
        //paddingRight: 10,
      },

    img: {
        paddingLeft: 100,
        paddingRight: 100,
    },

    cardImg: {
        width: 80, height: 80, top: 25, left:-9,
    },

    cardTxt: {
        fontSize: 16, left: 75, top: -35,
    },

    cardArrow: {
        top: -75, left:320,
    },

    h1: {
         fontSize: 22, fontWeight: 'bold', left: 15,
    },
    
    section1: {
        top: 150, paddingEnd: 20,
    },
    section2: {
        top: 180, paddingEnd: 20,
    },

    container: {
        
      backgroundColor: '#F7F5F9',
     // alignItems: 'center',
      //justifyContent: 'center',
    },

    mainText: {
        color: 'purple',
        paddingTop: 5,
        paddingBottom: 2,
    }, 

    cardLayout: {
        //justifyContent: 'flex-start',
        flexDirection: 'row',
        width: 200,
        height: 100,
    },

});

 //stack nav
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 
 const Stack = createStackNavigator();
 
 const MyStack = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Profile" component={ProfileScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 