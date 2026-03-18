export default function Task({value , onClick}:{
    key:string, 
    value:string, 
    onClick:()=>void}){
    return (
        <li >
            {value}
            <button onClick = {onClick}>remove</button>
        </li>
    )
}