import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { AuthContext } from '../screens/context';
import { ScreenContainer } from 'react-native-screens';


// export const SignIn = ({ navigation}) => { 
 export const FinScreen = ({navigation}) => { 
    // const { signIn } = React.useContext(AuthContext);
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.container}>
                <Image source={require("../assets/img/logo-full.png")}
                style={styles.img}/>
                <Text style={styles.mainText}>For any student in need of financial assistance for amenities 
                    such as transportation fees, food, and emergency housing, we have an
                    application for financial assistance thanks to the generiosity of our donors*
                </Text>
                <Text style={styles.specialText}>*Terms and conditions apply</Text>
            </View>

            <View style={styles.buttonContainer}>
            <Button style={styles.buttonText} title='APPLY NOW'/>
            {/* <Button titleStyle={styles.buttonText} title='LOGIN' onPress={() => signIn()}/> */}
            <Text style={{ color: 'blue', textAlign: 'right', paddingTop: 15, textDecorationLine: 'underline'}}>TERMS AND CONDITIONS</Text>
        </View>
   </ScreenContainer>
    );
  }


  const styles = StyleSheet.create({        
    container: {
      flex: 1,
      backgroundColor: '#F7F5F9',
      alignItems: 'center',
      justifyContent: 'center',
    },

    img: {
    },

    mainText: {
        justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30, 
        paddingBottom: 30
    }, 

    specialText: {
        // padding: 50,
        justifyContent: 'center',
        fontStyle: 'italic',
    }, 

    buttonContainer: {
        paddingHorizontal: 50,
        paddingVertical: 20,
        justifyContent: "center",
    },

    buttonText: {
        // fontFamily:'Oxygen-Bold', 
        fontSize: 14,
    },

});
