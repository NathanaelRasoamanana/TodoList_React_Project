import { useEffect, useState } from "react";
import type { ApiProps } from "../types/ApiProps";
import { getShows } from "../api/tvmaze";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";

export default function ListMovies() {
  const [movies, setMovies] = useState<ApiProps[]>([]);

  useEffect(() => {
    getShows().then(res => setMovies(res.data));
  }, []);

  const valueMoviesContext = {
        movies : movies,
        setMovies : setMovies,
    }

  return (
    <MoviesContext.Provider value={valueMoviesContext}>

      <Card
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 220px)",
          gap: 5,
          padding: 2,
          justifyContent: "center"
        }}
      >
        {movies.slice(0, 30).map(movie => (
          // <Link to={{
          //         pathname:"/form/{movie.id}"
          // }}>
            
          <Link
            key={movie.id}
            to={`/form/${movie.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >

            <Card
              // key={movie.id}
              sx={{justifyContent:"center",p:2}}
            >
              <img src={movie.image?.medium} alt={movie.name} width="100%" />
              <h3>{movie.name}</h3>
              <p>Genres : {movie.genres.join(", ")}</p>
            </Card>
          </Link>
        ))}
      </Card>

    </MoviesContext.Provider>
  );
}