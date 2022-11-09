import { StatusBar } from 'expo-status-bar';
import { ImageBackground,FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect ,useLayoutEffect,useState} from 'react';
import arrangedArray from './Arranged';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Maps from './maps';




export default function List({navigation}) {

  const array = arrangedArray;

  const onPressHandler = (item) =>{
    navigation.navigate('Details',{item})
}
  

  return (
    
<View style = {styles.container}>
<ImageBackground source={require("./assets/a.png")} resizeMode="cover" style={styles.image}>
    <SectionList
      sections={array}
      keyExtractor = {(item,index)=>index.toString()}
      renderSectionHeader = {({section:{Country}})=>(
        <View style = {styles.container1}>
          <Text style={styles.text1}>{Country}</Text>
        </View>
      )}
      

      renderItem = {({item})=>(
        <TouchableOpacity 
        onPress={() => {
            navigation.navigate('Details', item)
        }}
        style = {styles.button}
        >
          <Text style={styles.text2}>{item.city}</Text>
        </TouchableOpacity>
      )}
      
    />
    </ImageBackground>
    <StatusBar style="auto"/>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40, 
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 1,
    backgroundColor: '#393E46',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    margin: 10,
    borderColor:"#ffff",
    borderRadius: 75
  },
  button: {
    alignItems: "center",
    backgroundColor: "#256D85",
    margin: 3
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text1:{
    fontSize: 35,
    fontWeight: "bold",
    textShadowColor: 'black',
    textShadowRadius: 3,
    color: "#CDFCF6"
  },
  text2:{
    fontSize: 20,
    fontWeight: "300",
    fontStyle: "italic",
    lineHeight:30,
    letterSpacing: 3,
    color: "#ffff",

  }
});
