import React from 'react';
import { Text, View } from 'react-native';
 
// Task component
const Task = ({ taskText }) => {
  return <Text>{taskText}</Text>;
};
 
const ToDoList = ({ tasks }) => {
  return (
    <View>
      {tasks.map((task, index) => (
        <Task key={index} taskText={task} />
      ))}
    </View>
  );
};
 
export default ToDoList;