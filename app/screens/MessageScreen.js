import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDelete from "../components/ListItemDelete";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessage = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/pourya.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/pourya.jpg"),
  },
];

function MessageScreen({navigation}) {
  const [messages, setMessages] = useState(initialMessage);
  const [refreshing,setRefreshing]=useState(false)
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => console.log("message")}
            renderRightActions={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
              
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>{
            setMessages([
                {
                    id: 2,
                    title: "T2",
                    description: "D2",
                    image: require("../assets/pourya.jpg"),
                },
            ])
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
