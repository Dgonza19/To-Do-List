import React, { useState } from 'react'
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const newTaskObject = {
      texto: newTask,
      completada: false
    };
    setTasks([...tasks,newTaskObject]);
  }

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map ((tasks, i) => {
      if (i === index) {
        return {...tasks, completada: !tasks.completada};
      }
      return tasks;
    });
    setTasks(updatedTasks);
  }

  const deleteCompletedTasks = () => {
    const updatedTasks = tasks.filter (task => !task.completada);
    setTasks(updatedTasks);
  }

  

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onAddTask={addTask} />

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input 
              type="checkbox"
              checked={task.completada}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span style={{ textDecoration: task.completada ? 'line-through' : 'none'}}>
              {task.texto}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={deleteCompletedTasks}>Eliminar Tareas Completadas</button>
    </div>
  )
}

export default App
