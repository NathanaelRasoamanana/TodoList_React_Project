import Task from "../components/Task"
import type { StateTasksProps } from "../types/StateTaskProps";

export default function ListTasks({ tasks, setTasks }: StateTasksProps){    
    //COMPORTEMENTS
    const handleDelete = (id : string)=>{
        console.log("handleDelete")
        const tasksCopyForRemove = [...tasks];
        const tasksCopyForRemoveUpdated = tasksCopyForRemove.filter((task)=>task.id !== id);
        setTasks(tasksCopyForRemoveUpdated);
    }

    //AFFICHAGE
    return(
        <>
            <h1>Taches à faire </h1>
            <ul>{tasks.map((task) => (
                <Task 
                    key = {task.id}
                    value = {task.value}
                    date = {task.date}
                    time = {task.time}
                    onClick = {()=>handleDelete(task.id)}
                />))}
            </ul>
        </>
    )
}