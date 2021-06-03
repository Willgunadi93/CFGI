import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default function CFGIHeader (){
    return (
    <View  style={styles.container}>
        <Image style={{width: 150, resizeMode:"contain", alignSelf:'center'}}source={require('../assets/img/Screenslogo.png')}/>
    </View>
    );
}

const styles=StyleSheet.create({
    container: {
        width: "100%",
        height: 85,
        justifyContent:"center"
    }
})