import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
 

const Header = () => {
    return(
<View style={styles.header}>
    <Text style={styles.text}>Mr List</Text>
</View>
    )
}

const styles = StyleSheet.create({
  header: {
  height:60,
  padding:15,
  backgroundColor:'purple',
  fontFamily :'encodebold'
  },

text: {
 color: '#fff',
 fontSize: 23,
 textAlign: 'center',
 fontFamily :'encodebold'
  }
})

export default Header