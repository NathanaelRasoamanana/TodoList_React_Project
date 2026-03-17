import Input from "../components/Input";

export default function EditTask({
  handleSubmit,
  newTask,
  onChange,
  onAddTimer,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type={"text"}
          value={newTask}
          onChange={onChange}
          placeholder={"Ajouter une tâche..."}
        />
        <Input type="datetime-local" onChange={onAddTimer} placeholder={""} />
        <button>OK</button>
      </form>
    </>
  );
}
