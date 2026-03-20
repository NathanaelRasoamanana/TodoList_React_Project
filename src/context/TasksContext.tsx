import { createContext } from "react";
import type { StateTasksProps } from "../types/StateTaskProps";

export const TasksContext = createContext<StateTasksProps>({
    tasks : [],
    setTasks:()=>{},
})