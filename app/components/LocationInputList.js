import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function LocationInputList() {
  const [locations, setLocations] = useState();
  // const [errorMsg, setErrorMsg] = useState(null);

  const requestPermission = async () => {
    const { granted } = await Location.requestPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const handleAdd = (spot) => {
    setLocations([...locations, spot]);
  };

  const getLocation = async () => {
    try {
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocations({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  // const selectLocation = async () => {
  //   try {
  //     const result = await Location.geocodeAsync();
  //     console.log(result)
  //     setLocations(result)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleRemove = (spot) => {
  //   setLocations(locations.filter((location) => location !== spot));
  // };



  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.geocodeAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  return (
    
    //   <Text style={styles.paragraph}>{text}</Text>
    
    <TouchableWithoutFeedback onPress={getLocation} >
    <View style={styles.container}>
    <MaterialCommunityIcons
            color="gray"
            name="navigation"
            size={40}
          />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: 'lightgray',
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    marginVertical: 10,
    overflow: "hidden",
    width: 200,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
