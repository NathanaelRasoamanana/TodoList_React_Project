import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import { useImdb } from "../api/Imdb";

export default function ListMovies() {
  const { movies } = useImdb();

  return (

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
          <Link
            key={movie.id}
            to={`/form/${movie.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >

            <Card
              sx={{justifyContent:"center",p:2}}
            >
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
              <p>Description : {movie.plot}</p>
            </Card>
          </Link>
        ))}
      </Card>
  );
}