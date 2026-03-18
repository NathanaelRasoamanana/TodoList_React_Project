import { useEffect, useState } from "react";
import Task from "./components/Task";
import Input from "./components/Input";

export default function App(){
//STATE

type TaskProps = {
  id:string ; 
  value:string ; 
  timer:string; 
};

const[tasks, setTasks] = useState<TaskProps[]>([]);

const [newTask, setNewTask] = useState<TaskProps>({
    id:crypto.randomUUID(),
    value: "", 
    timer: ""
});

//COMPORTEMENTS

useEffect(()=>{
  console.log("Les valeurs actuelles dans tasks", tasks);
},[tasks])

const handleDelete = (id : string)=>{
  console.log("handleDelete")
  const tasksCopyForRemove = [...tasks];
  const tasksCopyForRemoveUpdated = tasksCopyForRemove.filter((task)=>task.id !== id);
  setTasks(tasksCopyForRemoveUpdated);
}

const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (newTask.value.trim() === "") return;

  const tasksTable = (prev:TaskProps[]):TaskProps[] => [...prev, newTask];

  setTasks(tasksTable);
  console.log("L'objet newTask ajouté à tasks",newTask);

  // réinitialisation input 
  // (j'assigne directement un id pour ne mettre que la value ensuite)
  // Important pour event.target.value qui ne peut recevoir qu'un string
  setNewTask({id: crypto.randomUUID(),value: "", timer:""});
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value;

  const newTaskUpdatedValue = (prev:TaskProps):TaskProps => ({...prev, value: value});

  //mise à jour uniquement sur value
  setNewTask(newTaskUpdatedValue);
};

const handleTimer = (event:React.ChangeEvent<HTMLInputElement>)=>{
  console.log("handleTimer");
  const timer = event.target.value;
  const newTaskUpdatedTimer = (prev:TaskProps):TaskProps => ({...prev, timer: timer}); 

  //mise à jour uniquement sur timer
  setNewTask(newTaskUpdatedTimer);
}

//AFFICHAGE
  return (
    <>
    {/* LISTE DES TACHES */}
      <h1>Taches à faire </h1>
      <ul>{tasks.map((task) => (
        <Task 
          key = {task.id}
          value = {task.value}
          timer = {task.timer}
          onClick = {()=>handleDelete(task.id)}
        />))}
      </ul>

    {/* EDTION D'UNE TACHE */}
      <form 
        onSubmit={handleSubmit}
      >
        <Input 
          type = "text"
          placeholder ="Ajouter une tâche..."
          value = {newTask.value}
          onChange = {handleChange}
        />
        <Input 
          type = "datetime-local"
          placeholder =""
          value = {newTask.timer}
          onChange = {handleTimer}
        />
        <button>add</button>

      </form>  
    </>
  )
}