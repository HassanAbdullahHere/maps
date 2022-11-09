import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { startTransition, useEffect ,useLayoutEffect,useState} from 'react';




export default function Details({navigation,route}) {

return (
    
<View style = {styles.container}>
    <View style = {styles.con}>
        <Text style={styles.text1}>City</Text>
        <Text style={styles.text2}>{route.params.city}</Text>
    </View>
    <View style = {styles.con}>
    <Text style={styles.text1}>Country</Text>
        <Text style={styles.text2}>{route.params.country}</Text>
    </View>
    <View style = {styles.con}>
    <Text style={styles.text1}>POPULATION</Text>
        <Text style={styles.text2}>{route.params.population}</Text>
    </View>
    <View style = {styles.con}>
    <Text style={styles.text1}>ISO</Text>
        <Text style={styles.text2}>{route.params.iso3}</Text>
    </View>
    <View style = {styles.con}>
    <Text style={styles.text1}>ADMIN NAME</Text>
        <Text style={styles.text2}>{route.params.admin_name}</Text>
    </View><View style = {styles.con}>
    <Text style={styles.text1}>CITY ASCII</Text>
        <Text style={styles.text2}>{route.params.city_ascii}</Text>
    </View>
    
    <View style = {styles.container1}>
    <TouchableOpacity onPress={() => {
            navigation.navigate('type', {lat: route.params.lat,lng: route.params.lng})
        }}>
        <Text style={styles.text3}>LOCATION</Text>
    </TouchableOpacity>
    </View>
    
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E4E5',
    borderRadius: 15,
    borderColor: "#393E46",
    borderWidth: 1,
    justifyContent: "space-between",
  },
  container1: {
    flex: 0.5,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    margin: 40,
    borderWidth: 3,
    borderColor: "#00ABB3"

  },
  con:{
    flex:1,
    backgroundColor: "black",
    alignItems: "center",
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
    fontWeight: "bold",
    color:"#00ABB3"

  }
  
});
