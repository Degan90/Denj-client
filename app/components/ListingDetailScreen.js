import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ListItem from "./ListItem";

function ListingDetailScreen({ route }) {
  const detail = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: detail.image }} />
      <Text style={styles.text}>Category: {detail.category}</Text>
      <Text style={styles.text}>Must Have Gears: {detail.gears}</Text>
      <Text style={styles.text}>Description: {detail.caption}</Text>
      <Text style={styles.text}>Location:{detail.location}</Text>
      <Text style={styles.text}>Discoverer:{detail.discoverer}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  text: {
    fontSize: 20,
    padding: 20,
    fontFamily: "Avenir",
    fontWeight: "bold",
    color: "black",
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailScreen;
