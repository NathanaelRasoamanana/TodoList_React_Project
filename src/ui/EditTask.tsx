import { useState } from "react";
import type { StateTasksProps } from "../types/StateTaskProps";
import type { TaskProps } from "../types/TaskProps";
import Input from "../components/Input";

export default function EditTask({ setTasks }: StateTasksProps){    
    //SATE
    const [newTask, setNewTask] = useState<TaskProps>({
        id:crypto.randomUUID(),
        value: "", 
        timer: ""
    });

    //COMPORTEMENTS
    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (newTask.value.trim() ===""|| newTask.timer.trim()==="") return;

        const tasksTable = (prev:TaskProps[]):TaskProps[] => [...prev, newTask];

        setTasks(tasksTable);
        console.log("L'objet newTask ajouté à tasks",newTask);

        // réinitialisation input 
        setNewTask({id: crypto.randomUUID(),value: "", timer:""});
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        const newTaskUpdatedValue = (prev:TaskProps):TaskProps => ({...prev, value: value});

        //mise à jour uniquement sur value
        setNewTask(newTaskUpdatedValue);
    };

    const handleTimer = (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("handleTimer");
        const timer = event.target.value;
        const newTaskUpdatedTimer = (prev:TaskProps):TaskProps => ({...prev, timer: timer}); 

        //mise à jour uniquement sur timer
        setNewTask(newTaskUpdatedTimer);
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
                      onChange = {handleChange}
                    />
                    <Input 
                      type = "datetime-local"
                      placeholder =""
                      value = {newTask.timer}
                      onChange = {handleTimer}
                    />
                    <button>add</button>
                  </form>  
        </>
    )
}