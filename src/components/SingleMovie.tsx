import { useParams } from "react-router-dom";
import { Box, Card } from "@mui/material";
import Bouton from "../ui/Button";
import { useImdbContext } from "../context/ImdbContext";

//Composant pour afficher un film via son id depuis l'url
export default function SingleMovie() {
  const { id } = useParams<{ id: string }>();
  const { movies, setMovies } = useImdbContext();//contient mon context pour les films

  const movie = movies.find(movie => movie.id === id);

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

  if (!movie) return <p>Film introuvable</p>;

  return (
    <Card sx={{ p: 2, display: "grid" }}>
      <h1>{movie.primaryTitle}</h1>       
      {movie.plot && <p>{movie.plot}</p>}
              
      <Box sx={{ display: "grid", gap: 1 }}>
        {movie.myDate && (
                <p>
                  Date sélectionnée : <strong>{movie.myDate}</strong>
                </p>
              )}
        {movie.dates.map(date => (
          <Bouton
            key={`${movie.id}-${date}`}
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