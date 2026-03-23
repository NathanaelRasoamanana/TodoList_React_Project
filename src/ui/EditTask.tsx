import { useContext, useState } from "react";
import type { TaskProps } from "../types/TaskProps";
import Input from "../components/Input";
import { TasksContext } from "../context/TasksContext";


// import {
//   TextField,
//   Button,
//   Box,
//   Grid,
//   Typography,
//   Paper
// } from "@mui/material";


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
        if (newTask.title.trim() ===""|| newTask.date.trim()==="") return;
        
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

    //mise à jour uniquement sur date
    const handleChangeDate = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const date = event.target.value;
        const newTaskUpdatedDate = (prev:TaskProps):TaskProps => ({...prev, date: date});     
        setNewTask(newTaskUpdatedDate);
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <Input 
                    type = "text"
                    placeholder ="Ajouter une tâche..."
                    value = {newTask.title}
                    onChange = {handleChangeTitle}
                />
                <Input 
                    type = "text"
                    placeholder ="Ajouter une description..."
                    value = {newTask.description}
                    onChange = {handleChangeDescri}
                />
                <Input 
                    type = "datetime-local"
                    placeholder =""
                    value = {newTask.date}
                    onChange = {handleChangeDate}
                />  
                <button>add</button>
            </form>  

        </>
    )
}