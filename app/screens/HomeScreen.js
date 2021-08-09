import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Linking } from "react-native";
import ListDenj from "../components/ListDenj";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
const listings = [
  {
    id: 1,
    PlaceName: "cumberland Island",
    State: "Georgia",
    image: require("../assets/cumberland.jpg"),
    description: "Very nice for swim",
    tips: "Having bug spray",
  },
  {
    id: 2,
    PlaceName: "Raven Cliff",
    State: "Georgia",
    image: require("../assets/fall.jpg"),

    description: "Very nice place for camp in fall",
    tips: "Having camping gears",
  },
];

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
  // const useApi = (apiFunc) => {
  //   const [data, setData] = useState([]);
  //   const [error, setError] = useState(false);
  //   const [loading, setLoading] = useState(false);

  //   const request = async (...args) => {
  //     setLoading(true);
  //     const response = await apiFunc(...args);
  //     setLoading(false);

  //     setError(!response.ok);
  //     setData(response.data);
  //     return response;
  //   };

  //   return { data, error, loading, request };
  // };

  // const getListingsApi = useApi(listingsApi.getListings);

  // useEffect(() => {
  //   getListingsApi.request();
  // }, []);

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
