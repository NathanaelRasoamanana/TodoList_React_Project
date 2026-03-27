import { NavLink, Outlet } from "react-router-dom";

export default function NavLayout(){
    return(
        <>
            <header>
                <nav>
                    <NavLink to="/list">Liste</NavLink> 
                    <NavLink to="/form">Formulaire</NavLink> 
                </nav>
            </header>
            <div><Outlet/></div>
        </>
    )
}