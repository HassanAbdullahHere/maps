import { StatusBar } from 'expo-status-bar';
import { Image,FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect ,useLayoutEffect,useState} from 'react';
import MapView,{PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import FontAwesome5 from "react-native-vector-icons"




export default function Maps({navigation,route}) {
    const [type,setType] = useState("standard")

return (
  
    
    <MapView
    style={styles.map}
    mapType = {route.params.type}
    showsCompass={true}
    showsTraffic= {true}
    showsBuildings={true}
    showsMyLocationButton={true}
    showsUserLocation= {true}
    
    region={{
      latitude: route.params.lati,
      longitude: route.params.longi,
      latitudeDelta: 0.15,
      longitudeDelta: 0.15,
    }}
    >
        <Marker
      coordinate={{
        latitude: route.params.lati,
        longitude: route.params.longi,
      }}
      description={"This is a marker in React Natve"}
      >

      <Image source={require('./assets/marker.png')} style={{height: 50, width:50 }} />

    </Marker>
    </MapView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 0.1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  map: {
    height: "100%",
    width:"100%"
  },
});
