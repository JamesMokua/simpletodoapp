import React,{useState} from 'react'
import {View,StyleSheet,FlatList,Alert} from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import ListItem from './components/ListItem'
import Header from './components/Header'
import AddItem from './components/AddItem'

const getFonts = () =>  Font.loadAsync({
    'encodeone' : require('./assets/fonts/EncodeSansExpanded-Regular.ttf'),
    'encodebold' : require('./assets/fonts/EncodeSansExpanded-Bold.ttf')
  })


export default function App(){
  const[items,setItems] = useState([]);
  const[fontsLoaded,setFontsLoaded] = useState(false)

 
  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = text => {
    if (!text) {
      Alert.alert("Error", "Please enter an item", [{text: 'Ok'}])
    } else {
       setItems(prevItems => {
      return [{id: Math.random().toString(), text},...prevItems]
    });
    }
   
  }

 if(fontsLoaded){
  return(
    <View style={styles.container}>
      <Header/>
      <AddItem  addItem={addItem}/>
      <FlatList keyExtractor={(item) => item.id} data={items} renderItem={({item}) => <ListItem item={item}  deleteItem={deleteItem} />}
      />
    </View>
      );
    } else{
      return (
  <AppLoading onError= "Sorry"
    startAsync={getFonts}
    onFinish={() => setFontsLoaded(true)}/>)
    }
  
  }
const styles = StyleSheet.create({
  container: {
    flex:1 ,
    paddingTop:35,
    
  }
})


