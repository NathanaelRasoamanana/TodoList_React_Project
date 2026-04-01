import { useEffect, useState } from "react";
import axios from "axios";
import { ImdbContext } from "../context/ImdbContext";
import type { ImdbTitle, ImdbTitlesResponse } from "../types/MoviesType";
import { randomDateGenerator } from "../data/dates";

const api = axios.create({
  baseURL: "https://api.imdbapi.dev/",
});

export function ImdbProvider({ children }: { children: React.ReactNode }) {
  const [movies, setMovies] = useState<ImdbTitle[]>([]);

  useEffect(() => {
    api
      .get<ImdbTitlesResponse>("/titles")
      .then(res => {
        const list = res.data.titles ?? [];

        setMovies(prev => {
          const map = new Map<string, ImdbTitle>();

          [...prev, ...list].forEach(movie => {
            map.set(movie.id, {
              ...movie,
              dates: movie.dates ?? randomDateGenerator(1, 5),
              myDate: movie.myDate, 
            });
          });

          return Array.from(map.values());
        });
      })
      .catch(console.error);
  }, []);

  return (
    <ImdbContext.Provider value={{ movies, setMovies }}>
      {children}
    </ImdbContext.Provider>
  );
}