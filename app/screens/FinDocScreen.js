import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from "react-native";
import { AuthContext } from '../screens/context';
import { ScreenContainer } from 'react-native-screens';
import Ionicons from 'react-native-vector-icons/Ionicons';


// const authContext = React.useMemo(() => {
//     return {
//       signIn: () => {
//         //isLoading(false);
//         setUserToken('asdf');
//       },
//       signUp: () => {
//         //isLoading(false);
//         setUserToken('asdf');
//       },
//       signOut: () => {
//         //isLoading(false);
//         setUserToken(null);
//       }
//     };
//   }, []);


export const FinAppScreen = () => { 
    const [onChangeText] = React.useState(null);
    return (
        <ScreenContainer style={styles.container}>

{/* <View style={{justiftyContent:"center", alignItems:"center"}}>
   <Icon>
</View> */}
            {/* <View style={styles.back}> */}
                <Ionicons name="arrow-back-circle" size={40} color="#4C67F6" margin='left'></Ionicons>
            {/* </View> */}
            <Text style={styles.header}>Requested amount of aid:</Text>
            {/* Fixed size */}
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: 5}}>
                    <TextInput
                        style={styles.moneyInput}
                        onChangeText={onChangeText}
                        placeholder="$"
                    />
                </View>
            </View>
            {/* fixed size */}
            <Text style={styles.header}>Provide justification on why you need the money:</Text>
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: 5}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                    />
                </View>
            </View>
            <Text style={styles.header}>Attach Documents</Text>
            <Text>Please provide the following documents:</Text>
            <View style={styles.buttonContainer}>
                {/* put buttons next to each other */}
                <Button style={styles.buttonText} title='SAVE AND SUBMIT LATER'/>
                <Button style={styles.buttonText} title='SUBMIT'/>
                {/* <Button titleStyle={styles.buttonText} title='LOGIN' onPress={() => signIn()}/> */}
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

    header: {
        fontSize: 25,
        textAlign: 'left', 
        fontWeight: 'bold',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30, 
        paddingBottom: 5, 
        color: '#3F3356'
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

    inputContainer: {
        marginHorizontal: 50,
        marginVertical: 10,
    },

    input: {
        height: 100,
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA'
      },

    moneyInput: {
        height: 35,
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA'
      },

    // back: {
    //     alignContent: 'left',
    // }

});
