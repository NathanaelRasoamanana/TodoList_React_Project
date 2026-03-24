import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { Box,Container,TextField, Typography } from "@mui/material";
import Bouton from "../components/Button";
import {Controller, useForm} from 'react-hook-form';

type FormField = {
    title:string ; 
    description:string ;
    date: string;
}

export default function EditTask(){  
    // Consommation du context
    const {tasks, setTasks} = useContext(TasksContext);   
    
    // const {
    //     register, 
    //     handleSubmit, 
    //     formState:{errors}
    // } = useForm<FormField>();

    const {
        control, 
        handleSubmit, 
        reset,
    } = useForm<FormField>();

    const onSubmit = (data:FormField)=>{
        console.log("Nouvelle tâche ",data);
        const newTaskUpdated = ({id: crypto.randomUUID(), title: data.title, description: data.description, date: data.date, done :false});
        const tasksTable = [...tasks, newTaskUpdated];
        console.log("L'objet newTask ajouté à tasks",tasksTable);
        setTasks(tasksTable);
        reset();
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
                    <Controller
                        name="title"
                        control={control}
                        rules={{
                            required :"Le titre est requis..",
                            minLength:{
                                value : 3,
                                message : "3 caractères minimum"}
                        }}
                        render={({field, fieldState})=>(
                            <>
                                <TextField              
                                    label="Ajouter une tâche..."
                                    {...field} 
                                />
                                    {fieldState.error && (
                                        <Typography sx={{ mt: 2, color:"red"}} >
                                            {fieldState.error.message}
                                        </Typography>
                                    )}
                            </>
                        )}
                    />

                    {/* <Controller 
                        name="description"
                        control={control}
                        render={({field})=>(
                             <TextField
                                label="Ajouter une description..."
                                {...field} 
                            />
                        )}
                    /> */}

                    <Controller 
                        name="date"
                        control={control}
                        rules={{
                            required:"La date est requise..",
                            validate: value => {
                            const isFuture = new Date(value) > new Date();
                            return (isFuture? isFuture : "La date doit être dans le futur");
                        }}}
                        render={({field, fieldState})=>(
                            <>
                                <TextField
                                    type="datetime-local"
                                    {...field}
                                />
                                {fieldState.error && (
                                    <Typography sx={{ mt: 2, color:"red"}} >
                                        {fieldState.error.message}
                                    </Typography>
                                 )}
                            </>
                        )}
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