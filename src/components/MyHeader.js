import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const MyHeader = ({ todoCounter }) =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                My TODO's
            </Text>
            <Text style = {styles.text}>
            {todoCounter}
            </Text>
        </View>
    )
}

export {MyHeader};

const styles = StyleSheet.create(
    {container:{
        padding:20,
        backgroundColor:'#008E9B',
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        color:'#fff',
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        letterSpacing:2
    }
        
    }
)