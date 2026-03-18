export default function Task({value ,timer, onClick}:{
    key:string, 
    value:string, 
    timer:string,
    onClick:()=>void}){
    return (
        <>
            <li>
                Task : {value} <br/>
                Date of due : {timer} <br/>
                <button onClick = {onClick}>remove</button>
            </li>
            <br/>
        </>
    )   
}