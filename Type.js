import { StatusBar } from 'expo-status-bar';
import {Image, Button, FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { startTransition, useEffect ,useLayoutEffect,useState} from 'react';




export default function Type({navigation,route}) {

return (
    
<View style = {styles.container}>
    <View style = {styles.con}>
        <Text style={styles.text1}>SELECT </Text>
        <Text style={styles.text1}> THE </Text>
        <Text style={styles.text1}>VIEW TYPE</Text>
    </View>
    
    <View style = {styles.container1}>
    <TouchableOpacity onPress={() => {
            navigation.navigate('Location', {lati: route.params.lat,longi: route.params.lng,type:"hybrid"})
        }}>
            <Image source={require('./assets/s.png')} style={{height: 150, width:100,right:100,top:10 }}></Image>
        <Text style={styles.text3}>SATELLITE</Text>
    </TouchableOpacity>
    </View>
    <View style = {styles.container1}>
    <TouchableOpacity onPress={() => {
            navigation.navigate('Location', {lati: route.params.lat,longi: route.params.lng,type:"standard"})
        }}>
             <Image source={require('./assets/SS.png')} style={{height: 150, width:100,right:100,top:10 }}></Image>
        <Text style={styles.text3}>STANDARD</Text>
    </TouchableOpacity>
    </View>
    <View style = {styles.container1}>
    <TouchableOpacity onPress={() => {
            navigation.navigate('Location', {lati: route.params.lat,longi: route.params.lng,type:"terrain"})
        }}>
            <Image source={require('./assets/t.png')} style={{height: 150, width:100,right:100,top:10 }}></Image>
        <Text style={styles.text3}>TERRAIN</Text>
    </TouchableOpacity>
    </View>
    
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A8891',
    borderRadius: 15,
    borderColor: "#393E46",
    borderWidth: 1,
    justifyContent: "space-between",
  },
  container1: {
    flex: 0.2,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    margin: 20,
    borderWidth: 3,
    borderColor: "#00ABB3"

  },
  con:{
    flex:0.5,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 75,
    borderColor: "#0E5E6F",
    backgroundColor: "white",
    margin: 10,
    borderWidth: 10,

  }
  ,text1:{
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: '#F2E7D5',
    textShadowRadius: 3,
    color: "#393E46"
  },
  text2:{
    fontSize: 18,
    color:"#251B37",
    fontStyle:"italic",
    fontWeight: "300"

  },
  text3:{
    fontSize: 25,
    fontWeight: "800",
    color:"#000",
    bottom:75

  },
  
});
