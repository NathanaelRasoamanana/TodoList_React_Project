import type { TaskProps } from "./TaskProps";


//Tableau d'objets contenant un élément setTasks
export type SetTasksProps = {
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
};