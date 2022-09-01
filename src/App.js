import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Do programming",
      day: "Feb 5",
      reminder: true,
    },
  
    {
      id: 2,
      text: "Meeting rambo",
      day: "July 25",
      reminder: true,
    },
    {
      id: 3,
      text: "Do something fun",
      day: "Dec 5",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id!==id ))
  }


  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task ))
  }

  return (
    <div >
      <Header title="New Title" />
      <AddTask/> 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      
      
    
    </div>
  );
}

export default App;
