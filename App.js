import React, { useState } from 'react';

import { View, StyleSheet, ScrollView , FlatList} from 'react-native';

import Header from "./comps/header";
import TodoItem from "./comps/todoItem";
import AddTodo from "./comps/addTodo";

const App =  () =>  {
  const [todos, setTodos] = useState([
     
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos]
    })
  }
  return (
    <View style={styles.container}>
      <Header />
     <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
       <View style={styles.list}>
         <ScrollView>
           {
            todos.map(item => {
              return <TodoItem 
              key={Math.random().toString()} 
              item ={item} 
              pressHandler={pressHandler} />
            })
           }
         </ScrollView> 
       </View>
     </View>
    </View>
  );
};
/*<FlatList
            data={todos} 
            renderItem={({item}) => (
            <TodoItem item ={item} pressHandler={pressHandler} />
         )} /> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  list: {
    marginVertical: 15,
    paddingHorizontal: 12.5,
  },
});

export default App;
