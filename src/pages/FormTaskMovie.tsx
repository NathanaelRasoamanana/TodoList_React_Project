import { Card } from "@mui/material";
import EditTask from "../components/EditTask";
import SingleMovie from "../components/SingleMovie";
import { useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import type { ImdbTitle } from "../types/MoviesType";

export default function PageEditTaskMovie(){

  const[films, setFilms] = useState<ImdbTitle[]>([])

    return(
        <>
        <MoviesContext.Provider value={{films, setFilms}}>
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
        </MoviesContext.Provider>  
        </>
    )
}