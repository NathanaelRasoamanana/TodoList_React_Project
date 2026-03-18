export default function Task({value , onClick}:{
    key:number, 
    value:String, 
    onClick:()=>void}){
    return (
        <li >
            {value}
            <button onClick = {onClick}>remove</button>
        </li>
    )
}