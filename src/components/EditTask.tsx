import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { Box,Card,TextField, Typography } from "@mui/material";
import Bouton from "../ui/Button";
import {Controller, useForm} from 'react-hook-form';
import { Link, useParams } from "react-router-dom";
import { useImdb } from "../api/Imdb";
import { useEffect } from "react";


type FormField = {
    title:string ; 
    description:string ;
    date: string;
}

export default function EditTask(){  
    // Consommation du context
    const {tasks, setTasks} = useContext(TasksContext); 

    const { control, handleSubmit, reset } = useForm<FormField>({
        defaultValues: {
            title: "",
            description: "",
            date: ""
        }
    });

    const { id } = useParams(); 
    const { movies } = useImdb();
    const movie = movies.find(s => s.id === id); 

    useEffect(() => {
        if (movie) {
            reset({
            title: movie.primaryTitle ??"",
            description: "",
            date: ""
            });
    }}, [movie]);
    
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
        <>

        <div>
            <Link to="/list">
                <Bouton
                    type="button"
                    variant="outlined"
                    buttonText="Liste"
                />
            </Link>    
        </div> 
            

        <Card sx={{
            display: 'grid',
            alignItems:"center",
            justifyContent:"center",
            p:2,
            gap:20,
        }}>

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
                                label="Ajouter le nom du film"             
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
                    buttonText ="Ajouter à ma liste"
                    txtColor="white"
                    bgcolor="black"
                />       
            </Box>   
        </Card>
    </>
    )
}