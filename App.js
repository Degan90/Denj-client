import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  ImagePickerIOS,
  StyleSheet,
  Text,
  View,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListDenj from "./app/components/ListDenj";
import cumberland from "./app/assets/cumberland.jpg";
import ListingDetailScreen from "./app/components/ListingDetailScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import NewList from "./app/screens/NewList";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import AppButton from "./app/components/AppButton";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppNavigator from "./app/components/AppNavigator";
import HomeScreen from "./app/screens/HomeScreen";
import AuthNavigator from "./app/components/AuthNavigator";
import AuthContext from "./app/auth/context";

export default function App() {
  const [user, setUser] = useState();



  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <ListingDetailScreen />
    // <MessageScreen />
    // <AccountScreen />
    // <ListingScreen />
    // <HomeScreen/>

    // <LoginScreen  handleSetLoggedIn={handleSetLoggedIn} />
    // <SignUpScreen />
    // <NewList />
    // <NavigationContainer>
    //   <AuthNavigator/>
    // </NavigationContainer>

    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
