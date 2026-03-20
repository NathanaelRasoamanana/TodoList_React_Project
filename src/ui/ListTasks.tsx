import { useContext } from "react";
import Task from "../components/Task";
import { TasksContext } from "../context/TasksContext";
import Card from '@mui/material/Card';


export default function ListTasks(){  
    // Consommation du context
    const {tasks,setTasks} = useContext(TasksContext)  

    const handleDelete = (id : string)=>{
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
    );};

    return(
        <>
            <h1>Taches à faire </h1>
            {tasks.map((task) => (
                
                <Card key={task.id}
                    sx={{
                        display: 'inline-block',
                        width: 'max-content',
                        height: 'max-content',
                        m:1
                    }}
                >
                    {task.done ? <span>(Task done) </span>:<span>(Task undone) </span>}
                    <Task     
                        value = {task.value}
                        date = {task.date}
                        time = {task.time}
                        onDone={()=>handleDone(task.id)}
                        onRemove={()=>handleDelete(task.id)}
                    />
                </Card>
            ))}       
        </>
    )
}