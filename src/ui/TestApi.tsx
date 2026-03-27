import { useEffect, useState } from "react";

interface Show {
  id: number;
  name: string;
  image: { medium: string };
  genres: string[];
  rating: { average: number };
  summary: string;
}

export default function TestTVMaze() {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(data => setShows(data));
  }, []);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 220px)",
      gap: 20,
      padding: 20
    }}>
      {shows.slice(0, 30).map(show => (
        <div key={show.id} style={{
          border: "1px solid #ccc",
          padding: 10,
          borderRadius: 8
        }}>
          <img src={show.image?.medium} alt={show.name} width="100%" />
          <h3>{show.name}</h3>
          <p>Genres : {show.genres.join(", ")}</p>
          <p>Note : {show.rating.average ?? "N/A"}</p>
          <div dangerouslySetInnerHTML={{ __html: show.summary }} />
        </div>
      ))}
    </div>
  );
}