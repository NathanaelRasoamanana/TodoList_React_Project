import { useState } from "react";
import ListTasks from "./ui/ListTasks";
import type { TaskProps } from "./types/TaskProps";
import EditTask from "./ui/EditTask";
import { TasksContext } from "./context/TasksContext";
import { Card } from "@mui/material";

export default function App(){

  const[tasks, setTasks] = useState<TaskProps[]>([
    {
      id: crypto.randomUUID(),
      title: "First task ", 
      description:"La première tâche à faire... ",
      date : "2026-03-25T10:45", 
      done:false,
      late:false
    }
  ]);

  //Installation du context (provider)
  const valueTasksContext = {
      tasks : tasks,
      setTasks : setTasks,
    }

  return (
    <TasksContext.Provider value={valueTasksContext}>
      <>
        <Card 
            sx={{
                display: 'grid',
                width: "flex",
                height: 'flex',
                m:25,
                p:2,
          }}
        >
          <EditTask/>  
          <ListTasks/>
        </Card>
      </>
    </TasksContext.Provider>
  )
}