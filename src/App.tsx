import { useState, useEffect } from "react";
import ListTasks from "./ui/ListTasks";
import EditTask from "./ui/EditTask";

export default function App() {
  //STATE
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  //COMPORTEMENTS
  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTimer = (e) => e.target.value;

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = newTask.trim();
    if (!value) return;

    const newTaskObject = {
      id: Date.now(),
      value: value,
      done: false,
      late: false,
    };

    const tasksCopy = (prev) => [...prev, newTaskObject];

    setTasks(tasksCopy);

    setNewTask("");
  };

  //AFFICHAGE
  return (
    <>
      <ListTasks handleDelete={handleDelete} tasks={tasks} />
      <EditTask
        handleSubmit={handleSubmit}
        newTask={newTask}
        onChange={handleChange}
        onAddTimer={handleTimer}
      />
    </>
  );
}