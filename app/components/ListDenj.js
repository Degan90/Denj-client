import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListDenj({ name, image, onPress }) {
  return (
    <Swipeable>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.place}>
          {/* <ImageInputList name="images" /> */}
          <Image style={styles.image} source={{uri:image}} />
          <Text style={styles.text}>{name}</Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  place: {
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  text: {
    fontSize: 20,
    padding: 20,
    fontFamily: "Avenir",
    fontWeight: "bold",
    color: "black",
  },
});
export default ListDenj;
