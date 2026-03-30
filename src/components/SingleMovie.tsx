import { useParams } from "react-router-dom";
import { Card } from "@mui/material";
import { useImdb } from "../api/Imdb";

export default function SingleMovie() {
  const { id } = useParams(); // je récupère l'id depuis l'URL
  const { movies } = useImdb();

  const movie = movies.find(s => s.id === id); 

  return (
    <>
      {movie && (
        <Card sx={{ justifyContent: "center", p: 2 }}>
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
          />)}         
          <h3>{movie.primaryTitle}</h3>
          <p>Genres : {movie.genres.join(", ")}</p>
        </Card>
      )}
    </>
  );
}