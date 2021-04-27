//about
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { AuthContext } from '../screens/context';
import { Divider } from "react-native-elements";
import { ScreenContainer } from 'react-native-screens';
// importing and using `Carousel`
//import Carousel from './Carousel';


// export const SignIn = ({ navigation}) => { 
 export const AboutScreen = ({ navigation, route}) => { 
    // const { signIn } = React.useContext(AuthContext);
    return (
        <ScrollView>
        <ScreenContainer style={styles.container}>
        
            <View style={styles.inCol}>
                <Image style={{width: 360, height: 75,top: 100, left: 20}} source={require("../assets/img/logo-full.png")}/>
                <Text style={{top:145, fontSize: 26,fontWeight: 'bold'}}>WHAT'S NEW</Text>
                <Image style={{ width: 410, height: 460,top: 177}} source={require("../assets/img/builtInAmerica.png")}/>
            </View>


            <View style={{top: 220, alignContent: 'right'}}>
                <Text style={styles.h1}>ABOUT US</Text>
                <Image style={styles.yellowLine} source={require("../assets/img/yellowLine.png")}/>
                <Text style={styles.h2}>What We Do</Text>
                <Text style={styles.mainText}>International students are struggling{"\n"}{"\n"}
                            with all the recent uncertainty around{"\n"}{"\n"}policy changes 
                            and the threat of{"\n"}{"\n"}deportation, many don’t know where to{"\n"}turn.{"\n"}{"\n"}{"\n"}
                            We are a non-profit organization that{"\n"}{"\n"}provides a list of companies that hire{"\n"}{"\n"}
                            foreign nationals. We offer qualifying{"\n"}{"\n"}students need-based financial{"\n"}{"\n"}assistance,
                            an online networking{"\n"}{"\n"}community in addition to volunteering{"\n"}{"\n"}opportunities to gain
                            work experience.*</Text>
            </View>

            <View style={{top:300, alignContent: 'right'}}>
                <Text style={styles.h1}>MEET</Text>
                <Image style={styles.yellowLine} source={require("../assets/img/yellowLine.png")}/>
                <Text style={styles.h2}>The Founders</Text>
                <Image style={styles.fullLenImg} source={require("../assets/img/founders.png")}/>
            </View>
           
        </ScreenContainer>
        <View style={{padding:200}}></View>
        </ScrollView> 
    );
  }

  const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#F7F5F9',
        alignItems: 'center',
        justifyContent: 'center',
      },       
    header: {
      top: 50,
      left: 35,
      flexDirection: 'column',
    },

    h1: {
        color: 'pink', fontSize: 36, textAlign: 'right', right: 15,
    },

    h2: {
        top: 5, fontSize: 36, textAlign: 'right', right: 15, paddingBottom:20,
    },

    yellowLine: {
        width: 210, height: 20, left: 210,
    },
    backbtn: {
        top: 70, left: 20, width: 50, height: 50,
    },

    fullLenImg: {
        width: 410, height: 460,
    },

    inCol: {
        flexDirection: 'column',
      },

    cardLayout: {
        //flexDirection: 'row',
        //flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },

    mainText: { 
        left:20,
        top: 10,
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 50,
        paddingTop: 30, 
        paddingBottom: 30
    }, 
});