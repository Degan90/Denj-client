// import React, { useCallback, useEffect, useState } from "react";
// import { Button, FlatList, StyleSheet,Linking } from "react-native";
// import ListDenj from "../components/ListDenj";
// import Screen from "../components/Screen";



// function ListingScreen({navigation}) {
//   const [listings, setListings] = useState([]);

//   const getDenjPlaces = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/denjs/");
//       const data = await response.json();
//       console.log(data);
//       setListings(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getDenjPlaces();
//   }, []);
//   return (
//     <Screen style={styles.screen}>
//       <FlatList
//         data={listings}
//         keyExtractor={(listing) => listing.id.toString()}
        
//         renderItem={({ item }) => (
          
//             <ListDenj name={item.name} image={item.image} tips={item.gears}
//             location={item.state} description={item.caption} 
//              onPress={()=> navigation.navigate("ListingDetailScreen",item)} />
         
//         )}
//       />
//     </Screen>
//   );
// }
// const styles = StyleSheet.create({
//   screen: {
//     padding: 20,
//     backgroundColor: "whitesmoke",
//   },
// });
// export default ListingScreen;
