import React from 'react';
import { Image, StyleSheet, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30} />
            </View>
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="tomato" size={30} />
            </View>
            <Image style={styles.image}  source={require('../assets/horse.jpg')}/>

        </View>
       
    );
}
const styles = StyleSheet.create({
    image:{
        resizeMode:'contain',
        width:'100%',
        height:'100%',
    },
    container:{
        backgroundColor:'black',
        flex:1
    },
    closeIcon:{

        position:'absolute',
        top:50,
        left:30
    },
    deleteIcon:{
        position:'absolute',
        top:50,
        right:30
    }
})

export default ViewImageScreen;