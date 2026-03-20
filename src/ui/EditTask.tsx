import { useContext, useState } from "react";
import type { TaskProps } from "../types/TaskProps";
import Input from "../components/Input";
import { TasksContext } from "../context/TasksContext";
import Bouton from "../components/Button";

export default function EditTask(){  
    // Consommation du context
    const {setTasks} = useContext(TasksContext);    

    const [newTask, setNewTask] = useState<TaskProps>({
        id:crypto.randomUUID(),
        value: "", 
        date :"",
        time : "",
        done:false
    });

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newTask.value.trim() ===""|| newTask.date.trim()===""|| newTask.time.trim()==="") return;
        
        const tasksTable = (prev:TaskProps[]):TaskProps[] => [...prev, newTask];
        setTasks(tasksTable);
        console.log("L'objet newTask ajouté à tasks",newTask);

        // réinitialisation input 
        setNewTask({id: crypto.randomUUID(),value: "", date : "", time:"", done:false});
    };

    //mise à jour uniquement sur value
    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const newTaskUpdatedValue = (prev:TaskProps):TaskProps => ({...prev, value: value});
        setNewTask(newTaskUpdatedValue);
    };

    //mise à jour uniquement sur date
    const handleChangeDate = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const date = event.target.value;
        const newTaskUpdatedDate = (prev:TaskProps):TaskProps => ({...prev, date: date});     
        setNewTask(newTaskUpdatedDate);
    };

    //mise à jour uniquement sur time
    const handleChangeTime = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const time = event.target.value;
        const newTaskUpdatedTime = (prev:TaskProps):TaskProps => ({...prev, time: time}); 
        setNewTask(newTaskUpdatedTime);
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <Input 
                    type = "text"
                    placeholder ="Ajouter une tâche..."
                    value = {newTask.value}
                    onChange = {handleChangeValue}
                />
                <Input 
                    type = "date"
                    placeholder =""
                    value = {newTask.date}
                    onChange = {handleChangeDate}
                />
                <Input 
                    type = "time"
                    placeholder =""
                    value = {newTask.time}
                    onChange = {handleChangeTime}
                />    
                <Bouton 
                    type = "submit"
                    variant="contained"
                    buttonText="add"
                />
            </form>  
        </>
    )
}