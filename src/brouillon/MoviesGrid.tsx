import { useImdb } from "../api/Imdb";

export default function MoviesGrid() {
  const { movies } = useImdb();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Films IMDb </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {movies.map(movie => (

          <div
            key={movie.id}
            style={{
              background: "#fff",
              padding: "12px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
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
            <p>Description : {movie.plot}</p>

          </div>
        ))}
      </div>
    </div>
  );
}