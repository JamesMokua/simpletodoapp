import React, {useState} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Modal} from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome5'
 

const AddItem = ({addItem}) => {
    const[text,setText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const onChange = textValue => setText(textValue); 
    return(
    
<View>
<Modal  animationType="slide" visible={modalVisible} style={styles.modal}  >
  <Icon name="times" style={{...styles.plus, ...styles.me}} size={24} onPress={() => setModalVisible(false)}  />
    <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange}/>
    <TouchableOpacity style={styles.btn} onPress={() => {addItem(text); setModalVisible(false)}}>
 <Text style={styles.btnText}><Icon name="plus" size={24} /> Add</Text>
    </TouchableOpacity>
    </Modal>
    <Icon name="plus" style={styles.plus}size={20} onPress={() => setModalVisible(true)} />
  
</View>



    )
}

const styles = StyleSheet.create({
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
 }

})

export default AddItem