export default function Task({value,date,time}:{
    value:string,
    date:string, 
    time:string,
    }){
    return (
        <>
            {value} <br/>
            Date of due : {date} | {time} <br/>
        </>
    )   
}    