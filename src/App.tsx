import { useState } from "react";
import ListTasks from "./ui/ListTasks";
import type { TaskProps } from "./types/TaskProps";
import EditTask from "./ui/EditTask";
import { TasksContext } from "./context/TasksContext";

export default function App(){

  const[tasks, setTasks] = useState<TaskProps[]>([]);

  //Installation du context (provider)
  const valueTasksContext = {
      tasks : tasks,
      setTasks : setTasks,
    }

  return (
    <TasksContext.Provider value={valueTasksContext}>
      <>
        <ListTasks/>      
        <EditTask/>   
      </>
    </TasksContext.Provider>
  )
}