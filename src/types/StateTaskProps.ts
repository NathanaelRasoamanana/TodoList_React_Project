import type { TaskProps } from "../types/TaskProps";

export type StateTasksProps = {
    tasks: TaskProps[];
    setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
};