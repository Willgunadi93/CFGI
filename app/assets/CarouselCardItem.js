import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 180
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

//testing
export const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const CarouselCardItem = ({ item, index }) => {
  return (
    //   <View style={{height: viewportHeight}}>
        <View style={styles.container} key={index}>
        <Image
            source={item.imageUrl}
            style={styles.image}
        />
        </View>
    // </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: viewportHeight,
    backgroundColor: 'white',
    borderRadius: 8,
    width: viewportWidth,
    //paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: viewportWidth,
    height: viewportHeight,
  }
//   header: {
//     color: "#222",
//     fontSize: 28,
//     fontWeight: "bold",
//     paddingLeft: 20,
//     paddingTop: 20
//   },
//   body: {
//     color: "#222",
//     fontSize: 18,
//     paddingLeft: 20,
//     paddingLeft: 20,
//     paddingRight: 20
//   }
})

export default CarouselCardItem