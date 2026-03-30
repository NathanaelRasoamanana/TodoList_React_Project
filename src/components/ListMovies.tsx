import { useEffect, useState } from "react";
import type { ApiProps } from "../types/ApiProps";
import { getShows } from "../api/tvmaze";
import { Card } from "@mui/material";

export default function ListMovies() {
  const [shows, setShows] = useState<ApiProps[]>([]);

  useEffect(() => {
    getShows().then(res => setShows(res.data));
  }, []);

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
      {shows.slice(0, 30).map(show => (
        <div
          key={show.id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            borderRadius: 8
          }}
        >
          <img src={show.image?.medium} alt={show.name} width="100%" />
          <h3>{show.name}</h3>
          <p>Genres : {show.genres.join(", ")}</p>
        </div>
      ))}
    </Card>
  );
}