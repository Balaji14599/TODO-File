import React from 'react';
import ReactDom from 'react-dom';
import {useState} from 'react';
import './index.css'

const AddTask = ({ }) =>{
const [value,UpdateValue] = useState("");

const handleEvent = e => {
 e.preventDefault();
  if(value !== "")
  {
    addtask(value);
    UpdateValue("");
  }
};
return(
  <form onSubmit = {handleEvent}>
    <input 
        type = "text"
        value = {value}
        placeholder = "Enter your Task"
        onChange = {e => UpdateValue(e.target.value)} 
        />
        <button type = "submit"><i class = "materials-icon">add</i></button>
  </form>
);
}
const ToDoListApp = () => {
  const addtask = text => UpdateTask([...tasks,{text}]);
  const [tasks,UpdateTask] = useState([

    {
      text:"wake up",
      isCompleted:false
    },
    {
      text:"Fresh up",
      isCompleted:false
    },
    {
      text:"Boost up",
      isCompleted:false
    }
  
  ]);
  const toggleTask = index =>  {
    const newTask = [...tasks];
      if(newTask[index].isCompleted)
      {
        newTask[index].isCompleted = false;
      }
      else{
        newTask[index].isCompleted = true;
      }
      UpdateTask(newTask);
    }
    const removeTask = index => {
      const newTask = [...tasks];
      newTask.splice(index,1);
      UpdateTask(newTask);
    }
    
  return(
    <div className = "todo-list-app">
      <h1>REACT TODO LIST APP</h1>
       {tasks.map((task,index) =>(
        <div className = "Task-status">
          <span onClick = {() => toggleTask(index)} className = {task.isCompleted ? "task-name completed-task":"task-name"}>
          {task.text}
          </span> 
          <button type="button" onClick = {() =>removeTask(index)} ><i class = "material-icon" >delete</i>
          </button>
        </div>
       ))}
       <AddTask addtask = {addtask} />
    </div>
  );
}
ReactDom.render(<ToDoListApp />,document.getElementById('root'));