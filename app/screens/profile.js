//profile
import * as React from 'react';
import { View, Text, ScrollView,StyleSheet, TouchableOpacity, Button, Image } from "react-native";
import { AuthContext } from '../screens/context';
import { Card,ListItem, Icon } from "react-native-elements";
import { ScreenContainer } from 'react-native-screens';

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
                <Image style={{width: 120, height: 120}} source={require("../assets/img/user.png")}/>
                <Text style={styles.mainText}>User Name{"\n"}Email: XXXXXXXX</Text>
            </View>

            {/* settings options */}
            <View style={{top: 150}}>
                    <Card name="card" style={styles.cardLayout} pointerEvents="none">        
                        <Text >Change Email Address</Text>
                    </Card>
               
                    <Card name="card" style={styles.cardLayout} pointerEvents="none">        
                        <Text >Reset Password</Text>
                    </Card>
                    <Card name="card" style={styles.cardLayout} pointerEvents="none">        
                        <Text >Update Username</Text>
                    </Card>
                    <Card name="card" style={styles.cardLayout} pointerEvents="none">        
                        <Text >Regulate Login Devices</Text>
                    </Card>
                    <Card name="card" style={styles.cardLayout} pointerEvents="none">        
                        <Text >System Language Preferences</Text>
                    </Card>
                    <Card name="card" style={styles.cardLayout} pointerEvents="none">        
                        <Text style={{color: "red"}}>Log Out</Text>
                    </Card>
            </View>
        </ScreenContainer>
        <View style={{padding:100}}></View> 
   </ScrollView>
    );
  }

  const styles = StyleSheet.create({        
    userContainer: {
      top: 100,
      left: 35,
      flexDirection: 'row',
    },

    inCol: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#F7F5F9',
      },
    
    cardLayout: {
        justifyContent: 'flex-start',
    },

    mainText: {
        justifyContent: 'center',
        color: "purple",
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 50,
        paddingTop: 30, 
        paddingBottom: 30
    }, 
});