import { useContext } from "react";
import Task from "../components/Task";
import { TasksContext } from "../context/TasksContext";
import Card from '@mui/material/Card';
import Bouton from "../components/Button";
import { Box, Container } from "@mui/material";


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
        <Container 
          maxWidth="sm" sx={{
          display: "grid", 
          justifyContent: "center", 
          alignItems: "center"
        }}
        >
            {tasks.map((task) => (
                <Card key={task.id}
                    sx={{
                        display: 'flex',
                        width: "flex",
                        height: 'flex',
                        m:1,
                    }}
                >
                    <Task  
                        id = {task.id}   
                        title = {task.title}
                        description = {task.description}
                        date = {task.date}
                        done ={task.done}
                    />
                    <Box sx={{ display: 'flex',
                        alignItems: 'center','& button': { p: 0.5, m: 2 },
                    }}
                    >
                        <Bouton type="button" variant="outlined" onClick={()=>handleDone(task.id)} buttonText= {task.done ? "Undo":"Done"} />
                        <Bouton type="button" variant="outlined" onClick={()=>handleDelete(task.id)} buttonText="remove"/> 
                    </Box>
                </Card>
            ))}  
        </Container>
        </>
    )
}