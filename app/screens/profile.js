//profile
import * as React from 'react';
import { View, Text, ScrollView,StyleSheet, TouchableOpacity, Button, Image } from "react-native";
import { AuthContext } from '../screens/context';
import { Card,ListItem, Icon } from "react-native-elements";
import { ScreenContainer } from 'react-native-screens';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen';

/*
This is the user profile page. Most functionalities listed in the cards below
are currently not within the scope of our project. 
*/
 export const ProfileScreen = ({ navigation, route}) => { 
    return (
        <ScrollView>
        <ScreenContainer style={styles.inCol}>
           {/* user information */}
            <View style={styles.userContainer}>
                <Text style={styles.mainText}>User Name{"\n"}Email: XXXXXXXX</Text>
            </View>

            {/* settings options */}
            <View style={{top: 150,}}>
            <TouchableOpacity  onPress={() => navigation.navigate("SignIn")}>
                    <Card name="card" style={styles.cardLayout} pointerEvents="none">        
                        <Text style={{color: "red"}}>Log Out</Text>
                    </Card>
            </TouchableOpacity>
                    <Text style={{top: 50, fontWeight:'bold',alignSelf:'center'}}>More features coming soon!</Text>
            </View>
        </ScreenContainer>
        <View style={{padding:50}}></View> 
   </ScrollView>
    );
  }

  const styles = StyleSheet.create({        
    userContainer: {
      top: 100,
      left: 35,
      flexDirection: 'row',
      justifyContent: 'center',
        alignContent: 'center',
    },

    inCol: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
      },
    
    cardLayout: {
        justifyContent: 'flex-start',
    },

    mainText: {
        color: "#3F3356",
        fontSize: 25,
        paddingLeft: 10,
        paddingRight: 80,
        paddingTop: 50, 
        paddingBottom: 30
    }, 
});