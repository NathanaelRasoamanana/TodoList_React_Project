import { RouterProvider } from "react-router-dom"
import { router } from "./router/router";
import type { TaskProps } from "./types/TaskProps";
import { useState } from "react";
import { TasksContext } from "./context/TasksContext";

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
        <RouterProvider router= {router}/>  
    </TasksContext.Provider>
  ) 
}