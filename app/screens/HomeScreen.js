import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Linking } from "react-native";
import ListDenj from "../components/ListDenj";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";


function HomeScreen({ navigation }) {
  const [denjs, setDenjs] = useState([]);

  const getDenjPlaces = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/denjs/");
      const data = await response.json();
      setDenjs(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDenjPlaces();
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={denjs}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <ListDenj
            name={item.name}
            image={item.image}
            tips={item.tips}
            location={item.State}
            description={item.description}
            created={item.created}
            onPress={() => navigation.navigate("ListingDetailScreen", item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "whitesmoke",
  },
});
export default HomeScreen;
