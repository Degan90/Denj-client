import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import React from 'react';
import AccountScreen from "../screens/AccountScreen";
import ListingScreen from "../screens/ListingScreen";
import NewList from "../screens/NewList";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import HomeNavigator from "./HomeNavigator";
import AccountNavigator from "./AccountNavigator";
import {StyleSheet} from "react-native"



const Tab = createBottomTabNavigator();
function AppNavigator() {
    return (
      <Tab.Navigator >
          <Tab.Screen  name="Home" component={HomeNavigator}  options={{
           tabBarIcon:({color}) => <MaterialCommunityIcons name="campfire" size={30} color={color}/>}} />
          <Tab.Screen name="Add" component={NewList} options={{
           tabBarIcon:({color}) => <MaterialCommunityIcons name="plus-circle" size={30} color={color}/>}} />
          <Tab.Screen name="Account" component={AccountNavigator} options={{
           tabBarIcon:({color}) => <MaterialCommunityIcons name="account" size={30} color={color}/>}} />
      </Tab.Navigator>
    );
}

export default AppNavigator;