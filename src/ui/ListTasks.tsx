import Task from "../components/Task";

export default function ListTasks({handleDelete, tasks}) {
  return (
    <>
      <h1>Liste des tâches</h1>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </ul>
    </>
  );
}
