import { useState } from "react";
import ListTasks from "./ui/ListTasks";
import type { TaskProps } from "./types/TaskProps";
import EditTask from "./ui/EditTask";
import { TasksContext } from "./context/TasksContext";

export default function App(){

  const[tasks, setTasks] = useState<TaskProps[]>([
    {
      id: crypto.randomUUID(),
      title: "First task ", 
      description:"La première tâche à faire... ",
      date : "11/12/2026", 
      done:false}
  ]);

  //Installation du context (provider)
  const valueTasksContext = {
      tasks : tasks,
      setTasks : setTasks,
    }

  return (
    <TasksContext.Provider value={valueTasksContext}>
      <>
        <EditTask/>  
        <ListTasks/>    
      </>
    </TasksContext.Provider>
  )
}