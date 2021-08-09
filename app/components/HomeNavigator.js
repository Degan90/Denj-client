import React from "react";
import {createNativeStackNavigator } from "@react-navigation/native-stack"
import ListingScreen from "../screens/ListingScreen";
import ListingDetailScreen from "./ListingDetailScreen";
import HomeScreen from "../screens/HomeScreen";


const Stack = createNativeStackNavigator();

function HomeNavigator(props) {
    return (
       <Stack.Navigator>
           <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
           <Stack.Screen options={{ headerShown: false }} name="ListingDetailScreen" component={ListingDetailScreen} />
       </Stack.Navigator>
    );
}

export default HomeNavigator;