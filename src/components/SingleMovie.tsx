import { useParams } from "react-router-dom";
import { Box, Card } from "@mui/material";
import Bouton from "../ui/Button";
import { useImdbContext } from "../context/ImdbContext";

export default function SingleMovie() {
  const { id } = useParams<{ id: string }>();
  const { movies, setMovies } = useImdbContext();

  const film = movies.find(movie => movie.id === id);

  const handleAddDate = (date: string) => {
    if (!id) return;

    setMovies(prev =>
      prev.map(movie =>
        movie.id === id
          ? { ...movie, myDate: date }
          : movie
      )
    );
  };

  if (!film) return <p>Film introuvable</p>;

  return (
    <Card sx={{ p: 2, display: "grid", gap: 2 }}>
      <h3>{film.primaryTitle}</h3>

      {film.plot && <p>{film.plot}</p>}

      {film.myDate && (
        <p>
          Date sélectionnée : <strong>{film.myDate}</strong>
        </p>
      )}

      <Box sx={{ display: "grid", gap: 1 }}>
        {film.dates.map(date => (
          <Bouton
            key={`${film.id}-${date}`}
            variant="outlined"
            type="button"
            buttonText={date}
            onClick={() => handleAddDate(date)}
          />
        ))}
      </Box>
    </Card>
  );
}