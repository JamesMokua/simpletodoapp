import React,{useState} from 'react'
import Icon from '@expo/vector-icons/MaterialIcons'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
 

const ListItem = ({item,deleteItem}) => {

    return(
<TouchableOpacity  activeOpacity={0.8} style={styles.listItem}>
    <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <View style={styles.idea}>
        <Icon name="delete" size={20} color="firebrick" onPress={() => deleteItem(item.id)}  />  
        </View>
        
    </View>
</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  listItem: {
      padding:15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor:'#eee'
  },
  listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  listItemText: {
      fontSize:18,
      fontFamily :'encodeone'
  },
  edit: {
    color:"green",
  },
  idea: {
  flexDirection: 'row',
  },
  plus: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-end'
},
me: {
    color: 'red'
},
input: {
    height:60,
    padding: 8,
    fontSize: 16,
    color: 'black',
    fontFamily :'encodeone'
},
btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    marginBottom: 10
},
btnText: {
    color: 'black',
    fontSize:20,
    textAlign:'center',
    fontFamily :'encodeone'
},
})

export default ListItem