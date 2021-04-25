import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';


export const FinAppScreen = ({navigation}) => { 
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <TouchableHighlight onPress={() => navigation.goBack()}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name="arrow-back-circle" size={40} color="#4C67F6"/>
                </View>
            </TouchableHighlight>

            <Text style={styles.header}>Requested amount of aid:</Text>
            {/* Fixed size */}
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: 5}}>
                    <TextInput
                        style={styles.moneyInput}
                        // onChangeText={onChangeText}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.text}
                        placeholder="$"
                    />
                </View>
            </View>

            <Text style={styles.header}>Provide justification on why you need the money:</Text>

            <View style={styles.inputContainer}>
                <View style={{paddingVertical: 5}}>
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeText}
                    />
                </View>
            </View>
            <Text style={styles.header}>Attach Documents</Text>
            <Text style={styles.mainText}>Please provide the following documents:</Text>
            {/* Insert upload docs here */}

            <View style={styles.buttonContainer, {display: 'flex', flexDirection: 'row'}}>
                {/* put buttons next to each other */}
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.buttonSaveText}>SAVE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.buttonSubmitText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
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
        textAlign: 'left',
        fontSize: 16
    }, 

    buttonContainer: {
        // display: 'flex',
        paddingHorizontal: 50,
        paddingVertical: 20,
        justifyContent: 'center',
        justifyContent: 'space-between'
    },

    saveButton: {
        // fontFamily:'Oxygen-Bold', 
        backgroundColor:"#4C67F6",
        padding: 10, 
        width: 120,
        height: 50,
        alignContent: 'space-between',
        // flexBasis: 60
        // alignSelf: 'auto'
    },

    buttonSaveText: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },

    submitButton: {
        // fontFamily:'Oxygen-Bold', 
        backgroundColor:"#4C67F6",
        padding: 10, 
        width: 120,
        height: 50,
        alignContent: 'space-between',
        // flexBasis: 60
    },

    buttonSubmitText: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },

    inputContainer: {
        marginHorizontal: 50,
        marginVertical: 10,
    },

    input: {
        height: 125,
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
