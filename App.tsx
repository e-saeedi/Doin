import React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { Link } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";



function  HomeScreen() {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <Text>HomeScreen</Text>
      <Link screen="Details">go to the details</Link>
      <Button screen="Details">go</Button>
    </View>
  );
}


function DetailScreen() {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
      <Text> detaile page</Text>
    </View>
  )
};


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
    },
    Details: DetailScreen,
  }
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}