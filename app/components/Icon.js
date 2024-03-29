import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function Icon({
    name,
    size=40,
    backgroundColor='black',
    iconColor = 'white'
}) {
    return (
        <View style={{
            width:size,
            height:size,
            borderRadius: size /2,
            backgroundColor,
            justifyContent:'center',
            alignItems:'center'

        }}>
            <MaterialCommunityIcons  name={name} color={iconColor} size={30} />
        </View>
    );
}

export default Icon;