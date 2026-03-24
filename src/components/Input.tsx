type InputProps = {
    type:string,
    value:string,
    onChange :()=>void,
}

export default function Input({ type, value, onChange}:InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
