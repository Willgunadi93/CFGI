import * as React from 'react';
import { View, Text, StyleSheet,  TouchableOpacity,Image } from "react-native";
import { AuthContext } from '../screens/context';
import { Card,ListItem, Button, Icon } from "react-native-elements";
import { ScreenContainer } from 'react-native-screens';


 export const HomeScreen = ({navigation}) => { 
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.inRow}> 
                <Image style={{width: 50, height: 50, top: 60, left: 20,right: 20}} source={require("../assets/img/CFGInews.png")}/>
                <Image style={{width: 170, height: 35, top: 60,left: 70,right: 20}} source={require("../assets/img/logo-full.png")}/>
                <Image style={{width: 40, height: 40, top: 60, left: 130,right: 20}} source={require("../assets/img/profile.png")}/>
            </View>
            <View style={{top: 100}}>
                <Text style={styles.mainText}>Upcomming Appointments</Text>
            
                <TouchableOpacity  onPress={() => Actions.Screen()}>
                <Card name="card" style={styles.cardLayout} pointerEvents="none">
                    <Image style={{width: 30, height: 30}} source={require("../assets/img/attorney.png")} />         
                    <Text >Attorney: Toby Renolds{"\n"}Starting @ 7:00 AM - May 8, 2019 </Text>
                    <Icon name='RightOutlined'  type='antdesign'/>
                </Card>
                </TouchableOpacity>
                
                <Text style={styles.mainText}>Saved Financial Forms</Text>
                
                <TouchableOpacity  onPress={() => Actions.Screen()}>
                <Card name="card" style={styles.cardLayout} pointerEvents="none">
                <Text style={{ color: 'red', textAlign: 'right', marginTop: -5, textDecorationLine: 'underline'}}>Delete draft</Text>
                    <Image style={{width: 30, height: 30}} source={require("../assets/img/notSubmittedFin.png")} />         
                    <Text >Status: not yet submitted{"\n"}Submitted at 7:00 AM - May 8, 2019 </Text>
                </Card>
                </TouchableOpacity>
            </View>
   </ScreenContainer>
    );
  }


  const styles = StyleSheet.create({   
    inRow: {
        flexDirection: 'row',
      },

    img: {
        paddingLeft: 100,
        paddingRight: 100,
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
        //flexDirection: 'row',
        //flexWrap: 'wrap',
        width:350,
        height:50,
        justifyContent: 'flex-start',
        top: 20,
        bottom: 20,
    },

});
