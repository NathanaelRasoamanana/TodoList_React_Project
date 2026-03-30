import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { Box,Card,TextField, Typography } from "@mui/material";
import Bouton from "../ui/Button";
import {Controller, useForm} from 'react-hook-form';
import { MoviesContext } from "../context/MoviesContext";
import { useParams } from "react-router-dom";

type FormField = {
    title:string ; 
    description:string ;
    date: string;
}

export default function EditTask(){  
    // Consommation du context
    const {tasks, setTasks} = useContext(TasksContext); 
    
    const { id } = useParams(); // je récupère l'id depuis l'URL           
    const { movies } = useContext(MoviesContext);
    const movie = movies.find(s => s.id === Number(id)); 


    const {control,handleSubmit,reset} = useForm<FormField>();

    // J'utilise hook-form pour la gestion du formulaire
    // Il est controllé parce que la fonction reset()
    // ne fonctionne pas correctement sinon
    const onSubmit = (data:FormField)=>{
        const newTaskUpdated = ({id: crypto.randomUUID(), title: data.title, description: data.description, date: data.date, done :false, late :false});
        const tasksTable = [...tasks, newTaskUpdated];
        setTasks(tasksTable);
        reset();
    };

    return(
        
        <Card sx={{
                display: 'flex',
                alignItems:"center",
                justifyContent:"center",
                m:2,
                p:2,
                gap:10,
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
                    defaultValue= {movie&&(movie.name)}
                    rules={{
                        required :"Le titre est requis..",
                        minLength:{
                            value : 3,
                            message : "3 caractères minimum"}
                    }}
                    render={({field, fieldState})=>(
                        <>
                            <TextField              
                                label="Titre de la tâche..."
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

                <Controller 
                    name="description"
                    defaultValue=""
                    control={control}
                    rules={{
                        maxLength:{
                            value : 150,
                            message : "150 caractères maximum"}
                    }}
                    render={({field, fieldState})=>(
                        <>
                            <TextField
                                label="Description..."
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

                <Controller 
                    name="date"
                    defaultValue=""
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
                    buttonText ="Ajouter une tâche"
                    txtColor="white"
                    bgcolor="black"
                />       
            </Box>   
    </Card>
    )
}