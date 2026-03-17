export default function Task({task, handleDelete}) {
  return (
    <li>
      {task.value}
      {new Date(task.deadline).toLocaleString()}
      {task.late && !task.done && <span>(En retard)</span>}
      <button onClick={() => handleDelete(task.id)}>X</button>
    </li>
  );
}
