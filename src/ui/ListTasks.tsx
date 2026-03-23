import { useContext } from "react";
import Task from "../components/Task";
import { TasksContext } from "../context/TasksContext";
import Card from '@mui/material/Card';
import Bouton from "../components/Button";
import { Box } from "@mui/material";

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
                    <Task  
                        id= {task.id}   
                        title = {task.title}
                        description={task.description}
                        date = {task.date}
                        done ={task.done}
                    />
                    <Box sx={{ display: 'flex',
                        alignItems: 'center','& button': { p: 0.5, m: 2 },
                    }}
                    >
                        <Bouton variant="outlined" onClick={()=>handleDone(task.id)} buttonText={task.done ? "Undo":"Done"} />
                        <Bouton variant="outlined" onClick={()=>handleDelete(task.id)} buttonText="remove" /> 
                    </Box>
                </Card>
            ))}       
        </>
    )
}