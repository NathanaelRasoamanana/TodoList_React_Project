type InputProps = {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({type, placeholder, value, onChange}:InputProps){
    return(
        <input 
            type = {type}
            placeholder = {placeholder}
            value = {value}
            onChange = {onChange}
        />
    ) 
}