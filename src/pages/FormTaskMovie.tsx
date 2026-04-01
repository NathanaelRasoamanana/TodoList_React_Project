import { Card } from "@mui/material";
import EditTask from "../components/EditTask";
import SingleMovie from "../components/SingleMovie";

//page qui combine l'affichage du formulaire et les détails d'un film
export default function PageEditTaskMovie(){

    return(
        <>
            <Card sx={{
                        display: 'grid',
                        justifyContent:"center",
                        alignContent:"center",
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