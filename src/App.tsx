import { useState } from "react";
import ListTasks from "./ui/ListTasks";
import type { TaskProps } from "./types/TaskProps";
import EditTask from "./ui/EditTask";

export default function App(){

  const[tasks, setTasks] = useState<TaskProps[]>([]);

  return (
    <>
      <ListTasks tasks={tasks} setTasks={setTasks} />      
      <EditTask setTasks={setTasks}/>   
    </>
  )
}