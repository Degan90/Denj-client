import React from "react";
import { Image, View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ListItem from "./ListItem";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListingDetailScreen({ route }) {
  const detail = route.params;
  return (
    <Swipeable>
      <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: detail.image }} />
        <View style={styles.each}>
          <Text style={styles.title}>Category: </Text>
          <Text style={styles.text}>{detail.category}</Text>
        </View>
        <View style={styles.each}>
          <Text style={styles.title}>Place Name: </Text>
          <Text style={styles.text}>{detail.name}</Text>
        </View>
        <View style={styles.each}>
          <Text style={styles.title}>Country/State: </Text>
          <Text style={styles.text}>{detail.state}</Text>
        </View>
        <View style={styles.each}>
          <Text style={styles.title}>Description:: </Text>
          <Text style={styles.text}>{detail.caption}</Text>
        </View>

        <View style={styles.each}>
          <Text style={styles.title}>Must Have Gears:</Text>
          <Text style={styles.text}>{detail.gears}</Text>
        </View>
        <View style={styles.each}>
          <Text style={styles.title}>Discoverer: </Text>
          <Text style={styles.text}>{detail.discoverer}</Text>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
  },
  each: {
    marginTop: 10,
    flexDirection: "row",
    width:"80%",
    padding:10
  },
  text: {
    fontSize: 15,

    fontFamily: "Avenir",
    fontWeight: "bold",
    color: "black",
  },
  title: {
    fontSize: 20,

    fontFamily: "Avenir",
    fontWeight: "bold",
    color: "green",
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailScreen;
