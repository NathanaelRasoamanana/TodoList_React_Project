import { useEffect, useState } from "react";
import type { ApiProps } from "../types/ApiProps";
import { getShows } from "../api/tvmaze";
import { Card } from "@mui/material";

export default function SingleMovie() {
  const [shows, setShows] = useState<ApiProps[]>([]);

  useEffect(() => {
    getShows().then(res => setShows(res.data));
  }, []);

const movie = shows.find(s => s.id === 5);

return (
    <div>
        <Card
            sx={{
                display: 'flex',
                alignItems:"center",
                justifyContent:"center",
                m:2,
                p:2,
                gap:0,
            }}
        >
            {movie && (
            <div>
                <img src={movie.image?.medium} alt={movie.name} width="100%" />
                <h3>{movie.name}</h3>
                <p>Genres : {movie.genres.join(", ")}</p>
            </div>
            )}
        </Card>
    </div>
)}