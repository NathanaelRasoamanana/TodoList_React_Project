import { Box } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import Bouton from "./Button";

export default function NavLayout(){
    return(
        <>
            <header>
                <nav>
                    <Box sx={{p:1, gap:1, display: "flex", justifyContent: 'flex-start'}} >
                        <NavLink to="/list">
                            <Bouton
                                type="button"
                                buttonText ="Liste"
                                txtColor="white"
                                bgcolor="black"
                            />
                        </NavLink> 

                        <NavLink to="/form">
                            <Bouton 
                                type="button"
                                buttonText ="Formulaire"
                                txtColor="white"
                                bgcolor="black"
                            /> 
                        </NavLink>
                    </Box>
                </nav>
            </header>
            <div><Outlet/></div>
        </>
    )
}        