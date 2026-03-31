import { Card } from "@mui/material";
import EditTask from "../components/EditTask";
import SingleMovie from "../components/SingleMovie";

export default function PageEditTaskMovie(){
    return(
        <>
            <Card sx={{
                        display: 'flex',
                        justifyContent:"center",
                        m:2,
                        p:2,
                        gap:2,
                    }}
            >
                <EditTask/>
                <SingleMovie/>
            </Card>   
        </>
    )
}