import { useState } from "react";
import type { StateTasksProps } from "../types/StateTaskProps";
import type { TaskProps } from "../types/TaskProps";
import Input from "../components/Input";

export default function EditTask({ setTasks }: StateTasksProps){    
    //SATE
    const [newTask, setNewTask] = useState<TaskProps>({
        id:crypto.randomUUID(),
        value: "", 
        date :"",
        time : ""
    });

    //COMPORTEMENTS
    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (newTask.value.trim() ===""|| newTask.date.trim()===""|| newTask.time.trim()==="") return;

        const tasksTable = (prev:TaskProps[]):TaskProps[] => [...prev, newTask];

        setTasks(tasksTable);
        console.log("L'objet newTask ajouté à tasks",newTask);

        // réinitialisation input 
        setNewTask({id: crypto.randomUUID(),value: "", date : "", time:""});
    };

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        const newTaskUpdatedValue = (prev:TaskProps):TaskProps => ({...prev, value: value});

        //mise à jour uniquement sur value
        setNewTask(newTaskUpdatedValue);
    };

     const handleChangeDate = (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("handleDate");
        const date = event.target.value;
        const newTaskUpdatedDate = (prev:TaskProps):TaskProps => ({...prev, date: date}); 

        //mise à jour uniquement sur date
        setNewTask(newTaskUpdatedDate);
    }

    const handleChangeTime = (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("handleTime");
        const time = event.target.value;
        const newTaskUpdatedTime = (prev:TaskProps):TaskProps => ({...prev, time: time}); 

        //mise à jour uniquement sur time
        setNewTask(newTaskUpdatedTime);
    }

    //AFFICHAGE
    return(
        <>
            <form 
                    onSubmit={handleSubmit}
                  >
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
                    
                    <button>add</button>
                  </form>  
        </>
    )
}