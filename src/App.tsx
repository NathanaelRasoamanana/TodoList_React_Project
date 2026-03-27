import { useState } from "react";
import type { TaskProps } from "./types/TaskProps";
import ListTasks from "./pages/ListTasks";
import EditTask from "./pages/EditTask";
import { TasksContext } from "./context/TasksContext";
import { Card } from "@mui/material";
import { Routes, Route } from "react-router-dom";

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
          <Routes>
              <Route path="/" element={<ListTasks />} />
              <Route path="/form" element={<EditTask />} />
          </Routes>

        </Card>
      </>
    </TasksContext.Provider>
  )
}