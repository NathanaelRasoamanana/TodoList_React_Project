import { createContext } from "react";
import type { TaskProps } from "../types/TaskProps";

type StateTasksProps = {
    tasks: TaskProps[];
    setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
};

export const TasksContext = createContext<StateTasksProps>({
    tasks : [],
    setTasks:()=>{},
})