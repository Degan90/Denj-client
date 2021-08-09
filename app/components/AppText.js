 import React from 'react';
import { Text ,StyleSheet, Platform} from 'react-native';
 
 function AppText({children}) {
     return (<>
        <Text style={styles.text}>{children}</Text>
        </>
     );
 }

 const styles = StyleSheet.create({
     text:{
         fontSize:30,
         fontFamily:Platform.OS==='android' ? 'Roboto' : "Avenir",
         color:Platform.OS==='android' ? 'black' : '#fc5c65',
         position:'absolute',
         top:70,
         fontWeight:'900'
     }
 })

 
 export default AppText;