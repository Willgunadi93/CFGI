//profile
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from "react-native";
import { AuthContext } from '../screens/context';
import { Card,ListItem, Icon } from "react-native-elements";
import { ScreenContainer } from 'react-native-screens';


// export const SignIn = ({ navigation}) => { 
 export const ProfileScreen = ({ navigation, route}) => { 
    // const { signIn } = React.useContext(AuthContext);
    return (
        <ScreenContainer style={styles.inCol}>
            <TouchableOpacity  onPress={() => Actions.Screen()}>
                <Image style={{top: 50, left: 20, width: 50, height: 50}} source={require("../assets/img/backbutton.png")}/>
            </TouchableOpacity>

            <View style={styles.userContainer}>
                <Image style={{width: 120, height: 120}} source={require("../assets/img/user.png")}/>
                <Text style={styles.mainText}>User Name{"\n"}Email: XXXXXXXX</Text>
            </View>

            <View style={{top: 150}}>
                <TouchableOpacity  onPress={() => Actions.Screen()}>
                    <Card name="card" style={styles.cardLayout} pointerEvents="none">        
                        <Text >Change Email Address</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => Actions.Screen()}>
                    <Card name="card" style={styles.cardLayout} pointerEvents="none">        
                        <Text >Reset Password</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => Actions.Screen()}>
                    <Card name="card" style={styles.cardLayout} pointerEvents="none">        
                        <Text >Update Username</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => Actions.Screen()}>
                    <Card name="card" style={styles.cardLayout} pointerEvents="none">        
                        <Text >Regulat Login Devices</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => Actions.Screen()}>
                    <Card name="card" style={styles.cardLayout} pointerEvents="none">        
                        <Text >System Language Preferences</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => Actions.Screen()}>
                    <Card name="card" style={styles.cardLayout} pointerEvents="none">        
                        <Text style={{color: "red"}}>Log Out</Text>
                    </Card>
                </TouchableOpacity>
            </View>
   </ScreenContainer>
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
      },

    cardLayout: {
        //flexDirection: 'row',
        //flexWrap: 'wrap',
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