/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {View,Text, SafeAreaView, FlatList, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {MyHeader, TodoItem, AddtoDo} from './components'



const App = () =>{

  

  const [todos, setTodos ] = useState([
    // {text: 'Do sth...',  id : '1', button: '❌', isDone: false},
    
  ])

  const  todo_num = todos.filter(t=>t.isDone === false).length
 


const checkHandler = (id)=>{
   const newArray = [...todos]
  const todoIndex= todos.findIndex(todo=>todo.id===id);
  newArray[todoIndex].isDone = !newArray[todoIndex].isDone;
  setTodos(newArray); 
}

  
  // const checkHandler = (id) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.map((todo) =>
  //       todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
  //     );
  //   });
  // };


  const pressHandler = (id) => {
    
    const newArray = [...todos]
    const todoIndex= todos.findIndex(todo=>todo.id===id);
    newArray.splice(todoIndex, 1);
     setTodos(newArray);

    }

    const submitHandler = (text) =>{

      setTodos((prevTodos)=>{
        return([
          {text: text,  id: Math.random().toString(), button: '❌', isDone:false },
          ...prevTodos
        ]
      )} )

    }

  return(
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView style={{flex:1}} behavior={ {padding: Platform.OS === 'ios' ? 15:10}}>
      
      <View style ={styles.container}>
        <MyHeader  todoCounter={todo_num} />
        <View style={styles.flatlist}>
          <FlatList
             
              keyExtractor = {(item) => item.id}
              data = {todos}
              renderItem = {({item}) => 
              <TodoItem  item={item} checkHandler={checkHandler} pressHandler = {pressHandler}/> }
              ListEmptyComponent={()=> <Text style={{fontSize:20, textAlign:"center", color: '#000051'}}>Nothing to do...</Text>}
          />
        </View>
        <AddtoDo style={styles.add} submitHandler = {submitHandler}/>
      </View>
  
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    justifyContent:'space-between',
    flex:1,
    backgroundColor:'#e0e0e0'
  },
  flatlist:{
    padding:20,
    flex:1
    
  },
  add:{
    position:'absolute',
    bottom:0
  }
})

export default App;
