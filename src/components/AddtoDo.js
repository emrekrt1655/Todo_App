import React, {useState} from 'react';
import { TextInput, Text, TouchableOpacity, View,  StyleSheet, Dimensions} from 'react-native';

const AddtoDo = ({submitHandler}) =>{
    const[placeholder, setPlaceHodler]=useState('What are you planning..')
    
   
    const [text, setText] = useState('');
    const changeHandler = (val) =>{
        setText(val);

    }

    return(
        <View style={styles.container}>
        <View style = {styles.input}>
            <TextInput 
          autoFocus={true}
           placeholder= {placeholder}
            value={text}
            onChangeText={changeHandler}
            style={styles.inputtext}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {setText(''), submitHandler(text), setPlaceHodler('')}}>
            <Text style={styles.buttontext}>Add</Text>
        </TouchableOpacity>
        </View>
    )
}



export {AddtoDo};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#FF9671',
        paddingTop:20,
        paddingBottom:5,
        borderRadius:15
    },
    input:{
        width : Dimensions.get('window').width*0.70,
        backgroundColor: '#FEFEDF',
        borderRadius:20,
        marginBottom:10,
        backgroundColor:'#e0e0e0'
    },
    inputtext:{
        color:'black',
        textAlign:'center',
        fontWeight:'bold',
        textAlign:'center',
        
        
    },
    button:{
        backgroundColor:'#008E9B',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:25
        
    },
    buttontext:{
    color:'white',
    fontWeight:'bold'
    }
})