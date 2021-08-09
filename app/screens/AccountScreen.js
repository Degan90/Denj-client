import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AuthContext from "../auth/context";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";


const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "blue",
    },
    targetScreen:"list"
  },

];

function AccountScreen({navigation}) {
  const {user,setUser} = useContext(AuthContext)




  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          image={require("../assets/pourya.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() =>navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={()=>setUser(null)}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: "lightgray",
  },
});

export default AccountScreen;
