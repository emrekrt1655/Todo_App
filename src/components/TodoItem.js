import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';


const TodoItem = ({item, pressHandler, checkHandler}) =>{



    return(
       
            <TouchableOpacity style={[styles.container, {backgroundColor:item.isDone ? "#FBCEBE": '#FF9671'}]}  onPress={() => {
          return checkHandler(item.id);
        }} >
            <Text style={[styles.text, {textDecorationLine: item.isDone ? "line-through" : null},
            {fontWeight: item.isDone ? "normal" : 'bold'}
             ]}> ◼ {item.text}</Text>
           
            <TouchableOpacity style={{backgroundColor:'#008E9B', padding:5, marginRight:3}} onPress={() => pressHandler(item.id)}>
            <Text style={styles.button}>{item.button}</Text>
            </TouchableOpacity>
            </TouchableOpacity>   
     
         )
    }

   

export {TodoItem};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FF9671',
        borderRadius:5,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:5,
        
        
        
        

    },
    text:{
        flex:2,
        
        textAlign:"left",
        padding:5,
        color:'#fff',
        fontWeight:'bold',
        // backgroundColor:'#FF9671',
        
        
        
    },
    button:{
        // padding:5,
        // margin:5,
        
        flex:1,
        fontSize: 10

    }

  
})