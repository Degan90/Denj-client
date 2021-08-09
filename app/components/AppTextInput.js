import React from 'react';
import { TextInput, View ,StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { Colors } from 'react-native/Libraries/NewAppScreen';


function AppTextInput({icon , ...otherProps}) {
    return (
        <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color="gray" style={styles.icon} />}
          <TextInput style={styles.textInput} {...otherProps} />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightgray',
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10

    },
    textInput:{
        fontSize:18,
        fontFamily:"Avenir",
        
    },
    icon:{
        marginRight:10
    }
})
export default AppTextInput;