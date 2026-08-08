import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ListDetailScreen from '../screens/ListDetailScreen';
import AddListScreen from '../screens/AddListScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';


 const Tab = createBottomTabNavigator() ;
 const Stack = createStackNavigator() ;

 const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListDetail" component={ListDetailScreen} />
        <Stack.Screen name="AddList" component={AddListScreen} />
    </Stack.Navigator>
 );

 const AppNavigator = () => {
    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color , size }) => {
                let iconName: string;
                if(route.name === 'HomeTab') {
                    iconName = 'home-outline' ;
                } else if (route.name === 'Settings') {
                    iconName = 'settings-outline' ;
                } else {
                    iconName = ' list-outline';
                }
                return <Icon name={iconName} size={size} color={color} />
            },
        })} 
        >
            <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Doin', headerShown: false}} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
 };

 export default AppNavigator;