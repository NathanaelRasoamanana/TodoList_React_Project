export default function Task({value ,date,time, onClick}:{
    key:string, 
    value:string,
    date:string, 
    time:string,
    onClick:()=>void}){
    return (
        <>
            <li>
                Task : {value} <br/>
                Date of due : {date} <br/>
                Time of due : {time} <br/>
                <button onClick = {onClick}>remove</button>
            </li>
            <br/>
        </>
    )   
}