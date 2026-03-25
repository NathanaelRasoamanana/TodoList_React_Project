import { useContext, useMemo, useState } from "react";
import Task from "../components/Task";
import { TasksContext } from "../context/TasksContext";
import Card from '@mui/material/Card';
import { Box, Container } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Bouton from "../components/Button";

export default function ListTasks(){  
    // Consommation du context
    const {tasks,setTasks} = useContext(TasksContext)  

    const [sortBy, setSortBy] = useState("none");

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

    const sortedTasks = useMemo(() => {
        if (sortBy === "none") return tasks;

        if (sortBy === "date-desc") {
            return [...tasks].sort(
                (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            );
        }
        return tasks;
    }, [tasks, sortBy]);

    return(
        <Container 
            maxWidth="sm" sx={{
            display: "grid", 
            justifyContent: "center", 
            alignItems: "center",
            p:2,
            }}
        >
            <Card>
                <Box sx={{p:1, gap:1, display: "flex", justifyContent: 'flex-end'}} >
                    <Bouton
                        type="button"
                        buttonText ="Par date"
                        txtColor="white"
                        bgcolor="black"
                        onClick={() => setSortBy("date-desc")}
                    />

                    <Bouton 
                        type="button"
                        buttonText ="Par ajout"
                        txtColor="white"
                        bgcolor="black"
                        onClick={() => setSortBy("none")}
                    /> 
                </Box>

                {sortedTasks.map((task) => (
                    <Card key={task.id}
                        sx={{
                            display: 'flex',
                            width: "flex",
                            height: 'flex',
                            m:1,
                            justifyContent:"space-between",
                        }}
                    >
                        <Task  
                            id = {task.id}   
                            title = {task.title}
                            description = {task.description}
                            date = {task.date}
                            done ={task.done}
                        />

                        <Box sx={{ 
                            display: 'flex',
                            alignItems: 'center','& button': { p: 0.5, m: 2 },
                        }}
                        >
                            <ToggleButton
                                value="check"
                                selected={task.done}
                                onChange={()=>handleDone(task.id)}
                                sx={{
                                    "&.Mui-selected": {
                                    backgroundColor: "success.main",
                                    color: "white",
                                    },
                                    "&.Mui-selected:hover": {
                                    backgroundColor: "success.dark",
                                    }
                                }}
                                >
                                <CheckIcon />                                  
                            </ToggleButton>

                            <ToggleButton
                                value="remove"
                                selected={task.done}
                                onChange={()=>handleDelete(task.id)}
                                >
                                <DeleteOutlinedIcon />
                            </ToggleButton>
                        </Box>
                    </Card>
                ))}     
            </Card>
        </Container>
    )
}