import { Card } from "@mui/material";
import EditTask from "../components/EditTask";
import SingleMovie from "../components/SingleMovie";

export default function PageEditTaskMovie(){
    return(
        <>
            <Card sx={{
                        display: 'flex',
                        width: "flex",
                        height: 'flex',
                        justifyContent:"center",
                        m:2,
                        p:2,
                        gap:10,
                    }}
            >
                <EditTask/>
                <SingleMovie/>
            </Card>   
        </>
    )
}
