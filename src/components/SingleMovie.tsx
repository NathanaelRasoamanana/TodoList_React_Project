import { useParams } from "react-router-dom";
import { Card } from "@mui/material";
import { useImdb } from "../api/Imdb";

export default function SingleMovie() {
  const { id } = useParams(); 
  const { movies } = useImdb();

  const movie = movies.find(s => s.id === id); 

  return (
    <>
      {movie && (
        <Card sx={{ 
          justifyContent: "center", 
          p: 2 ,
          display:"grid",
          gridTemplateColumns: "repeat(auto-fill, 220px)",

          }}>
          
          <h3>{movie.primaryTitle}</h3>
          <p>{movie.plot}</p>
          {movie.primaryImage?.url && (
            <img
                src={movie.primaryImage.url}
                alt={movie.primaryTitle}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "6px",
                  objectFit: "cover",
                }}
            />
            )}         
        </Card>
      )}
    </>
  );
}