import { StatusBar } from 'expo-status-bar';
import { FlatList, ImageBackground, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import List from './List';
import Maps from './maps';
import Details from './Details';
import Loading from './Loading';
import Type from './Type';


export default function App() {


  // const [arrayForSectionlist,setArrayForSectionList] = useState();
  
  //   const uniqueCountry = [];


  //  useLayoutEffect(()=>{
  //   setArrayForSectionList(
  //     array
  //     .map((match,index,arr)=>{
  //       if(!uniqueCountry.includes(match.country)){
  //         const tempArray = arr.filter((element)=>{
  //           return element.country == match.country;
  //         })
  //         const obj = {

  //           Country: match.country,

  //           data: tempArray
  //         }
  //         uniqueCountry.push(match.country);
  //         return obj;
  //       }
  //     })
  //     .filter((element)=>{
  //       return element != null;
  //     })
  //   )
  //   console.log(arrayForSectionlist)
  //  },[])
const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Loading'>
      <Stack.Screen
        name = "Loading"
        component={Loading}
        options ={{
          header: ()=> null
        }}
        />
        <Stack.Screen
        name = "Lists"
        component = {List}
        options ={{
          header: ()=> null
        }}
        />
        <Stack.Screen
        name = "Location"
        component = {Maps}
        />
        <Stack.Screen
        name = "Details"
        component={Details}
        />
        <Stack.Screen
        name = "type"
        component={Type}
        />

        
      </Stack.Navigator>

    </NavigationContainer>
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
  
});
