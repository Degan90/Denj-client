import React from "react";
import {createNativeStackNavigator } from "@react-navigation/native-stack"

import AccountScreen from "../screens/AccountScreen";


const Stack = createNativeStackNavigator();

function AccountNavigator(props) {
    return (
       <Stack.Navigator>
           <Stack.Screen  name="account" component={AccountScreen} />
       </Stack.Navigator>
    );
}

export default AccountNavigator;