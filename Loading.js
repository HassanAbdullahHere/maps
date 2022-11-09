import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import {Image, FlatList, ImageBackground, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function Loading({navigation,route}) {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Lists')
        },3000)

    },[])

return (
    <View style={styles.container}>
    <ImageBackground source={require("./assets/b.png")} resizeMode="cover" style={styles.image}>
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
