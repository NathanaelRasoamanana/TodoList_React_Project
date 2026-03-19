import { useEffect } from "react";
import Button from "../components/Button";
import Task from "../components/Task";
import type { StateTasksProps } from "../types/StateTaskProps";

export default function ListTasks({ tasks, setTasks }: StateTasksProps){    

    useEffect(()=>{
        console.log("Etat du tableau tasks ", tasks);
    },[tasks]);

    //COMPORTEMENTS
    const handleDelete = (id : string)=>{
        console.log("handleDelete")
        const tasksCopyForRemove = [...tasks];
        const tasksCopyForRemoveUpdated = tasksCopyForRemove.filter((task)=>task.id !== id);
        setTasks(tasksCopyForRemoveUpdated);
    }
    
    //je fais un taggle ici, pas une réinitialisation
    const handleDone = (id: string) => {
    setTasks(prev =>
        prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
        )
    );
    };

    //AFFICHAGE
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