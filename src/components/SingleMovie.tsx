import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getShows } from "../api/tvmaze";
import { Card } from "@mui/material";
import { MoviesContext } from "../context/MoviesContext";

export default function SingleMovie() {
    // je récupère l'id depuis l'URL
  const { id } = useParams();                   
  const { movies, setMovies } = useContext(MoviesContext);

  useEffect(() => {
    getShows().then(res => setMovies(res.data));
  }, []);

  const movie = movies.find(s => s.id === Number(id)); 

  return (
    <>
      {movie && (
        <Card sx={{ justifyContent: "center", p: 2 }}>
          <img src={movie.image?.medium} alt={movie.name} width="100%" />
          <h3>{movie.name}</h3>
          <p>Genres : {movie.genres.join(", ")}</p>
        </Card>
      )}
    </>
  );
}