import React from 'react';
import { View ,StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
function ListItemDelete({onPress}) {
    return (
      <TouchableWithoutFeedback onPress={onPress} >
      <View style={styles.container}>
          <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color='white'
           />
      </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'tomato',
        width:70,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default ListItemDelete;