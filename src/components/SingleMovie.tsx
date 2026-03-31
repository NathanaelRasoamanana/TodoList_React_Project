import { useParams } from "react-router-dom";
import { Box, Card } from "@mui/material";
import { useImdb } from "../api/Imdb";
import Bouton from "../ui/Button";

export default function SingleMovie() {
  const { id } = useParams(); 
  const { movies } = useImdb();

  const movie = movies.find(s => s.id === id); 

  return (
    <>
      {movie && (
        <Card sx={{ 
          justifyContent:"center", 
          p: 2 ,
          display:"grid",
          gridTemplateColumns: "repeat(auto-fill, 300px)",

          }}>
          
          <h3>{movie.primaryTitle}</h3>
          <p>{movie.plot}</p>

          <Box sx={{
            display:"grid",
            m:2,
            gap:1
          }}>
            
              {movie.dates?.map(date => (
                <>
                  <Bouton 
                      key={movie.id}
                      type="button"
                      variant="outlined"
                      buttonText ={date}
                  />  
                </>
              ))} 
          </Box>         
        </Card>
      )}
    </>
  );
}