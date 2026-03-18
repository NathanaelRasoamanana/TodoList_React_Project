import { useState } from "react";
import Task from "./components/Task";

export default function App(){
//STATE
const[tasks, setTasks] = useState([
  {id : 1, value : "tache1 "},
  {id : 0, value : "tache2 "}
]);

const [newTask, setNewTask]=useState({id:11, value:"onze"});

type taskProps = {id:number, value:String};

//COMPORTEMENTS
const handleDelete = (id : number)=>{
  console.log("handleDelete")
  const tasksCopy = [...tasks];
  const taskCopyUpdated = tasksCopy.filter((task)=>task.id !== id);
  setTasks(taskCopyUpdated);
}

const handleSubmit = (event:React.SubmitEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log("handleSubmit");
    const idNewTask = 10;
    const valueNewTask = "dix";
    const taskToAdd : taskProps = {id:idNewTask , value:valueNewTask}

    console.log(taskToAdd);
    setNewTask(taskToAdd);
};

console.log("la nouvelle tache ",newTask);

const handleChange = ()=>{
  console.log("handleChange");
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
          value = ""
          onChange = {handleChange}
        />

        <button>add</button>

      </form>  
    </>
  )
}