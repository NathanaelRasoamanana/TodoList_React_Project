import { Card } from "@mui/material";
import EditTask from "../components/EditTask";
import SingleMovie from "../components/SingleMovie";
import { Link } from "react-router-dom";
import Bouton from "../ui/Button";

export default function PageEditTaskMovie(){
    return(
        <>
            <Card sx={{
                        display: 'grid',
                        // width: "flex",
                        // height: 'flex',
                        justifyContent:"center",
                        m:2,
                        p:2,
                        gap:2,
                    }}
            >
                    <Link to="/list">
                        <Bouton
                            type="button"
                            variant="outlined"
                            buttonText="Liste"
                        />
                    </Link>

                <EditTask/>
                <SingleMovie/>
            </Card>   
        </>
    )
}