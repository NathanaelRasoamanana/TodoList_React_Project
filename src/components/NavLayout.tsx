import { Box } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import Bouton from "../ui/Button";

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
                                variant="outlined"
                            />
                        </NavLink> 

                        <NavLink to="/form">
                            <Bouton 
                                type="button"
                                buttonText ="Formulaire"
                                variant="outlined"
                            /> 
                        </NavLink>
                    </Box>
                </nav>
            </header>
            <div><Outlet/></div>
        </>
    )
}