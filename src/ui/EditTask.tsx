import { useContext, useState } from "react";
import type { TaskProps } from "../types/TaskProps";
import { TasksContext } from "../context/TasksContext";
import { Box,Container,TextField } from "@mui/material";
import Bouton from "../components/Button";

export default function EditTask(){  
    // Consommation du context
    const {setTasks} = useContext(TasksContext);    

    const [newTask, setNewTask] = useState<TaskProps>({
        id:crypto.randomUUID(),
        title: "",
        description:"", 
        date :"",
        done:false
    });

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newTask.title.trim() ===""|| newTask.date.trim() === "") return;
        
        const tasksTable = (prev:TaskProps[]):TaskProps[] => [...prev, newTask];
        setTasks(tasksTable);
        console.log("L'objet newTask ajouté à tasks",newTask);

        // réinitialisation input 
        setNewTask({id: crypto.randomUUID(),title: "", description:"", date : "", done:false});
    };

    //mise à jour uniquement sur value
    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const title = event.target.value;
        const newTaskUpdatedValue = (prev:TaskProps):TaskProps => ({...prev, title: title});
        setNewTask(newTaskUpdatedValue);
    };

     //mise à jour uniquement sur value
    const handleChangeDescri = (event: React.ChangeEvent<HTMLInputElement>) => {
        const description = event.target.value;
        const newTaskUpdatedValue = (prev:TaskProps):TaskProps => ({...prev, description: description});
        setNewTask(newTaskUpdatedValue);
    };

    // mise à jour uniquement sur date
    const handleChangeDate = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const date = event.target.value;
        const newTaskUpdatedDate = (prev:TaskProps):TaskProps => ({...prev, date: date});     
        setNewTask(newTaskUpdatedDate);
    };

    return(
        <Container 
          maxWidth="sm" sx={{
          display: "grid", 
          justifyContent: "center", 
          alignItems: "center"
        }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}
                >
                <TextField
                    label="Ajouter une tâche..."
                    name="title"
                    value={newTask.title}
                    onChange={handleChangeTitle}
                    required
                />

                <TextField
                    label="Ajouter une descrition..."
                    name="description"
                    value={newTask.description}
                    onChange={handleChangeDescri}
                />
                
                <TextField
                    type="datetime-local"
                    value={newTask.date}
                    onChange={handleChangeDate}
                    required
                />

                <Bouton 
                    type="submit"
                    variant="contained"
                    buttonText ="Add"
                />                  
            </Box>
        </Container>
    )
}