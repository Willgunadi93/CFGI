import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';


export const FinAppScreen = ({navigation}) => { 
    return (
        <ScrollView contentContainerStyle={styles.container}>

            {/* <TouchableHighlight onPress={() => navigation.goBack()}>
                <View style={styles.backButtonContainer}>
                    <Ionicons name="arrow-back-circle" size={40} color="#4C67F6"/>
                </View>
            </TouchableHighlight> */}

            <Text style={styles.header}>Requested amount of aid:</Text>
            {/* Fixed size */}
            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style={styles.moneyInput}
                        // onChangeText={onChangeText}
                        // onChangeText={(text) => {this.setState({text});}}
                        // value={this.state.inputValue}
                        placeholder="$"
                        // multiline onChange={(event) => this.onChangeText(event)}
                        // onChange={(event) =>
                        //     this.onChangeText(event)
                        //   }
                        //   onContentSizeChange={(event) => {
                        //     this.setState({ height: event.nativeEvent.contentSize.height })
                        //   }}
                    />
                </View>
            </View>

            <Text style={styles.header}>Provide justification on why you need the money:</Text>

            <View style={styles.inputContainer}>
                <View style={{paddingVertical: hp('1%')}}>
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeText}
                    />
                </View>
            </View>
            <Text style={styles.header}>Attach Documents</Text>
            <Text style={styles.mainText}>Please provide the following documents:</Text>
            {/* Insert upload docs here */}

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.buttonSaveText}>SAVE</Text>
                </TouchableOpacity>
                <View style={styles.space}></View>
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

    backButtonContainer: {
        flexDirection: 'row', 
        alignItems: 'flex-start',
        paddingRight: wp('67%')
    },
    

    header: {
        fontSize: 25,
        textAlign: 'left', 
        fontWeight: 'bold',
        paddingLeft: wp('13%'),
        paddingRight: wp('13%'),
        paddingTop: hp('4%'),
        color: '#3F3356'
    },

    mainText: {
        textAlign: 'left',
        fontSize: 16
    }, 

    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: hp('2%'),
        justifyContent: 'space-around'
    },

    saveButton: {
        // fontFamily:'Oxygen-Bold', 
        backgroundColor:"#4C67F6",
        padding: 10, 
        width: wp('30.6%'),
        height: hp('6.5%'),
        alignContent: 'space-between',
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
        width: wp('30.6%'),
        height: hp('6.5%'),
        alignContent: 'space-between',
    },

    buttonSubmitText: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },

    inputContainer: {
        marginHorizontal: hp('6.5%'),
        marginVertical: wp('1%'),
    },

    // make new lines when text reaches end of box
    input: {
        height: hp('20%'),
        width: wp('76%'),
        padding: wp('3%'),
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA'
      },

    // make new lines when text reaches end of box
    moneyInput: {
        height: hp('5%'),
        width: wp('76%'),
        padding: wp('3%'),
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#DADADA',
      },

      space: {
          padding: wp('2%')
      }
});
