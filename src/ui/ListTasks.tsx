import { useContext } from "react";
import Button from "../components/Button";
import Task from "../components/Task";
import { TasksContext } from "../context/TasksContext";

export default function ListTasks(){  
    // Consommation du context
    const {tasks,setTasks} = useContext(TasksContext)  

    const handleDelete = (id : string)=>{
        console.log("handleDelete")
        const tasksCopyForRemove = [...tasks];
        const tasksCopyForRemoveUpdated = tasksCopyForRemove.filter((task)=>task.id !== id);
        setTasks(tasksCopyForRemoveUpdated);
    }
    
    // Je fais un toggle ici, pas une réinitialisation
    const handleDone = (id: string) => {
    setTasks(prev =>
        prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
        )
    );
    };

    return(
        <>
            <h1>Taches à faire </h1>
            <ul>{tasks.map((task) => (
                <li key = {task.id}>
                    {task.done ? <span>(Task done) </span>:<span>(Task undone) </span>}
                    <Task     
                        value = {task.value}
                        date = {task.date}
                        time = {task.time}
                    />
                    <Button 
                        onClick={()=>handleDone(task.id)} 
                        buttonText={task.done ? "undo" : "done"}
                    />
                    <Button 
                        onClick={()=>handleDelete(task.id)} 
                        buttonText="remove"
                    /><br/><br/>
                </li>
                ))}
            </ul>        
        </>
    )
}