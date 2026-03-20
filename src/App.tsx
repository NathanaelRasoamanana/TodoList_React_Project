import { useState } from "react";
import ListTasks from "./ui/ListTasks";
import type { TaskProps } from "./types/TaskProps";
import EditTask from "./ui/EditTask";
import { TasksContext } from "./context/TasksContext";
import Container from '@mui/material/Container';


export default function App(){

  const[tasks, setTasks] = useState<TaskProps[]>([
    {id: crypto.randomUUID(),
      value: "Tâche première", 
      date : "11/12/2026", 
      time:"15:00", 
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
        <Container maxWidth="sm">
          <EditTask/>   
          <ListTasks/>    
        </Container>
      </>
    </TasksContext.Provider>
  )
}