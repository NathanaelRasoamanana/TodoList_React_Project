import { useForm, Controller } from "react-hook-form";
import Input from "../components/Input";
import Bouton from "../components/Button";

type TaskProps = {
  value: string;
  date: string;
  time: string;
};

export default function Form() {

  const { control, handleSubmit, reset } = useForm<TaskProps>({
    defaultValues: {
      value: "",
      date: "",
      time: "",
    }
  });

  const onSubmit = (data: TaskProps) => {
    console.log("Nouvelle tâche :", data);

    // après submit → reset
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* VALUE */}
      <Controller
        name="value"
        control={control}
        rules={{
          required: "La tâche est obligatoire",
          minLength: { 
            value: 3, 
            message: "3 caractères minimum" }
        }}
        render={({ field, fieldState }) => (
          <>
            <Input
              type="text"
              {...field}        // value, onChange, onBlur, ref
            />
            {fieldState.error && (
              <p style={{ color: "red" }}>{fieldState.error.message}</p>
            )}
          </>
        )}
      />

      {/* DATE */}
      <Controller
        name="date"
        control={control}
        rules={{ required: "La date est requise" }}
        render={({ field, fieldState }) => (
          <>
            <Input
              type="datetime-local"
              {...field}
            />
            {fieldState.error && (
              <p style={{ color: "red" }}>{fieldState.error.message}</p>
            )}
          </>
        )}
      />

      {/* TIME */}
      <Controller
        name="time"
        control={control}
        rules={{ required: "L’heure est requise" }}
        render={({ field, fieldState }) => (
          <>
            <Input
              type="text"
              {...field}
            />
            {fieldState.error && (
              <p style={{ color: "red" }}>{fieldState.error.message}</p>
            )}
          </>
        )}
      />

      <Bouton type="submit" variant="contained" buttonText="add" />

    </form>
  );
}