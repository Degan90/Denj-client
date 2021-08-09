import React from 'react';
import { ImageBackground , StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

import AppText from "../components/AppText"


function WelcomeScreen({navigation}) {
    return (
        <ImageBackground
         blurRadius={8}
         style={styles.background}
         source={require("../assets/camp.jpg")} >
            <AppText>Find the cozy places</AppText>
            <View style={styles.buttonContainer}>

            <AppButton title='login' color="blue"  onPress={() => navigation.navigate('Login')} />
            <AppButton title='signup' color="tomato" onPress={()=>navigation.navigate("SignUp")} />
            
            </View>
         </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:'center',
    },
    buttonContainer:{
        padding:20,
        width:'100%',
        
    }

})
export default WelcomeScreen;