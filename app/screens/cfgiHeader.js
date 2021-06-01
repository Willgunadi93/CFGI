import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default function CFGIHeader (){
    return (
    <View  style={styles.container}>
        <Image style={{flex: 1, resizeMode:"contain"}}source={require('../assets/img/Screenslogo.png')}/>
    </View>
    );
}

const styles=StyleSheet.create({
    container: {
        // width: "100%",
        // height: "100%",
        flexDirection: "row",
        alignContent:"center",
        justifyContent:"center"
    }
})