import React from 'react';
import { Image, View ,StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title , image ,subTitle,ImageComponent ,onPress , renderRightActions}) {
    return (
    <Swipeable renderRightActions={renderRightActions} >   
    <TouchableHighlight
     underlayColor={Colors.light} onPress={onPress}> 
      <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
              <Text>{title}</Text>
             {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
       </View>
    </TouchableHighlight> 
    </Swipeable> 
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:20,
        backgroundColor:"white"
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
    },
    subTitle:{
        color:'gray'
    },
    detailContainer:{
        marginLeft :10,
        justifyContent:'center'
    }
})
export default ListItem;