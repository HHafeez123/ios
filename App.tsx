import React, { useState } from 'react';
import { View } from 'react-native';
import ToDoList from "./ToDoList";
 
function App() {
  // Part A: State Management
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  return (
<View>


{/* Part B: Pass Tasks Using Props */}
<ToDoList tasks={tasks} />
</View>
  );
}


export default App;