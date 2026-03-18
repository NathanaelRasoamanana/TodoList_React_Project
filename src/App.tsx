import { useEffect, useState } from "react";
import Task from "./components/Task";

export default function App(){
//STATE

type TaskProps = {id:string ; value:string};

const[tasks, setTasks] = useState<TaskProps[]>([]);

const [newTask, setNewTask] = useState<TaskProps>({
    id:crypto.randomUUID(),
    value: ""
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
  // Important pour  event.target.value qui ne peut recevoir qu'un string
  setNewTask({id: crypto.randomUUID(),value: ""});
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value;

  const newTaskUpdated = (prev:TaskProps):TaskProps => ({...prev, value: value});

  //mise à jour uniquement sur value
  setNewTask(newTaskUpdated);
};

//AFFICHAGE
  return (
    <>
    {/* LISTE DES TACHES */}
      <h1>Taches à faire </h1>
      <ul>{tasks.map((task) => (
        <Task 
          key = {task.id}
          value = {task.value}
          onClick = {()=>handleDelete(task.id)}
        />))}
      </ul>

    {/* EDTION D'UNE TACHE */}
      <form 
        onSubmit={handleSubmit}
      >
        <input 
          type = "text"
          placeholder ="Ajouter une tâche..."
          value = {newTask.value}
          onChange = {handleChange}
        />
        <button>add</button>

      </form>  
    </>
  )
}