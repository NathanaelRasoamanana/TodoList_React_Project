import { useContext, useState } from "react";
import type { TaskProps } from "../types/TaskProps";
import { TasksContext } from "../context/TasksContext";
import { Box,Container,TextField } from "@mui/material";
import Bouton from "../components/Button";
import {useForm, type SubmitHandler} from 'react-hook-form';
import { getTodayDate } from "@mui/x-date-pickers/internals";

type FormField = {
    title:string ; 
    description:string ;
    date: string;
}

export default function EditTask(){  
    // Consommation du context
    const {setTasks} = useContext(TasksContext);   
    
    const {register, handleSubmit} = useForm<FormField>();

    const onSubmit : SubmitHandler<FormField> = (data)=>{
        console.log(data);
                // data.preventDefault();
        if (newTask.title.trim() ===""|| newTask.date.trim() === "") return;
        
        const tasksTable = (prev:TaskProps[]):TaskProps[] => [...prev, newTask];
        setTasks(tasksTable);
        console.log("L'objet newTask ajouté à tasks",newTask);

        // réinitialisation input 
        setNewTask({id: crypto.randomUUID(),title: "", description:"", date : "", done:false});

    };

    const [newTask, setNewTask] = useState<TaskProps>({
        id:crypto.randomUUID(),
        title: "",
        description:"", 
        date :"",
        done:false
    });

    // const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     if (newTask.title.trim() ===""|| newTask.date.trim() === "") return;
        
    //     const tasksTable = (prev:TaskProps[]):TaskProps[] => [...prev, newTask];
    //     setTasks(tasksTable);
    //     console.log("L'objet newTask ajouté à tasks",newTask);

    //     // réinitialisation input 
    //     setNewTask({id: crypto.randomUUID(),title: "", description:"", date : "", done:false});
    // };

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
                onSubmit={handleSubmit(onSubmit)}
                sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}
            >
                <TextField
                    {...register("title",{
                        required :true,
                        minLength:3,
                    })}
                    label="Ajouter une tâche..."
                    name="title"
                    value={newTask.title}
                    onChange={handleChangeTitle}
                    required
                />

                <TextField
                    {...register("description")}
                    label="Ajouter une descrition..."
                    name="description"
                    value={newTask.description}
                    onChange={handleChangeDescri}
                />
                
                <TextField
                    {...register("date",{
                        required:true,
                    })}
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