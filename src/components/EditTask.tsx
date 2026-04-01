import { useContext, useEffect } from "react";
import { TasksContext } from "../context/TasksContext";
import { Box, TextField, Typography } from "@mui/material";
import Bouton from "../ui/Button";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useImdbContext } from "../context/ImdbContext";

type FormField = {
  title: string;
  description: string;
  date: string;
};

//Formulaire d'ajout d'un film
export default function EditTask() {
  const { setTasks } = useContext(TasksContext);
  const { movies } = useImdbContext();//fonction qui contient mon context pour les films
  const { id } = useParams(); 

  const movie = movies.find(m => m.id === id);

  const { control, handleSubmit, reset } = useForm<FormField>({
    defaultValues: { title: "", description: "", date: "" },
  });

  const navigate = useNavigate();

  //useEffect permettent de pré-remplir les champs du formlulaire avec les données de film sélectionné
  useEffect(() => {
    if (movie) {
      reset({
        title: movie.primaryTitle ?? "",
        description: "",
        date: movie.myDate ?? "",
      });
    }
  }, [movie, reset]);

  const onSubmit = (data: FormField) => {
    setTasks(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: data.title,
        description: data.description,
        date: data.date,
        done: false,
        late: false,
      },
    ]);
    reset();
    navigate("/")
  };

    return(
    <>

        <div>
            <Link to="/">
                <Bouton
                    type="button"
                    variant="outlined"
                    buttonText="Liste"
                />
            </Link>    
        </div> 

        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", gap: 2, m:2, justifyContent:"center"}}
        >

            <Controller
                name="title"
                control={control}
                rules={{
                    required :"Le nom est requis",
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

            <Box sx={{
                alignContent:"center"
            }}>
                <Bouton 
                    type="submit"
                    buttonText ="Ajouter"
                    txtColor="white"
                    bgcolor="black"
                />  
            </Box>
                
        </Box>   
    </>
    )
}