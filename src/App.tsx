import { RouterProvider } from "react-router-dom"
import { router } from "./router/router";
import type { TaskProps } from "./types/TaskProps";
import { useState } from "react";
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
      },
      {
        id: crypto.randomUUID(),
        title: "Second task ", 
        date : "2026-04-25T00:00", 
        done:false,
        late:false
      },
    ]);

    const valueTasksContext = {
      tasks : tasks,
      setTasks : setTasks,
    }
    
  return (
    <TasksContext.Provider value={valueTasksContext}>
        <Card 
            sx={{
                display: 'grid',
                width: "flex",
                height: 'flex',
                m:25,
                p:2,
            }}
        >
            <RouterProvider router= {router}/>  
        </Card>
    </TasksContext.Provider>
  ) 
}